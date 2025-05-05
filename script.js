$(document).ready(function () {
  
  $("#calculateBtn").on("click", function () {
    let bill = $("#bill").val(); 
    let tip=$("#tip").val();
    let customTip = $("#customTip").val();
    let people=$("#people").val();
    let buttoncalculate=$("#calculateBtn").val();
    let buttonreinitialise=$("#resetBtn").val();
    let amount=$("#tipAmount").val();
    let totalamount=$("#totalAmount").val();
    let parpersonne=$("#perPerson").val();
if ($("#tip").val() == "custom"){
amount = bill * (customTip / 100);
}
else
{
  amount = bill * (tip / 100);
}
    
    $("#tipAmount").text(amount.toFixed(2)+ " €");

  });

  $("#tip").on("change", function () {
    if($("#tip").val()=='custom'){
      $("#customTip").show();
    }
    else{
      $("#customTip").hide();
    }
  });
});
