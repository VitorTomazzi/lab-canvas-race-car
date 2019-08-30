window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  // function startGame() {

  // }

  // colors:
  // green #008100
  // gray #808080


  // var myGameArea = {
  //   canvas: document.createElement("canvas"),
  //   startGame: function () {
  //     this.canvas.width = 350;
  //     this.canvas.height = 650;
  //     this.context = this.canvas.getContext('2d');
  //     document.body.insertBefore(this.canvas, document.body.childNodes[2]);

  //     this.interval = setInterval(updateGameArea, 20);
  //   },
  //   clear: function () {
  //     this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  //   }
  // };


  // // component class for player (dont need because we have car obj?) and for obstacles 
  // class Component {
  //   constructor(width, height, color, x, y) {
  //     this.width = width;
  //     this.height = height;
  //     this.color = color
  //     this.x = x;
  //     this.y = y;

  //     // this.speedX = 0;
  //     // this.speedY = 0;
  //   }
  //   update() {
  //     var ctx = myGameArea.context;
  //     ctx.fillStyle = this.color;
  //     ctx.fillRect(this.x, this.y, this.width, this.height);

  //   }
  //   // newPos() {
  //   //   this.x += this.speedX;
  //   //   this.y += this.speedY;
  //   // }

  // }

  // var car = new Component(35, 35, 'blue', 175, 500);

  // function updateGameArea() {
  //   myGameArea.clear();
  //   car.update();
  // }

  // // add listeners for keys 
  // document.onkeydown = function (e) {
  //   switch (e.keyCode) {
  //     case 38:
  //       car.moveUp();
  //       break;
  //     case 40:
  //       car.moveDown();
  //       break;
  //     case 37:
  //       car.moveLeft();
  //       break;
  //     case 39:
  //       car.moveRight();
  //       break;
  //   }
  //   updateCanvas();
  // }

  // myGameArea.startGame();








  var canvas = document.getElementById('game-board')
  var ctx = canvas.getContext('2d');

  // create car object 
  var car = {
    x: 170,
    y: 550,
    moveUp: function () {
      this.y -= 15
      console.log(car)
    },
    moveDown: function () {
      this.y += 15
      console.log(car)

    },
    moveLeft: function () {
      this.x -= 15
      console.log(car)

    },
    moveRight: function () {
      this.x += 15
      console.log(car)

    },
  }

  // create function to clear canvas after each update 
  function clearCanvas() {
    ctx.clearRect(0, 0, 1000, 1000);
  }

  //  create board/road 
  function drawBoard() {

    ctx.fillStyle = '#008100';
    ctx.fillRect(0, 0, 20, 650);
    ctx.fillStyle = '#808080';
    ctx.fillRect(20, 0, 10, 650);
    ctx.fillStyle = '#808080';
    ctx.fillRect(40, 0, 270, 650);
    ctx.fillStyle = '#808080';
    ctx.fillRect(320, 0, 10, 650);
    ctx.fillStyle = '#008100';
    ctx.fillRect(330, 0, 20, 650);

    ctx.fillStyle = 'white'
    for (let i = 25; i < canvas.height; i += 25) {
      ctx.fillRect(175, i, 3, 12)
    }
  }

  // create function for car image 
  function draw(car) {
    ctx.fillStyle = 'blue';
    ctx.fillRect(car.x, car.y, 30, 30);
    // var img = new Image()
    // img.onload = function () {
    //   ctx.drawImage(img, car.x, car.y, 35, 75);
    // }
    // img.src = './images/car.png'; // Set source path
  }


  // starting positions for obstacles 
  var y1 = 0;
  var y2 = 0;
  var y3 = 0;

  // create function for obstacles 
  function drawObstacles() {
    ctx.fillStyle = "red";
    y1 += .5;
    y2 += 1;
    y3 += 1.5;
    ctx.fillRect(50, y1, 150, 10);
    ctx.fillRect(200, y2, 75, 10);
    ctx.fillRect(100, y3, 100, 10);
  }


  // add listeners for keys 
  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 38:
        car.moveUp();
        break;
      case 40:
        car.moveDown();
        break;
      case 37:
        car.moveLeft();
        break;
      case 39:
        car.moveRight();
        break;
    }
    // updateCanvas();
  }

  function updateCanvas() {
    console.log(car)
    clearCanvas()
    drawBoard()
    drawObstacles()
    draw(car)

    window.requestAnimationFrame(updateCanvas);
  }

  window.requestAnimationFrame(updateCanvas);
};