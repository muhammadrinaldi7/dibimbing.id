const product = document.getElementById("product");

const getData = async (url, callback) => {
    const res = await fetch(url);
    const data = await res.json();
    callback(data);
};

getData('https://fakestoreapi.com/products',(data) => {
    data?.map((item) => {
        product.innerHTML += `
        <div class="card">
        <img src="${item.image}" style="width: 200px;" alt="${item.title}">
        <h1>${item.title}</h1>
        </div>
        `;  
    });
  
});