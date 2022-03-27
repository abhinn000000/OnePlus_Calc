function display (x)
            {
                document.getElementById("output").innerHTML+=x;
            }
            function result()
            {
            var t=document.getElementById("output").innerHTML;
            r=eval(t);
            document.getElementById("output").innerHTML=r;
          }


