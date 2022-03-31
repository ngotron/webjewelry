const api = "https://61bc131bd8542f0017824588.mockapi.io/a/login";

//Khánh Linh
var x = document.getElementById('login');
var y = document.getElementById('register');
var z = document.getElementById('btn');

function register() {
    x.style.left = "-415px";
    y.style.left = "65px";
    z.style.left = "135px";
}

function login() {
    x.style.left = "65px";
    y.style.left = "415px";
    z.style.left = "0";

}
// ------eyes------ hiển thị hoặc ẩn pass
isBool = true;
// Công
function showHidden() {
    if (isBool) {
        // var eyes = `<i class="fas fa-eye-slash"></i>`;
        document.getElementById("eyesHide").innerHTML = `<span id="eyesHide"> <i class="fas fa-eye-slash" id="eyes" onclick="showHidden()" title="hide password"></i></span>`;
        document.getElementById("password").setAttribute("type", "text");

        isBool = false;
    } else {
        document.getElementById("eyesHide").innerHTML = `<span id="eyesHide"> <i class="fas fa-eye" id="eyes" onclick="showHidden()"></i></span>`;
        document.getElementById("password").setAttribute("type", "password");
        isBool = true
    }
}
//Khánh Linh
function eyesRes() {
    if (isBool) {
        document.getElementById("eyesHided").innerHTML = `<span id="eyesHided"><i class="fas fa-eye-slash" id="eyesRes" onclick="eyesRes()" title="hide password"></i></span>`; //Khánh Linh
        document.getElementById("passwordres").setAttribute("type", "text");

        isBool = false;
    } else {
        document.getElementById("eyesHided").innerHTML = `<span id="eyesHided"><i class="fas fa-eye" id="eyesRes" onclick="eyesRes()"></i></span>`; //Khánh Linh
        document.getElementById("passwordres").setAttribute("type", "password");
        isBool = true;

    }

}
//Khánh Linh Kiểm tra đầu vào của email đúng

function validatEemail() {
    var x = document.getElementById('email').value
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    if (atposition < 1 || dotposition < (atposition + 2) ||
        (dotposition + 2) >= x.length) {
        return false;
    }
}

///Công kiểm tra đầy đủ thông tin
function checkinput() {
    var name1 = document.getElementById('userres').value
    var email = document.getElementById('email').value
    var passwordres = document.getElementById('passwordres').value
    if (name1 == "" || email == "" || passwordres == "") {
        return true;
    }
}


// -------Đăng nhập tài khoản-------
function getInfo() {
    var username = document.getElementById('user').value;
    var password = document.getElementById('password').value;

    if (username == "" || password == "") {
        alert("Hãy nhập đầy đủ thông tin!")
    } else {
        var a = "";
        var valid = false;
        axios.get(`${api}`).then(res => {
            var myJson = res.data;
            for (var i = 0; i < myJson.length; i++) {
                if ((username == myJson[i].username) && (password == myJson[i].password)) {
                    valid = true;
                    a = myJson[i].email

                    break;
                }
            }
            if (valid == true) {
                alert(username + "Logged in successfully!")
                localStorage.setItem("username", username)
                localStorage.setItem("email", a)
                window.location = "file:///D:/Lam/team_work/user_manager/trang_chu/header.html"
                valid = false;
                document.getElementById('contact').style.display = "none";

                document.getElementById('home').style.display = "block";
                document.getElementById('product').style.display = "none";
                // document.getElementById('sideNav').style.display = "block";
                document.getElementById('cart').style.display = "none";
                document.getElementById('detailBill').style.display = "none";
            } else {
                alert("Hãy kiểm tra tài khoản của bạn!")
                ressetlogin()
            }
        })
    };

}
//  --------Đăng ký tài khoản---------
function regiter() {

    var name1 = document.getElementById('userres').value
    var email = document.getElementById('email').value
    var passwordres = document.getElementById('passwordres').value

    /// Sửa cái validatEemail
    if (validatEemail() == false || (checkinput() == true)) {
        if (checkinput() == true) {
            alert("Hãy nhập đầy đủ thông tin!")
        } else if (validatEemail() == false) {
            alert("Hãy nhập email hợp lệ!");
        }
    } else {
        axios.get(`${api}`).then(res => {
            for (var i = 0; i < res.data.length; i++) {
                if (email == res.data[i].email) {
                    alert('Lỗi, tài khoản của bạn đã tồn tại')
                    return
                }
            }
            // post data
            var data = {
                username: name1,
                email: email,
                password: passwordres,
            }
            axios.post(api, data)
                .then(() => {
                    alert("Đăng ký thành công");
                    emailToAccount();
                    location.reload()
                })
        })
    }
}
//Công gửi mail cho người dùng đăng ký tài khoản
function emailToAccount() {
    var passwordres = document.getElementById('passwordres').value;
    var emailAccount = {
        from_name: "Công Ty PNJ",
        email: document.getElementById("email").value,
        to_name: document.getElementById("userres").value,
        message: passwordres
    };
    emailjs.send('checkcode', 'template_94mfdyr', emailAccount)
    alert("Done!")
        .then(function(res) {
            console.log("Respone", res.status);
        });

}


function ressetlogin() {
    document.getElementById('user').value = '';
    document.getElementById('password').value = '';
}

function ressetlogin() {
    document.getElementById('userres').value = '';
    document.getElementById('email').value = '';
    document.getElementById('passwordres').value = '';

}
// ========================================phần đăng xuất html thêm 1 dòng 410 file index.html cùng folder=========================================================================================
function logout() {
    if (confirm("Bạn muốn đăng xuất?") == true) {
        localStorage.setItem("username", JSON.stringify(null));
        localStorage.setItem("email", JSON.stringify(null));
        // window.location.assign("index.html")
        console.log("logout");
        home()
    } else {
        console.log("Not logout")
    }
}