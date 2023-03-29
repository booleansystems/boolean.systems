function submitToAPI(e) {
  e.preventDefault();
  var Namere = /[A-Za-z]{1}[A-Za-z]/;
  if (!Namere.test($("#name-input").val())) {
    alert("Enter a valid name");
    return;
  }
  var mobilere = /^(|(\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})))$/;
  if (!mobilere.test($("#phone-input").val())) {
    alert("Enter a valid phone number");
    return;
  }
  if ($("#email-input").val() == "") {
    alert("Enter a valid email address");
    return;
  }

  var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
  if (!reeamil.test($("#email-input").val())) {
    alert("Enter a valid email address");
    return;
  }

  var descre = /^.{4}.*/;
  if (!descre.test($("#description-input").val())) {
    alert("Enter a valid message");
    return;
  }

  var name = $("#name-input").val();
  var phone = $("#phone-input").val();
  var email = $("#email-input").val();
  var desc = $("#description-input").val();
  var data = {
    name: name,
    phone: phone,
    email: email,
    desc: desc,
  };

  $.ajax({
    type: "POST",
    url: "https://boolean.systems/contact/send",
    dataType: "json",
    crossDomain: "true",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(data),

    success: function () {
      // clear form and show a success message
      window.location.href = "contactsuccess";
    },
    error: function () {
      // show an error message
      alert(
        "Failed to send contact request. Please try again or contact us on one of our social profiles."
      );
    },
  });
}
