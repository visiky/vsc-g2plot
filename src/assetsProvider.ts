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
        arguments: [plot],
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
            await vscode.env.clipboard.writeText(`
              import { ${uri.name} } from '@ant-design/charts';\n
              const Page = () => {
                const config=${uri.schema}; \n
                return (<${uri.name} {...config} />)
              }
            `);
          }
        }
      ),
    );
  }
}
