class Drumkit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.playBtn = document.querySelector(".playBtn");
    this.kickSound = document.querySelector(".kick-sound");
    this.snareSound = document.querySelector(".snare-sound");
    this.hihatSound = document.querySelector(".hihat-sound");
    this.soundSelects = document.querySelectorAll("select");
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
    if (!this.isPlaying) {
      this.isPlaying = setInterval(() => {
        this.repeat();
      }, 1000);
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
