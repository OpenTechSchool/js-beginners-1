// use_html: data.html

var weatherData = [
	{
		date: "2012-08-21",
		temperature: 30,
		chanceOfPrecip: 40
	},
	{
		date: "2012-08-22",
		temperature: 32,
		chanceOfPrecip: 80
	},
	{
		date: "2012-08-23",
		temperature: 28,
		chanceOfPrecip: 20
	},
	{
		date: "2012-08-24",
		temperature: 26,
		chanceOfPrecip: 30
	},
	{
		date: "2012-08-25",
		temperature: 24,
		chanceOfPrecip: 10
	},
	{
		date: "2012-08-26",
		temperature: 28,
		chanceOfPrecip: 30
	},
	{
		date: "2012-08-27",
		temperature: 30,
		chanceOfPrecip: 30
	}
];


function average(property) {
  var sum = 0,
		count = 0;
		
  while (count < weatherData.length) {
    var temperature = weatherData[count][property];
		sum = sum + temperature;
		count = count + 1;
  }
	return Math.floor(sum / count);
}

function barChart(x, y, barWidth, property) {
	var gutter = 2,
		xPosition = x,
		yPosition = y;
	
	var count = 0;
	while (count < weatherData.length) {
		var barHeight = -1 * weatherData[count][property];
		box(xPosition, yPosition, barWidth, barHeight);
		xPosition = xPosition + barWidth + gutter;
		count = count + 1;
	}	
}

function drawing() {

	color("red");
	barChart(0, 140, 20, "temperature");
	text(0, 120, "Average temperature: " + average("temperature") + "°");	


	color("blue");
	barChart(0, 20, 20, "chanceOfPrecip");
	text(0, 0, "Average chance of preciperation: " + average("chanceOfPrecip") + "%");
}



// The following functions are available:
//
//  color(string)            - set the current color
//  lineWidth(number)        - set the line width
//  box(x, y, width, height) - draw a box
//  circle(x, y, radius)     - draw a circle
//  line(x1, y1, x2, y2)     - draw a line
//  text(x, y, string)       - draw text
//  clear()                  - clear the screen
//  path(string)             - draw a complex line
//    In a line description, the following commands are valid:
//    g x y - go to point x,y without drawing
//    l x y - draw a line from the current point to point x,y
//    c     - draw a line back to the start of the line
//    q x y cx cy - draw a curve to x,y, using cx,cy as
//                  'control point' to determine the curvature
//
// Coordinates are interpreted as if 0,0 is the center of the
// screen. x is the horizontal axis, and y the vertical.
// Positive x goes to the left, positive y goes up.
// These operations can transform the coordinate system:
//
//  moveTo(x, y)    - move the origin to x, y
//  rotate(degrees) - rotate subsequent drawing operations
//                    by a number of degrees
//  scale(factor)   - scale subsequent drawing operations
//  goBack()        - undo one transformation
