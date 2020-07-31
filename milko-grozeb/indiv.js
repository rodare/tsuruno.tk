function prueba1 {
    if (console.log==="Poland")countryCity = document.getElementById("countryCity").innerHTML = input= "POLAND";

}


function countryCity()
{
var a= document.getElementById("input").value;
    if(a==="POLAND"){
var arr=["select city", "Kraków", "Poznan"];
    }
    else if(a==="CHILE"){
var arr=["select city", "Santiago","La_Serena"];
    }
var string="";
 
    for(i=0;i<arr.length;i++){
        string=string+"<option value="+arr[i]+">"+arr[i]+"</option>";
    }
    document.getElementById("output").innerHTML=string;
}

function cityMember(){
var a= document.getElementById("output").value;
if(a==="Kraków"){
var arr=["select member","Milko-Grozeb", "Rodrigo-Arenas", "Bacho-Chubinidze", "Magda-Grzesiak"];
}
else if(a==="Poznan"){
var arr=["Kasia","Eduardo","Lorena"];
}
else if(a==="Santiago"){
var arr=["select member", "Magdalena-Carrasco","Diego"];
}
else if(a==="La_Serena"){
var arr=["select member", "Ignacio", "Pancho", "Halszka", "Max", "Esteban"];
}
else
var string="";

for(i=0;i<arr.length;i++){
string=string+"<option value="+arr[i]+">"+arr[i]+"</option>";
}
document.getElementById("output2").innerHTML=string;

}

function memberRedirect(){
var a= document.getElementById("output2").value;
if(a==="Rodrigo-Arenas"){

location.replace("/../../rodrigo-arenas")

}
else if(a==="Milko-Grozeb"){

location.replace("/../../milko-grozeb")

}
else if(a==="Bacho-Chubinidze"){

location.replace("/../../bacho-chubinidze")

}

else 
var string="";

for(i=0;i<arr.length;i++){
string=string+"<option value="+arr[i]+">"+arr[i]+"</option>";
}
document.getElementById("output2").innerHTML=string;

}












// let countryCity = document.getElementById("countryCity").innerHTML = input= "POLAND";
// var cityMember = document.getElementById("cityMember").innerHTML = output="Kraków";
// var memberName = document.getElementById("memberName").innerHTML = output2= "Milko Grozeb";



// function countryCity()
// {
// var a= document.getElementById("input").value;
//     if(a==="POLAND"){
// var arr=["select city", "Kraków", "Poznan"];
//     }
//     else if(a==="CHILE"){
// var arr=["select city", "Santiago","La_Serena"];
//     }
// var string="";
 
//     for(i=0;i<arr.length;i++){
//         string=string+"<option value="+arr[i]+">"+arr[i]+"</option>";
//     }
//     document.getElementById("output").innerHTML=string;
// }

// function cityMember(){
// var a= document.getElementById("output").value;
// if(a==="Kraków"){
// var arr=["select member","Milko-Grozeb", "Rodrigo-Arenas", "Bacho-Chubinidze", "Magda-Grzesiak"];
// }
// else if(a==="Poznan"){
// var arr=["Kasia","Eduardo","Lorena"];
// }
// else if(a==="Santiago"){
// var arr=["select member", "Magdalena-Carrasco","Diego"];
// }
// else if(a==="La_Serena"){
// var arr=["select member", "Ignacio", "Pancho", "Halszka", "Max", "Esteban"];
// }
// else
// var string="";

// for(i=0;i<arr.length;i++){
// string=string+"<option value="+arr[i]+">"+arr[i]+"</option>";
// }
// document.getElementById("output2").innerHTML=string;

// }

// function memberRedirect(){
// var a= document.getElementById("output2").value;
// if(a==="Rodrigo-Arenas"){

// location.replace("/../../rodrigo-arenas")

// }
// else if(a==="Milko-Grozeb"){

// location.replace("/../../milko-grozeb")

// }
// else if(a==="Bacho-Chubinidze"){

// location.replace("/../../bacho-chubinidze")

// }

// else 
// var string="";

// for(i=0;i<arr.length;i++){
// string=string+"<option value="+arr[i]+">"+arr[i]+"</option>";
// }
// document.getElementById("output2").innerHTML=string;

// }


// function writeName(){
//   var b=document.getElementById("input3").value;
//   document.getElementById("output3").innerHTML=a;
// }

//   var arr1=["Maharashtra","Delhi"]
//   var string="";
             
//   for(i=0;i<arr1.length;i++){ // loop que cuenta los elementos del array y evalúa si 

//       string+"<option value="+arr[i]+">"+arr[i]+"</option>"; // string = casillero vacío
//   }
//   document.getElementById("output").innerHTML=document.write("Bye");



//   if (a === 'POLAND') 
//       let arr=['Kraków', 'Poznan'];
//     else if (i === 'CHILE')
//       let arr=['La Serena', 'Santiago'];
    
//     document.write(i+"<br>");
//     document.write(message+i+"<br>");
//   }  
//   let string='';

// function showMembers2(){
//   if (document.getElementById('input').value==='POLAND')
//   document.getElementById('output').innerHTML=polishMembers;
//   else if (document.getElementById('input').value==='La Serena')
//   document.getElementById('output').innerHTML=chileanMembers;
// }