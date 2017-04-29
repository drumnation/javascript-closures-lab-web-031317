const app = "I don't do much."

function bumpCounter() {
  var counter = 0
  function addBump() {counter++} // should increase the counter by 1
  function getBumps() {return counter} // should return the current count
  return {addBump, getBumps} // These two functions need to be returned, as they will be used to increase the counter, and get the counter value
} // Create a function, bumpCounter(), that has a variable called counter.
// This variable should not be accessible outside of the function

function createAnimal(animalType) {
  return function (deadlyDevice) {
    return {animalType, deadlyDevice}
  }
} // An example of the output: { animalType: 'Monkey', deadlyDevice: 'Lightsaber' }

var sharkCreator = createAnimal('Shark')
// Create a shark creator function by calling createAnimal() with the 'Shark' string.
// This should be assigned to a variable called sharkCreator

var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
// Add a variable called sharkWithFrickinLaserbeam that is a combination of a 'Shark' and 'Laserbeam'

var sharkWithFrickinCannon = sharkCreator('Cannon')
// Add a variable called sharkWithFrickinCannon that is a combination of a 'Shark' and 'Cannon'
