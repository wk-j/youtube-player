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
    <iframe src="https://player.vimeo.com/video/277584430" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen
        allowfullscreen></iframe>

    <iframe class="frame" width="560" height="315" src="https://www.youtube.com/embed/BHQfBbQBRWM?rel=0&amp;showinfo=0" frameborder="0"
        allow="autoplay; encrypted-media" allowfullscreen>
    </iframe>
</body>

</html>
        `
    }
}