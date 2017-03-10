var text=document.querySelector('textare');
var number=document.querySelector('.number');
function chack(obj){
	var maxvalue=140;
	if(obj.value.length>maxvalue){
		obj.value=obj.value.substring(0,maxvalue);
	}
	var num=maxvalue-obj.value.length;
	number.innerHTML=num;
}