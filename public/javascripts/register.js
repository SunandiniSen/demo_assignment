<script>
function reg(){
	var x;
	var data="";
	var length=document.getElementById("registration_form").elements.length;
	for (var i = 0; i < length ; i++) {
		x[i] = document.getElementById("registration_form").elements[i].value;
		data=data + document.getElementById("registration_form").elements[i].value +" ";
	}
	//console.log(x);
	document.getElementById("data").inenrHTML = x;
	document.getElementById("data").inenrHTML = data;
}
</script>