//window. onload =function(){
//	
//}
//购物车元素div
var div_right=document.querySelector(".topbar-container>div:nth-child(2)");
var showcar=document.querySelector(".topbar-showcar")
function buycarClick(e){
	if(e.type=="mouseover"){
		showcar.style.height="100px"
		showcar.style.transition="height 0.4s"
	}else{
		showcar.style.height="0"
	}
}
div_right.onmouseover=buycarClick;
div_right.onmouseout=buycarClick;


var img=document.querySelector(".slide-img");
img.style.transition="background-image 2s ease-in-out";
var i=1;
setInterval(function(){
	if(i==4){
		i=1;
	}
	img.style.backgroundImage="url(img/"+i+".jpg)";
	i++;
},3000);
//实现鼠标放在li标签上变色且 出现右边的额盒子

var li=document.querySelector(".lia");
function liClick(e){
	
}
