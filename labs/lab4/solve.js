Java.perform(function() {
  var externalclass = Java.use("definitely.notvulnerable.fridalab4.ExternalClass");
  externalclass.isLeet.implementation = () => {
    return true;
  }
})