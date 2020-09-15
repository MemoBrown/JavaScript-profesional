class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array < any >

  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this.initPlugins();
  }
  private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  muted() {
    this.media.muted = true;
  }
  unmuted() {
    this.media.muted = false;
  }
  toggleMuted() {
    if (this.media.muted) {
      this.unmuted();
    } else {
      this.muted();
    }

  }
}



  export default MediaPlayer