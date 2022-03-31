// ------Khánh Linh------
var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
sideNav.style.right = "-250px";
menuBtn.onclick = function() {
        if (sideNav.style.right == "-250px") {
            sideNav.style.right = "0"
        } else {
            sideNav.style.right = "-250px"
        }
    }
    // /* -------Slide------ */
var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 5000);
// -----nav menu----


// function scrollFunction() {
//     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//         document.getElementById("navbar").style.padding = "0";
//         document.getElementById("navbar").style.display = "none";
//     } else {
//         document.getElementById("navbar").style.padding = "80px 10px";
//         document.getElementById("navbar").style.display = "block";

//     }
// }

function product() {
    document.getElementById('contact').style.display = "none";

    document.getElementById('home').style.display = "none";
    document.getElementById('product').style.display = "block";
    // document.getElementById('sideNav').style.display = "block";
    document.getElementById('cart').style.display = "none";
    document.getElementById('detailBill').style.display = "none";


}

function home() {
    document.getElementById('contact').style.display = "none";

    document.getElementById('home').style.display = "block";
    document.getElementById('product').style.display = "none";
    // document.getElementById('sideNav').style.display = "block";
    document.getElementById('cart').style.display = "none";
    document.getElementById('detailBill').style.display = "none";
    reset();


}

function cart() {
    document.getElementById('contact').style.display = "none";

    document.getElementById('home').style.display = "none";

    document.getElementById('product').style.display = "none";

    document.getElementById('shoping-cart').style.display = "block";
    document.getElementById('DetailProduct').style.display = "none";
    document.getElementById('cart').style.display = "block";
    document.getElementById('detailBill').style.display = "none";

}
// -----detail---demo
function showContact() {
    document.getElementById('home').style.display = "none";
    document.getElementById('product').style.display = "none";
    document.getElementById('cart').style.display = "none";
    document.getElementById('DetailProduct').style.display = "none";
    document.getElementById('contact').style.display = "block";
    document.getElementById('detailBill').style.display = "none";
    document.getElementById('fill-information').style.display = "none";
    document.getElementById('information').style.display = "none";
}


function showbill() {
    document.getElementById('contact').style.display = "none";

    document.getElementById('home').style.display = "none";

    document.getElementById('product').style.display = "none";

    document.getElementById('DetailProduct').style.display = "none";
    document.getElementById('cart').style.display = "block";
    document.getElementById('fill-information').style.display = "none";
    document.getElementById('information').style.display = "none";
    document.getElementById('detailBill').style.display = "block";

}