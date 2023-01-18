const buttonViewAll = document.querySelector('#viewAll')

const getData = async function (url) {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data);
    return data;
}

const postData = async function (url, data) {
    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })

    const message = await res.json()
    console.log(message);
    return message;
}


const addProdus = async (ev) => {
    ev.preventDefault();

    let produs = {
        nume: document.querySelector('#nume').value,
        pret: document.querySelector('#pret').value,
        descriere: document.querySelector('#descriere').value
    }

    await postData('http://localhost:8080/api/produse/addProdus', produs)
    document.forms[0].reset();

}

document.querySelector('#btn-submit').addEventListener('click', addProdus);

let wishlist = JSON.parse(localStorage.getItem('Wishlist'));
const panel = document.querySelector('.panel')
console.log(panel);


const viewProduse = async (ev) => {
    // ev.preventDefault();
    panel.innerHTML = ""
    const produse_api = (await getData("http://localhost:8080/api/produse/getProduse")).produse
    if (produse_api.length != 0) {
        for (var i = 0; i < produse_api.length; i++) {
            console.log(produse_api[i].nume);
            panel.insertAdjacentHTML('beforeend', `<p><span>${produse_api[i].nume}</span>    <span>${produse_api[i].pret}</span>   <span>${produse_api[i].descriere}</span></p>`)
        }
    }
    else {
        alert("Nu ai niciun produs in wishlist")

    }

}



document.querySelector('#viewAll').addEventListener('click', viewProduse);


