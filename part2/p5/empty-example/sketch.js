var song;
var fft;
var w;


function preload() {
	song = loadSound('will.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);//changes the hue of the colour range
  angleMode(DEGREES);
  song.play();
  fft = new p5.FFT(0.9, 256); ////fast fourier transform (smoothing and binsize)
  w = width / 70; //to represent the gap between the rectangle
}

function draw() {
	background(0);
	push();
	translate(windowWidth/2,0);
	scale(0.5,0.5);
	var spectrum = fft.analyze();
	console.log(spectrum);
	noStroke();
	//stroke(255);
	
	for (var i = 0; i < spectrum.length; i++) {
		var amp = spectrum[i];
		var y = map(amp, 0, -256, height, 0);
		fill(i, 255, 255);
		rect(i*w, y, w-5, height - y);
	}
	pop();

	translate(windowWidth/2,0); // issue lies here
	scale(0.5,0.5);
	//stroke(255);
	noStroke();
		for (var i = 0; i < spectrum.length; i++) {
		var amp = spectrum[i];
		var y = map(amp, 0, -256, height, 0);
		fill(i, 255, 255);
		rect(i*-w, y, w-5, height - y); // difference
	}


}
