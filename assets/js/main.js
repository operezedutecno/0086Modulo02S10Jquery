$(document).ready(function(){

    function limpiarErrores() {
        $("#email-help").html("")
        $("#password-help").html("")
        $("#lbl-email").removeClass("text-danger")
        $("#lbl-password").removeClass("text-danger")
    }

    $("#btn-limpiar").click(function(){
        limpiarErrores();
        $("#txt-email").val("")
        $("#txt-password").val("")
        $("#alert-send").addClass("d-none")
    })

    $("#formulario").submit(function(evento) {
        evento.preventDefault();
        limpiarErrores();
        var email = $("#txt-email").val();
        var password = $("#txt-password").val();

        var valido = true;
        if(email == "") {
            valido = false
            $("#email-help").html("Ingresar el correo electrónico")
            $("#lbl-email").addClass("text-danger")
        }

        if(password == "") {
            valido = false
            $("#password-help").html("Ingresar la contraseña")
            $("#lbl-password").addClass("text-danger")
        }

        if(valido) {
            $("#alert-send").removeClass("d-none")
        }
    })

    $("#btn-ampliar").click(function() {
        $("#logo-node").css("width","500px").css("border","0px")
    })

    $("#btn-reducir").click(function() {
        // $("#logo-node").css("width","200px")
        $("#logo-node").css({
            "width":"200px",
            "border":"1px solid #CCC"
        })
    })

});