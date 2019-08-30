window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function startGame() {

  }

  // colors:
  // green #008100
  // gray #808080

  // var myGameBoard = {
  //   canvas: document.querySelector('#game-board'),
  //   start: function() {
  //     this.canvas.width = 350;
  //     this.canvas.height = 650;
  //     this.context = this.canvas.getContext('2d');
  //   },
  // };

  // class Component {
  //   constructor(width, height, x, y) {
  //     this.width = width;
  //     this.height = height;
  //     this.x = x;
  //     this.y = y;
  //   }
  //   update() {
  //     var ctx = myGameBoard.context;

  //     }
  //   }
  // }


  var canvas = document.getElementById('game-board')
  var ctx = canvas.getContext('2d');

  // create car object 
  var car = {
    x: 170,
    y: 550,
    moveUp: function () {
      this.y -= 25
    },
    moveDown: function () {
      this.y += 25
    },
    moveLeft: function () {
      this.x -= 25
    },
    moveRight: function () {
      this.y += 25
    },
  }

  // create function for car image 
  function draw (car) {
    var img = new Image()
    img.onload = function () {
      ctx.drawImage(img, car.x, car.y, 35, 75);
    }
    img.src = './images/car.png'; // Set source path
  }
  

  // add listeners for keys 
  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 38:
        ghost.moveUp();
        console.log('up', ghost);
      case 40:
        ghost.moveDown();
        console.log('down', ghost);
      case 37:
        ghost.moveLeft();
        console.log('left', ghost);
      case 39:
        ghost.moveRight();
        console.log('right', ghost);
    }
    updateCanvas();
  }

  function updateCanvas() {
    ctx.clearRect(0,0,1000,1000);
    // ctx.fillText('Car_x: ' + car.x, 300, 40)
    // ctx.fillText('Car_y: ' + car.y, 300, 60)
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
    draw(car)
    window.requestAnimationFrame(updateCanvas);
    
  }

  window.requestAnimationFrame(updateCanvas);


};