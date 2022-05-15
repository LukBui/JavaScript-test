/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

fetch('https://api.github.com/users')
    .then(response => response.json())
    .then((data) => {
        appendData(data);
    });

const output = document.getElementById('output');

output.addEventListener('click', function() {
    for(let i = 0; i < data.length; i++) {
        const login = document.createElement('div');
        login.innerHTML = 'Login: ' + data[i].brand;
        output.appendChild(login)
    }
})