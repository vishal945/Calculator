let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;

        if(buttonText == 'x'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
            document.getElementById("display").value = null;
        }
        
        else if(buttonText == 'AC'){
            screenValue = "";
            screen.value = screenValue;
            document.getElementById("display").value = null;
        }
        else if(buttonText == '='){
           if(screen.value != ""){
            screen.value = eval(screen.value);
           }
           buttons.addEventListener('click',"");
            
        }
        else if(buttonText == 'DEL'){
            screen.value = screen.value.slice(0,-1);
            document.getElementById("display").value = null;
        }
        else if(buttonText == 'sin'){
            var x = screen.value;
            x = x * Math.PI / 180;
            screen.value = Math.sin(x);
            screenValue = screen.value;
            document.getElementById("display").value = null;
        }
        else if(buttonText == 'cos'){
            var x = screen.value;
            x = x * Math.PI / 180;
            screen.value = Math.cos(x);
            screenValue = screen.value;
            document.getElementById("display").value = null;
        }
        else if(buttonText == 'tan'){
            var x = screen.value;
            x = x * Math.PI / 180;
            screen.value = Math.tan(x);
            screenValue = screen.value;
            document.getElementById("display").value = null;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
            document.getElementById("display").value = null;
        }
    })
}

