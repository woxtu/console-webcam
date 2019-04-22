const WIDTH = 200;
const HEIGHT = 200;

window.addEventListener('load', async () => {
  const canvas = document.createElement('canvas');
  canvas.style = 'display: none';
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  document.body.appendChild(canvas);

  const video = document.createElement('video');
  video.style = 'display: none';
  video.width = WIDTH;
  video.height = HEIGHT;
  document.body.appendChild(video);

  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  video.srcObject = stream;
  video.play();

  const context = canvas.getContext('2d');
  const loop = () => {
    context.drawImage(video, 0, 0, WIDTH, HEIGHT);
    console.log('%c ', `background: url(${canvas.toDataURL()}); background-size: 100% 100%; padding: ${WIDTH}px ${HEIGHT}px`);
    setTimeout(loop, 100);
  };
  loop();
});
