const URL_API_PROS = "https://61bc131bd8542f0017824588.mockapi.io/a/arrayproducts";
const URL2_API = "https://61bc10c1d8542f0017824535.mockapi.io/pro2";
const API_URL = "https://61bc131bd8542f0017824588.mockapi.io/a/arrayproducts";
const API_cart = "https://61bc131bd8542f0017824588.mockapi.io/a/new-cart";
const API_comment = "https://61bfe882b25c3a00173f4f47.mockapi.io/comment";

// Hiện thị sản phẩm

function showProduct() {
    axios.get(`${API_URL}`).then((res) => {
        res.data.map(function(ele) {
            document.getElementById("showProduct").innerHTML += `
                            <div class="column" id="item-${ele.id}">
                            <div class="card">
                            <img src="${ele.avatar}" alt="Card image cap">
                            <div class="container">
                                <h2 class="title">${ele.name} </h2>
                                <p class="price">${ele.price}.000₫</p>
                                <p><button class="button" onclick="ProductDetail(${ele.id})">Đặt hàng</button></p>
                            </div>
                            </div>
                            </div>`;


        });
    });

}
showProduct();
// lengtharrcart(); // load phaanf gio hang
// Hiển thị sản phẩm theo loại
var id = 0;

function showFollowCategory(type, material) {
    document.getElementById("showProduct").innerHTML = "";
    axios.get(`${API_URL}`).then((res) => {
        for (let index = 0; index < res.data.length; index++) {
            if (
                res.data[index].type == type &&
                res.data[index].material == material
            ) {
                document.getElementById("showProduct").innerHTML += `
                <div class="column" id="item-${res.data[index].id}">
                <div class="card">
                <img src="${res.data[index].avatar}" alt="Card image cap">
                <div class="container">
                    <h2 class="title">${res.data[index].name} </h2>
                    <p class="price">${res.data[index].price}.000₫</p>
                    <p><button class="button" onclick="ProductDetail(${res.data[index].id})">Chi tiết sản phẩm</button></p>
                </div>
                </div>
                </div>`;
            }
        }
    });
    reset();
}
// Hiển thị chi tiết sản phẩm khi muốn đặt hàng
var idSanpham;

function ProductDetail(n) {

    axios.get(`${API_URL}/${n}`).then((res) => {
        // --------product detail------
        var product_detail = `
         <div class="col-md-6">
                                <div id="slider" class="owl-carousel product-slider">
                                    <div class="item">
                                        <div id="anha">
                                        <img class="card-img-top" src = "${res.data.avatar}" " alt"Card image cap" ;>
                                        </div>
                                    </div>
                                </div>
                                <div id="thumb" class="owl-carousel product-thumb">
                                    <div class="item">
                                        <img src="https://cdn.pnj.io/images/detailed/28/gndrya77485.102-nhan-pnj-vang-18k-dinh-da-cz_0.png" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="https://cdn.pnj.io/images/detailed/28/gndrya77485.102-nhan-pnj-vang-18k-dinh-da-cz_0.png" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="https://cdn.pnj.io/images/detailed/28/gndrya77485.102-nhan-pnj-vang-18k-dinh-da-cz_0.png" alt="">
                                    </div>
                                    <div class="item">
                                        <img src="https://cdn.pnj.io/images/detailed/28/gndrya77485.102-nhan-pnj-vang-18k-dinh-da-cz_0.png" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="product-dtl">
                                    <div class="product-info">
                                        <div class="product-name">
                                            <div id="catNam">
                                            <h1 class="title_pay">${res.data.name}</h1>                                            
                                            </div>
                                        </div>
                                        <div class="reviews-counter">
                                            <div class="rate">
                                                <input type="radio" id="star5" name="rate" value="5" checked />
                                                <label for="star5" title="text">5 stars</label>
                                                <input type="radio" id="star4" name="rate" value="4" />
                                                <label for="star4" title="text">4 stars</label>
                                                <input type="radio" id="star3" name="rate" value="3" />
                                                <label for="star3" title="text">3 stars</label>
                                                <input type="radio" id="star2" name="rate" value="2" />
                                                <label for="star2" title="text">2 stars</label>
                                                <input type="radio" id="star1" name="rate" value="1" />
                                                <label for="star1" title="text">1 star</label>
                                            </div>
                                            <span>2 đánh giá</span>
                                        </div>
                                        <div class="product-price-discount"><span id="catPrice"><h1 class="price_pay">${res.data.price}.000VND</h1></span>
                                            <!-- <span class="line-through">$29.00</span></div> -->
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                            ea commodo consequat.
                                        </p>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label for="size">Kích cỡ</label>
                                                <select id="size" name="size" class="form-control">
                                                <option>51</option>
                                                <option>52</option>
                                                <option>53</option>
                                                <option>54</option>
                                            </select>
                                            </div>
                                        </div>
                                        <div class="product-count">
                                            <label for="size">Số lượng</label>
                                            <form action="#" class="display-flex">
                                                <div class="qtyminus">-</div>
                                                <input type="text" name="quantity" value="1" class="qty">
                                                <div class="qtyplus">+</div>
                                            </form>
                                            <a href="#" class="round-black-btn" onclick="shoppingCart(${n})">Thêm vào giỏ hàng</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="product-info-tabs">
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Mô tả</a>
                                    </li>
                                    <li class="nav-item" >
                                        <a class="nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">Đánh giá <label id="numbercomment">0</label></li></p></a>
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                                        unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                                    </div>
                                    <div class="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                                        <div class="review-heading">Đánh giá</div>
                                        <form class="review-form">
                                            <div class="form-group">
                                                <label>Đánh giá</label>
                                                <div class="reviews-counter">
                                                    <div class="rate">
                                                        <input type="radio" id="star5" name="rate" value="5" />
                                                        <label for="star5" title="text">5 stars</label>
                                                        <input type="radio" id="star4" name="rate" value="4" />
                                                        <label for="star4" title="text">4 stars</label>
                                                        <input type="radio" id="star3" name="rate" value="3" />
                                                        <label for="star3" title="text">3 stars</label>
                                                        <input type="radio" id="star2" name="rate" value="2" />
                                                        <label for="star2" title="text">2 stars</label>
                                                        <input type="radio" id="star1" name="rate" value="1" />
                                                        <label for="star1" title="text">1 star</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Nhập bình luận</label>
                                                <textarea class="form-control" id="comment" rows="10"></textarea>
                                            </div>
                                            <button class="round-black-btn" onclick="addcomment()">Bình luận</button>
                                            <div class="form-group mt-3">
                                           
                                            <h2>Bình luận</h2>
                                            <div id="list_comment">

                                            </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

`;
        document.getElementById("detail-product").innerHTML = product_detail;

        document.getElementById('product').style.display = "none";
        document.getElementById('cart').style.display = "block";
        document.getElementById('shoping-cart').style.display = "none";
        document.getElementById('DetailProduct').style.display = "block";
    });
    similerProduct(n);

    idSanpham = n;
    showComment();
    showComment();

}
// Hiển thị sản phẩm giống nhau
function similerProduct(n) {
    document.getElementById("banchay").innerHTML = "";

    axios.get(`${API_URL}/${n}`).then((res) => {
        var typeProduct = res.data.type;

        axios.get(`${API_URL}`).then((res) => {
            for (let index = 0; index < res.data.length; index++) {
                if (typeProduct === res.data[index].type) {
                    document.getElementById("banchay").innerHTML += `
                    <div class="column" id="item-${res.data[index].id}">
                    <div class="card">
                    <img src="${res.data[index].avatar}" alt="Card image cap">
                    <div class="container">
                        <h2 class="title">${res.data[index].name} </h2>
                        <p class="price">${res.data[index].price}.000₫</p>
                        <p><button class="button" onclick="ProductDetail(${res.data[index].id})">Đặt hàng</button></p>
                    </div>
                    </div>
                    </div>`;
                }
            }
        });
    });
}
const checkAccount = () => {
    var name = localStorage.getItem("username");
    if (name == null || name == undefined || name == "null") {
        alert("Bạn cần phải đăng nhập trước!");
        showContact();
        return false;

    }
    return true;

};

// Hiển thị giỏ hàng  
function shoppingCart(n) {

    if (!checkAccount()) {
        // alert("hihi")
        return;
    }
    document.getElementById('shoping-cart').style.display = "block";
    document.getElementById('DetailProduct').style.display = "none";
    document.getElementById('cart').style.display = "block";
    alert("Đã thêm vào giỏ hàng");
    axios.get(`${API_URL}/${n}`).then((res) => {
        var datas = {
            id: res.data.id,
            avatar: res.data.avatar,
            name: res.data.name,
            price: res.data.price,
            qty: 0,
            material: res.data.material,
            totalproduct: 0,
        };

        arrcart.push(datas);
        showtablecart();
        console.log(arrcart);
    });



}

function homeAfterPay() {
    document.getElementById("cartping").innerHTML = "";
    document.getElementById('contact').style.display = "none";

    document.getElementById('home').style.display = "block";
    document.getElementById('product').style.display = "none";
    // document.getElementById('sideNav').style.display = "block";
    document.getElementById('cart').style.display = "none";
    document.getElementById('detailBill').style.display = "none";
}
// Thêm sản phẩm vào giỏ hàng
var totalEl = 0;

var arrcart = [];
var ar = 0;
var i = 0;
var discountt = 0;

function discount() {
    if (totalEl > 1000) {
        discountt = 150;
        document.getElementById("discount").innerHTML = discountt + ".000VND";
    } else {
        document.getElementById("discount").innerHTML = 0 + ".000VND";
    }

}

function checkProduct() {
    arrcart = []
        // var buy = document.getElementsByClassName("product-cart").value;
    if (arrcart == null) {
        alert("Bạn chưa có sản phẩm nào!")
    } else {
        document.getElementById('contact').style.display = "none";

        document.getElementById('home').style.display = "none";

        document.getElementById('product').style.display = "none";

        document.getElementById('DetailProduct').style.display = "none";
        document.getElementById('cart').style.display = "block";
        document.getElementById('fill-information').style.display = "block";
        document.getElementById('information').style.display = "block";
        document.getElementById('cart').style.display = "none";
        document.getElementById('detailBill').style.display = "none";
    }

}


//------------ hiển thị sản phẩm trong giỏ hàng
function showtablecart() {
    document.getElementById("cartping").innerHTML = "";
    for (let i = 0; i < arrcart.length; i++) {
        my_cart = `
        <div class="product-cart">
        <div class="img-cart">
        <img src="${arrcart[i].avatar}" alt="">        
        </div>
        <div class="detail-cart">
            <div class="small-header-cart">
                <h5>${i + 1}</h3>
                <h3>${arrcart[i].name}</h3>
            </div>

            <div class="process">
                <table>

                    <tr>
                        <td>Chất liệu</td>
                        <td>${arrcart[i].material}</i>
                        </td>

                    </tr>
                    <tr>
                        <td>Giá</td>
                        <td>${arrcart[i].price}</td>

                    </tr>
                    <tr>
                        <th style="width:100%">
                        <form action="/action_page.php">
                        <input type="number" value='0' min="0"  id="quantity${i}" oninput="updatecar(${i})" style="width: 37px;">

                        </form>
                    </th>
                        <th class="total" id="total${i}">${totalEl}</th>
                    </tr>
                </table>
            </div>
            <div class="small-footer-cart">
                <div class="button-view">
                    <button class="view" onclick="ProductDetail(${i})">Chi tiết</button>
                </div>
                <div class="button-remove">
                    <button class="remove" onclick="deleteproduct(${i})">Xóa</button>
                </div>


            </div>
        </div>
        </div>`;
        document.getElementById("cartping").innerHTML += my_cart;


    }

}

function updatecar(i) {
    var qty = document.getElementById("quantity" + i).value;
    arrcart[i].qty = parseInt(qty); /////// thay đổi giá trị trong iput đẩy lên mock và tính tổng
    totalEl = arrcart[i].qty * arrcart[i].price;
    (arrcart[i].totalproduct = totalEl), // đẩy gái trị tổng vô mảng funtion enter
    document.getElementById("total" + i).innerHTML = totalEl + ".000VND";
    // document.getElementById("totalOrderCus" + i).innerHTML = totalEl + ".000VND";
    document.getElementById("quantity" + i).setAttribute("value", qty);
    updatetotal()
    updatesub();
    discount();

}

function deleteproduct(i) {
    arrcart.splice(i, 1);
    alert("Đã xóa thành công");
    showtablecart();
}
//--------Tổng của tất cả sản phẩm
var alltotal = 0;
var totalPrice = 0

function updatesub() {
    document.getElementById("totalPrice").innerHTML = alltotal + ".000VND";

    if (alltotal > 1000) {
        document.getElementById("totalPrice").innerHTML = alltotal - 150 + ".000VND";

    }


    // document.getElementById("totalOrderCus").innerHTML = alltotal + ".000VND";
}

function updatetotal() {
    alltotal = 0;
    for (var i of arrcart) {
        alltotal += i.price * i.qty;
    }
    totalPrice = document.getElementById("subtotal").innerHTML = alltotal + ".000VND";
    // document.getElementById("totalOrderCus").innerHTML = alltotal + ".000VND";
}



// kiểm tra form kiểm tra thanh toán hóa đơn
function validatEemail2() {
    var x = document.getElementById('email').value
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    if (atposition < 1 || dotposition < (atposition + 2) ||
        (dotposition + 2) >= x.length) {
        return false;
    }
}

// /Công kiểm tra đầy đủ thông tin

function checkinput2() {
    var phone = document.getElementById("phone").value;
    var province = document.getElementById("province").value;
    var distric = document.getElementById("distric").value;
    var commune = document.getElementById("commune").value;
    var apartmentNumber = document.getElementById("apartmentNumber").value;
    if (
        province == "" ||
        distric == "" ||
        commune == "" ||
        apartmentNumber == "" ||
        phone == ""
    ) {
        return false;
    }
}

function payment() {
    var or_date = new Date();
    var date =
        or_date.getDate() +
        "-" +
        (or_date.getMonth() + 1) +
        "-" +
        or_date.getFullYear();
    document.getElementById("date").value = date;
    var username = localStorage.getItem("username");
    var email = localStorage.getItem("email");
    var phone = document.getElementById("phone").value;
    var province = document.getElementById("province").value;
    var distric = document.getElementById("distric").value;
    var commune = document.getElementById("commune").value;
    var apartmentNumber = document.getElementById("apartmentNumber").value;
    var place =
        apartmentNumber + "-" + commune + "-" + distric + "-" + province + ".";
    if (validatEemail2() == true || (checkinput2() == true)) {
        if (checkinput2() == true) {
            alert("Hãy nhập đầy đủ thông tin!")
        } else if (validatEemail2() == true) {
            alert("Hãy nhập email hợp lệ!");
        }
    } else {
        axios.get(API_cart).then(() => {
            var arrpost = [];
            for (let index = 0; index < arrcart.length; index++) {
                var object = {
                    price: arrcart[index].price,
                    avatar: arrcart[index].avatar,
                    name: arrcart[index].name,
                    qty: arrcart[index].qty,
                    totalproduct: arrcart[index].totalproduct,
                };

                arrpost.push(object);
            }
            var object2 = {
                username: username,
                email: email,
                array: arrpost,
                phone: phone,
                date: date,
                place: place,
                total: document.getElementById("totalPrice").value,
            };
            axios.post(API_cart, object2);
        });
        if (
            document.getElementById("payqr").value == 'maqr') {
            qrcode();
            homeAfterPay()
        } else {
            showbillcustomer();
            sendEmailForConfirm();
        }
    }
    reset();
};

function showbillcustomer() {
    var or_date = new Date();
    var date =
        or_date.getDate() +
        "-" +
        (or_date.getMonth() + 1) +
        "-" +
        or_date.getFullYear();
    document.getElementById("date").value = date;
    var username = localStorage.getItem("username");
    var email = localStorage.getItem("email");
    var phone = document.getElementById("phone").value;
    var province = document.getElementById("province").value;
    var distric = document.getElementById("distric").value;
    var commune = document.getElementById("commune").value;
    var apartmentNumber = document.getElementById("apartmentNumber").value;
    var place =
        apartmentNumber + "-" + commune + "-" + distric + "-" + province + ".";

    document.getElementById('detailBill').style.display = "block";

    alert("Đã mua hàng thành công");
    // var tong = document.getElementById("totalPrice").value;
    document.getElementById('dateOrder').innerHTML = `
    <p>Ngày đặt hàng :${date}</p>`;
    document.getElementById('profileCustomer').innerHTML = `
        <h5 class="mb-3">To:</h5>
        <h3 class="text-dark mb-1">${username}</h3>
        <div>${place}</div>
        <div>Viet Nam</div>
        <div>Email: ${email}</div>
        <div>Điện thoại: ${phone}</div>`;
    for (let index = 0; index < arrcart.length; index++) {
        var priceCus = arrcart[index].price * arrcart[index].qty;
        // var totalOrderCus = 0;
        // totalOrderCus += priceCus;

        document.getElementById('itemOrderCus').innerHTML += `
        <tr>
            <td class="center">${index + 1}</td>
            <td class="left strong">${arrcart[index].name}</td>
            <td class="left"><img id ='thunho' src=" ${arrcart[index].avatar}" alt=""></td>
            <td class="right">${arrcart[index].price}</td>
            <td class="center">${arrcart[index].qty}</td>
            <td class="right" >${totalPrice}.000VND</td>
        </tr>
    `;
    }


    document.getElementById("totalOrderCus").innerHTML =
        `<tr>
        <td class="left">
            <strong class="text-dark">Subtotal</strong>
        </td>
        <td class="right">${alltotal}</td>
    </tr>
    <tr>
        <td class="left">
            <strong class="text-dark">Total</strong> </td>
        <td class="right">
            <strong class="text-dark" >${totalPrice}</strong>
        </td>
    </tr>
`;

    document.getElementById('contact').style.display = "none";
    document.getElementById('home').style.display = "none";
    document.getElementById('product').style.display = "none";
    document.getElementById('DetailProduct').style.display = "none";
    document.getElementById('cart').style.display = "none";
    document.getElementById('fill-information').style.display = "none";
    document.getElementById('information').style.display = "none";
}

function sendEmailForConfirm() {
    var province = document.getElementById("province").value;
    var distric = document.getElementById("distric").value;
    var commune = document.getElementById("commune").value;
    var apartmentNumber = document.getElementById("apartmentNumber").value;
    var place =
        apartmentNumber + "-" + commune + "-" + distric + "-" + province + ".";
    for (let index = 0; index < arrcart.length; index++) {
        productName = arrcart[index].name;
        qty = arrcart[index].qty;
    }
    content = "PNJ muốn gửi email cho bạn để xem chi tiết việc mua hàng của bạn";
    product_name = productName;
    quantity = qty;
    address = place;
    total = alltotal;

    var tempParams = {
        email: document.getElementById("emailCus").value,
        from_name: "Công Ty PNJ",
        to_name: document.getElementById("emailCus").value,
        message: content,
        product_name: product_name,
        quantity: quantity,
        address: address,
        total: total,
    };
    emailjs.send("khanhlinhemail", "template_d2oikta", tempParams).then(function(res) {
        console.log("success", res.status);
    });
}

// Hiển thị code to pay
function qrcode() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }
    sendEmailForConfirm();

}



//////////Hiển thị sản phẩm ở trang chủ

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

function getData(url, callBack = null) {
    return axios
        .get(url)
        .then(function(res) {
            if (callBack == null) return res;
            callBack(res.data);
        })
        .catch(function(err) {
            console.log(err);
        });
}


function show(proArr) {
    for (var pro of proArr) {
        document.getElementById("product-slides").innerHTML += `
        <div class="swiper-slide">
        <a href="shop.html"><img  src='${pro.avatar}'></a>
        </div>
    `;
    }
}

getData(URL_API_PROS, show);



function show2(proArr) {

    for (var i = proArr.length - 1; i >= 0; i--) {
        document.getElementById("product2-slides").innerHTML += `
        <div class="swiper-slide text-center">
        <a href="shop.html"><img src='${proArr[i].avatar}'></a>
    
       
        </div>`

    }
}
getData(URL_API_PROS, show2);

URL3_API = "https://61bc131bd8542f0017824588.mockapi.io/a/arrayproducts";

function show3(proArr) {
    for (let index = 5; index < proArr.length; index++) {
        document.getElementById("product3-slides").innerHTML += `
        <div class="swiper-slide text-center">
        <a href="shop.html"><img src='${proArr[index].avatar}'></a>
        
       
        </div>
    `;

    }


}
getData(URL3_API, show3);


function reset() {
    document.getElementById("detailBill").value = "";
    document.getElementById("province").value = "";
    document.getElementById("distric").value = "";
    document.getElementById("commune").value = "";
    document.getElementById("apartmentNumber").value = "";
}
// ============================================== bình luận==========================================coppy lại funtion từ dòng 59 đến 207===========================================================

function addcomment() {
    var or_date = new Date();
    var date = or_date.getDate() + "-" + (or_date.getMonth() + 1) + "-" + or_date.getFullYear();
    var username = localStorage.getItem("username");
    var title = document.getElementById("comment").value;
    var data = {
        username: username,
        title: title,
        idSanpham: idSanpham,
        date: date
    };
    axios.post(`${API_comment}`, data).then(() => {
        showComment()
    });

}

function caculatorNumbercoment() {
    axios.get(`${API_comment}`).then((res) => {
        var dem = 0;
        for (let index = 0; index < res.data.length; index++) {
            if (idSanpham == res.data[index].idSanpham) {
                dem += 1
            }

        }
        document.getElementById("numbercomment").innerHTML = dem;
    });

}

function showComment() {
    caculatorNumbercoment()
    axios.get(`${API_comment}`).then((res) => {
        document.getElementById("list_comment").innerHTML = ""
        for (var i = res.data.length - 1; i >= 0; i--) {

            if (idSanpham == res.data[i].idSanpham) {
                document.getElementById("list_comment").innerHTML += `
                 <h6 id="margin"></i> ${res.data[i].date}</p>
                <h6 id="margin"> <i class=" iconUser fas fa-user-circle"></i> ${res.data[i].username}</p>
                <h6 id="margin">${res.data[i].title}</h6> 
                <hr>
                <br>       
            `;
            }
        }
    });

}