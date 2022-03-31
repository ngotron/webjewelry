//Khánh Linh gửi mail để xác nhận đơn hàng
var code = 0;

function emailnotify2() {
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    for (let i = 0; i < 1; i += 1) {
        console.log(`Random number ${i}: ${getRandomInt(100000, 999999)}`);
        code = getRandomInt(100000, 999999);
    }

    var email = document.getElementById('EmailToCode').value

    var a = {
        from_name: "Công Ty PNJ",
        email: email,
        to_name: email,
        message: code
    };
    emailjs.send('checkcode', 'template_94mfdyr', a)
    alert("Done!")
        .then(function(res) {
            console.log("Respone", res.status);
        });
};

function checkcodetopay() {
    var inputcode = document.getElementById("code").value;
    if (inputcode == code) {
        alert("Xác nhận đơn hàng thành công!");
        moveiforcustomer();
        information();
    } else {
        alert("Vui lòng kiểm tra lại mã của bạn!")
        checkEmail();
    }

    //Lưu thong tin của khách hàng
    function moveiforcustomer() {
        var h = document.getElementById('checkEmail');
        var e = document.getElementById('customer-information');

        h.style.left = "-415px";
        e.style.left = "5px";
        document.getElementById('header-check').innerHTML = `<h1 id="checkInformation" onclick="checkPayment()">Thông tin khách hàng</h1>`;
        document.getElementById("name").value = localStorage.getItem("username");
        document.getElementById("emailCus").value = localStorage.getItem("email");
        var or_date = new Date();
        var date =
            or_date.getDate() +
            "-" +
            (or_date.getMonth() + 1) +
            "-" +
            or_date.getFullYear();
        document.getElementById("date").value = date;
    }

}
//Khánh Linh function để hiển thị form điểm thông tin của khách hàng
var a = document.getElementById('checkEmail');
var b = document.getElementById('customer-information');
var c = document.getElementById('hinhthucTT');

function information() {
    a.style.left = "-415px";
    b.style.left = "5px";
    c.style.left = "820px";

    document.getElementById('header-check').innerHTML = `<h1 id="checkInformation" onclick="checkEmail()">Thông tin khách hàng</h1>`;
}

function checkEmail() {
    a.style.left = "5px";
    b.style.left = "415px";
    document.getElementById('header-check').innerHTML = `<h1 id="checkDelivery" onclick="information()">Kiểm tra dịch </h1>`;

    // var z = document.getElementById('header-checkd').innerHTML = `<h1 id="header-check" onclick="information()">Delivery Check</h1>`;

}

function checkPayment() {
    b.style.left = "-415px";
    c.style.left = "5px"
    document.getElementById('header-check').innerHTML = `<h1 id="checkPayment" onclick="information()">Thanh toán</h1>`;

    // var z = document.getElementById('header-checkd').innerHTML = `<h1 id="header-check" onclick="information()">Delivery Check</h1>`;

}