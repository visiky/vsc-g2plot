// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { AssetsProvider } from "./assetsProvider";

type PlotInfo = { type: string; schema: string };

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  new AssetsProvider(context);

  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "g2plot" is now active!');

  vscode.commands.registerCommand(
    "g2plot.component.copy",
    async (uri: PlotInfo) => {
      if (typeof uri?.type === "string") {
        vscode.window.showInformationMessage(`Copy ${uri.type}`);
        await vscode.env.clipboard.writeText(uri.schema);
      }
    }
  );

  // context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
