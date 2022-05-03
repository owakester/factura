obtenerDatos();

function obtenerDatos() {

  //Llama a la API que se encuentran en la siguiente URl y asiga una variable
  const url = "https://script.googleusercontent.com/macros/echo?user_content_key=vnHuywflHe_zQofXqN3BUPCJnsdJP3B23mpAdv_0tjJDcKK3KiW2DmPbhppgRug3RtD2yK0QR5HFmYw3ZMXsT16Hut-jaHC9m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNp7Wvz1S9DlOpYU-m7C4Af5uiiWsECooCstuXwhaamhlA1k8_lGmEnjiOFDwZjmmibMYSZXCy_C6ooBgau1i-yuB1F9lqGT7dz9Jw9Md8uu&lib=MFK4xC7y3sT0GDrArtd8YFwhvTfcvbrpA";


  const url1 =
    "https://jsonplaceholder.typicode.com/users";


  fetch(url)
    .then(respuesta => respuesta.json()) //Si encuentra la URl 

    .then(datos => mostrarHTML(datos))

}


function mostrarHTML(datos) {

  {
    for (let i = 0; i < datos.data.length; i++) {
      const identificacion = document.querySelector("#tablaArticulos")
      const nombre = document.querySelector("#tnombre")


// Elementos de json agregados a objeto
      let articulos = {
        Id: datos.data[i].id,
        Producto: datos.data[i].producto,
        Medida: datos.data[i].medida,
        Precio: datos.data[i].precio,
      };

      
      identificacion.innerHTML += `
            <th class="border" id="id${i}"><p> ${articulos.Id} </p></th>
            <th class="border" id="tnombre${i}"><p> ${articulos.Producto} </p></th>
            <th class="border" id="tidprod"><p> ${articulos.Medida} </p></th>
            <th class="border" id="precio${i}"><p> ${articulos.Precio} </p></th>
            <th class="border" <button  onclick="agregar(${i})" id="btnAgregar" type="button" class="btn btn-primary"><ion-icon size="large" name="add-circle-outline"></ion-icon></button></th>
            
            `
           

/*             btnAgregar.addEventListener('click',agregar()
 */ 
    }
  }

}
const carrito = []
/* let prodObjeto={
  nombreProducto:labelNombre
} */
function agregar(i) {

  const identificacion1 = document.querySelector("#factFinal")
 
let labelNombre= document.querySelector("#tnombre"+i).textContent.trim()

let labelPrecio= document.querySelector("#precio"+i).textContent
let labelCantidad= document.querySelector("#cantidad").textContent

 carrito.push(labelNombre) 

let valor=0;



for (let count = 0; count <carrito.length; count++) {
  

if (carrito.includes(carrito[count])) {
  console.log("son iguales")
} else {
  console.log("no son iguales")
}
 
  
}











identificacion1.innerHTML += `
            <th class="border" id="ad${i}" <p> ${labelNombre} </p></th>
            <th class="border" id="precio" <p> ${labelPrecio} </p></th>
            <th class="border" id="precio" <p> ${labelCantidad} </p></th>
            <th <button onclick="quitar(${i})" type="button">  <ion-icon name="trash-outline" size="large"></ion-icon></button></th>
            `
     
           
     
         

     
     
     
     
     
            /*    
           carrito.push(div1)
            console.log(carrito) */

  /*   if (labelNombre==="Cemento") {
      console.log("es igual")
    } else {
      console.log("no es igual")
    }   */     
  }

 function quitar(i){



let div2= document.querySelector("#ad"+i).parentElement

/* console.log(div2)  */
div2.remove()
  }