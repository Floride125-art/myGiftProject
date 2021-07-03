function myFunction(e) {
    event.preventDefault();
  
  var tit = document.getElementById("title").value;
    var mat = document.getElementById("material").value;
     var siz = document.getElementById("size").value;
       var col = document.getElementById("color").value;
       var quan = document.getElementById("quantity").value;
     
    var price= siz * quan;
     alert("Your order of " + quan + " "+ tit +" has been processed.Your total amount payable is " + price +"Rwf." )
  
  }
  
  
  $(document).ready(function(){
    $("#delivery").click(function(){
      $("#delivery").toggle(1000);
      $("#deliveryForm").toggle(1200);
      $("#cancel").slideDown(1000);
  
  });
     
      $("#cancel").click(function(){
          $("#cancel").slideUp(1000);
          $("#deliveryForm").slideUp(1200);
          alert("The delivery process have been cancelled.");
          $("#delivery").slideDown(1200);
  
      });
  
     
  });
  
  $(document).ready(function () {
      $("#delivery-info").submit(function () {
  
          var name = $("input#name").val();
          var number = $("input#number").val();
          var location = $("input#location").val();
  
          alert("Hello " + name + ". Thank you for chosing getGift. Your order has been successfully received and will be delivered to " +  location + ".The delivery will cost 1000 Rwf. We will call you shortly on " + number);
  
      });
     
  });
  
  
  $(document).ready(function(){
      $("#Deliver").click(function(){
        $("#formD").show();
      });
    });
  $(document).ready(function(){
      $("#give").click(function(){
          var inputName = $("input#inputName").val();
          alert(inputName + " we have received your message. Thank you for reaching out to us.");
         
    
      });
      });