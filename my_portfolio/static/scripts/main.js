const rev = {
  year: 15, // one year in seconds
  days: 365.26,
  ab: ["Python", "Django", "Bootstrap", "HTML", "CSS", "Flask", "Javascript", "Git", "PostgreSQL", "Angular"],
  abTime: [0, 0.24, 0.61, 1, 0.07, 1.88, 11.86, 29.46, 84.01, 164.79], // revolution in years
  info: [
    "Python is a programming language that let's you work more quickly, and, intergrate systems more efficiently.",
    "Django makes it easier to build better apps more quickly with lesser code.",
    "Bootstrap  the world’s most popular framework for building responsive, mobile-first sites, with BootstrapCDN and a template starter page.",
    "HTML is the standard markup language for creating web pages and web applications.",
    "CSS style sheet language used for describing the presentation of a document written in a markup language like HTML.",
    "Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries.",
    "JavaScript, often abbreviated as JS, is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.",
    "Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people.",
    "PostgreSQL, often simply Postgres, is an object-relational database management system with an emphasis on extensibility and standards compliance.",
    "Angular is a TypeScript-based open-source front-end web application platform led by the Angular Team at Google and by a community of individuals and corporations.",
  ],
  selector: {
    orb: document.querySelectorAll(".orbit"),
    gui: document.querySelector(".gui"),
    title: document.querySelector(".gui h1"),
    par: document.querySelector(".gui p"),
    xBtn: document.querySelector(".close-gui"),
    ys: document.querySelector(".ys"),
    inpt: document.querySelector("#year-in-seconds")
  },

  makeRev() {
    this.selector.ys.textContent = `${this.year}s`;
    for (let i = 1; i < this.selector.orb.length; i++) {
      this.selector.orb[i].style.animationDuration = `${Math.round((this.abTime[i]*this.year)*100)/100}s`;
    }
  },

  changeYS() {
    this.year = this.selector.inpt.value;
    this.makeRev();
  },

  showGUI() {
    const that = this;
    for (let i = 0; i < that.selector.orb.length; i++) {
      that.selector.orb[i].addEventListener("click", function(){
        that.selector.title.textContent = that.ab[i];
        that.selector.par.textContent = that.info[i];
        that.selector.gui.style.opacity = "1";
        that.selector.gui.style.zIndex = "11";
      });
    }
  },

  closeGUI() {
    this.selector.gui.style.opacity = "0";
    this.selector.gui.style.zIndex = "0";
  }
};

function rnd(min, max) {
  return Math.floor(Math.random() * (max - (min) + 1) + (min));
}

function spawnStars(n) {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const starsBG = document.querySelector(".stars-bg");
  for (let i = 0; i <= n; i++) {
    const rndWH = rnd(1, 2); // width and height of the stars
    const posX = rnd(0, w); // position x of the stars
    const posY = rnd(0, h); // position y of the stars
    const opc = Math.round((Math.random() * (0.5 - 0.1 + 0.5) + 0.1) * 100) / 100; // random opacity
    const stars = document.createElement("div");
    stars.setAttribute("style",
                      `width: ${rndWH}px;
                      height: ${rndWH}px;
                      top: ${posY}px;
                      left: ${posX}px;
                      opacity: ${opc};`
                      );
    starsBG.appendChild(stars);
  }
}

function start() {
  rev.makeRev();
  rev.showGUI();
  spawnStars(200);
}
