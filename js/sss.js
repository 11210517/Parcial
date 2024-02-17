const datosformularios1= ()=>{
const form = document.getElementById("formulario1");
event.preventDefault();
let transaciondedatos = new FormData(form);
let tablaformulario1 = document.getElementById("tablaformulario1")
let newtablaformulario1Row = tablaformulario1.insertRow(-1);

let newtablaformulario1cell = newtablaformulario1Row.insertCell(0)
newtablaformulario1cell.textContent = transaciondedatos.get("nombre")

newtablaformulario1cell = newtablaformulario1Row.insertCell(1)
newtablaformulario1cell.textContent = transaciondedatos.get("apellido")

newtablaformulario1cell = newtablaformulario1Row.insertCell(2)
newtablaformulario1cell.textContent = transaciondedatos.get("año")

newtablaformulario1cell = newtablaformulario1Row.insertCell(3)
newtablaformulario1cell.textContent = transaciondedatos.get("ID")
}