function confirmarCierreSesion() {
    let respuesta = confirm("¿Estás seguro de cerrar sesión?");
    if (respuesta) {
      window.location.replace("index.html"); 
    }
  }