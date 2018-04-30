/**
 * 
 */
var canvas = document.getElementById("can");
var fileinput = document.getElementById("upl");
var image = null;
var imagecopy = null;

function upload() {
	image = new SimpleImage(fileinput);
	image.drawTo(canvas);
	imagecopy = new SimpleImage(fileinput);
}

function red() {
	for (var pixel of image.values()) {
		pixel.setRed(255);
	}
	image.drawTo(canvas);
}

function greyscale() {
	for (var pixel of image.values()) {
		var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
		pixel.setRed(avg);
		pixel.setGreen(avg);
		pixel.setBlue(avg);
	}
	image.drawTo(canvas);
}

function rainbow() {
	var height= image.getHeight();
	for (var pixel of image.values()) {
		var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3
		var y = pixel.getY();
		if (y <= height/7) {
			if (avg < 128) {
				pixel.setRed(2*avg);
				pixel.setGreen(0);
				pixel.setBlue(0);
			} else if (avg >= 128) {
				pixel.setRed(255);
				pixel.setGreen(2*avg - 255);
				pixel.setBlue(2*avg - 255);
			}
		}
		if (y > height/7 && y <= height/7*2) {
			if (avg < 128) {
				pixel.setRed(2*avg);
				pixel.setGreen(0.8*avg);
				pixel.setBlue(0);
			} else if (avg >= 128) {
				pixel.setRed(255);
				pixel.setGreen(1.2*avg - 51);
				pixel.setBlue(2*avg - 255);
			}
		}
		if (y > height/7*2 && y <= height/7*3) {
			if (avg < 128) {
				pixel.setRed(2*avg);
				pixel.setGreen(2*avg);
				pixel.setBlue(0);
			} else if (avg >= 128) {
				pixel.setRed(255);
				pixel.setGreen(255);
				pixel.setBlue(2*avg - 255);
			}
		}
		if (y > height/7*3 && y <= height/7*4) {
			if (avg < 128) {
				pixel.setRed(0);
				pixel.setGreen(2*avg);
				pixel.setBlue(0);
			} else if (avg >= 128) {
				pixel.setRed(2*avg - 255);
				pixel.setGreen(255);
				pixel.setBlue(2*avg - 255);
			}
		}
		if (y > height/7*4 && y <= height/7*5) {
			if (avg < 128) {
				pixel.setRed(0);
				pixel.setGreen(0);
				pixel.setBlue(2*avg);
			} else if (avg >= 128) {
				pixel.setRed(2*avg - 255);
				pixel.setGreen(2*avg - 255);
				pixel.setBlue(255);
			}
		}
		if (y > height/7*5 && y <= height/7*6) {
			if (avg < 128) {
				pixel.setRed(0.8*avg);
				pixel.setGreen(0);
				pixel.setBlue(2*avg);
			} else if (avg >= 128) {
				pixel.setRed(1.2*avg - 51);
				pixel.setGreen(2*avg - 255);
				pixel.setBlue(255);
			}
		}
		if (y > height/7*6) {
			if (avg < 128) {
				pixel.setRed(1.6*avg);
				pixel.setGreen(0);
				pixel.setBlue(1.6*avg);
			} else if (avg >= 128) {
				pixel.setRed(0.4*avg + 153);
				pixel.setGreen(2*avg - 255);
				pixel.setBlue(0.4*avg + 153);
			}
		}
	}
	image.drawTo(canvas);
}

function mado() {
	var h = image.getHeight();
	var w = image.getWidth();
	var border = h/100*4;
	var rgb = (90<<16)+(70<<8)+40
	var r=rgb>>16;
	var g=(rgb>>8)%256;
	var b=rgb%256;
	console.log(r,g,b);
	for(var x1=w/4 - border/2; x1<w/4 + border/2; x1++){
    
	}
	for (var pixel of image.values()) {
		var x = pixel.getX();
		var y = pixel.getY();
		if (x <= border || x >= w-border) {
			pixel.setRed(r);
			pixel.setGreen(g);
			pixel.setBlue(b);
		}
		if (x <= (w/4 + border/2) && x >= (w/4 - border/2)) {
			pixel.setRed(r);
			pixel.setGreen(g);
			pixel.setBlue(b);
		}
		if (x <= (w/4*2 + border/2) && x >= (w/4*2 - border/2)) {
			pixel.setRed(r);
			pixel.setGreen(g);
			pixel.setBlue(b);
		}
		if (x <= (w/4*3 + border/2) && x >= (w/4*3 - border/2)) {
			pixel.setRed(r);
			pixel.setGreen(g);
			pixel.setBlue(b);
		}
		if (y <= border || y >= h-border) {
			pixel.setRed(r);
			pixel.setGreen(g);
			pixel.setBlue(b);
		}
		if (y <= (h/2 + border/2) && y >= (h/2 - border/2)) {
			pixel.setRed(r);
			pixel.setGreen(g);
			pixel.setBlue(b);
		}
	}
	image.drawTo(canvas);
}

function reset() {
	imagecopy.drawTo(canvas);
	image = new SimpleImage(fileinput);
}
