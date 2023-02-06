            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext('2d');
            // obtenemos las dimensiones del canvas
            var width = canvas.width = window.innerWidth;
            var height = canvas.height = window.innerHeight;
                       
            let arrayBolas = [];

            function Bolas (rad, col, posX, posY, velX, velY){                
                this.radio = rad;
                this.color = col;
                this.posicionX = posX;
                this.posicionY = posY;

                this.velocidadX = velX;
                this.velocidadY = velY;   
                                
                this.crearBolas = function () {                               
                    //                         
                    ctx.beginPath();
                    ctx.fillStyle = this.color;
                    ctx.arc(this.posicionX, this.posicionY, this.radio, 0, 2*Math.PI,true);
                    ctx.fill();  
                    this.velocidad();
                    
                }

                this.velocidad =  () => {
                    this.posicionX -= this.velocidadX
                    this.posicionY += this.velocidadY
                    
                    if((this.posicionX)<0 + this.radio){
                        this.velocidadX = -this.velocidadX;
                    }else if((this.posicionX) > width-this.radio){
                        this.velocidadX = -this.velocidadX
                    }

                    if(this.posicionY < 0+this.radio){
                        this.velocidadY = -this.velocidadY;
                    }else if(this.posicionY > (height - this.radio)){
                        this.velocidadY = -this.velocidadY
                    }
                    
                }
            }

            function colorRandom(){
                var simbolos, color;
                simbolos = "0123456789ABCDEF";
                color = "#";
            
                for(let i = 0; i < 6; i++){
                    color = color + simbolos[Math.floor(Math.random() * 16)];                    
                }
                return color;
            }

            for(let i=0; i<50; i++){                    
                let radio = parseInt(Math.random() * (50 - 25) + 25);
                let color = colorRandom();
                let posX = parseInt(Math.random() * ((width-radio) - radio) + radio);
                let posY = parseInt(Math.random() * ((height-radio) - radio) + radio);
                let velX = parseInt(Math.random() * (10 - (-10)) + (-10));
                let velY = parseInt(Math.random() * (10 - (-10)) + (-10));
                arrayBolas[i]= new Bolas(radio, color, posX, posY, velX, velY);                                                                                                         
            }
            //console.log(arrayBolas[1]);
            

            function animar() {                
                ctx.clearRect(0,0, width, height); 
                for(let i =0; i<arrayBolas.length; i++){
                    arrayBolas[i].crearBolas();
                }                                                           
                
                requestAnimationFrame(animar);
            }
            animar();