class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.playBtn = document.querySelector(".play");
    this.kickAudio = document.querySelector(".kick-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.hihatAudio = document.querySelector(".hihat-sound");
    this.index = 0;
    this.bpm = 150;
  }
  //the repeat method will increment until it reaches 8 and then will return to 0
  // 8 because we have 8 pads and want to loop over each one.
  repeat() {
    let step = this.index % 8;
    //because all the pads have a class of b0-7 the activeBars variable will loop over all of them
    const activeBars = document.querySelectorAll(`.b${step}`);
    this.index++;
  }
  //the start method will call the repeat method and run it every second
  start() {
    //interval variable is used to determine how many seconds between each pad based off the set BPM
    const interval = (60 / this.bpm) * 1000;
    //arrow function used here so that we can grab "this" instead of the window
    setInterval(() => {
      this.repeat();
    }, interval);
  }
}

//creating a new drumkit
const drumKit = new DrumKit();

drumKit.playBtn.addEventListener("click", () => {
  drumKit.start();
});
