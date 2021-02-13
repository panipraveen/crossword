//Globals
var check_red = 0;
var tmp = 0;
var tmp1 = '';
var clr1 = 0;
var currentTextInput;
var puzzelArrayData;
//Loads the Crossword
function initializeScreen(){
	var puzzelTable = document.getElementById("puzzel");
	puzzelArrayData = preparePuzzelArray();
	for ( var i = 0; i < puzzelArrayData.length ; i++ ) {
		var row = puzzelTable.insertRow(-1);
		var rowData = puzzelArrayData[i];
		for(var j = 0 ; j < rowData.length ; j++){
			var cell = row.insertCell(-1);
			if(rowData[j] != 0){
				var txtID = String('txt' + '_' + i + '_' + j);
				cell.innerHTML = '<input type="text" class="inputBox" maxlength="1" style="text-transform: lowercase" ' + 'id="' + txtID + '" onfocus="textInputFocus(' + "'" + txtID + "'"+ ')">';
			}else{
				cell.style.backgroundColor  = "black";
				cell.style.opacity  = "0";
			}
		}
	}
	addHint();
	if(clr1!=1){
	var table_1 = document.getElementById("hintsTable");
		switch(tmp){
			case 0:
				var row = table_1.insertRow(1);
				var cell1 = row.insertCell(0);
				cell1.innerHTML = "1. Karnataka capital";
				var row = table_1.insertRow(2);
				var cell1 = row.insertCell(0);
				cell1.innerHTML = "2. Telegana capital";
				var row = table_1.insertRow(3);
				var cell1 = row.insertCell(0);
				cell1.innerHTML = "3. Indian capital";
				var row = table_1.insertRow(4);
				var cell1 = row.insertCell(0);
				cell1.innerHTML = "4. Maharashtra capital";
				break;
			case 1:
				var row = table_1.insertRow(1);
				var cell1 = row.insertCell(0);
				cell1.innerHTML = "1. State of Dispure";
				var row = table_1.insertRow(2);
				var cell1 = row.insertCell(0);
				cell1.innerHTML = "2. State of Gangtok";
				var row = table_1.insertRow(3);
				var cell1 = row.insertCell(0);
				cell1.innerHTML = "3. State of Chennai";
				break;
			case 2:
				var row = table_1.insertRow(1);
				var cell1 = row.insertCell(0);
				cell1.innerHTML = "1. Capital of Tamil Nadu";
				var row = table_1.insertRow(2);
				var cell1 = row.insertCell(0);
				cell1.innerHTML = "2. State of Imapal";
				var row = table_1.insertRow(3);
				var cell1 = row.insertCell(0);
				cell1.innerHTML = "3. Another name for Poona";
				break;
			case 3:
				var row = table_1.insertRow(1);
				var cell1 = row.insertCell(0);
				cell1.innerHTML = "1. state of Thiruvananthapuram";
				var row = table_1.insertRow(2);
				var cell1 = row.insertCell(0);
				cell1.innerHTML = "2. State of Bengaluru";
				break;
			case 4:
				var row = table_1.insertRow(1);
				var cell1 = row.insertCell(0);
				cell1.innerHTML = "1. capital of GOA";
				var row = table_1.insertRow(2);
				var cell1 = row.insertCell(0);
				cell1.innerHTML = "2. Capital of Bihar";
				var row = table_1.insertRow(3);
				var cell1 = row.insertCell(0);
				cell1.innerHTML = "3. Capital of Maharashtra";
				break;
			case 5:
				var row = table_1.insertRow(1);
				var cell1 = row.insertCell(0);
				cell1.innerHTML = "1. capital of Madhya Pradesh";
				var row = table_1.insertRow(2);
				var cell1 = row.insertCell(0);
				cell1.innerHTML = "2. State of Panaji";
				break;
			case 6:
				var row = table_1.insertRow(1);
				var cell1 = row.insertCell(0);
				cell1.innerHTML = "1. State of Chandigarh";
				var row = table_1.insertRow(2);
				var cell1 = row.insertCell(0);
				cell1.innerHTML = "2. Capital of Bihar";
				var row = table_1.insertRow(3);
				var cell1 = row.insertCell(0);
				cell1.innerHTML = "3. State of Dispur";
				break;
			case 7:
				var row = table_1.insertRow(1);
				var cell1 = row.insertCell(0);
				cell1.innerHTML = "1. State of Chandigarh";
				var row = table_1.insertRow(2);
				var cell1 = row.insertCell(0);
				cell1.innerHTML = "2. Capital of Chhattisgarh";
				break;
			case 8:
				var row = table_1.insertRow(1);
				var cell1 = row.insertCell(0);
				cell1.innerHTML = "1. State of Patna";
				var row = table_1.insertRow(2);
				var cell1 = row.insertCell(0);
				cell1.innerHTML = "2. State of Dispure";
				var row = table_1.insertRow(3);
				var cell1 = row.insertCell(0);
				cell1.innerHTML = "3. State of Chhattisgarh";
				break;
			case 9:
				var row = table_1.insertRow(1);
				var cell1 = row.insertCell(0);
				cell1.innerHTML = "1. Capital of Maharashtra";
				var row = table_1.insertRow(2);
				var cell1 = row.insertCell(0);
				cell1.innerHTML = "2. Capital of Uttar Pradesh";
		}
	}
}
//Adds the hint numbers
function addHint(){
	switch(tmp){
		case 0:
			document.getElementById("txt_2_6").placeholder = "1";
			document.getElementById("txt_3_1").placeholder = "2";
			document.getElementById("txt_3_9").placeholder = "3";
			document.getElementById("txt_6_2").placeholder = "4";
			break;
		case 1:
			document.getElementById("txt_3_2").placeholder = "1";
			document.getElementById("txt_5_2").placeholder = "2";
			document.getElementById("txt_7_0").placeholder = "3";
			break;
		case 2:
			document.getElementById("txt_2_3").placeholder = "1";
			document.getElementById("txt_5_1").placeholder = "2";
			document.getElementById("txt_5_5").placeholder = "3";
			break;
		case 3:
			document.getElementById("txt_0_2").placeholder = "1,2";
			break;
		case 4:
			document.getElementById("txt_6_3").placeholder = "1,2";
			document.getElementById("txt_2_7").placeholder = "3";
			break;
		case 5:
			document.getElementById("txt_3_4").placeholder = "1";
			document.getElementById("txt_5_3").placeholder = "2";
			break;
		case 6:
			document.getElementById("txt_1_1").placeholder = "1,2";
			document.getElementById("txt_5_1").placeholder = "3";
			break;
		case 7:
			document.getElementById("txt_1_2").placeholder = "1";
			document.getElementById("txt_1_4").placeholder = "2";
			break;
		case 8:
			document.getElementById("txt_1_8").placeholder = "1";
			document.getElementById("txt_5_3").placeholder = "2";
			document.getElementById("txt_3_4").placeholder = "3";
			break;
		case 9:
			document.getElementById("txt_4_2").placeholder = "1";
			document.getElementById("txt_5_1").placeholder = "2";
	}
}
//Stores ID of the selected cell into currentTextInput
function textInputFocus(txtID123){
	currentTextInput = txtID123;
}
//Returns Array
function preparePuzzelArray(){
	tmp=Math.floor(Math.random() * 10);
	//alert(tmp);
	if(tmp1!=''){
		tmp = tmp1;
		tmp1='';
	}
	switch(tmp){
		case 0:
			var items = [
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
				[0, 0, 0, 0, 0, 0, 'b', 0, 0, 0],
				[0, 'h', 'y', 'd', 'e', 'r', 'a', 'b', 'a', 'd'],
				[0, 0, 0, 0, 0, 0, 'n', 0, 0, 'e'],
				[0, 0, 0, 0, 0, 0, 'g', 0, 0, 'l'],
				[0, 0, 'm', 'u', 'm', 'b', 'a', 'i', 0, 'h'],
				[0, 0, 0, 0, 0, 0, 'l', 0, 0, 'i'],
				[0, 0, 0, 0, 0, 0, 'o', 0, 0, 0],
				[0, 0, 0, 0, 0, 0,'r', 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 'e', 0, 0, 0]
			];
			break;
		case 1:
			var items = [
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 'a', 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 's', 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 's', 'i', 'k', 'k', 'i', 'm', 0, 0],
				[0, 0, 'a', 0, 0, 0, 0, 0, 0, 0],
				['t', 'a', 'm', 'i', 'l', 'n', 'a', 'd', 'u', 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			];
			break;
		case 2:
			var items = [
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 'c', 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 'h', 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 'e', 0, 0, 0, 0, 0, 0],
				[0, 'm', 'a', 'n', 'i', 'p', 'u', 'r', 0, 0],
				[0, 0, 0, 'n', 0, 'u', 0, 0, 0, 0],
				[0, 0, 0, 'a', 0, 'n', 0, 0, 0, 0],
				[0, 0, 0, 'i', 0, 'e', 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			];
			break;
		case 3:
			var items = [
				[0, 0, 'k', 'e', 'r', 'a', 'l', 'a', 0, 0],
				[0, 0, 'a', 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 'r', 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 'n', 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 'a', 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 't', 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 'a', 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 'k', 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 'a', 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			];
			break;
		case 4:
			var items = [
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 'i', 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 'j', 0, 0, 0, 'm', 0, 0],
				[0, 0, 0, 'a', 0, 0, 0, 'u', 0, 0],
				[0, 0, 0, 'n', 0, 0, 0, 'm', 0, 0],
				[0, 0, 0, 'a', 0, 0, 0, 'b', 0, 0],
				[0, 0, 0, 'p', 'a', 't', 'n', 'a', 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 'i', 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			];
			break;
		case 5:
			var items = [
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 'b', 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 'h', 0, 0, 0, 0, 0],
				[0, 0, 0, 'g', 'o', 'a', 0, 0, 0, 0],
				[0, 0, 0, 0, 'p', 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 'a', 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 'l', 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			];
			break;
		case 6:
			var items = [
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 'p', 'u', 'n', 'j', 'a', 'b', 0, 0, 0],
				[0, 'a', 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 't', 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 'n', 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 'a', 's', 's', 'a', 'm', 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			];
			break;
		case 7:
			var items = [
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 'h', 'a', 'r', 'y', 'a', 'n', 'a', 0],
				[0, 0, 0, 0, 'a', 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 'i', 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 'p', 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 'u', 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 'r', 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			];
			break;
		case 8:
			var items = [
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 'b', 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 'i', 0],
				[0, 0, 0, 0, 'r', 0, 0, 0, 'h', 0],
				[0, 0, 0, 0, 'a', 0, 0, 0, 'a', 0],
				[0, 0, 0, 'd', 'i', 's', 'p', 'u', 'r', 0],
				[0, 0, 0, 0, 'p', 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 'u', 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 'r', 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			];
			break;
		case 9:
			var items = [
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 'l', 0, 0, 0, 0, 0, 0, 0],
				[0, 'm', 'u', 'm', 'b', 'a', 'i', 0, 0, 0],
				[0, 0, 'c', 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 'k', 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 'n', 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 'o', 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 'w', 0, 0, 0, 0, 0, 0, 0]
			];
	}

return items;
}
//Clear All Button
function clearAllClicked(){
	currentTextInput = '';
	var puzzelTable = document.getElementById("puzzel");
	puzzelTable.innerHTML = '';
	tmp1 = tmp;
	clr1 = 1;
    initializeScreen();
}
//Check button
function checkClicked(){
	for ( var i = 0; i < puzzelArrayData.length ; i++ ) {
		var rowData = puzzelArrayData[i];
		for(var j = 0 ; j < rowData.length ; j++){
			if(rowData[j] != 0){
				var selectedInputTextElement = document.getElementById('txt' + '_' + i + '_' + j);
				if(selectedInputTextElement.value != puzzelArrayData[i][j]){
					selectedInputTextElement.style.backgroundColor = 'red';
					check_red = 1;
				}else{
					selectedInputTextElement.style.backgroundColor = 'green';
				}
			}
		}
	}
	if(check_red == 1){
		alert("Puzzle Not Completed!"+check_red);
		check_red = 0;
	}
	else{
		alert("Puzzle Completed Successfully(^_^)");
		window.location.href = "index.php";
	}
}