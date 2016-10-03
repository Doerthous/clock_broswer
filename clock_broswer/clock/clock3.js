function clock3(){
	function layout(){/*
		<div class="clock" id="clock3">
			<div class="clock-xin">
			</div>
			<div class="clock-xin2">
			</div>
			<div id="hour" class="hour">
			</div>
			<div id="min" class="min">
			</div>
			<div id="sec" class="sec">
			</div>
		</div>
	*/}	
	function run(){
		var winHeight = document.documentElement.clientHeight;
		document.getElementsByTagName('body')[0].style.height = winHeight+'px';
		var $clock = document.getElementById('clock3'), 
			$date = document.getElementById('date'), 
			$hour = document.getElementById('hour'), 
			$min = document.getElementById('min'), 
			$sec = document.getElementById('sec'), 
			oSecs = document.createElement('em');
		for (var i = 1; i < 61; i++) {
			var tempSecs = oSecs.cloneNode(), 
				pos = getSecPos(i);
			if(i%5==0){
				tempSecs.className = 'ishour';
				tempSecs.innerHTML = '<i style="-webkit-transform:rotate('+(-i*6)+'deg);">'+(i/5)+'</i>';
			}
			tempSecs.style.cssText='left:'+pos.x+'px; top:'+pos.y+'px; -webkit-transform:rotate('+i*6+'deg);';
			$clock.appendChild(tempSecs);
		}
		function getSecPos(dep) {
			var hudu = (2*Math.PI/360)*6*dep, 
				r = 200;
			//°ë¾¶´óÐ¡ 
			return {
				x: Math.floor(r + Math.sin(hudu)*r), 
				y: Math.floor(r - Math.cos(hudu)*r), 
			}
		}
		(function() {
			// µ±Ç°Ê±¼ä 
			var _now = new Date(), 
				_h = _now.getHours(), 
				_m = _now.getMinutes(), 
				_s = _now.getSeconds();
			//»æÖÆÊ±ÖÓ 
			var gotime = function(){
				var _h_dep = 0;
				_s++;
				if(_s>59){
					_s=0;
					_m++;
				}
				if(_m>59){
					_m=0;
					_h++;
				}
				if(_h>12){
					_h = _h-12;
				}
				//Ê±ÕëÆ«ÒÆ¾àÀë 
				_h_dep = Math.floor(_m/12)*6;
				$hour.style.cssText = '-webkit-transform:rotate('+(_h*30-90+_h_dep)+'deg);';
				$min.style.cssText = '-webkit-transform:rotate('+(_m*6-90)+'deg);';
				$sec.style.cssText = '-webkit-transform:rotate('+(_s*6-90)+'deg);';
			};
			gotime();
			dts_setClockTimer(setInterval(gotime, 1000));
		})();
	}
	dts_runClock(layout,"clock3.css",run);
}


