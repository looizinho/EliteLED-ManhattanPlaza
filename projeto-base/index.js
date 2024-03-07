const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Application running on URL: http://localhost:${port}`);
});

const options = {
  host: "255.255.255.255",
};

const artnet = require("artnet")(options);
artnet.set(1, [255, 255, 0, 255], function (err, res) {
  artnet.close();
});

const universes = 2;
const channelsPerFixture = 4;
const fixturesPerUniverse = 75;

// for (let i = 1; i < 512; i += 4) {
//   const artnet = require("artnet")(options);
//   artnet.set(i, 255, function (err, res) {
//     artnet.close();
//   });
// }

var state = false;
var value = 0;

// setInterval(() => {
//   if (state == false) {
//     value = 255;
//     state = true;
//   } else {
//     value = 0;
//     state = false;
//   }

//   console.log(state, value);

//   const artnet = require("artnet")(options);
//   artnet.set(1, value, function (err, res) {
//     artnet.close();
//   });
// }, 2000);
