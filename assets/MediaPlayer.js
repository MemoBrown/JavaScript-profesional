class MediaPlayer {
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
  }
  _initPlugins() {
    const player = {
      play: () => this.play(),
      pause: () => this.pause(),
      media: this.media,
      get muted() {
        return this.media.muted;
      },

      set muted(value) {
        this.media.muted = value;
      },
    };

    this.plugins.forEach(plugin => {
      plugin.run(player);
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