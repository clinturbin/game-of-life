var boardSize = 5;
var startArray = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
];

var topLeftNeighbour = function (startArray, i, j) {
    return (i === 0 || j === 0) ? 0 : startArray[i - 1][j - 1] === 0 ? 0 : 1; 
};

var topNeighbour = function (startArray, i, j) {
    return i === 0 ? 0 : startArray[i - 1][j + 1] === 0 ? 0 : 1;
};

var topRightNeighbour = function (startArray, i, j) {
    return (i === 0 || j === boardSize - 1) ? 0 : startArray[i - 1][j + 1] === 0 ? 0 : 1;
};

var leftNeighbour = function (startArray, i, j) {
    return j === 0 ? 0 : startArray[i][j - 1] === 0 ? 0 : 1;
};

var bottomLeftNeighbour = function (startArray, i, j) {
    return i === boardSize - 1 || j === 0 ? 0 : startArray[i + 1][j - 1] === 0 ? 0 : 1;
};

var bottomNeighbour = function (startArray, i, j) {
    return i === boardSize - 1 ? 0 : startArray[i + 1][j] === 0 ? 0 : 1;
};

var bottomRightNeighbour = function (startArray, i, j) {
    return i === boardSize - 1 || j === boardSize - 1 ? 0 : startArray[i + 1][j + 1] === 0 ? 0 : 1;
};

var rightNeighbour = function (startArray, i, j) {
    return j === boardSize - 1 ? 0 : startArray[i][j + 1] === 0 ? 0 : 1;
};

var countLivingNeighbours = function (startArray, i, j) {
    var livingNeighbours = 0;
    livingNeighbours += topLeftNeighbour(startArray, i, j);
    livingNeighbours += topNeighbour(startArray, i, j);
    livingNeighbours += topRightNeighbour(startArray, i, j);
    livingNeighbours += leftNeighbour(startArray, i, j);
    livingNeighbours += bottomLeftNeighbour(startArray, i, j);
    livingNeighbours += bottomNeighbour(startArray, i, j);
    livingNeighbours += bottomRightNeighbour(startArray, i, j);
    livingNeighbours += rightNeighbour(startArray, i, j);
    return livingNeighbours;
};

var currentlyAlive = function (livingNeighbours) {
    return (livingNeighbours < 2 || livingNeighbours > 3) ? 0 : 1;
};

var currentlyDead = function (livingNeighbours) {
    return (livingNeighbours === 3) ? 1 : 0;
};

var nextLifeStatus = function (startArray, i, j) {
    var currentLife = startArray[i][j];
    var livingNeighbours = countLivingNeighbours(startArray, i, j);
    return (currentLife === 1) ? currentlyAlive(livingNeighbours) : currentlyDead(livingNeighbours);
};

var makeNewArray = function (startArray) {
    var newArray = [];
    for (var i = 0; i < startArray.length; i++) {
        var row = [];
        for (var j = 0; j < startArray.length; j++) {
            row.push(nextLifeStatus(startArray, i, j));
        }
        newArray.push(row);
    }
    return newArray;
};

console.log(startArray);
console.log(makeNewArray(startArray));