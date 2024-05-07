
function payvalidate(){
    var x=true;
    var name=document.getElementById("pay-name").value;
    var email=document.getElementById("pay-email").value;
    var address=document.getElementById("pay-adress").value;
    var tel=document.getElementById("tel-number").value;
    var city=document.getElementById("pay-city").value;
    var cname=document.getElementById("pay-cname").value;
    var cnum=document.getElementById("pay-cnum").value;
    var expmonth=document.getElementById("expmonth").value;
    var expyear=document.getElementById("expyear").value;
    var cvv=document.getElementById("cvv").value;
    
    if(name=="")
    {
    document.getElementById("pay-name-alert").innerHTML="Name is empty";
    x=false;
    }
    if(email=="")
    {
    document.getElementById("pay-email-alert").innerHTML="Email is empty";
    x=false;
    }
    if(address=="")
    {
    document.getElementById("pay-adress-alert").innerHTML="Address is empty";
    x=false;
    }
    if(tel=="")
    {
    document.getElementById("tel-number-alert").innerHTML="Telephone number is empty";
    x=false;
    }
    if(city=="")
    {
    document.getElementById("pay-city-alert").innerHTML="City is empty";
    x=false;
    }
    if(cname=="")
    {
    document.getElementById("pay-cname-alert").innerHTML="Name is empty";
    x=false;
    }
    if(cnum=="")
    {
    document.getElementById("pay-cnum-alert").innerHTML="Card number is empty";
    x=false;
    }
    if(expmonth=="")
    {
    document.getElementById("expmonth-alert").innerHTML="Exp Month is empty";
    x=false;
    }
    if(expyear=="")
    {
    document.getElementById("expyear-alert").innerHTML="Exp Year is empty";
    x=false;
    }
    if(cvv=="")
    {
    document.getElementById("cvv-alert").innerHTML="CVV is empty";
    x=false;
    }
    if(x)
    alert('Paid successfuly');
}
