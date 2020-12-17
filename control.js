// Check “usuario y clave” no vacíos y “usuario” incluya arroba. Si ambos campos no se validan 
// correctamente el formulario no debe enviarse y deberá desplegarse ventana indicando motivo 
// por el cual no puede ingresar por ej: “Falta el arroba en el usuario”

function ingresar() {
    // Tomo los valores de usuario y clave del formulario
    usuario = document.getElementById("usuario").value;
    clave = document.getElementById("clave").value;
    // Evalúo si el usuario está en blanco
    if (usuario === ""){
        alert("El usuario no debe estar en blanco");
        return;
        }
    // Evalúo si el usuario contiene arroba
    if (usuario.indexOf('@') === -1){
        alert("Falta el arroba en el usuario");
        return;
        }
    // Evalúo si la clave está en blanco
    if ( clave === ""){ 
        alert("La clave no debe estar en blanco");
        return;
        }
    // Si llegó hasta aquí, todo es correcto y envío el formulario
    alert("Todo correcto");
    document.getElementById("form1").action = "/ingresa.php";
    document.getElementById("form1").submit();
}