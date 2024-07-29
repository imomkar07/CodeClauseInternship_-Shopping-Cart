import cart from "./cart.js";
import products from "./product.js";

let app = document.querySelector('#app');
let temporaryContent = document.querySelector('#temporaryContent');

const loadTemplate = () =>{
    fetch('/template.html')
    .then(Response => Response.text())
    .then(html => {
        app.innerHTML = html;
        let contentTab = document.querySelector('#contentTab');
        contentTab.innerHTML = temporaryContent.innerHTML;
        temporaryContent.innerHTML=null;
        cart();
        initApp();
    })
}

loadTemplate();
const initApp = () =>{
    let listProduct =document.querySelector('.listProduct');
    listProduct.innerHTML = null;
    products.forEach(product => {
        let newProduct = document.createElement('div');
        newProduct.classList.add('item');
        newProduct.innerHTML=
        `
           <a href="/detail.html?id=${product.id}">
           <img src="${product.image}"/>
           </a>
           <h2>${product.name}</h2>
           <div class="price">$${product.price}</div>
           <button class="addCart"
            data-id = "${product.id}">
            Add To Cart
           </button>

        `;
        listProduct.appendChild(newProduct);
     });

}