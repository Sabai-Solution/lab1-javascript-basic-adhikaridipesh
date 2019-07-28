function ValidateEmptyValues() {
	var txtEmail =Document.getElementById("txtEmail");
	var txtUn =document.getElementById("txtUn");
	var txtPassword = document.getElementById("txtPassword");
	 var appendError ="";
	 if (txtEmail=="") {appendError="email"}
	 	 if (txtUn=="") {
	 	 	if (appendError!="") {
	 	 		appendError=appendError+"and";
	 	 	}
	 	 	appendError=appendError+"un";
	 	 }

	 	  if (txtPassword=="") {
	 	 	if (appendError!="") {
	 	 		appendError=appendError+"and";
	 	 	}
	 	 	appendError=appendError+"password";
	 	 }

	 	 	if (appendError!="") {
	 	 		appendError=appendError+"can not be empty";
	 	 		alert(appendError);
	 	 		return false;
	 	 	}
	 	 	else{
	 	 		return true;
	 	 	}
	 	 	
	 	 
}
