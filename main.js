const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const cWidth = canvas.width;
const cHeight = canvas.height;




//Creating the player
const player = new Component(40, 60, 'black', 320, 540, ctx);

//Creating the game

let game ; //= new Game(ctx, cWidth, cHeight, player);


//game.start();

//When the button is created, uncommented
const startBtn = document.getElementById('start');

startBtn.addEventListener('click', () => {
  if (!game) {
    game = new Game(ctx, cWidth, cHeight, player);
    game.start();
  } else if (game && !game.isRunning) {
    //when crashed
    game.reset();
  }
}); 


document.addEventListener('keydown', (e) => {
  switch (e.code) {
   /* case 'ArrowUp':
      player.speedY -= 1;
      break;
    case 'ArrowDown':
      player.speedY += 1;
      break;*/
      case 'ArrowLeft':
        if (!(player.x <= 4)) {
            player.speedX -= 2;
          }
        break;
        
    case 'ArrowRight':
        if (!(player.x + player.width >= cWidth - 4)) {
            player.speedX += 2;
          }
        break;
}
})



document.addEventListener('keyup', (e) => {
  player.speedX = 0;
  player.speedY = 0;
});