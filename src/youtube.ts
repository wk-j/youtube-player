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

<head>
    <link href="https://vjs.zencdn.net/7.0.5/video-js.css" rel="stylesheet">
</head>

<body>
    <iframe src="http://localhost:5000/night.mp4"></iframe>

    <iframe class="frame" width="560" height="315" src="https://www.youtube.com/embed/BHQfBbQBRWM?rel=0&amp;showinfo=0" frameborder="0"
        allow="autoplay; encrypted-media" allowfullscreen>
    </iframe>

    <iframe src="https://www.youtube.com" width="1000" height="500">
    </iframe>

    <video id="my-video" class="video-js" controls preload="auto" width="640" height="264" data-setup="{}">
        <source src="http://192.168.1.45:5000/night.mp4" type='video/mp4'>
        <!--
        <source src="night.mp4" type='video/mp4'>
         <source src="file:///Users/wk/Source/VsCodeYoutubePlayer/night.mp4" type='video/mp4'>
         -->
    </video>
    <script src="https://vjs.zencdn.net/7.0.5/video.js"></script>
</body>
</html>
        `
    }
}