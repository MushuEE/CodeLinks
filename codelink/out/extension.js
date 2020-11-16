"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const strip = vscode.workspace.getConfiguration("codelink").get("stripRegex");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "codelink" is now active!');
    let toTake = vscode.workspace.getConfiguration("codelink").get("stripRegex");
    let uriBase = vscode.workspace.getConfiguration("codelink").get("uriRegex");
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('codelink.OpenInCs', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        const activeEditor = vscode.window.activeTextEditor;
        if (activeEditor) {
            let line = activeEditor.selection.active.line;
            let activeUri = activeEditor.document.uri.toString();

            let path = activeUri.match(toTake);
            let goTo = uriBase + "/" + path[1] + "blob/main/" + path[2] + "#L" + line
            vscode.window.showInformationMessage("match:" + path[0] + ":" + path[1] + ":" + path[2]);
            vscode.window.showInformationMessage("Link:" + goTo );
            vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(goTo));
        }
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map