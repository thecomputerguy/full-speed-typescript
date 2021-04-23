enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

const direction = Direction.Down;
console.log("Moving in ", direction, " direction.");

enum MusicKind {
  Classic,
  Rap,
  Pop,
  Rock,
  Dance,
  Funk,
}

var kind = MusicKind.Funk; //5
var kindName = MusicKind[kind]; //Funk

//Enumeration split across multiple blocks
enum FootSize {
  Small,
  Medium,
}
//...
enum FootSize {
  Large = 2,
  XL,
  XXL,
}

var fSize = FootSize.Small;
++fSize;
console.log(FootSize[fSize]); //Medium

fSize = FootSize.XL;
--fSize;
console.log(FootSize[fSize]); //Large

var fSize = FootSize.XXL;
++fSize;
console.log(FootSize[fSize]); //undefined
