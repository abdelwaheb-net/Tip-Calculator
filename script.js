$(document).ready(function () {
  
  $("#calculateBtn").on("click", function () {
    let bill = $("#bill").val(); 
    let tip=$("#tip").val();
    let people=$("#people").val();
    let buttoncalculate=$("#calculateBtn").val();
    let buttonreinitialise=$("#resetBtn").val();
    let amount=$("#tipAmount").val();
    let totalamount=$("#totalAmount").val();
    let parpersonne=$("#perPerson").val();

    amount=bill*(tip/100);
    $("#tipAmount").text(amount.toFixed(2)+ " €");

  });
});
