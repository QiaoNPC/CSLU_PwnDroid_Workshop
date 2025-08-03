Java.perform(function() {
  var main = Java.use("definitely.notvulnerable.fridalab0.MainActivity");
  main.getRandomNumber.implementation = () =>{
    console.log("Hello world")
    return 420
  }
})