// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

const strip: unknown = vscode.workspace.getConfiguration("codelink").get("stripRegex");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "codelink" is now active!');
	let strip: unknown = vscode.workspace.getConfiguration("codelink").get("stripRegex");
	let uri: unknown = vscode.workspace.getConfiguration("codelink").get("uriRegex");

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('codelink.OpenInCs', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		const activeEditor = vscode.window.activeTextEditor;
		if (activeEditor) {
			let line = activeEditor.selection.active.line;
			let folderPath = activeEditor.document.fileName;
			// vscode.window.showInformationMessage("Hello World from codelink! " + line +":"+vscode.workspace.getWorkspaceFolder(activeEditor.document.uri)?.name + ":" + activeEditor.document.uri);
			vscode.window.showInformationMessage("Hello lala " + strip + " " + uri);
			// vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('http://www.pinkbike.com/news/fail-of-the-month-june-2016.html'));
		}
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
