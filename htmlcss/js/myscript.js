function Subnumbers(x,y){
    var z=x-y;
    return z;
}
function Addnumbers(x,y)
{
    var z=x+y;
    return z;
}
function getCalc()
{
var n1= parseFloat(document.getElementById("num1").value);
var n2= parseFloat(document.getElementById("num2").value);

var op= document.getElementById("op").value;

if(op=="Add")
{

var result=Addnumbers(n1,n2);        
}
else if(op=="Sub"){
    var result=Subnumbers(n1,n2);        

}




document.getElementById("result").innerHTML="<b>"+result+"<b>";
}