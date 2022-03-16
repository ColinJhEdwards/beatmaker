class Drumkit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.playBtn = document.querySelector(".playBtn");
    this.kickSound = document.querySelector(".kick-sound");
    this.snareSound = document.querySelector(".snare-sound");
    this.hihatSound = document.querySelector(".hihat-sound");
    this.soundSelects = document.querySelectorAll("select");
    this.muteBtn = document.querySelectorAll(".muteBtn");
    this.bpmSlide = document.querySelector(".bpm");
    this.bpm = 150;
    this.index = 0;
    this.isPlaying = null;
  }
  activePad() {
    this.classList.toggle("active");
  }
  repeat() {
    let step = this.index % 8;
    const currentPad = document.querySelectorAll(`.b${step}`);
    currentPad.forEach((pad) => {
      pad.style.animation = `pulse 0.3s alternate ease-in-out 2`;
      if (pad.classList.contains("active")) {
        if (pad.classList.contains("kickPad")) {
          this.kickSound.play();
          this.kickSound.currentTime = 0;
        }
        if (pad.classList.contains("snarePad")) {
          this.snareSound.play();
          this.snareSound.currentTime = 0;
        }
        if (pad.classList.contains("hihatPad")) {
          this.hihatSound.play();
          this.hihatSound.currentTime = 0;
        }
      }
    });

    this.index++;
  }
  start() {
    const interval = (60 / this.bpm) * 1000;
    if (!this.isPlaying) {
      this.isPlaying = setInterval(() => {
        this.repeat();
      }, interval);
    } else {
      clearInterval(this.isPlaying);
      this.isPlaying = null;
    }
  }
  updateBtn() {
    if (!this.isPlaying) {
      this.playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    } else {
      this.playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    }
  }
  changeSound(e) {
    const sound = e.target.value;
    if (e.target.classList.contains("kickSelect")) {
      this.kickSound.src = sound;
    }
    if (e.target.classList.contains("snareSelect")) {
      this.snareSound.src = sound;
    }
    if (e.target.classList.contains("hihatSelect")) {
      this.hihatSound.src = sound;
    }
  }
  muteSound(e) {
    e.target.classList.toggle("active");
    if (e.target.classList.contains("active")) {
      if (e.target.classList.contains("kickMute")) {
        this.kickSound.volume = 0;
      }
      if (e.target.classList.contains("snareMute")) {
        this.snareSound.volume = 0;
      }
      if (e.target.classList.contains("hihatMute")) {
        this.hihatSound.volume = 0;
      }
    } else {
      if (e.target.classList.contains("kickMute")) {
        this.kickSound.volume = 1;
      }
      if (e.target.classList.contains("snareMute")) {
        this.snareSound.volume = 1;
      }
      if (e.target.classList.contains("hihatMute")) {
        this.hihatSound.volume = 1;
      }
    }
  }
  updateBpm(e) {
    this.bpm = e.target.value;
    let bpmText = document.querySelector(".bpmNum");
    bpmText.innerText = e.target.value;
  }
}

const drumKit = new Drumkit();

drumKit.pads.forEach((pad) => {
  pad.addEventListener("click", drumKit.activePad);
  pad.addEventListener("animationend", () => {
    pad.style.animation = "";
  });
});

drumKit.playBtn.addEventListener("click", () => {
  drumKit.start();
  drumKit.updateBtn();
});

drumKit.soundSelects.forEach((s) => {
  s.addEventListener("change", (e) => {
    drumKit.changeSound(e);
  });
});

drumKit.muteBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    drumKit.muteSound(e);
  });
});

drumKit.bpmSlide.addEventListener("change", (e) => {
  drumKit.updateBpm(e);
});
