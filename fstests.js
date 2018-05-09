var obj = {
    "first_name"    : "Vardan",
    "last_name"     : "Hovsepyan",
    "age"           : 13,
    "tumo_student"  : true 
}
var fs = require("fs");

var json = fs.writeFileSync("obj.json" ,JSON.stringify(obj));