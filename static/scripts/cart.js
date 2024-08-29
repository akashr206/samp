let newProducts = [
    {pName:"Nandini Blue", price:"24", size:"500 ml", img:"pro-blue.jpg", id : 1},
    {pName:"Nandini Orange", price:"27", size:"500 ml", img:"pro-orange.jpg", id : 2},
    {pName:"Nandini Family", price:"27", size:"500 ml", img:"pro-nsp.jpg", id :3},
    {pName:"Nandini Green", price:"26", size:"500 ml", img:"pro-green.jpg", id :4},
    {pName:"Nandini Samrudhi", price:"28", size:"500 ml", img:"pro-sam.jpg", id :5},
    {pName:"Nandini Orange-1L", price:"50", size:"1 Litre", img:"pro-orange1.jpg", id :6},
    {pName:"Nandini Blue-1L", price:"44", size:"1 Litre", img:"pro-blue1.jpg", id :7},
    {pName:"Nandini Curd", price:"26", size:"500 ml", img:"pro-curd.jpg", id :8},
    {pName:"Nandini Curd Small", price:"12", size:"200 ml", img:"pro-curd-s.jpg", id :9},
    {pName:"Nandini Curd-1L", price:"50", size:"1 Litre", img:"pro-curd1.jpg", id :10},
    {pName:"Dodla Normal", price:"25", size:"500 ml", img:"d-blue.jpg", id :11},
    {pName:"Dodla FullCream", price:"35", size:"500 ml", img:"d-fcm.jpg", id :12},
    {pName:"Dodla Curd", price:"32", size:"500 ml", img:"d-curd.jpg", id :13},
    {pName:"Dodla Fullcream-1L", price:"70", size:"1 Litre", img:"d-fcm.jpg", id :14},
    {pName:"Dodla Curd-1L", price:"64", size:"1 Litre", img:"d-curd1.jpg", id :15},
    {pName:"Dodla Small Milk", price:"10", size:"220 ml", img:"d-smilk.jpg", id :16},
    {pName:"Dodla Small Curd", price:"10", size:"130 ml", img:"d-scurd.jpg", id :17},{pName:"akash"}
]


function addCart(id,btn){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    quant = btn.parentElement.previousElementSibling.firstElementChild.value
    if (quant==0){
        alert("Quantity Cannot be empty")
    }else{
        existing = cart.find(ite => ite.id === id)
        if(existing){
            existing.quantity = quant
        } else{
            cart.push({id:id, quantity:`${quant}`});
        }
        localStorage.setItem("cart",JSON.stringify(cart))
    }
}

function displayCart(){
    let cart = JSON.parse(localStorage.getItem("cart"))
    newProducts.forEach(item => {
        cart.forEach(cartele => {
            if (item.id == cartele.id){
                let html =`<div class="cart-item">
                            <div class="img-div">
                                <img src="../product-img/${item.img}" class="item-img">
                            </div>
                            <div class="details-div">
                                <p class="item-name">${item.pName}</p>
                                <p class="item-price">${item.size}</p>
                                <p class="item-price">Rs. ${item.price}</p>
                                <div class="iq-div">
                                    <button class="minus" onclick="minus(this,${item.id})">-</button>
                                    <input type="number" class="item-quantity" value="${Number(cartele.quantity)}">
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

function plus(p,id){
    let cart = JSON.parse(localStorage.getItem("cart"))
    let x = Number(p.previousElementSibling.value)
    x += 1
    p.previousElementSibling.value = x 
    cart.forEach(e=>{
        if(e.id==id){
            e.quantity = x
        }
    })
    localStorage.setItem("cart",JSON.stringify(cart)) 
}
function minus(m,id){
    let cart = JSON.parse(localStorage.getItem("cart"))
    let x = Number(m.nextElementSibling.value)
    x -= 1
    m.nextElementSibling.value = x
    cart.forEach(e=>{
        if(e.id==id){
            e.quantity = x
        }
    })
    localStorage.setItem("cart",JSON.stringify(cart))
    if(x==0){
        removeite(id)
    }   
}
function removeite(id){
    console.log(id)
    let cart = JSON.parse(localStorage.getItem("cart"))
    console.log(cart);
    cart = cart.filter(i => i.id !== id)   
    console.log(cart);
    localStorage.setItem("cart",JSON.stringify(cart))
    location.href="cart.html"
}

window.onload = displayCart()