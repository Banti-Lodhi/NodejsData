let figlet = require("figlet");
figlet("Preetam Singh DataScientist", function (err, data) {
  if (err) {
    console.log("Something went wrong Raju Singh");
    console.dir(err);
    return;
  }
  console.log(data);
});