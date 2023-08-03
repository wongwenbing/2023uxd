//retrieve acommodation details 
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

//retrieve room details
const roomselect = localStorage.getItem("room");
document.getElementById("room_selection").textContent = roomselect;
const price = localStorage.getItem('price_a_night');
document.getElementById("price_night").textContent=price;

//retrieve special details 
const extrabed = localStorage.getItem("xbed");
document.getElementById("xbed").textContent = extrabed;
const airportrans = localStorage.getItem("limo");
document.getElementById("limo").textContent = airportrans;
const earlyin = localStorage.getItem("earlyin");
document.getElementById("earlycheckin").textContent = earlyin;
const lateout = localStorage.getItem("latecheckout");
document.getElementById("latecheckout").textContent = lateout;
const specialr = localStorage.getItem("other");
document.getElementById("other").textContent = specialr;


//retrieve personal details 
const firstn = localStorage.getItem("fn");
document.getElementById("fn").textContent = firstn;
const lastn = localStorage.getItem("ln");
document.getElementById("ln").textContent = lastn;
const contact = localStorage.getItem("contact");
document.getElementById("contact").textContent = contact;
const email = localStorage.getItem("email");
document.getElementById("email").textContent = email;
const address = localStorage.getItem("bill");
document.getElementById("bill").textContent = address;


//retrieve payment details
const creditCardInfo = JSON.parse(localStorage.getItem('creditCardInfo'));

    const cardNumberElement = document.getElementById('cardnum');
    const expiryDateElement = document.getElementById('expiry');
    const cvvElement = document.getElementById('cvv');
    const cardHolderNameElement = document.getElementById('cardname');

    cardNumberElement.textContent = creditCardInfo.cardNumber;
    expiryDateElement.textContent = creditCardInfo.expiryDate;
    cvvElement.textContent = creditCardInfo.cvv;
    cardHolderNameElement.textContent = creditCardInfo.cardHolderName;

//retrieve unique ID
var num = document.getElementById('num');
var addnumber = Date.now();
num.textContent = addnumber;




//print to pdf
// document.getElementById('generate-pdf').addEventListener('click', function() {
//     // Get the content of the <form> element you want to convert
//     const content = document.getElementById('content');

//     // Create a new jsPDF instance
//     const pdf = new jsPDF();

//     // Function to convert HTML to canvas then add to PDF
//     function addHtmlToPdf() {
//         pdf.html(content, {
//             callback: function(pdf) {
//                 // Save the PDF with a specific name (e.g., "output.pdf")
//                 pdf.save('output.pdf');
//             },
//         });
//     }

//     // Check if the content needs to be rendered first
//     if (content.offsetHeight === 0) {
//         html2canvas(content).then(function(canvas) {
//             const imgData = canvas.toDataURL('image/jpeg');
//             pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297);
//             addHtmlToPdf();
//         });
//     } else {
//         addHtmlToPdf();
//     }
// });

// function convertHTMLtoPDF() {
//     const { jsPDF } = window.jspdf;

//     let doc = new jsPDF('l', 'mm', [1500, 1400]);
//     let pdfjs = document.querySelector('#divID');

//     doc.html(pdfjs, {
//         callback: function(doc) {
//             doc.save("newpdf.pdf");
//         },
//         x: 12,
//         y: 12
//     });               
// }          
