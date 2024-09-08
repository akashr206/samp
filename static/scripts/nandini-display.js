let nProducts = [
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
]

nProducts.forEach(product => {
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
    nProducts.forEach(product => {
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
