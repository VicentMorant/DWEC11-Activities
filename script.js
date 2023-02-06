var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

let arrayRallas = [];

let posicion = 10;

for(let i=0; i<10; i++){
    ctx.beginPath();
    ctx.fillStyle = "grey";
    ctx.fillRect( posicion*i, posicion, 5, 50);
    ctx.fill();    
}

function animar (){
    let cont = 0;
    let intervalo = setInterval(() => {

        if(cont < 10){
            ctx.clearRect(0, 0, width, height);
            for(let i = 0; i<10; i++){
                if(cont == i){
                    ctx.beginPath();
                    ctx.fillStyle = "black";
                    ctx.fillRect( posicion*i, posicion, 5, 50);
                    ctx.fill();        
                }else{
                    ctx.beginPath();
                    ctx.fillStyle = "grey";
                    ctx.fillRect( posicion*i, posicion, 5, 50);
                    ctx.fill();        
                }        
            }
            cont++;
        }else{
            clearInterval(intervalo);
            requestAnimationFrame(animar);    
        }            
    }, 200);    
    //requestAnimationFrame(animar);
}
animar();
