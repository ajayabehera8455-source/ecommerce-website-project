const products = [
{
id:1,
name:"iPhone 15 Pro",
price:129999,
image:"https://images.unsplash.com/photo-1695048133142-1a20484bce71?w=600",
description:"Apple A17 Pro, 256GB Storage"
},
{
id:2,
name:"Samsung Galaxy S23",
price:74999,
image:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600",
description:"Snapdragon 8 Gen 2, 128GB"
},
{
id:3,
name:"OnePlus 11",
price:56999,
image:"https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600",
description:"16GB RAM, 256GB Storage"
},
{
id:4,
name:"HP Pavilion Laptop",
price:54999,
image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600",
description:"16GB RAM, 512GB SSD"
},
{
id:5,
name:"Sony Headphones",
price:6999,
image:"https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600",
description:"Noise Cancelling Headphones"
},
{
id:6,
name:"Boat Smart Watch",
price:2499,
image:"https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600",
description:"Fitness Tracking Smartwatch"
},
{
id:7,
name:"Titan Analog Watch",
price:3999,
image:"https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600",
description:"Premium Men's Watch"
},
{
id:8,
name:"Nike Running Shoes",
price:3499,
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
description:"Lightweight Sports Shoes"
},
{
id:9,
name:"Adidas Sneakers",
price:4299,
image:"https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600",
description:"Comfort Casual Sneakers"
},
{
id:10,
name:"Formal Black Shoes",
price:2199,
image:"https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600",
description:"Office Leather Shoes"
},
{
id:11,
name:"Men Casual Shirt",
price:899,
image:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600",
description:"Slim Fit Cotton Shirt"
},
{
id:12,
name:"Men T-Shirt",
price:599,
image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
description:"Printed Casual T-Shirt"
},
{
id:13,
name:"Women Party Dress",
price:1499,
image:"https://images.unsplash.com/photo-1495121605193-b116b5b09a74?w=600",
description:"Stylish Evening Dress"
},
{
id:14,
name:"Women Handbag",
price:1599,
image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
description:"Premium Leather Handbag"
},
{
id:15,
name:"Kids Sneakers",
price:1299,
image:"https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600",
description:"Comfort Sports Shoes for Kids"
},
{
id:16,
name:"Canon DSLR Camera",
price:48999,
image:"https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=600",
description:"24MP Professional Camera"
},
{
id:17,
name:"Samsung 55\" Smart TV",
price:45999,
image:"https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600",
description:"4K UHD Smart Television"
},
{
id:18,
name:"Bluetooth Speaker",
price:2999,
image:"https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600",
description:"Portable Wireless Speaker"
},
{
id:19,
name:"Men Jeans",
price:1499,
image:"https://images.unsplash.com/photo-1542272604-787c3835535d?w=600",
description:"Slim Fit Blue Jeans"
},
{
id:20,
name:"Women Sandals",
price:999,
image:"https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600",
description:"Stylish Flat Sandals"
}
];

const grid = document.getElementById("productGrid");

if(grid){
grid.innerHTML = products.map(p=>`
<div class="product-card">
<img src="${p.image}">
<h3>${p.name}</h3>
<div class="price">₹${p.price}</div>
<div class="btn-group">
<button class="btn cart" onclick="addToCart()">Add to Cart</button>
<button class="btn buy" onclick="buyNow(${p.id})">Buy Now</button>
</div>
</div>
`).join("");
}

function addToCart(){
alert("Product Added To Cart 🛒");
}

function buyNow(id){
localStorage.setItem("selectedProduct", JSON.stringify(products.find(p=>p.id===id)));
window.location.href="order.html";
}
