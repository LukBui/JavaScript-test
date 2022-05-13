/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const button = document.getElementById('submit-btn');

button.addEventListener('click', (event) => {
    event.preventDefault();
    const input = document.getElementById('search').value;
    document.getElementById('Pounds').innerHTML = input * 2.2046 + ' lb';
    document.getElementById('Grams').innerHTML = input / 0.0010000 + ' g';
    document.getElementById('Ounces').innerHTML = input * 35.274 + ' oz';
});

// function convertKilo(value) {
//     document.getElementById('Pounds').innerHTML = value * 2.2046;
//     document.getElementById("Grams").innerHTML = value / 0.0010000;
//     document.getElementById("Ounces").innerHTML = value * 35.274;
// }



