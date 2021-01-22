// ======  Task 1 ======
// Convert inch to feet and feet to mile ;
function inchToFoot(value) {
  if (value === undefined) {
    console.log("You didn't enter a number");
    return false;
  }
  if (typeof value === "string" || typeof value === "boolean") {
    console.log("You enter a wrong input");
    return false;
  }
  let inchValue = value;
  const feet = inchValue * 0.0833333333;
  console.log(`${value} inch = ${feet} foot`);
  return feet;
}

function footToMiles(callback) {
  const footValue = callback;
  const miles = footValue / 5280;
  const result = `${footValue} foot = ${miles} mile`;
  console.log(result);
}
// const footValue = inchToFoot(100);
// footValue;
// footToMiles(footValue);

// ==============================================
// ======= TASK 2 ========
// WOOD CALCULATOR

function woodCalculator(chair, table, bed) {
  const chairsCubic = 1 * chair;
  const tablesCubic = 3 * table;
  const bedsCubic = 5 * bed;
  const result = chairsCubic + tablesCubic + bedsCubic;
  return `Needs to buy ${result} Cubic Wood`;
}
// console.log(woodCalculator(5, 2, 1));

// ==================================
// ====== TASK 3 ======
// STATIC WAY
// function bricksNeeded(num) {
//   const oneToTen = 15 * 10 * 1000;
//   const elevenToTwelve = 12 * 10 * 1000;
//   const twentyOneToTwentyTwo = 10 * 2 * 1000;
//   const result = oneToTen + elevenToTwelve + twentyOneToTwentyTwo;
//   console.log(result);
// }
// console.log(bricksNeeded(22));

// DYNAMIC WAY
function bricksNeeded(num) {
  let firstTen = [];
  let secondTen = [];
  let others = [];
  for (let i = 1; i < num + 1; i++) {
    if (i > 20) {
      others.push(i);
    } else if (i > 10) {
      secondTen.push(i);
    } else {
      firstTen.push(i);
    }
  }
  // declare floor height variable
  const oneToTenFloorHeight = 15;
  const elevenToTwelveFloorHeight = 12;
  const othersFloorHeight = 10;

  // calculate how many brick is needed for per foot
  const brickForPerFoot = 1000;
  const neededBrickForOneToTen =
    oneToTenFloorHeight * firstTen.length * brickForPerFoot;
  // console.log(neededBrickForOneToTen);
  const neededBricksForElevenToTwelve =
    elevenToTwelveFloorHeight * secondTen.length * brickForPerFoot;
  // console.log(neededBricksForElevenToTwelve);
  const neededBricksForTwentyOneToOthers =
    othersFloorHeight * others.length * brickForPerFoot;
  // console.log(neededBricksForTwentyOneToOthers);
  // total bricks for the building
  const totalBrickNeeded =
    neededBrickForOneToTen +
    neededBricksForElevenToTwelve +
    neededBricksForTwentyOneToOthers;
  console.log(totalBrickNeeded);
}
// bricksNeeded(23);

// ====== TASK 4 =======
// short name checker

function smallName(arr) {
  const shortName = arr.reduce(function (a, b) {
    return a.length <= b.length ? a : b;
  });

  // const sorted = arr.sort(function (a, b) {
  //   return a.length - b.length;
  // });
  // console.log(sorted[0]);
  console.log(shortName);
}

// smallName(["jadidd", "jahid", "towheed", "mohsin"]);

// ===== TASK 5 =====
//

function willIgoToOffice() {
  const goToOffice = false;
  if (goToOffice) {
    console.log("Then go out with an umbrella");
  } else {
    console.log("Send a mail to the office that your body is bad");
    const haveBeff = true;
    if (haveBeff) {
      console.log("Beef will be cooked with khichuri");
    } else {
      console.log("Eat fried eggs");
    }
  }
}
// willIgoToOffice();
