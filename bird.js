export class Bird {
    
    // let fish1 = document.getElementById("fish1");
    // let fish2 = document.getElementById("fish 2");


    x = 50;
    y = 50;
    width = 50;
    height = 50;
    canvas;
    pencil;
    sprite = this.fish1;

    ySpeed = 1;
    maximumYSpeed = 20;

    constructor(canvas, sprite) {
        this.canvas = canvas;
        this.sprite = fish1;
    }

    draw() {
        
        pencil.drawImage(this.sprite, this.x, this.y, this.width, this.height);
        //top pipe
        // this.sprite; // Set the fill color
        // this.sprite.fillRect(
        //     this.x, 
        //     this.y, 
        //     this.width, 
            // this.height
        // ); // x, y, w, h
    }

    flap() {
        console.log("Flapped!")
        this.ySpeed = -15;
    }

    gravity() {
        //affect the bird's position by gravity
        this.y += this.ySpeed
        //speed gets faster!
        this.ySpeed += 2;

        //when bird hits terminal velocity, his speed is capped
        if(this.ySpeed > this.maximumYSpeed) {
            this.ySpeed = this.maximumYSpeed;
        }

    }

    isHitByPipe(pipeObstacle) {


        //this detects collisions for the top pipe
        let isFarEnoughRight = this.x > pipeObstacle.topPipeTopLeft.x;
        let isLowEnough = this.y > pipeObstacle.topPipeTopLeft.y;
        let isFarEnoughLeft = this.x < pipeObstacle.topPipeBottomRight.x;
        let isHighEnough = this.y < pipeObstacle.topPipeBottomRight.y;

        //use the logic above to detect for the bottom pipe here:
        //I don't even understand at all what is going on here.
        // let pinkIsFarEnoughRight = this.x > pipeObstacle.bottomPipeTopLeft.x;     
        // let pinkIsLowEnough = this.y > pipeObstacle.bottomPipeTopLeft.y;   
        // let pinkIsFarEnoughLeft = this.x < pipeObstacle.bottomPipeBottomRight.x;     
        // let pinkIsHighEnough = this.y < pipeObstacle.bottomPipeBottomRight.y;

        if(isFarEnoughRight && isLowEnough && isFarEnoughLeft && isHighEnough)
            return true;
        return false;

        
    }


}