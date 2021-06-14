import * as vscode from "vscode";
import * as path from "path";
import { PLOTS } from "./assets";

const nodes = new Map();

class Key {
  constructor(readonly key: string) {}
}

function getNode(key: string): { key: string } {
  if (!nodes.get(key)) {
    nodes.set(key, new Key(key));
  }
  return nodes.get(key);
}

export class PagesTreeDataProvider
  implements vscode.TreeDataProvider<{ key: string }>
{
  // tree data provider
  context: any;

  constructor(context: any) {
    this.context = context;
  }

  private getIconPath(type: string) {
    return {
      light: this.context.asAbsolutePath(
        path.join("resources", "light", `${type.toLowerCase()}.svg`)
      ),
      dark: this.context.asAbsolutePath(
        path.join("resources", "dark", `${type.toLowerCase()}.svg`)
      ),
    };
  }

  async getChildren(element: { key: string }) {
    return getChildren(element?.key).map((key) => getNode(key));
  }

  getTreeItem(element: { key: string }): vscode.TreeItem {
    const treeItem = getTreeItem(element.key, this.getIconPath(element.key));
    treeItem.id = element.key;
    return treeItem;
  }
}

function getChildren(key?: string) {
  if (!key) {
    return PLOTS.map((c) => c.type);
  }
  return [];
}

function getTreeItem(
  key: string,
  iconPath: { light: string; dark: string }
): vscode.TreeItem {
  const plot = PLOTS.find((c) => c.type === key);
  if (plot) {
    return {
      label: /**vscode.TreeItemLabel**/ <any>{
        label: key,
        highlights:
          key.length > 1 ? [[key.length - 2, key.length - 1]] : void 0,
      },
      iconPath,
      description: true,
      tooltip: "",
      command: {
        title: "Copy",
        command: "g2plot.component.copy",
        tooltip: "Copy plot component",
        arguments: [{ type: key, schema: plot.schema }],
      },
    };
  }
  return {};
}

type PlotInfo = typeof PLOTS[0];
 
export class AssetsProvider {
  context: vscode.ExtensionContext;

  constructor(context: vscode.ExtensionContext) {
    this.context = context;
    const pagesTreeDataProvider = new PagesTreeDataProvider(context);
    context.subscriptions.push(
      vscode.window.createTreeView("g2plotAssetView", {
        treeDataProvider: pagesTreeDataProvider,
      }),
      vscode.commands.registerCommand(
        "g2plot.component.copy",
        async (uri: PlotInfo) => {
          if (typeof uri?.type === "string") {
            vscode.window.showInformationMessage(`Copy ${uri.type}`);
            await vscode.env.clipboard.writeText(uri.schema);
          }
        }
      ),
      vscode.commands.registerCommand('g2plot.assets.add', async (uri?: vscode.Uri) => {
        await this.addAsset(null);
      }),
    );
  }
  
  /**
   * 资产添加到 js/jsx/tsx 方法
   *
   * @param range 指定插入的位置
   */
   public async addAsset(asset: any, range?: vscode.Range) {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }
    // 开始添加...
    const result = await vscode.window.withProgress(
      {
        location: vscode.ProgressLocation.Notification,
        cancellable: false,
        title: '添加资产',
      },
      async progress => {
        console.log('[addAsset] addAsset Start');
        progress.report({
          message: '物料准备中',
          increment: 10,
        });
        const assetContent = asset || (await vscode.env.clipboard.readText());

        //     const { type: preparedAssetType, content: preparedAsset } =
    //       getAssetType(assetContent) || {};
    //     log('[addAsset] preparedAssetType', preparedAssetType);
    //     if (!Object.keys(ResourceType).includes(preparedAssetType)) {
    //       if (!this.panel?.visible) {
    //         // 资产市场已打开
    //         const selection = await vscode.window.showInformationMessage(
    //           '未检测待添加的资产，是否打开资产市场查看？',
    //           ...['否', '是'],
    //         );
    //         if (selection === '是') {
    //           await vscode.commands.executeCommand('bigfish.assets.openAssets');
    //         }
    //       } else {
    //         await vscode.window.showInformationMessage('未检测待添加的资产');
    //       }
    //       return;
    //     }

        if (!editor) {
          return;
        }
    //     const addAssetFunc = {
    //       [ResourceType.dumi]: this.addDumiAsset,
    //       // React Component 资产使用 inline 方式添加
    //       [ResourceType.reactComponent]: this.addDumiAsset,
    //     }[preparedAssetType]?.bind(this);

    //     if (!addAssetFunc) {
    //       // 暂不支持的资产方法
    //       await vscode.window.showErrorMessage(`暂不支持 ${preparedAssetType} 资产添加`);
    //       return;
    //     }

    //     const content = editor.document.getText();
    //     const ast = parse(content);

        const insertRange = range || new vscode.Range(editor.selection.start, editor.selection.end);

        console.log('[addAsset] start');
        progress.report({
          message: '正在添加',
          increment: 20,
        });
        console.log('[addAssets] progress 10');
        try {
          // todo 添加
          // await addAssetFunc(preparedAsset, insertRange, {
          //   progress,
          //   editor,
          //   ast,
          // });
        } catch (e) {
          console.error('[ERROR] addAssetFunc', e);
          console.log('addAssetFunc', e.stack);
          await vscode.window.showErrorMessage('添加失败');
        }

        return true;
      },
    );

    if (result && editor.document.isDirty && !(await editor.document.save())) {
      // 保存一下
      await vscode.window.showInformationMessage('资产添加成功');
    }
  }
}
