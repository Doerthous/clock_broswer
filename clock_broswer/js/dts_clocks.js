var clocks = new Array();
var clockTimer;

function heredoc(fn) {
    return fn.toString().split('\n').slice(1,-1).join('\n') + '\n'
}
function get2b(num){
	return num < 10 ? "0"+num : num;
}
function dts_runClock(layoutfunc, cssfile, runfunc){
	setClockLayoutStr(heredoc(layoutfunc));
	setClockCSSLinkFile(cssfile);
	dts_killTimer();
	runfunc();
}
function dts_killTimer(){
	clearInterval(clockTimer);
	cancelAnimationFrame(clockTimer);
	console.log("kill timer: ",clockTimer);
}
function dts_setClockTimer(timer){
	dts_killTimer();
	clockTimer = timer;
	console.log("timer: ",timer);
}
function setClockLayoutStr(layoutStr){
	var $clock = $("#clock");
	$clock.empty();
	$clock.append(layoutStr);
	console.log(layoutStr);
}
function setClockCSSLinkFile(cssfile){
	$('#clockCSS').remove();
	if(cssfile == "")return;
	$('head').append('<link id="clockCSS"'+
						'rel="stylesheet"'+
						'type="text/css"'+
						'href="clock/'+cssfile+
					'"/>');
}
