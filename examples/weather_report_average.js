// use_html: data.html

var weatherData = [
	{
		date: "2012-08-22",
		temperature: 30,
		humidity: 40
	},
	{
		date: "2012-08-23",
		temperature: 32,
		humidity: 80
	},
	{
		date: "2012-08-24",
		temperature: 28,
		humidity: 20
	}
];


function averageTemperature(property) {
  var sum = 0,
		count = 0;
		
  while (count < weatherData.length) {
		count = count + 1;
  }
  
	return sum;
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

	text(0, 120, "Average temperature: " + averageTemperature() + "°");	

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
//  fill()                   - fill the current path with the current color
//
// Coordinates are interpreted as if 0,0 is the center of the
// screen. x is the horizontal axis, and y the vertical.
// Positive x goes to the right, positive y goes up.
// These operations can transform the coordinate system:
//
//  moveTo(x, y)    - move the origin to x, y
//  rotate(degrees) - rotate subsequent drawing operations
//                    by a number of degrees
//  scale(factor)   - scale subsequent drawing operations
//  goBack()        - undo one transformation
