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
        `<div class="produkt">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="">
                 
                <div>
                    <h2>${product.productdisplayname}</h2>
                    <h3>${product.articletype} ${product.brandname}</h3>
                </div>

                <p>${product.price}</p>

                 <div>
                    <p>prev. ${product.price}</p>
                    <p>Now DKK 1560</p>
                    <div class="discount">${product.discount}</div>
                </div>

                   <a href="produkt.html">Read More</a>
                
                 <!-- Hvis produktet er udsolgt, tilføj "Sold Out"-boks -->

          ${
            product.soldout === 1
              ? `
          <div class="sold_out_box">
              <p>Sold Out</p>
          </div>`
              : ""
          }

    </div>`
    )
    .join("");
  productContainer.innerHTML = markup;
}
