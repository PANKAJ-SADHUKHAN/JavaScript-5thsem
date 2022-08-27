<html>
		<head>
			<title>
				Displaying a text
			</title>
		</head>
		<body>
			<script>
				function smaller()
				{
					var a,b,c;
					a=Number(document.getElementById("num1").value);
					b=Number(document.getElementById("num2").value);
					if(a<b)
						document.getElementById("res").innerHTML="Smaller value is: "+a;
					else
						document.getElementById("res").innerHTML="Smaller value is: "+b;
				}
			</script>
			<table>
				<tr>
					<td><label>First Number:</label></td>
					<td><input type="text" id="num1"><br></td>
				</tr>
				<tr>
					<td><label>Second Number:</label></td>
					<td><input type="text" id="num2"><br></td>
				</tr>
				<tr>
					<td></td>
					<td><input type="button" value="Find Smaller" onclick="smaller()"></td>
				</tr>
			</table>
						
			
			
			
			<p id="res"></p>
		</body>
</html>
