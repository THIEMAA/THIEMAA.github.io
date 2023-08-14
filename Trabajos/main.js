
    const imagen = document.querySelector('img');
    const titulo = document.querySelector('h3');
    const descripcion = document.querySelector('p');
    const precio = document.querySelector('small');

    const URL = 'https://fakestoreapi.com/products';
    
    fetch(URL)
        .then(response => response.json())
        .then(data => {

            titulo.innerHTML = data[0].title;
            imagen.src = data[0].image;
            descripcion.innerHTML = data[0].description;
            precio.innerHTML = data[0].price;            
})