class Game {
    constructor(ctx, width, height, player) {
      this.frames = 0;
      this.ctx = ctx;
      this.width = width;
      this.height = height;
      this.player = player;
      this.obstacles = [];
      this.interval = null;
      this.isRunning = false;
      this.points = 0;
      //this.life = 5//
      //this.floor = floor//
};


  
    start = () => {
        
      this.interval = setInterval(this.updateGameArea, 20);
      this.isRunning = true;
    };
  
    reset = () => {
      this.player.x = 0;
      this.player.y = 110;
      this.frames = 0;
      this.obstacles = [];
      this.start();
    };
  
    clear() {
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
  
    stop() {
      clearInterval(this.interval);
      this.isRunning = false;
    }
  
    updateObstacles() {
      for (let i = 0; i < this.obstacles.length; i++) {
        this.obstacles[i].y += this.obstacles[i].speed;
        this.obstacles[i].draw();
      }
    
      this.frames += 1;
  //interval between enemies
      if (this.frames % 380 === 0) {
        this.obstacles.push(new Circle(10, 'red', 110, 10,  Math.floor(Math.random()* 3 + 1), this.ctx));
        this.obstacles.push(new Circle(10, 'red', 240, 10, Math.floor(Math.random()* 3 + 2),  this.ctx));
        this.obstacles.push(new Circle(10, 'red', 350, 10, Math.floor(Math.random()* 3 + 3),  this.ctx));
        this.obstacles.push(new Circle(10, 'red', 480, 10, Math.floor(Math.random()* 3 + 1),  this.ctx));
  
      }

    }


      //check if is correct
      checkhit= () => {
        const crashed = this.obstacles.some((obstacle) => {
          return this.player.crashWith(obstacle);
        });
    
        if (crashed) {
          this.life--
        }
      };
    
      life() {
        this.ctx.font = '24px sans-serif';
        this.ctx.fillStyle = 'black';
        this.ctx.fillText(`Life: ${this.life}`, 560, 35);
      }
  






  
    checkPoints= () => {
      const crashed = this.obstacles.some((obstacle) => {
        return this.player.crashWith(obstacle);
      });
  
      if (crashed) {
        this.points++
      }
    };
  
    score() {
      //const points = Math.floor(this.frames / 5);
      this.ctx.font = '24px sans-serif';
      this.ctx.fillStyle = 'black';
      this.ctx.fillText(`Score: ${this.points}`, 560, 25);
    }


   checkGameOver = () => {
    const crashedcircle = this.obstacles.some((obstacle) => {
        return this.player.crashWith(obstacle);
    });
    if (crashedcircle){
        this.stop();
        this.life--
    } else if (this.life === 0){
        this.stop();
        return "Game over" ;
    }

 } 
  
    updateGameArea = () => {
      this.clear();
      this.checkPoints();
      this.checkGameOver();
      this.updateObstacles();
      this.player.newPos();
      this.player.draw();
      this.score();
      
     // this.life();// check
     // this.hit();//check
    };
  }



//ver se esta correto !!!!

 


