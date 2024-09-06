let newProducts = [
    { pName: "Nandini Blue", price: "24", size: "500 ml", img: "pro-blue.jpg", id: 1 },
    { pName: "Nandini Orange", price: "27", size: "500 ml", img: "pro-orange.jpg", id: 2 },
    { pName: "Nandini Family", price: "27", size: "500 ml", img: "pro-nsp.jpg", id: 3 },
    { pName: "Nandini Green", price: "26", size: "500 ml", img: "pro-green.jpg", id: 4 },
    { pName: "Nandini Samrudhi", price: "28", size: "500 ml", img: "pro-sam.jpg", id: 5 },
    { pName: "Nandini Orange-1L", price: "50", size: "1 Litre", img: "pro-orange1.jpg", id: 6 },
    { pName: "Nandini Blue-1L", price: "44", size: "1 Litre", img: "pro-blue1.jpg", id: 7 },
    { pName: "Nandini Curd", price: "26", size: "500 ml", img: "pro-curd.jpg", id: 8 },
    { pName: "Nandini Curd Small", price: "12", size: "200 ml", img: "pro-curd-s.jpg", id: 9 },
    { pName: "Nandini Curd-1L", price: "50", size: "1 Litre", img: "pro-curd1.jpg", id: 10 },
    { pName: "Dodla Normal", price: "25", size: "500 ml", img: "d-blue.jpg", id: 11 },
    { pName: "Dodla FullCream", price: "35", size: "500 ml", img: "d-fcm.jpg", id: 12 },
    { pName: "Dodla Curd", price: "32", size: "500 ml", img: "d-curd.jpg", id: 13 },
    { pName: "Dodla Fullcream-1L", price: "70", size: "1 Litre", img: "d-fcm.jpg", id: 14 },
    { pName: "Dodla Curd-1L", price: "64", size: "1 Litre", img: "d-curd1.jpg", id: 15 },
    { pName: "Dodla Small Milk", price: "10", size: "220 ml", img: "d-smilk.jpg", id: 16 },
    { pName: "Dodla Small Curd", price: "10", size: "130 ml", img: "d-scurd.jpg", id: 17 }, { pName: "akash" }
]


function addCart(id, btn) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    quant = btn.parentElement.previousElementSibling.firstElementChild.value
    if (quant == 0) {
        alert("Quantity Cannot be empty")
    } else {
        existing = cart.find(ite => ite.id === id)
        if (existing) {
            existing.quantity = quant
        } else {
            cart.push({ id: id, quantity: `${quant}` });
        }
        localStorage.setItem("cart", JSON.stringify(cart))
    }
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart"))
    if(!cart.length){
        cCheck()
        return
    }
    newProducts.forEach(item => {
        cart.forEach(cartele => {
            if (item.id == cartele.id) {
                let html = `<div class="cart-item">
                            <div class="img-div">
                                <img src="../product-img/${item.img}" class="item-img">
                            </div>
                            <div class="details-div">
                                <p class="item-name">${item.pName}</p>
                                <p class="item-price">${item.size}</p>
                                <p class="item-price">Rs. ${item.price}</p>
                                <div class="iq-div">
                                    <button class="minus" onclick="minus(this,${item.id})">-</button>
                                    <input type="number" class="item-quantity" value="${Number(cartele.quantity)}" oninput="bin(this)">
                                    <button class="plus" onclick="plus(this,${item.id})">+</button>
                                </div>
                            </div><div class ="remove-div">
                            <button class="remove" onclick="removeite(${item.id})">REMOVE</button><div>
                        </div>`
                let icont = document.querySelector(".item-div")
                icont.innerHTML += html
            }
        });
    });

}

function plus(p, id) {
    let cart = JSON.parse(localStorage.getItem("cart"))
    let x = Number(p.previousElementSibling.value)
    x += 1
    p.previousElementSibling.value = x
    cart.forEach(e => {
        if (e.id == id) {
            e.quantity = x
        }
    })
    localStorage.setItem("cart", JSON.stringify(cart))
    bin(p.previousElementSibling)
}
function minus(m, id) {
    let cart = JSON.parse(localStorage.getItem("cart"))
    let x = Number(m.nextElementSibling.value)
    x -= 1
    m.nextElementSibling.value = x
    cart.forEach(e => {
        if (e.id == id) {
            e.quantity = x
        }
    })
    localStorage.setItem("cart", JSON.stringify(cart))
    if (x == 0) {
        removeite(id)
    }
    bin(m.nextElementSibling)
}
function removeite(id) {
    let cart = JSON.parse(localStorage.getItem("cart"))
    cart = cart.filter(i => i.id !== id)
    localStorage.setItem("cart", JSON.stringify(cart))
    location.href = "cart.html"
}

function bin(q) {
    let del = q.previousElementSibling
    if (q.value == 1) {
        del.innerHTML = `<svg height="10px" fill="#ff0000" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" stroke="#ff0000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M831.24 280.772c5.657 0 10.24-4.583 10.24-10.24v-83.528c0-5.657-4.583-10.24-10.24-10.24H194.558a10.238 10.238 0 00-10.24 10.24v83.528c0 5.657 4.583 10.24 10.24 10.24H831.24zm0 40.96H194.558c-28.278 0-51.2-22.922-51.2-51.2v-83.528c0-28.278 22.922-51.2 51.2-51.2H831.24c28.278 0 51.2 22.922 51.2 51.2v83.528c0 28.278-22.922 51.2-51.2 51.2z"></path><path d="M806.809 304.688l-58.245 666.45c-.544 6.246-6.714 11.9-12.99 11.9H290.226c-6.276 0-12.447-5.654-12.99-11.893L218.99 304.688c-.985-11.268-10.917-19.604-22.185-18.619s-19.604 10.917-18.619 22.185l58.245 666.45c2.385 27.401 26.278 49.294 53.795 49.294h445.348c27.517 0 51.41-21.893 53.796-49.301l58.244-666.443c.985-11.268-7.351-21.201-18.619-22.185s-21.201 7.351-22.185 18.619zM422.02 155.082V51.3c0-5.726 4.601-10.342 10.24-10.342h161.28c5.639 0 10.24 4.617 10.24 10.342v103.782c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V51.3c0-28.316-22.908-51.302-51.2-51.302H432.26c-28.292 0-51.2 22.987-51.2 51.302v103.782c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48z"></path><path d="M496.004 410.821v460.964c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V410.821c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48zm-192.435 1.767l39.936 460.964c.976 11.269 10.903 19.612 22.171 18.636s19.612-10.903 18.636-22.171l-39.936-460.964c-.976-11.269-10.903-19.612-22.171-18.636s-19.612 10.903-18.636 22.171zm377.856-3.535l-39.936 460.964c-.976 11.269 7.367 21.195 18.636 22.171s21.195-7.367 22.171-18.636l39.936-460.964c.976-11.269-7.367-21.195-18.636-22.171s-21.195 7.367-22.171 18.636z"></path></g></svg>`
    } else {
        q.previousElementSibling.innerHTML = "-"
    }
}

function cCheck() {
    let h = `
                <style>
                    .cart-container {
                    margin: 100px auto;
                    max-width: 600px;
                    text-align: center;
                    
                    }
                    .cart-container>h1{
                    font-size: 36px;
                    color: #333;
                    }
                    .cart-container>p{
                    font-size: 18px;
                    color: #555;
                    }
                </style>
        
        
        
            <div class="cart-container">
                    <h1> Your Cart is Empty</h1>
                    <p>It looks like you haven't added any items to your cart yet.</p>
            </div>`
    let cont = document.querySelector(".item-div")
    cont.innerHTML = h
}


window.onload = displayCart()