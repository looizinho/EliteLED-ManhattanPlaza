import { Meteor } from 'meteor/meteor'

const universes = 2
const channelsPerFixture = 4
const fixturesPerUniverse = 75
const options = {
  host: "255.255.255.255",
}
var state = false
var value = 0

const R = [255, 0, 0]
const G = [0, 255, 0]
const B = [0, 0, 255]

Meteor.startup(() => {

})

const artnet = require("artnet")(options)
artnet.set(1, numLoop(128, 512), function (err, res) {
  artnet.close()
})


// for (let i = 1 i < 512 i += 4) {
//   const artnet = require("artnet")(options)
//   artnet.set(i, 255, function (err, res) {
//     artnet.close()
//   })
// }



// setInterval(() => {
//   if (state == false) {
//     value = 255
//     state = true
//   } else {
//     value = 0
//     state = false
//   }

//   console.log(state, value)

//   const artnet = require("artnet")(options)
//   artnet.set(1, value, function (err, res) {
//     artnet.close()
//   })
// }, 2000)


function numSeq(min, max) {
  var sequentialNumbers = [];
  for (var i = min; i <= max; i++) {
    sequentialNumbers.push(i);
  }
  return sequentialNumbers;
}

function numLoop(value, times) {
  var sequentialNumbers = [];
  for (var i = 0; i < times; i++) {
    sequentialNumbers.push(value);
  }
  return sequentialNumbers;
}