let nProducts = [
    {pName:"Nandini Blue", price:"24", size:"500 ml", img:"pro-blue.jpg"},
    {pName:"Nandini Orange", price:"27", size:"500 ml", img:"pro-orange.jpg"},
    {pName:"Nandini Family", price:"27", size:"500 ml", img:"pro-nsp.jpg"},
    {pName:"Nandini Green", price:"26", size:"500 ml", img:"pro-green.jpg"},
    {pName:"Nandini Samrudhi", price:"28", size:"500 ml", img:"pro-sam.jpg"},
    {pName:"Nandini Orange-1L", price:"50", size:"1 Litre", img:"pro-orange1.jpg"},
    {pName:"Nandini Blue-1L", price:"44", size:"1 Litre", img:"pro-blue1.jpg"},
    {pName:"Nandini Curd", price:"26", size:"500 ml", img:"pro-curd.jpg"},
    {pName:"Nandini Curd Small", price:"12", size:"200 ml", img:"pro-curd-s.jpg"},
    {pName:"Nandini Curd-1L", price:"50", size:"1 Litre", img:"pro-curd1.jpg"},
]

nProducts.forEach(product => {
    let html = `<div class="product">
                    <div class="pro-img-div">
                        <img src="../product-img/${product.img}" class="pro-img" id ="b500-img">
                    </div>
                    <div class="pro-details-div">
                        <div class="pro-name-div">
                            <p class="pro-name" id="b500-name">${product.pName}</p>
                            <p class="pro-price" id="b500-price">Rs. ${product.price}</p>
                            <p class="pro-price" id="b500-size">${product.size}</p>
                        </div>
                        <div class="pro-quantity-div">
                            <input class="quantity" id="b500-quantity" type="number" placeholder="Quantity">
                        </div>
                        <div class="add-cart-div">
                            <button class="add-cart" id="b500">Add to Cart</button>
                        </div>
                    </div>
                </div>`

    let products = document.querySelector(".products-div")
    products.innerHTML+=html
});