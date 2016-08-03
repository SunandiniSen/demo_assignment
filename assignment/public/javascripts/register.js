function reg(){
	var x=[];
	var data="";
	var length=document.getElementById("registration_form").elements.length;
	var xmlhttpreq = new XMLHttpRequest();
	for (var i = 0; i < length ; i++) {
		x[i] = document.getElementById("registration_form").elements[i].value;
		data=data + document.getElementById("registration_form").elements[i].value +" ";
	}
	var firstname = x[0];
	var lastname = x[1];
	var email = x[2];
	var pwd = x[3];
	var phn =x[4];
	//console.log(x);
	//document.getElementById("data").innerHTML = x.toString();
	//document.getElementById("data").innerHTML = data;
	console.log("x :" +x.toString());
	console.log("string :" +data);
	
	/*xmlhttpreq.onreadystatechange=function(){

		if(xmlhttpreq.readyState==4 && xmlhttpreq.status==200){
			console.log("Azax return");
			console.log(xmlhttpreq.responseText);
			//alert(xmlhttpreq.responseText);
			window.location="http://localhost:3000/ajaxcall.html";
		} 
	};*/
	
	xmlhttpreq.open("POST", "http://localhost:3000/server", true);
	xmlhttpreq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttpreq.send("firstName="+firstname+"&lastName="+lastname+"&email="+email+"&password="+pwd+"&phn="+phn);
	
}
