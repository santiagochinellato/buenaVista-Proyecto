$(function () {
  $(
    "#contactForm input,#contactForm textarea,#contactForm button"
  ).jqBootstrapValidation({
    preventSubmit: true,
    submitError: function ($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function ($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var name = $("input#name").val();
      console.log(name);
      var email = $("input#email").val();
      var phone = $("input#phone").val();
      var message = $("textarea#message").val();
      // var company = $("input#empresa").val();
      // var edificio = $("#selecthero").val();
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(" ") >= 0) {
        firstName = name.split(" ").slice(0, -1).join(" ");
      }
      $this = $("#sendMessageButton");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      $.ajax({
        url: "./contact_me.php", // Make sure this points to the contact_me.php file on your server
        type: "POST",
        data: {
          name: name,
          phone: phone,
          email: email,
          message: message,
        },
        cache: false,
        success: function (data) {
          // Success message
          $("#success").html("<div class='alert alert-success'>");
          $("#success > .alert-success")
            .html(
              "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
            )
            .append("</button>");
          $("#success > .alert-success").append(
            "<strong>Se envío su mensaje con exito! </strong>"
          );
          $("#success > .alert-success").append("</div>");
          //clear all fields
          $("#contactForm").trigger("reset");
          console.log("redirecting...");
          location.href = "/villa-carlos-paz/gracias";
        },
        error: function (error) {
          console.log(error);
          // Fail message
          $("#success").html("<div class='alert alert-danger'>");
          $("#success > .alert-danger")
            .html(
              "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
            )
            .append("</button>");
          $("#success > .alert-danger").append(
            $("<strong>").text(
              "Disculpe " +
                firstName +
                ", parece que el servicio de mail no esta funcionando correctamente, por favor vuelva a intentarlo mas tarde"
            )
          );
          $("#success > .alert-danger").append("</div>");
          //clear all fields
          $("#contactForm").trigger("reset");
        },
        complete: function () {
          setTimeout(function () {
            $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
          }, 1000);
          // $("#hero").backstretch([
          //     [
          //       { width: 1080, url: "../assetscp/fotoselegidas/DJI_0116.jpg" },
          //       { width: 720, url: "../assetscp/fotoselegidas/mobile.jpg" },
          //     ],
          //     [
          //       { width: 1080, url: "../assetscp/fotoselegidas/San Isidro Ofis-247.jpg" },
          //       { width: 720, url: "../assetscp/fotoselegidas/mobile2.jpg" },
          //     ]
          //   ]);
        },
      });
    },
    filter: function () {
      return $(this).is(":visible");
    },
  });

  $('a[data-toggle="tab"]').click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

/*When clicking on Full hide fail/success boxes */
$("#name").focus(function () {
  $("#success").html("");
});

$(function () {
  $(
    "#contactForm2 input,#contactForm2 textarea,#contactForm2 button"
  ).jqBootstrapValidation({
    preventSubmit: true,
    submitError: function ($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function ($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var name = $("input#name2").val();
      var email = $("input#email2").val();
      var phone = $("input#phone2").val();
      var message = $("textarea#message2").val();
      var company = $("input#empresa2").val();
      var edificio = $("#selecthero2").val();
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(" ") >= 0) {
        firstName = name.split(" ").slice(0, -1).join(" ");
      }
      $this = $("#sendMessageButton2");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      $.ajax({
        url: "assetscp/mail/contact_me.php", // Make sure this points to the contact_me.php file on your server
        type: "POST",
        data: {
          name: name,
          phone: phone,
          email: email,
          message: message,
          edificio: edificio,
          empresa: company,
        },
        cache: false,
        success: function () {
          // Success message
          $("#success2").html("<div class='alert alert-success'>");
          $("#success2 > .alert-success")
            .html(
              "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
            )
            .append("</button>");
          $("#success2 > .alert-success").append(
            "<strong>Se envío su mensaje con exito!. </strong>"
          );
          $("#success2 > .alert-success").append("</div>");
          //clear all fields
          $("#contactForm2").trigger("reset");
          location.href = "/villa-carlos-paz/gracias";
        },
        error: function () {
          // Fail message
          $("#success2").html("<div class='alert alert-danger'>");
          $("#success2 > .alert-danger")
            .html(
              "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
            )
            .append("</button>");
          $("#success2 > .alert-danger").append(
            $("<strong>").text(
              "Disculpe " +
                firstName +
                ", parece que el servicio de mail no esta funcionando correctamente, por favor vuelva a intentarlo mas tarde"
            )
          );
          $("#success2 > .alert-danger").append("</div>");
          //clear all fields
          $("#contactForm2").trigger("reset");
        },
        complete: function () {
          setTimeout(function () {
            $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
          }, 1000);
        },
      });
    },
    filter: function () {
      return $(this).is(":visible");
    },
  });

  $('a[data-toggle="tab"]').click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});
