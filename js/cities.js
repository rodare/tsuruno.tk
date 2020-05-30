function random_function()
            {
                var a=document.getElementById("input").value;
                if(a==="POLAND")
                {
                    var arr=["Select city", "Kraków","Poznan"];
                }
                else if(a==="CHILE")
                {
                    var arr=["Select city","Santiago","La Serena"];
                }
             	
                var string="";
             
                for(i=0;i<arr.length;i++)
                {
                    string=string+"<option value="+arr[i]+">"+arr[i]+"</option>";
                }
                document.getElementById("output").innerHTML=string;
            }