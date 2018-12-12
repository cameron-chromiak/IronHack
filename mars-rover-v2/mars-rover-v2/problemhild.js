var rover = {
  direction: "N",
  x: 0,
  y: 0,
}
// ======================

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover) {
    case 'N':
        rover.direction = 'W'
      break;
    case 'W':
        rover.direction = 'S'
      break;
    case 'S':
        rover.direction = 'E'
      break;
    case 'E':
        rover.direction = 'N'
      break;

  }
}

function turnRight(rover){
  switch (rover) {
    case 'N':
        rover.direction = 'E'
      break;
    case 'E':
        rover.direction = 'S'
      break;
    case 'S':
        rover.direction = 'W'
      break;
    case 'W':
        rover.direction = 'N'
      break;

  }
}
function inputCommand(instructions){
  var position;
  var currentDir = rover.direction;
  instructions = instructions.toUpperCase();
  console.log("start "+ rover.direction)
  for (var i = 0; i<instructions.length;i++){
    if (instructions[i] == "L"){
      currentDir = turnLeft()
      moveRover(currentDir)
    }
    else if (instructions[i] == "R"){
      currentDir = turnRight()
      console.log(currentDir);
      instructions[i] = currentDir;
      moveRover(currentDir)
    }
    else if (instructions[i] == "F"){
      position = moveRover(instructions[i]);
    }
    else{
      return;
    }
    console.log(position);
  }
}


inputCommand("FRF")


function moveRover(pos){
  if (pos == "F" || pos == "L" || pos == "R") {
    switch (rover.direction) {
      case "N":
        rover.y += 1;
        console.log(rover.x, rover.y)
        break;
      case "S":
        rover.y -= 1;
        console.log(rover.x, rover.y)
        break;
      case "E":
        rover.x -= 1;
        console.log(rover.x,rover.y)
        break;
      case "W":
        rover.x += 1;
        console.log(rover.x, rover.y)
        break;
    }
  }
  else{
    return
  }
  return pos
}
