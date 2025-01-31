let productId = 1163; /*skriver product ideet som en værdi*/
let productContainer = document.querySelector(".productContainer");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`) /* laver en fetch(asynkron metode) og linker til API(json data)*/
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = ` <div class="produkt_information">
            <img src="img/${productId}.webp" alt="" class="produkt_billede">

            <div class="produkt_information_child">
                <h2>Product Infomation</h2>

                <div class="tekst_stykke">
                    <h3>Model Name</h3>
                    <p>${data.productdisplayname}</p>
                    <h3>Color</h3>
                    <p>${data.colour1}</p>
                    <h3>Inventory Number</h3>
                    <p>${data.id}</p>
                </div>


                <div class="tekst_stykke">
                    <h2>Brand</h2>
                    <p>${data.brandbio}</p>
                </div>

            </div>

            <div class="grey_box">
                <div class="tekst_stykke">
                    <h2>${data.productdisplayname}</h2>
                </div>


                <div class="tekst_stykke">
                    <p>${data.brandbio}</p>
                    <p>Choose a Size</p>
                </div>
                <label for="størrelse">Vælg en tøjstørrelse:</label>
                <select id="størrelse" name="størrelse">
                    <option value="xs">XS</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                    <option value="xxl">XXL</option>
                </select>


                <a href="" class="basket_knap">Add to basket</a>

            </div>
        </div>`;
  });
