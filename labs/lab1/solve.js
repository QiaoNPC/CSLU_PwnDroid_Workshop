Java.perform(function() {
  var a= Java.use("definitely.notvulnerable.fridalab1.MainActivity");
  a.getRandomNumber.implementation = () => {
    console.log("This method is hooked");
    return 0;
  }
})