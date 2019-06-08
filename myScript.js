/*
* Programmer : Dr.-Ing. Bader Juma
* Date       : 
* File       :
* Purpose    :
*/

// Gives faces color
var colorFace = ["#08960A", "#CD9834", "#3364FB", "#BC0B00", "#FFFB03", "#FFFDFF"];
var classFace = [".back", ".rightside", ".front", ".leftside", ".top", ".bottom"];

$(document).ready(function(){

for (i=0; i < colorFace.length; i++){ 
   
   $(classFace[i]).css("background-color", colorFace[i]);
 }
 });


// Create and color cell for each face
function myFunction() {
 
  //Define variables and array
  var i, j, temp, matrixDimension, text;
  var arr =[];
  
  // Get the value of the input field with id="numb"
  matrixDimension = document.getElementById("numb").value;

  // If matrixDimension is Not a Number or less than one or greater than 10
  if (isNaN(matrixDimension) || matrixDimension < 1 || matrixDimension > 10) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("demo").innerHTML = text;
   
  // put class and id arribute for each faces cell
  for (j = 0; j < matrixDimension; j++) {
   text = "<tr>";
   for (i = 0; i < matrixDimension; i++) {
     text += "<td class="+"back"+" id="+((j+1)*10+(i+1))+">"+" "+"</td>";}
     text  += "</tr>";
     arr[j] = text;}
    
	// create cells in face (table) choose by id attributes
	document.getElementById("back").innerHTML = arr[0];
    for (j = 1; j < matrixDimension; j++){
     $("#back").append(arr[j]);}

    // put color for each cell j is row and i is cols of matrix first cell is 0,0
   for (j = 0; j < matrixDimension; j++) {
      for (i = 0; i < matrixDimension; i++) {
        temp = (j+1)*10+(i+1);
 /*         if(i==j){
            $("#"+ temp).css("background-color", "#CD9834"); // give brown color for diagonal
             } else if(j==2){
            $("#"+ temp).css("background-color", "#3364FB"); // give blue color for third row
                         }
               else    {
            $("#"+ temp).css("background-color", "#08960A"); // give green color for other cells
                     } */
					 $("#"+ temp).css("background-color", "#08960A"); // give green color for other cells
                                            } 
                                        }
										
                              }