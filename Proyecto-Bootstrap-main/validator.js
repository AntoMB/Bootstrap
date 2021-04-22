$('document').ready(function(){
    // Validación para campos de texto exclusivo, sin caracteres especiales ni números
    var nameregex = /^[a-zA-Z ]+$/;
    
    $.validator.addMethod("validname", function( value, element ) {
        return this.optional( element ) || nameregex.test( value );
    });
    
    // Máscara para validación de Email
    var eregex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    $.validator.addMethod("validemail", function( value, element ) {
        return this.optional( element ) || eregex.test( value );
    });

    $("#formulario-contacto").validate({
        rules:
        {
            nombre: {
                required: true,
                minlength: 8,
                validname: true
            },
            email: {
                required: true,
                validemail: true
            },
            mensaje: {
                required: true,
                minlength: 20,
                maxlength: 300
            },
            contraseña: {
                required: true,
                minlength: 8,
                validname: true
            },
            aceptolopd: {
                required: true,
            }
            
        },
        messages:
        {
            nombre: {
                required: "Tu Nombre y Apellidos son Importantes",
                minlength: "Tu Nombre es demasiado corto",
                validname: "El nombre no debe contener números o caracteres especiales"
            },
            contraseña: {
                required: "La contraseña es obligatoria",
                minlength: "Tu contraseña es demasiado corta",
            },
            email: {
                required: "Por Favor, introduzca una dirección de correo",
                validemail: "Introduzca correctamente su correo"
            },
            mensaje: {
                required: "Escribe un mensaje",
                minlength: "Tu Mensaje es demasiado corto",
                maxlength: "Tu Mensaje supera los 300 caracteres"
            },
            aceptolopd:
            {
                required: "Debe aceptar la política de protección de datos.",
            }
        },
        errorPlacement : function(error, element) {
            $(element).closest('.form-group').find('.help-block').html(error.html());
        },
        highlight : function(element) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
            $(element).closest('.form-group').find('.help-block').html('');
        },
		submitHandler: function(form) {
			form.action="pagina que envia el correo.php";
			form.submit();
			alert('ok');
		}
	});
})