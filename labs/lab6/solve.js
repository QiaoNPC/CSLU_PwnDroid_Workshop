Java.perform(function () {
  var main = Java.use("definitely.notvulnerable.fridalab6.AnotherClass");
  var instantiateMain = main.$new(); 
  var flag = instantiateMain.gibFlag(1337); 
  console.log(`${flag}`);
});