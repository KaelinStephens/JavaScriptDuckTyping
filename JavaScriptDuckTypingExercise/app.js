'use strict';
var plane = "plane";
var sevenFiftySeven = "757";
var drone = "drone";
var shellPlane = null;
var nothing = "";
var flyingobjects = [plane, sevenFiftySeven, drone, shellPlane, nothing];
function takeOff(flyingObjects) {
    for (i = 0; i < flyingObjects.length; i++) {
        if (flyingObjects[i]) {
            console.log(flyingObjects[i] + " is preparing for takeoff!");
        }
        else {
            console.log(flyingObjects[i] + " cannot fly");
        }
    }
}
takeOff(flyingobjects);
