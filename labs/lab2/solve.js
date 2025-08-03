Java.perform(function() {
  var customrandom = Java.use("definitely.notvulnerable.fridalab2.CustomRandom");
  customrandom.getRandomNumber.implementation = () => {
    console.log("hooked")
    return 0; 
  }
})