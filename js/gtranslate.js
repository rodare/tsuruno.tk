  function googleTranslateElementInit2() {new google.translate.TranslateElement({pageLanguage: 'es',autoDisplay: false}, 'google_translate_element2');}
  /* <![CDATA[ */
  eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('6 7(a,b){n{4(2.9){3 c=2.9("o");c.p(b,f,f);a.q(c)}g{3 c=2.r();a.s(\'t\'+b,c)}}u(e){}}6 h(a){4(a.8)a=a.8;4(a==\'\')v;3 b=a.w(\'|\')[1];3 c;3 d=2.x(\'y\');z(3 i=0;i<d.5;i++)4(d[i].A==\'B-C-D\')c=d[i];4(2.j(\'k\')==E||2.j(\'k\').l.5==0||c.5==0||c.l.5==0){F(6(){h(a)},G)}g{c.8=b;7(c,\'m\');7(c,\'m\')}}',43,43,'||document|var|if|length|function|GTranslateFireEvent|value|createEvent||||||true|else|doGTranslate||getElementById|google_translate_element2|innerHTML|change|try|HTMLEvents|initEvent|dispatchEvent|createEventObject|fireEvent|on|catch|return|split|getElementsByTagName|select|for|className|goog|te|combo|null|setTimeout|500'.split('|'),0,{}))
  /* ]]> */
  function random_function()
            {
            var a= document.getElementById("input").value;
                if(a==="INDIA"){
            var arr=["Maharashtra","Delhi"];
                }
                else if(a==="USA"){
            var arr=["Washington","Texas","New York"];
                }
           var string="";
             
                for(i=0;i<arr.length;i++){
                    string=string+"<option value="+arr[i]+">"+arr[i]+"</option>";
                }
                document.getElementById("output").innerHTML=string;
            }

function random_function1(){
  var a= document.getElementById("output").value;
    if(a==="Delhi"){
  var arr=["select member","Milko", "Rod"];
    }
    else if(a==="Maharashtra"){
  var arr=["Javier","Pepe","Lorena"];
          }
    else
  var string="";

  for(i=0;i<arr.length;i++){
    string=string+"<option value="+arr[i]+">"+arr[i]+"</option>";
}
document.getElementById("output2").innerHTML=string;

}

function random_function2(){
  var a= document.getElementById("output2").value;
    if(a==="Rod"){
      document.write("Cool guy");
    }
    else if(a==="Milko"){
     
        location.replace("milko")
  
    }
    else 
      document.write("No one is cool");
}


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