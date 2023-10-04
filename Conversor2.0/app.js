//const container = document.querySelector("#alert")
//const alertList = contaner.querySelectorAll('#alerta')
//const alerts = [...alertList].map(element => new bootstrap.Alert(element))



let pal = [];
let pala;
let Bitcoins;
let col = 8.77;
let i
let intervalo

     let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcbusd@trade');
     const price = document.querySelector('#stock-price');

     ws.onmessage = (event) => {
     let stockObject = JSON.parse(event.data);
     //price.innerHTML = stockObject.p;
     Bitcoins = stockObject.p
     
     console.log("ejecuta1")
     }


 /*function mostrar(){
     console.log("ejecuta3")
     console.log(Bitcoins + "estee")
     console.log(pala)
 }*/
    
     

 function elimina(){

     
     const element = document.getElementById("temporal");
     element.remove();

     const element2 = document.getElementById("temporal2");
     element2.remove();
 }

 function crea(){
     const para = document.createElement("h2");
     para.setAttribute("id", "temporal");
     para.innerText = "Valr BTC: " + Bitcoins;
     document.body.appendChild(para);

     const para2 = document.createElement("h2");
     para2.setAttribute("id", "temporal2");
     para2.innerText = "Valor Colones: " + col;
     document.body.appendChild(para2);
 }
     
 

 function entra(){
     pal = document.getElementById("entrada").value
     pala = pal
     
 }
 
 intervalo = function espera(){
     if(Bitcoins === undefined){
         i++
         document.getElementById("entrada").disabled = true;
         document.getElementById("boton").disabled = true;
         
     }
     else{
         document.getElementById("entrada").disabled = false;
         document.getElementById("boton").disabled = false;
         clear()
     }
 }

 setInterval(intervalo, 1000)

 function clear(){

     console.log("stop")
     clearInterval(intervalo);
 }
 /*function inicio(){
     //alert("Bienvenid@ al Conversor_app, el precio en vivo del Bitcoin(BTC) se esta cargando en vivo.\n En unos segundos se habilitara el campo de entrada. ")
     //$('.alert').alert()
    
document.ready(function(){
".close".click(function(){
 "#myAlert".alert('close')
 }
)}
)} 
 inicio()*/


 function calculo() {

     if(pala === undefined){
         alert("El monto ingresado no es valido. \n Por favor solo ingrese números enteros")
     }
     else{
         let calculo1 = pala / Bitcoins;

     let calculo2= pala * col;

     console.log("resultado: " + calculo1);
     console.log("resultado: " + calculo2);
     console.log(pala + "pala");
     
     document.getElementById("salida1").value = "Bitcoins: " + calculo1;
     document.getElementById("salida2").value = "Colones: " + calculo2;

     mostrar()
     }
 }