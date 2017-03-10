var dropDown=document.querySelector('.drop-down');
var link=document.querySelector('.link');
var display=document.querySelector('.display');
var flag=true;

link.onclick=function(){
	flag=!flag;
	if(!flag){		
		dropDown.style.height='auto';
		display.style.display='block';
	}else{
		dropDown.style.height='0';
		display.style.display='none';
	}
}
display.onclick=function(){
	dropDown.style.height='0';
	display.style.display='none';
}
var big=document.querySelector('.big');
var navLeft=document.querySelectorAll('.nav-left');
var web=document.querySelectorAll('.web');
for(var i=0;i<navLeft.length;i++){
	web[i].style.color='#ccc';
}
web[0].style.color='#000';
for(var i=0;i<navLeft.length;i++){
	navLeft[i].index=i;
	navLeft[i].onclick=function(){
		for(var j=0;j<navLeft.length;j++){
			web[j].style.color='#ccc';
		}
		web[this.index].style.color='#000';
		big.style.transform='translateX(-'+this.index*33+'%)';
	}
}