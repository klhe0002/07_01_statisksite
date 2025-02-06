const mycategory = new URLSearchParams(window.location.search).get("category");

const productContainer = document.querySelector(".product_list_container");

// overskrift.innerHTML = mycategory;

const overskrift = document.querySelector("h1");
overskrift.innerHTML = mycategory;

fetch(`https://kea-alt-del.dk/t7/api/products?category=${mycategory}`) /* laver en fetch(asynkron metode) og linker til API(json data)*/
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  const markup = data
    .map(
      (product) =>
        `
       <a href="produkt.html?id=${product.id}">
      <div class="produkt">
  <div class="img_container">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="">
            <h2>${product.productdisplayname}</h2>
            <div class="${product.discount && "discount"} ${!product.discount && "hide"}">-${product.discount}%</div>
            <div class="${product.soldout && "sold_out_box"} ${!product.soldout && "hide"}">Sold out</div>
        </div>
                <div>
                    <h3>${product.articletype} ${product.brandname}</h3>
                </div>

                 <div>
                    <p>prev. ${product.price}</p>
                    <p>Now DKK ${product.price}</p>
                </div>
                 </div>
    
</a>`
    )
    .join("");
  productContainer.innerHTML = markup;
}
