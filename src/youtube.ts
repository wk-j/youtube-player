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
            <html>
                <head>
                    <style>
                        .player {
                            display: flex;
                            justify-content: center;
                            margin-top: 20px;
                        }
                    </style>
                </head>
                <body>
                    <div class="player">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/BHQfBbQBRWM?rel=0&amp;showinfo=0"
                            frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
                        </iframe>
                    </div>
                </body>
            </html>
        `
    }
}