<!DOCTYPE html>
<html>
<head>
<title>Cross word Puzzel</title>
<link rel="stylesheet" href="style.css">

<script type="text/javascript" src="main.js"></script>  

</head>
<body onload="initializeScreen()" id="body_id" style="float:right;background-image: url(witch_bg.jpg);height: 100%;background-position: center;
  background-repeat: no-repeat;
  background-size: cover;">
<div id="leftBox">
<table id="puzzel">

</table>
</div>
<div id="rightBox">
<br>
<table>
	<tr><td><input class="butt" id="clear"  type="submit" value="Clear All" onclick="clearAllClicked()" style="margin-left:50%;background-color:red;border-radius:5px;color:white;"></td>
	<td><input class="butt" id="check"  type="submit" value="Check" onclick="checkClicked()" style="margin-left:90%;background-color:green;border-radius:5px;color:white;"></td>
	<!--<td><input class="butt"  type="submit" value="Solve" onclick="solveClicked()"></td>
	<td><input class="butt"  type="submit" value="Clue" onclick="clueClicked()"></td></tr>-->
</table>
</div>
<table id="hintsTable" style="color:white;">
	<tr>
		<td><h3>Hints:-</h3></td>
	</tr>
</table>

</body>
</html>