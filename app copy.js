const url =
  "https://script.googleusercontent.com/macros/echo?user_content_key=vnHuywflHe_zQofXqN3BUPCJnsdJP3B23mpAdv_0tjJDcKK3KiW2DmPbhppgRug3RtD2yK0QR5HFmYw3ZMXsT16Hut-jaHC9m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNp7Wvz1S9DlOpYU-m7C4Af5uiiWsECooCstuXwhaamhlA1k8_lGmEnjiOFDwZjmmibMYSZXCy_C6ooBgau1i-yuB1F9lqGT7dz9Jw9Md8uu&lib=MFK4xC7y3sT0GDrArtd8YFwhvTfcvbrpA";
const url1=

const contenedor = document.querySelector('tbody')
let resultado = ''
const modalArticulos = new bootstrap.Modal(document.getElementById('modalArticulo'))
const formArticulo=document.querySelector('form')

const descripcion = document.querySelector('#descripcion')
const precio = document.querySelector('#precio')
const stock = document.querySelector('#stock')
let opcion =''
btnCrear.addEventListener('click',()=>{
    modalArticulos.show()
    descripcion.value=""
    precio.value=""
    stock.value=""
    opcion="crear"
})

//funcion mostrar los resultados
const mostrar=(articulos)=>{
    articulos.forEach(articulo => {
            resultado += `
                        <tr>
                           
                            <td>${articulo.producto} </td>
                            <td>${articulo.medida} </td>
                            <td>${articulo.precio} </td>
                            <a class="btnEditar btn btn-primary">Editar</a>    <a class="btnBorrar btn btn-primary">Borrar</a>
                        </tr>
                        `
        
        

    })
    contenedor.innerHTML=resultado
}


//procedimiento mostrar registros



fetch(url)
    .then(response=>response.json())
    .then(data=>mostrar(data))
    .catch(error=>console.log(error))