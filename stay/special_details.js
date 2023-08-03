//get information from the local storage
window.addEventListener('DOMContentLoaded', function (){
    var checkindate=document.getElementById('checkindate');
    var checkin = localStorage.getItem('checkin');
    checkindate.textContent=checkin;

    var checkoutdate=document.getElementById('checkoutdate');
    var checkout = localStorage.getItem('checkout');
    checkoutdate.textContent=checkout

    var adultnumber=document.getElementById('adultnumber');
    var adults=localStorage.getItem('adults');
    adultnumber.textContent=adults;

    var childnumber=document.getElementById('childnumber');
    var child = localStorage.getItem('child');
    childnumber.textContent=child;

    const checkinDate = localStorage.getItem("checkin");    
    document.getElementById("checkindate").textContent = checkinDate;

    const checkoutDate = localStorage.getItem("checkout");
    document.getElementById("checkoutdate").textContent = checkoutDate;

    const roomselect = localStorage.getItem("room");
    document.getElementById("room_selection").textContent = roomselect;

    const price = localStorage.getItem('price_a_night');
    document.getElementById("price_night").textContent=price;
});


//store information in local storage for xbed, limo, early check-in, late-checkout
  //xbed 
  const extrabed = document.getElementById("xbed");
  if (extrabed === "true"){
    extrabed.checked = true;
  } else{
    extrabed.checked = false; 
  }
  localStorage.setItem("xbed",extrabed.checked);

  //limo
  const limoserv = document.getElementById("limo");
  if (limoserv === "true"){
    limoserv.checked = true;
  } else{
    limoserv.checked = false; 
  }
  localStorage.setItem("limo",limoserv.checked);

  //early check-in
  const earlycheckin = document.getElementById("earlyin");
  if (earlycheckin === "true"){
    earlycheckin.checked = 'yes';
  } else{
    earlycheckin.checked = false; 
  }
  localStorage.setItem("earlyin",earlycheckin.checked);

  //late checkout
  const latecheckout = document.getElementById("latecheckout");
  if (latecheckout === "true"){
    latecheckout.checked = true;
  } else{
    latecheckout.checked = false; 
  }
  localStorage.setItem("latecheckout",latecheckout.checked);

  //store for other values
  const special=document.getElementById("srequests");
  const requests = special.value
  localStorage.setItem("specialrequests", special)
  