/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch('./cars.json')
    .then((res) => res.json())
    .then((data) => {
        appendData(data);
    });

function appendData(data) {
    const output = document.getElementById('output');
    for(let i = 0; i < data.length; i++) {
        const containerBrand = document.createElement('div');
        containerBrand.innerHTML = 'Brand: ' + data[i].brand;
        output.appendChild(containerBrand)
    }
    for(let i = 0; i < data.length; i++) {
        const containerModel = document.createElement('div');
        containerModel.innerHTML = 'Model: ' + data[i].models;
        output.appendChild(containerModel)
    }
}