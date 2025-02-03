const listContainer = document.querySelector(".category_list_container");

fetch(`https://kea-alt-del.dk/t7/api/products/`) /* laver en fetch(asynkron metode) og linker til API(json data)*/
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  let markup = "";
  products
    .map((product) => {
      markup += `<div class="produkt">
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
                
                 <!-- Hvis produktet er udsolgt, tilføj "Sold Out"-boks -->
          ${
            product.soldout === 1
              ? `
          <div class="sold_out_box">
              <p>Sold Out</p>
          </div>`
              : ""
          }
       
            </div>`;
    })
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
