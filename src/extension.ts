'use strict';
import * as vscode from 'vscode';
import { YouTube } from './youtube';

export function activate(context: vscode.ExtensionContext) {

    let previewUri = vscode.Uri.parse("youtube://authority/css-preview")
    let provider = new YouTube()
    let registration = vscode.workspace.registerTextDocumentContentProvider("youtube", provider);

    let disposable = vscode.commands.registerCommand("youTube.showPlayer", () => {
        var command = vscode.commands.executeCommand("vscode.previewHtml", previewUri, vscode.ViewColumn.Two, "YouTube")
        command.then(sucess => {

        }, reason => {
            vscode.window.showErrorMessage(reason)
        })

        return command;
    })

    context.subscriptions.push(disposable);
}

export function deactivate() {
}