
//Limpiar campos
const lim = ()=>{
   document.getElementById("usuariotxt").value ="";
   document.getElementById("contraseñatxt").value="";
}

//Buscar archivo jason
const adds = () =>{
    
   let username = document.getElementById("usuariotxt").value;
   let password = document.getElementById("contraseñatxt").value;

   fetch("logi.json")
      .then(response => response.json())
      .then(data => {
         let user = data.find(user => user.username === username && user.password === password);
        if (user) {
          location.href ="html/admin.html";
          alert("Bienvenido Administrador");
        } else {
          alert("Usuario o contraseña incorrectos");
        }
      })
      .catch(error => console.error("Error al cargar los usuarios", error));
      console.log("Usuario o contraseña incorrectos");
};

 


