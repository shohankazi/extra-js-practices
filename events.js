// Option 1: directly set on the HTML element


// Option 2 : Add onclick function
function makeRed() {
    document.body.style.backgroundColor = 'red';
}
// Option 3 :
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
// Option 3 another :
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple()
    {
        document.body.style.backgroundColor = 'purple';
    }