let dProducts = [
    {pName:"Dodla Normal", price:"25", size:"500 ml", img:"d-blue.jpg", id :11},
    {pName:"Dodla FullCream", price:"35", size:"500 ml", img:"d-fcm.jpg", id :12},
    {pName:"Dodla Curd", price:"32", size:"500 ml", img:"d-curd.jpg", id :13},
    {pName:"Dodla Fullcream-1L", price:"70", size:"1 Litre", img:"d-fcm.jpg", id :14},
    {pName:"Dodla Curd-1L", price:"64", size:"1 Litre", img:"d-curd1.jpg", id :15},
    {pName:"Dodla Small Milk", price:"10", size:"220 ml", img:"d-smilk.jpg", id :16},
    {pName:"Dodla Small Curd", price:"10", size:"130 ml", img:"d-scurd.jpg", id :17},
]

dProducts.forEach(product => {
    let html = `<div class="product">
                    <div class="pro-img-div">
                        <img src="../product-img/${product.img}" class="pro-img" id ="b500-img">
                    </div>
                    <div class="pro-details-div">
                        <div class="pro-name-div">
                            <p class="pro-name">${product.pName}</p>
                            <p class="pro-price">Rs. ${product.price}</p>
                            <p class="pro-price">${product.size}</p>
                        </div>
                        <div class="pro-quantity-div">
                            <input class="quantity" min="1" type="number" placeholder="Quantity">
                        </div>
                        <div class="add-cart-div">
                            <button class="add-cart" onclick="addCart(${product.id},this)">Add to Cart</button>
                        </div>
                    </div>
                </div>`

    let products = document.querySelector(".products-div")
    products.innerHTML+=html
});
let searchin = document.querySelector(".search")

function search(){
    let searchQuery = document.querySelector("#search")
    document.querySelector(".products-div").innerHTML=""
    dProducts.forEach(product => {
        if(product.pName.toLowerCase().includes(searchQuery.value.toLowerCase())){
            let html = `<div class="product">
                    <div class="pro-img-div">
                        <img src="../product-img/${product.img}" class="pro-img" id ="b500-img">
                    </div>
                    <div class="pro-details-div">
                        <div class="pro-name-div">
                            <p class="pro-name">${product.pName}</p>
                            <p class="pro-price">Rs. ${product.price}</p>
                            <p class="pro-price">${product.size}</p>
                        </div>
                        <div class="pro-quantity-div">
                            <input class="quantity" min="1" type="number" placeholder="Quantity">
                        </div>
                        <div class="add-cart-div">
                            <button class="add-cart" onclick="addCart(${product.id},this)">Add to Cart</button>
                        </div>
                    </div>
                </div>`
        document.querySelector(".products-div").innerHTML += html
        } 
    });
}


searchin.addEventListener("keydown",function (e){
    if(e.key === "Enter"){
        search()
    }
})