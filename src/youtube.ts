import * as vscode from "vscode"

export class YouTube implements vscode.TextDocumentContentProvider {

    private didChangeEmitter = new vscode.EventEmitter<vscode.Uri>();

    get onDidChange() {
        return this.didChangeEmitter.event;
    }

    provideTextDocumentContent(uri: vscode.Uri, token: vscode.CancellationToken): vscode.ProviderResult<string> {
        return this.createPlayer();
    }

    createPlayer() {
        return `
<!DOCTYPE html>
<html lang="en">

<head> </head>

<body>
    <iframe
        width="100%"
        height="100%"
        src="http://localhost:9999/vscode.html"
        frameborder="0"
        allow="autoplay; encrypted-media" />
    </iframe>
</body>

</html>
        `
    }
}