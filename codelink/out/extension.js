"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "codelink" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('codelink.helloWorld', () => {
        // The code you place here will be executed every time your command is executed
        var _a;
        // Display a message box to the user
        const activeEditor = vscode.window.activeTextEditor;
        if (activeEditor) {
            let line = activeEditor.selection.active.line;
            let folderPath = activeEditor.document.fileName;
            vscode.window.showInformationMessage("Hello World from codelink! " + line + ":" + ((_a = vscode.workspace.getWorkspaceFolder(activeEditor.document.uri)) === null || _a === void 0 ? void 0 : _a.name) + ":" + activeEditor.document.uri);
            // vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('http://www.pinkbike.com/news/fail-of-the-month-june-2016.html'));
        }
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map