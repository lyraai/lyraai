<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>YouTube Player</title>
  <script src="https://www.youtube.com/iframe_api"></script>
  <script>
    var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('videoPlayer', {
        events: {
          'onReady': onPlayerReady,
        }
      });
    }

    function onPlayerReady(event) {
      console.log("Player is ready");
    }

    function seekTo(seconds) {
      if (player && player.seekTo) {
        player.seekTo(seconds, true);
      }
    }
  </script>
</head>
<body>
</body>
</html>
