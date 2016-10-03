function photo(){
	var i=0,//大图编号
		len=img.length,//img数组的长度
		cur=0;
	//当前图片编号
	j=9,//默认显示小图个数
		page=0,//小图的页码
		$s_next=$('#smallImg-next'),//小图下一页
		$s_pre=$('#smallImg-pre'),//小图上一页
		box=$('#smallImg-box').width(),//显示的长度
		$ul=$('#smallImg-ul'),//小图外层
		$imgLi=$ul.find('li'),//小图li
		html=_html='';
	//存放载入的代码		
	$('#detailImg-box').append('<a class=\"detailImg_1\"><img alt=\"'+img[i].alt+'\" src=\"'+img[i].src+'\"></a>');
	$('#detailImg-box').click(function(){
		detailImgBox_click(cur);
	})
	//大图	
	$('#detailImg-next').click(function(){
		++i;
		detailImg_click($s_next,i,len);
	});
	$('#detailImg-pre').click(function(){
		--i;
		detailImg_click($s_pre,i,len);
	});
	//小图
	for(var k=0;k<j;k++){
		var _k=k%len;
		h = s_html(_k);
		html+=h;
	}
	$ul.append(html);
	$('.smallImg_1').addClass('cur');
	//小图下一页
	$('#smallImg-next').click(function(){
		if(!$ul.is(':animated')){
			page++;
			var a=page*j,_a,c;
			for(var k=0;k<j;k++,a++){
				smallImg_click(a,_a,len,i);
				_html+=h;
			}
			$ul.append(_html);
			$ul.css({
				'left':0,'right':'auto'}
				   );
			$ul.animate({left:-box},1618,
				function(){
					$ul.find('li:lt('+j+')').detach();
					$ul.css('left',0);
					_html='';
			});
			//动画执行后,再删除前9个li,将left设回0
			$('#smallImg-ul li').click(function(){
				//三处一样，不知道这个要怎么优化？？？
				var _this=$(this);
				i=_this.attr('class').replace(/[^0-9]/ig,'')-1;
				img_info(i);
				s_a_r(_this,'cur');
				cur=i;
			});
		}
	});
	//小图上一页
	$('#smallImg-pre').click(function(){
		if(!$ul.is(':animated')){
			page--;
			var a=(page-1)*j,_a,c;
			for(var k=0;k<j;k++,a--){
				smallImg_click(a,_a,len,i);
				_html=h+_html;
			}
			$ul.prepend(_html).css({
				'right':box,'left':'auto'});
			$ul.animate({right:0},1618,
				function(){
					$ul.find('li:gt('+(j-1)+')').detach();
					//删除后9个li,从8开始
					_html='';
			});
			$('#smallImg-ul li').click(function(){
				var _this=$(this);
				i=_this.attr('class').replace(/[^0-9]/ig,'')-1;
				img_info(i);
				s_a_r(_this,'cur');
				cur=i;
			});
		}
	});
	//点击小图
	$('#smallImg-ul li').click(function(){
		var _this=$(this);
		i=_this.attr('class').replace(/[^0-9]/ig,'')-1;
		img_info(i);
		s_a_r(_this,'cur');
		cur=i;
	});
}
 
/*----自定义函数-----------*/
var img=[
	{
		'alt':'图片19',
		'src':'image/clock0.png',
		'smallSrc':'image/clock0.png'
	}
	,{
		'alt':'图片18',
		'src':'image/clock1.png',
		'smallSrc':'image/clock1.png'
	}
	,{
		'alt':'图片19',
		'src':'image/clock2.png',
		'smallSrc':'image/clock2.png'
	}
	,{
		'alt':'图片20',
		'src':'image/clock3.png',
		'smallSrc':'image/clock3.png'
	}
	,{
		'alt':'图片21',
		'src':'image/clock4.png',
		'smallSrc':'image/clock4.png'
	}
	,{
		'alt':'图片22',
		'src':'image/clock5.png',
		'smallSrc':'image/clock5.png'
	}
	,{
		'alt':'图片23',
		'src':'image/clock6.png',
		'smallSrc':'image/clock6.png'
	}
	,{
		'alt':'图片23',
		'src':'image/clock7.png',
		'smallSrc':'image/clock7.png'
	}
	,{
		'alt':'图片1',
		'src':'image/1_b.jpg',
		'smallSrc':'image/1_s.jpg'
	}
	,{
		'alt':'图片2',
		'src':'image/2_b.jpg',
		'smallSrc':'image/2_s.jpg'
	}
	,{
		'alt':'图片3',
		'src':'image/3_b.jpg',
		'smallSrc':'image/3_s.jpg'
	}
	,{
		'alt':'图片4',
		'src':'image/4_b.jpg',
		'smallSrc':'image/4_s.jpg'
	}
	,{
		'alt':'图片5',
		'src':'image/5_b.jpg',
		'smallSrc':'image/5_s.jpg'
	}
	,{
		'alt':'图片6',
		'src':'image/6_b.jpg',
		'smallSrc':'image/6_s.jpg'
	}
	,{
		'alt':'图片7',
		'src':'image/7_b.jpg',
		'smallSrc':'image/7_s.jpg'
	}
	,{
		'alt':'图片8',
		'src':'image/8_b.jpg',
		'smallSrc':'image/8_s.jpg'
	}
	,{
		'alt':'图片9',
		'src':'image/9_b.jpg',
		'smallSrc':'image/9_s.jpg'
	}
	,{
		'alt':'图片10',
		'src':'image/10_b.jpg',
		'smallSrc':'image/10_s.jpg'
	}
	,{
		'alt':'图片11',
		'src':'image/11_b.jpg',
		'smallSrc':'image/11_s.jpg'
	}
	,{
		'alt':'图片12',
		'src':'image/12_b.jpg',
		'smallSrc':'image/12_s.jpg'
	}
	,{
		'alt':'图片13',
		'src':'image/13_b.jpg',
		'smallSrc':'image/13_s.jpg'
	}
	,{
		'alt':'图片14',
		'src':'image/14_b.jpg',
		'smallSrc':'image/14_s.jpg'
	}
	,{
		'alt':'图片15',
		'src':'image/15_b.jpg',
		'smallSrc':'image/15_s.jpg'
	}
	,{
		'alt':'图片16',
		'src':'image/16_b.jpg',
		'smallSrc':'image/16_s.jpg'
	}
	,{
		'alt':'图片17',
		'src':'image/17_b.jpg',
		'smallSrc':'image/17_s.jpg'
	}
]
//大图图片信息
function img_info(i){
	var alt=img[i].alt,
		src=img[i].src,
		$main=$('#detailImg-box');
	$main.find('a').attr({'class':'detailImg_'+(i+1)});
	$main.find('img').attr({'alt':alt,'src':src});
}
function s_a_r(o,c){
	o.addClass(c).siblings().removeClass(c);
}
function detailImgBox_click(cur){
	console.log(cur);
	clocks[cur]();
	$("#switch").click();
}
//大图左右点击
function detailImg_click($pn,i,len){
	i=i%len;
	if(i<0){
		i=len+i;
	}
	img_info(i);
	var imgCur=$('.smallImg_'+(i+1));
	if(!imgCur.html()){
		$pn.click();
	}
	s_a_r($('.smallImg_'+(i+1)),'cur');
	//小图选中
}
//小图左右点击
function smallImg_click(a,_a,len,i){
	_a=a;
	_a=a%len;
	if(_a<0){
		_a+=len;
	}
	c=_a==i?'cur':'';
	s_html(_a,c);
}
function s_html(_a,c){
	return h='<li class=\"smallImg_'+(_a+1)+' '+c+'\"><a><img alt=\"'+img[_a].alt+'\" src=\"'+img[_a].smallSrc+'\"></a></li>';
}