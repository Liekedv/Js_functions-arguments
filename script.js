//No arguments

const paintWalls = function () {
  console.log ("The wall has been painted red");
};

paintWalls ();


//Single argument

const paintWalls = function (color) {
  console.log ("The wall has been painted " + color);
};

paintWalls ("green");


//Multiple arguments

const paintWalls = function (wall, color) {
  console.log (wall + color);
};

paintWalls ("The north wall has been painted ","orange");
paintWalls ("The south-east wall has been painted ","grey");