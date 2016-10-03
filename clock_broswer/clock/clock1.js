function clock1(){
    function layout(){/*
        <canvas id="clockCanvas"></canvas>
    */}
    function run(){
        var canvas=document.getElementById('clockCanvas');
        var radius = 200;
        var padding = 10;
        canvas.width = 2*(radius+padding);
        canvas.height = canvas.width;
        ctx = canvas.getContext('2d');

        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        halfOfWidth = canvas.width/2;
        halfOfHeight = canvas.height/2;
        angle = 6*s;
        _2PI = Math.PI*2;
        _PIdiv180 = Math.PI/180;

        //
        ctx.translate(halfOfWidth, halfOfHeight);
        // 画框渐变
        var gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radius);
        gradient.addColorStop(0.5,"#1E2834");
        gradient.addColorStop(1,"#000");

        function draw(){           
          // 擦了重画
          ctx.clearRect(-halfOfWidth, -halfOfHeight, canvas.width, canvas.height);

          // 画框
          var lightWidth=5;
          ctx.fillStyle = gradient; 
          ctx.strokeStyle = "#008080";
          ctx.lineWidth = lightWidth;
          ctx.lineCap = "round";  
          ctx.beginPath();
          ctx.arc(0, 0, radius, 0, _2PI, true);
          ctx.fill();
          ctx.closePath();

          // 画数字
          ctx.save();
          ctx.fillStyle = "#bfbfbf";
          ctx.scale(0.618, 1);
          ctx.font = "250px Microsoft YaHei";
          ctx.fillText(get2b(h), -270, radius/2);
          ctx.fillStyle = "#99CC00";
          ctx.scale(1.5,1);
          ctx.font = "100px Microsoft YaHei";
          ctx.fillText(get2b(m), 50, -15);
          ctx.restore();

          // 
          ctx.save(); 
          ctx.beginPath();
          ctx.rotate(angle*_PIdiv180);
          ctx.fillStyle = "rgb(3,255,150)";
          ctx.arc(0,-200, 3, 0, _2PI);
          ctx.fill();
          ctx.closePath();
          ctx.restore();

          ctx.save();       
          ctx.rotate(angle*_PIdiv180);
          ctx.lineCap = "butt";
          for(var i = 1, deg = 1; i >= 0; i-=0.02, deg+=0.01){
            ctx.strokeStyle= "rgba(3,255,150,"+(1-i)+")";
            ctx.lineWidth = 5-i;
            ctx.beginPath();
            ctx.arc(0, 0, radius, deg*Math.PI, (deg+0.01)*Math.PI);
            ctx.stroke();
            //ctx.restore();
          }
          ctx.restore();


          angle += 0.6;
          if(angle >= 360){
            angle %= 360;
            ++m;
            if(m >= 60){
              ++h;
              m = 0;
            }
          }
        }
        dts_setClockTimer(setInterval(draw, 100));
    }
    dts_runClock(layout,"",run);
}

