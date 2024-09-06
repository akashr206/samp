

let categoryItems = [
    {cName:"Nandini",page:"nandini.html",img:"../logo/nandini.jpg"},
    {cName:"Dodla",page:"dodla.html",img:"../logo/dodla.jpg"},
    {cName:"Milk",page:"milk.html",img:"../logo/milk.jpg"},
    {cName:"Curd",page:"nandini.html",img:"../logo/curd.jpg"},
    {cName:"Others",page:"nandini.html",img:"../logo/other.jpg"},
]
categoryItems.forEach(category => {
    let cLink =`<a href="${category.page}" class="category">
                    <div class="cat-img-div">
                        <img src="${category.img}" class="cat-img">
                    </div> 
                    <div class="cat-details">
                        <p class="cat-name">${category.cName}</p>
                    </div>
                </a>`

    let categories = document.querySelector(".categories")
    categories.innerHTML += cLink
});

