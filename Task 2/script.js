/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
// let count = 0;

const counter =  document.getElementById('btn_state');
const buttonClick = document.getElementById('btn_element');

// counter.addEventListener('click', function() {
//     count += 1;
//     buttonClick.textContent = count;
// });

buttonClick.addEventListener('click', countUp);

function countUp() {
    counter.innerHTML++;
}