(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"halo_ad_atlas_", frames: [[0,0,1942,182],[209,184,980,92],[0,184,207,480],[1191,184,300,270]]}
];


// symbols:



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["halo_ad_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["halo_ad_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.chief = function() {
	this.initialize(ss["halo_ad_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.warthog = function() {
	this.initialize(ss["halo_ad_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_2();
	this.instance.parent = this;
	this.instance.setTransform(-245.1,-22.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text, new cjs.Rectangle(-245.1,-22.9,490,46), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.warthog();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,150,90), null);


(lib.border1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_1();
	this.instance.parent = this;
	this.instance.setTransform(-485.5,-45.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-485.5,-45.5,971,91);


// stage content:
(lib.haload = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.btn1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://www.amazon.com/", "_blank");
		}
	}
	this.frame_47 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(47).call(this.frame_47).wait(1));

	// border
	this.btn1 = new lib.border1();
	this.btn1.name = "btn1";
	this.btn1.parent = this;
	this.btn1.setTransform(485,45);
	new cjs.ButtonHelper(this.btn1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(48));

	// master_chief
	this.instance = new lib.chief();
	this.instance.parent = this;
	this.instance.setTransform(821,0,0.3188,0.1875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48));

	// warthog
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-176.35,45,1,1,0,0,0,75,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-169.6},0).wait(1).to({x:-162.85},0).wait(1).to({x:-156.1},0).wait(1).to({x:-149.35},0).wait(1).to({x:-142.6},0).wait(1).to({x:-135.85},0).wait(1).to({x:-129.1},0).wait(1).to({x:-122.35},0).wait(1).to({x:-115.6},0).wait(1).to({x:-108.9},0).wait(1).to({x:-102.15},0).wait(1).to({x:-95.4},0).wait(1).to({x:-88.65},0).wait(1).to({x:-81.9},0).wait(1).to({x:-75.15},0).wait(1).to({x:-68.4},0).wait(1).to({x:-61.65},0).wait(1).to({x:-54.9},0).wait(1).to({x:-48.2},0).wait(1).to({x:-41.45},0).wait(1).to({x:-34.7},0).wait(1).to({x:-27.95},0).wait(1).to({x:-21.2},0).wait(1).to({x:-14.45},0).wait(1).to({x:-7.7},0).wait(1).to({x:-0.95},0).wait(1).to({x:5.8},0).wait(1).to({x:12.55},0).wait(1).to({x:19.25},0).wait(1).to({x:26},0).wait(1).to({x:32.75},0).wait(1).to({x:39.5},0).wait(1).to({x:46.25},0).wait(1).to({x:53},0).wait(1).to({x:59.75},0).wait(1).to({x:66.5},0).wait(1).to({x:73.25},0).wait(1).to({x:79.9},0).wait(1).to({x:86.65},0).wait(1).to({x:93.4},0).wait(1).to({x:100.15},0).wait(1).to({x:106.9},0).wait(1).to({x:113.65},0).wait(1).to({x:120.4},0).wait(1).to({x:127.15},0).wait(1).to({x:133.9},0).wait(1).to({x:140.65},0).wait(1));

	// text
	this.text = new lib.text();
	this.text.name = "text";
	this.text.parent = this;
	this.text.setTransform(496.3,36.35);
	this.text.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(23).to({alpha:1},0).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(233.7,44.5,736.8,46);
// library properties:
lib.properties = {
	id: 'D76D17B131689945BC0D24B7652C5DED',
	width: 970,
	height: 90,
	fps: 24,
	color: "#535353",
	opacity: 1.00,
	manifest: [
		{src:"images/halo_ad_atlas_.png?1571879727011", id:"halo_ad_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D76D17B131689945BC0D24B7652C5DED'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;