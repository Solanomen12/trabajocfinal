const lista=[]

const agregarproductos =()=>{
let nombre = document.getElementById("nombre")
let cantidad = document.getElementById("cantidad")
    let producto={
        nombre:nombre.value,
        cantidad:cantidad.value,
        estado:`<input type="checkbox">`
    }
    lista.push(producto)
    nombre.value=""
    cantidad.value=""
  mostrarproductos()
 
 }
 const mostrarproductos =() =>{
     let salida = document.getElementById("salida")
     salida.innerHTML=""
     lista.map((producto,id)=>{
     salida.innerHTML+=`
     <tr>
     <th>${id}</th>
      <th>${producto.nombre}</th>
     <th>${producto.cantidad}</th>
   <th>${producto.estado}</th>
             
      </tr>
     `
     })
 }