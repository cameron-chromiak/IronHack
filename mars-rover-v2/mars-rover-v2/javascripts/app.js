var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}
var ranEdge = Math.floor((Math.random() * 5) + 11);
// ======================
// TODO: booundries
// ======================

function main(){
  input = prompt("Directions: \" \" for log, then F, R, or L")
  if (input != " "){
    inputCommand(input)
  }
  else{
    alert("Log in console")
    console.log(rover.travelLog)
  }
  main()
}
main()
function turnLeft(turn){
  // console.log("turnLeft was called!");
  console.log("Heading" + rover);
  switch (rover.direction) {
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
    default:
      return rover.direction;
  }
  console.log("Heading: " + rover.direction);
}

function turnRight(turn){
  // console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
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
    default:
      return rover.direction;
  }
  console.log("Heading: " + rover.direction);
}
function inputCommand(instructions){
  var position;

  instructions = instructions.toUpperCase();
  // console.log("start "+ rover.direction)
  for (var i = 0; i<instructions.length;i++){
    switch (instructions[i]) {
      case "R":
        // console.log("Right");
        position = turnRight(rover.direction);
        moveRover(position)
        break;
      case "L":
        // console.log("Left");
        position = turnLeft(rover.direction);
        moveRover(position)
        break;
      case "F":
        moveRover(instructions[i]) //postion var does not need re-assignment, just pass i
        break;
      default:
        return;
    }
  }
}


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
          rover.x += 1;
          console.log(rover.x,rover.y)
          break;
        case "W":
          rover.x -= 1;
          console.log(rover.x, rover.y)
          break;
        default:
          return
      }
  }
  checkBoundries(rover.x, rover.y)
  makeLog(rover.x, rover.y)// automatically calls makeLog() and pushes position
}

function makeLog(x,y){
  rover.travelLog.push(x, y, "-->")
}

//instead of if statement in moveRover()
function checkBoundries(x, y){
  if (rover.x == 10 || rover.y == 10){
    alert("Infared scanner detecting cliff ahead. Turn back now.")
  }
  if (rover.x == ranEdge || rover.y == ranEdge){
    alert("Rover Lost")
    rover.x = 0;
    rover.y = 0;
  }
  else{
    return
  }
}
