const month = document.querySelectorAll(".per-month");
const mainContainer1 = document.querySelector(".main-container1");
var components = document.getElementsByClassName("component");
const personalBox = document.querySelector(".one");
const selectPlan = document.querySelector(".two");
const addOns = document.querySelector(".three");
const plansin3 = document.querySelectorAll(".t-rate")
const finishingUp = document.querySelector(".four");
const thankYou = document.querySelector(".five");

const goBack = document.querySelector("#go-back");
const goBackFor2 = document.querySelector("#go-back-for2");
const doubleCheck = document.querySelectorAll(".double-check")

const tab = document.querySelectorAll(".tab");
const planBox = document.querySelectorAll(".plan-boxes");
const planBox3 = document.querySelectorAll(".plan-boxes3");
const toggleSwitch = document.querySelector("#switch");

const nextBtn = document.querySelector("#next-btn");
const nextBtn2 = document.querySelector("#next-btn2");

const errorMsg = document.querySelector("#error-mgs");
// const confirmBtn = document.querySelector("#confirm-btn");
const free = document.querySelectorAll(".free");
const monthToYear = document.querySelector(".mth-to-yr");
const monthly = document.querySelectorAll(".monthly");
const monthlyToYearly = document.querySelector("#monthly-to-yearly");
const headn = document.querySelectorAll(".plans>h4");
const pickaddOn = document.querySelectorAll(".pick-addOn");
const inputField = document.querySelectorAll(".p-input");


let currentComponent = 0;
const totalComponents = components.length;
// goBack.style.display='none';
nextBtn.style.display = 'none';



let arcadeAmount = 9;
let advancedAmount = 12;
let proAmount = 15;
let planType = 'mo';
let changeToggleState = false;

function validateComponent1() {

  if (!inputField[0].value) {
    inputField[0].style.border = "1px solid #e35252"
    errorMsg.style.display = "block";
  }
  if (!inputField[1].value) {
    inputField[1].style.border = "1px solid #e35252"
    errorMsg.style.display = "block";
  }
  if (!inputField[2].value) {
    inputField[2].style.border = "1px solid #e35252"
    errorMsg.style.display = "block";

    setTimeout(() => {
      inputField.forEach((field) => (field.style.border = ""));
    }, 3000);

    setTimeout(() => {
      errorMsg.style.display = "none";
    }, 3000);

  }
  if (inputField[0].value && inputField[1].value && inputField[2].value) {
    inputField[0].value = "";
    inputField[1].value = "";
    inputField[2].value = "";

    nextComponent();
  }

  setTimeout(() => {
    inputField[0].focus();
  }, 3000)
}


// Toggle on tab 2

toggleSwitch.addEventListener("click", () => {
  changeToggleState = !changeToggleState;

  changeToggleState == false ? planType = 'mo' : planType = 'yr';

  if (changeToggleState == true) {
    free.forEach((fr) => (fr.style.display = "block"));
    month[0].innerHTML = `$${arcadeAmount * 10}/${planType}`;
    month[1].innerHTML = `$${advancedAmount * 10}/${planType}`;
    month[2].innerHTML = `$${proAmount * 10}/${planType}`;

    plansin3[0].innerHTML = '$10 / yr'
    plansin3[1].innerHTML = '$20 / yr'
    plansin3[2].innerHTML = '$20 / yr'

    alert('Hello')
    headn.forEach((hd) => (hd.style.marginTop = "-5px"));
    // alert('MOVE TO YR:' + currentComponent++)
  }
  if (changeToggleState == false) {
    free.forEach((fr) => (fr.style.display = "none"));
    month[0].innerHTML = `$${arcadeAmount}/${planType}`;
    month[1].innerHTML = `$${advancedAmount}/${planType}`;
    month[2].innerHTML = `$${proAmount}/${planType}`;

  }
});

//RECONFIRMING ARCADE
doubleCheck.forEach(reconfirm => {
  currentComponent = 1;
  showComponent(currentComponent)
  reconfirm.addEventListener('click', () => {
    currentComponent = 2;
    showComponent(currentComponent)
    if (currentComponent == 2) {

      nextBtn.innerHTML = 'Next Step';
      nextBtn.style.background = '#02295a';
      tab[1].style = ` color: #02295a;background:#bfe2fd;`;
      tab[3].style = ` color: #fff;background:transparent;`

    }

  });
})


pickaddOn.forEach(box => {
  box.addEventListener('change', (e) => {
    alert(`MOVE TO YR OF FOUR:${++currentComponent}`)
    obj = e.target
    obj.classList.add('red')
    if (obj.checked) {
      currentComponent = 5
      obj.parentNode.parentNode.style = 'background:#f5f7fa;border:1px solid #473dff;'
    }
    else {
      obj.parentElement.parentElement.style = 'background:""'
    }
  })
})


function showComponent(componentNumber) {

  console.log(totalComponents);
  for (let i = 0; i < totalComponents; i++) {

    components[i].style.display = "none";
  }
  document.getElementById(`component${componentNumber}`).style.display = "block";
  inputField[0].focus();

}




function nextComponent() {
  console.log("are you calling this?");
  if (currentComponent < totalComponents) {
    currentComponent++;
    showComponent(currentComponent);

  }
  goBack.style.display = 'block';
  if (currentComponent == 1) {
    tab[0].style = ` color: #02295a;background:#bfe2fd;`;
    tab[1].style = ` background:transparent;color:white;`;
    nextBtn.style.display = 'block';

  }
  if (currentComponent == 2) {
    tab[0].style = ` background:transparent;color:white`;
    tab[1].style = ` color: #02295a;background:#bfe2fd;`;
    // tab[2].style = ` background:transparent;color:white;`;
    nextBtn2.style.display = 'none';
    nextBtn.style.display = 'block';
  }
  if (currentComponent == 3) {
    tab[0].style = ` background:transparent;color:white`;
    tab[1].style = ` background:transparent;color:white;`;
    tab[2].style = ` color: #02295a;background:#bfe2fd;`;
    // alert(counter)

  }

  if (currentComponent == 4) {
    // alert('last'+currentComponent)
    nextBtn.innerHTML = 'Confirm'
    nextBtn.style.background = 'hsl(243, 100%, 62%)';
    tab[0].style = ` background:transparent;color:white;`;
    tab[1].style = ` background:transparent;color:white;`;
    tab[2].style = ` background:transparent;color:white;`;
    tab[3].style = ` color: #02295a;background:#bfe2fd;`;
  }

  // if (currentComponent == 4) {

  //   tab[0].style = ` background:transparent;color:white;`;
  //   tab[1].style = ` background:transparent;color:white;`;
  //   tab[2].style = ` background:transparent;color:white;`;
  //   tab[3].style = ` color: #02295a;background:#bfe2fd;`;
  // }

  if (currentComponent == 5) {
    nextBtn.style.display = 'none';
    goBack.style.display = 'none';
  }

}

function previousComponent() {
  if (currentComponent > 1) {
    currentComponent--;
    showComponent(currentComponent);
  }

  if (currentComponent == 1) {
    tab[0].style = ` color: #02295a;background:#bfe2fd;`;
    tab[1].style = ` background:transparent;color:white;`;
    tab[2].style = ` background:transparent;color:white;`;
    tab[3].style = ` background:transparent;color:white;`;

    goBack.style.display = 'none'
    nextBtn.style.display = 'none'
    // nextBtn2.style.display='block'
  }
  if (currentComponent == 2) {
    tab[0].style = ` background:transparent;color:white;`;
    tab[2].style = ` background:transparent;color:white;`;
    tab[3].style = ` background:transparent;color:white;`;
    tab[1].style = ` color: #02295a;background:#bfe2fd;`;

  }
  if (currentComponent == 3) {
    tab[0].style = ` background:transparent;color:white;`;
    tab[1].style = ` background:transparent;color:white;`;
    tab[2].style = `color: #02295a;background:#bfe2fd;`;
    tab[3].style = ` background:transparent;color:white;`;
  }
  if (currentComponent == 4) {
    tab[0].style = ` background:transparent;color:white;`;
    tab[1].style = ` background:transparent;color:white;`;
    tab[2].style = ` background:transparent;color:white;`;
    tab[3].style = `color: #02295a;background:#bfe2fd;`;

    nextBtn.style.background = '#02295a';
    nextBtn.innerHTML = 'Next Step'

  }
}

showComponent(currentComponent);

