
function preload() {
    splitPath=loadImage('dungeon/split path.jpg')
    hallway=loadImage('dungeon/longhall.jpg')
    treasure=loadImage('dungeon/treasure room.jpg')
    door=loadImage('dungeon/dooor.jpg')
    library=loadImage('dungeon/library.jpg')

}

var endlessHallL
var endlessHallR
var libDoor
var finish
var treasureRoom
var items
var boxTres

function setup( ) {
    createCanvas(1000, 600)
   background(splitPath, 0, 0);
 
  stroke(255, 255, 255)
  //point(590, 270)
    endlessHallL = false;
    endlessHallR = false
    libDoor = false
    finish = false
    treasureRoom = false
    items = false
    boxTres = false
}

// var leftHallX = ;

function draw() {
    //print(mouseX, mouseY);
    
}

//var treasureRoom = false;
//var deadEnd = false;


var leftHallX = 400;
var leftHallY = 270;
var leftHallD = 100;

var rightHallX = 590;
var rightHallY = 270;
var rightHallD = 100;

var endX = 500;
var endY = 300;
var endD = 100;

var rightRoomY = 300; 
var rightRoomX = 500;
var rightRoomD = 100;

var libDoorX = 500
var libDoorY = 300
var libDoorD = 100

var endDoorX = 90
var endDoorY = 350
var endDoorD = 70

var boxX = 500
var boxY = 300
var boxD = 100

var tresHallX = 535
var tresHallY = 500
var tresHallD = 65



function mousePressed() {

    print(endlessHallL, endlessHallR, libDoor, finish, treasureRoom, items, boxTres)
   
    if ( endlessHallL == false && endlessHallR == false && libDoor == false && finish == false && treasureRoom == false && items == false && boxTres == false && dist (mouseX, mouseY, leftHallX, leftHallY) < leftHallD) {
        createCanvas(1000, 600);
        background(hallway, 0, 0);
       print('hif')
        endlessHallL = true;
        
    }

    if( endlessHallL == false && endlessHallR == false && libDoor == false && finish == false && treasureRoom == false && items == false && boxTres == false && dist (mouseX, mouseY, rightHallX, rightHallY) < rightHallD) {
        createCanvas(1000, 600);
        background(hallway, 0, 0);

        endlessHallR = true
        
    }

    if (endlessHallL == false && endlessHallR == false && libDoor == false && finish == false && treasureRoom == false && items == false && boxTres == false && dist (mouseX, mouseY, rightHallX, rightHallY) > rightHallD && dist (mouseX, mouseY, leftHallX, leftHallY) > leftHallD) {
        createCanvas(1000, 600)
        background(splitPath, 0, 0)
    }
    
    if ( endlessHallR == true && endlessHallL == false && libDoor == false && finish == false && treasureRoom == false && items == false && boxTres == false && dist (mouseX, mouseY, rightRoomX, rightRoomY) < rightRoomD) {
        createCanvas( 1000, 600);
        background(door, 0, 0);

        libDoor = true
    }

    if (endlessHallR == true && endlessHallL == false && libDoor == false && finish == false && treasureRoom == false && items == false &&dist (mouseX, mouseY, rightRoomX, rightRoomY) > rightRoomD) {
        createCanvas(1000, 600)
        background(hallway, 0, 0)

    }

    if ( endlessHallL == true && endlessHallR == false && libDoor == false && finish == false && treasureRoom == false && items == false && dist (mouseX, mouseY, endX, endY) < endD) {
       createCanvas(1000, 600);
       background( treasure, 0, 0);
        print('hi')
       treasureRoom = true
        endlessHallL = false
    }

    if ( endlessHallL == true && endlessHallR == false && libDoor == false && finish == false && treasureRoom == false && items == false && boxTres == false && dist (mouseX, mouseY, endX, endY) > endD) {
        createCanvas(1000, 600)
        background(hallway, 0, 0)
    
    }

    if ( treasureRoom == true && endlessHallL == false && endlessHallR == false && libDoor == false && finish == false && items == false && boxTres == false && dist (mouseX, mouseY, endX, endY) < endD) {
        createCanvas(1000, 600)
        background(treasure, 0, 0)
       
         boxTres = true
    
    }


    if (boxTres == true && endlessHallL == false && endlessHallR == false && libDoor == false && finish == false && treasureRoom == true && items == false && dist(mouseX, mouseY, boxX, boxY) > boxD) {
        createCanvas(1000, 600)
        background(125)
        textSize(65)
        text('You Found the Treasure', 20, 65)
        text('You Recieve:', 100, 180)
        
    }

    if ( treasureRoom == true && endlessHallL == false && endlessHallR == false && libDoor == false && finish == false && items == false && boxTres == false && dist (mouseX, mouseY, endX, endY) > endD) {
        createCanvas(1000, 600);
        background(treasure, 0, 0);
    }

    if ( treasureRoom == true && endlessHallL == false && endlessHallR == false && libDoor == false && finish == false && items == false && boxTres == false && dist (mouseX, mouseY, tresHallX, tresHallY) < tresHallD) {
        createCanvas( 1000, 600);
        background(door, 0, 0);

        libDoor = true
    }

    if (items == true && endlessHallL == false && endlessHallR == false && libDoor == false && finish == false && treasureRoom == false && boxTres == false && dist (mouseX, mouseY, 1000, 600) > 0) {
        createCanvas(1000, 600);
        background(treasure, 0, 0);
    
        treasureRoom = true
      }


    if ( libDoor == true && endlessHallR == false && treasureRoom == false && endlessHallL == false && items == false && finish == false && boxTres == false && dist (mouseX, mouseY, libDoorX, libDoorY) < libDoorD) {
        createCanvas(1000, 600)
        background(library, 0, 0)

        finish = true        
    }

    if ( libDoor == true && endlessHallR == false && treasureRoom == false && endlessHallL == false && items == false && finish == false && boxTres == false && dist (mouseX, mouseY, libDoorX, libDoorY) > libDoorD) {
        createCanvas(1000, 600)
        background(door, 0, 0)

    }

  if (finish == true && endlessHallR == false && endlessHallL == false && libDoor == false && treasureRoom == false && items == false && boxTres == false && dist (mouseX, mouseY, endDoorX, endDoorY) < endDoorD) {
      createCanvas( 1000, 600)
      background(50)
      textSize(85)
      strokeFill(0)
      text( 'You Did It!', 95, 200)
  }

  else if ( finish == true && endlessHallR == false && endlessHallL == false && libDoor == false && treasureRoom == false && items == false && boxTres == false && dist (mouseX, mouseY, endDoorX, endDoorY) > endDoorD) {
    createCanvas(1000, 600)
    background(library, 0, 0)
  }






}

   
    



