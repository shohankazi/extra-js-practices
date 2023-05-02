// Option 1: directly set on the HTML element

// <button onclick="console.log('I am clicked!');">Another button </button>

// Option 2 : Add onclick function
function makeRed() {
  document.body.style.backgroundColor = "red";
}
// Option 3 :
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}
// Option 3 another :
const purpleButton = document.getElementById("make-purple");
purpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

// Option 4
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "pink";
});
// Option 4 another 
const makeGreenButton = document.getElementById('make-green');
    makeGreenButton.addEventListener('click',function(){
        document.body.style.backgroundColor = 'green';
    })
// Option 4 Final
