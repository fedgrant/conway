class Game {
  constructor(xlen, ylen) {
    let state = [];
    for (let i = 0; i < ylen; i++) {
      state[i] = [];
      for (let j = 0; j < xlen; j++) {
        state[i][j] = Math.random() > .5 ? 1 : 0;
      }
    }
    this.state = state;
    this.id = '';
  }

  start() {
    this.id = setInterval(this.tick.bind(this), 100);
  }

  stop() {
    clearInterval(this.id);
    this.id = '';
  }

  tick() {
    let newState = [];
    let s = this.state;
    for (let i = 0; i < s.length; i++) {
      newState[i] = [];
      for (let j = 0; j < s[i].length; j++) {
        newState[i][j] = this.checkNeighbors(j, i);
      }
    }
    this.state = newState;
    this.print();
  }

  checkNeighbors(sx, sy) {
    let possibleNeighbors = [[1,1], [1,0], [1,-1], [1,0], [0,-1], [-1,1], [-1,0], [-1,-1]];
    let s = this.state;
    let isAlive = s[sy][sx];
    let neighbors = 0;
    for (let i = 0; i < possibleNeighbors.length; i++) {
      let [x, y] = possibleNeighbors[i];
      if (s[sy + y] && s[sy + y][sx + x]) {
        neighbors++;
      }
    }

    if (isAlive && neighbors < 2) {
      return 0;
    } else if (isAlive && (neighbors == 2 || neighbors == 3)) {
      return 1;
    } else if (isAlive && neighbors > 3) {
      return 0;
    } else if (!isAlive && neighbors > 3) {
      return 1;
    } else {
      return 0;
    }
  }

  print() {
    console.log(this.state);
    console.log('\n');
  }
}

let g = new Game(10, 10);
g.print();
g.start();
setTimeout(function() {
  g.stop();
}.bind(this), 1000);