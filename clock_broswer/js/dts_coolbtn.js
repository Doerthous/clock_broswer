function coolButton(){
	var btnRadius = 27;
	var cv = document.getElementById("canvas");
		var ctx = cv.getContext("2d");
		ctx.save();
		ctx.beginPath();
		ctx.fillStyle="black";
		ctx.arc(btnRadius,btnRadius,btnRadius,0,2*Math.PI);
		ctx.fill();
		ctx.restore();
	$("#switch").click(function(){
		$("body").toggleClass("open");
		$("body").toggleClass("no-open");
		if($("body").hasClass("open")){
			(function(){
				var ctx = document.getElementById("canvas").getContext("2d");
				var begin = 0;
				var inc = 2*Math.PI/50;
				var timer = setInterval(draw,10);
				function draw(){
					ctx.save();
					ctx.strokeStyle="#fff";
					ctx.lineWidth = 1;
					ctx.beginPath();
					ctx.arc(btnRadius,btnRadius,btnRadius-1,begin, begin+inc);
					begin+=inc;
					ctx.stroke();
					if(begin >= 2*Math.PI){
						clearInterval(timer);
					}
					ctx.restore();
				}
			})();
		} else {
			(function(){
				var ctx = document.getElementById("canvas").getContext("2d");
				var begin = 0;
				var inc = -2*Math.PI/50;
				var timer = setInterval(draw,10);
				function draw(){
					ctx.save();
					ctx.strokeStyle="#000";
					ctx.lineWidth = 2;
					ctx.beginPath();
					ctx.arc(btnRadius,btnRadius,btnRadius-1,begin, begin+inc, true);
					begin+=inc;
					ctx.stroke();
					if(begin <= -2*Math.PI){
						clearInterval(timer);
					}
					ctx.restore();
				}
			})();
		}
	});
}
