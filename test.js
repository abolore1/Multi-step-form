const tRate = document.querySelectorAll(".t-rate");
const mainContainer1 = document.querySelector(".main-container1");
const personalBox = document.querySelector(".one");
const selectPlan = document.querySelector(".two");
const addOns = document.querySelector(".three");
const finishingUp = document.querySelector(".four");
const thankYou = document.querySelector(".five");

const goBack = document.querySelector("#go-back");
const goBackFor2 = document.querySelector("#go-back-for2");
const changeArcade = document.querySelector("#change-arcade");

const tab = document.querySelectorAll(".tab");
const planBox = document.querySelectorAll(".plan-boxes");
const planBox3 = document.querySelectorAll(".plan-boxes3");
const toggleSwitch = document.querySelector("#switch");
const nextBtn = document.querySelector("#next-btn");
const nextBtnFor3 = document.querySelector("#next-btn-for3");
const nextBtnFor4 = document.querySelector("#next-btn-for4");
const errorMsg = document.querySelector("#error-mgs");
const confirmBtn = document.querySelector("#confirm-btn");
const free = document.querySelectorAll(".free");
const monthToYear = document.querySelector(".mth-to-yr");
const monthly = document.querySelectorAll(".monthly");
const headn = document.querySelectorAll(".plans>h4");
const pickaddOn = document.querySelectorAll(".pick-addOn");
const inputField = document.querySelectorAll(".p-input");

personalBox.style.display = "block";
inputField[0].focus();
nextBtnFor3.style.display = "none";
nextBtnFor4.style.display = "none";
// goBackFor2.style.display='none';

// firstStep = parentDiv.children[0]

let counter = 0;
let reset = 0;
let backCounter = 4;
let threeTo4Counter = 0;
let backOfThreeTo4Counter = 0;

if (tab[0].textContent == 1) {
  if (counter == 0) {
    //  MOVING TO TAB 2
    nextBtn.addEventListener("click", () => {
      console.log("MOVED TO TAB 2");
      if (
        !inputField[0].value ||
        !inputField[1].value ||
        !inputField[2].value
      ) {
        errorMsg.style.display = "block";
        inputField.forEach(
          (field) => (field.style.border = "1px solid #e35252")
        );
        setTimeout(() => {
          inputField.forEach((field) => (field.style.border = ""));
        }, 3000);

        setTimeout(() => {
          errorMsg.style.display = "none";
        }, 3000);
      } else {
        console.log(++counter);
        // Emptying fields
        inputField[0].value = "";
        inputField[1].value = "";
        inputField[2].value = "";

        tab[0].style = `background:transparent;color:white`;
        tab[1].style = `color: hsl(213, 96%, 18%);background:#bfe2fd;`;

        nextBtn.style.display = "none";
        nextBtnFor3.style.display = "block";

        selectPlan.style.display = "block";
        goBack.style.display = "block";
        finishingUp.style.display = "none";
        addOns.style.display = "none";
        thankYou.style.display = "none";
        personalBox.style.display = "none";

        goBack.addEventListener("click", () => {
          counter = reset;
          console.log("Resetting Counter:" + counter);

          tab[0].style = `color: hsl(213, 96%, 18%);background:#bfe2fd;`;
          tab[1].style = `background:transparent;color:white`;
          tab[2].style = `background:transparent;color:white`;
          tab[3].style = `background:transparent;color:white`;

          nextBtn.style.display = "block";
          personalBox.style.display = "block";
          nextBtnFor3.style.display = "none";
          selectPlan.style.display = "none";
          addOns.style.display = "none";
          finishingUp.style.display = "none";
          thankYou.style.display = "none";

          clearBorder();
        });

        planBox.forEach((box) => {
          box.addEventListener("mouseenter", handleBoxHover);

          box.addEventListener("mouseleave", handleBoxHover); //ontouchstart

          function handleBoxHover(e) {
            const box = e.target;
            if (e.type === "mouseenter")
              box.style = `background:hsl(216, 29%, 97%);border:1px solid #473dff`;
            else if (e.type === "mouseleave")
              box.style = `background:'';border:1px solid none`;
          }
        });
      }
    }); // TAB2 ENDS HERE

    toggleCounter = reset;
    toggleSwitch.addEventListener("click", () => {
      ++toggleCounter;
      if (toggleCounter == 1) {
        free.forEach((fr) => (fr.style.display = "block"));
        headn.forEach((hd) => (hd.style.marginTop = "-5px"));
      }
      if (toggleCounter == 2) {
        free.forEach((fr) => (fr.style.display = "none"));
        toggleCounter = reset;
      }
    });
  }
  //  Styling the inputs border
  inputField.forEach((input) => {
    input.addEventListener("change", (e) => {
      e.target.style.border = "1px solid #473dff";
      // console.log(e.target.value)
    });
  });
}

if (tab[1].textContent == 2) {
  nextBtnFor3.addEventListener("click", () => {
    //         //  MOVING TO TAB 3
    ++counter;
    // goBackFor2.style.display='block';
    console.log("MOVED TO TAB 3:" + counter);
    if (counter == 2) {
      tab[0].style = ` background:transparent;color:white`;
      tab[1].style = ` background:transparent;color:white`;
      tab[2].style = ` color: #02295a;background:#bfe2fd;`;

      addOns.style.display = "block";
      goBackFor2.style.display = "block";
      goBack.style.display = "none";
      personalBox.style.display = "none";
      selectPlan.style.display = "none";
      finishingUp.style.display = "none";
      thankYou.style.display = "none";
    }

    if (counter == 3) {
      tRate[0].innerText = "+$10/yr";
      tRate[1].innerText = "+$20/yr";
      tRate[2].innerText = "+$20/yr";
      tab[1].style = ` background:transparent;`;

      addOns.style.display = "block";
      nextBtnFor4.style.display = "block";

      nextBtnFor3.style.display = "none";
      selectPlan.style.display = "none";
      personalBox.style.display = "none";
      finishingUp.style.display = "none";
      thankYou.style.display = "none";
    }
  });

  goBackFor2.addEventListener("click", () => {
    console.log(--counter);
    if (counter == 2) {
      alert("hello2");
      tab[0].style = ` background:transparent;color:white`;
      tab[2].style = ` background:transparent;color:white`;
      tab[1].style = ` color: #02295a;background:#bfe2fd;`;

      tRate[0].innerText = "+$10/mo";
      tRate[1].innerText = "+$2/mo";
      tRate[2].innerText = "+$2/mo";

      nextBtn.style.display = "block";
      nextBtnFor3.style.display = "none";
      nextBtnFor4.style.display = "none";

      nextBtn.addEventListener("click", () => {
        alert("BACK OF 2 TO 3");
        tab[0].style = ` background:transparent;color:white`;
        tab[1].style = ` background:transparent;color:white`;
        tab[2].style = ` color: #02295a;background:#bfe2fd;`;

        addOns.style.display = "block";
        // goBackFor2.style.display = "block";
        goBack.style.display = "none";
        counter=reset
      });
    }

    if (counter == 1) {
      // tab[0].style = ` background:transparent;color:white`
      tab[1].style = ` background:transparent;color:white`;
      tab[0].style = ` color: #02295a;background:#bfe2fd;`;

      personalBox.style.display = "block";
      addOns.style.display = "none";
      goBackFor2.style.display = "none";
      clearBorder();

      counter = reset;
      console.log("checking reset" + counter);
    }
  });
}

function clearBorder() {
  inputField.forEach((input) => {
    input.style.border = "1px solid hsl(229, 24%, 87%)";
  });
}

// if(tab[2].textContent==3){
//   //  MOVING TO TAB 4
//   nextBtn.addEventListener('click',()=>{
//       if (counter==4) {
//         selectPlan.style.display = 'none'
//         tab[1].style = 'background:transparent'
//         tab[2].style = 'background:transparent'
//         tab[3].style = `color: #02295a;background:#bfe2fd;`

//         finishingUp.style.display='block';
//         confirmBtn.style.display='block';
//         nextBtn.style.display='none';
//         selectPlan.style.display='none';
//         addOns.style.display='none';
//         personalBox.style.display='none';

//         console.log('MOVED TO FOUR');
//       }

//   })

//   if (backCounter==4) {
//     goBack.addEventListener('click',()=>{
//       tab[0].style = 'background:transparent;color:white';
//       tab[1].style = 'background:transparent';
//       tab[2].style = `color: #02295a;background:#bfe2fd;`;
//       tab[3].style = 'background:transparent';

//       addOns.style.display ='block';
//       selectPlan.style.display='none';
//       personalBox.style.display='none';
//       finishingUp.style.display='none';
//       thankYou.style.display='none';
//       confirmBtn.style.display='none';
//       console.log('Back Counter',--backCounter)

//       // Works for Next to 4 when you're in 4 previously
//       nextBtn.addEventListener('click',()=>{
//         ++threeTo4Counter
//         if(threeTo4Counter==1){
//           tab[1].style = 'background:transparent;color:white';
//           tab[2].style = 'background:transparent';
//           tab[3].style = `color: #02295a;background:#bfe2fd;`;

//            finishingUp.style.display='block';

//            selectPlan.style.display='none';
//            personalBox.style.display='none';
//            addOns.style.display='none'
//            thankYou.style.display='none'
//         }
//         if(threeTo4Counter==2){
//           tab[1].style = 'background:transparent;color:white';
//           tab[2].style = 'background:transparent';
//           tab[3].style = `color: #02295a;background:#bfe2fd;`;

//            thankYou.style.display='block';
//            finishingUp.style.display='none';
//            selectPlan.style.display='none';
//            personalBox.style.display='none';
//            addOns.style.display='none'
//         }
//       })
//     });
//   }

//   goBack.addEventListener('click',()=>{
//     if (backCounter==2) {

//       console.log('BACK2 OF 3')
//       // tab[0].style = `color: #02295a;background:#bfe2fd;`;
//       tRate[0].innerText= '+$1/mo'
//       tRate[1].innerText= '+$2/mo'
//       tRate[2].innerText= '+$2/mo'
//       // tab[1].style = ` background:transparent;`;

//       // addOns.style.display='block';
//       // selectPlan.style.display='none';
//       // personalBox.style.display='none';
//      }

//      nextBtn.addEventListener('click',()=>{
//        ++backOfThreeTo4Counter
//       console.log('Second of three to Four'+backOfThreeTo4Counter)
//       if(backOfThreeTo4Counter==1){
//           finishingUp.style.display='block';
//           thankYou.style.display='none';
//       }
//       if(backOfThreeTo4Counter==2){
//           goBack.style.display='none';
//           nextBtn.style.display='none';
//       }
//      })

//     // nextBtn.addEventListener('click',()=>{
//     //    if(backOfThreeTo4Counter==2){
//     //     console.log('Second of three to Four'+backOfThreeTo4Counter)
//     //     thankYou.style.display='block';
//     //     finishingUp.style.display='none';
//     //   }
//     //  })
//   });

//     //CHANGING ARCADE
//       changeArcadeCounter = 0
//       resetArcade = 0
//       changeArcade.addEventListener('click',()=>{
//         ++changeArcadeCounter
//           if(changeArcadeCounter==1) {
//             monthToYear.textContent = monthToYear.textContent.replace(/month/g,'year')
//             monthly[0].innerText = '$90/yr'
//             monthly[1].innerText = '$10/yr'
//             monthly[2].innerText = '$20/yr'
//             monthly[3].innerText = '$120/yr'
//           }

//           if (changeArcadeCounter==2) {
//               monthToYear.textContent = monthToYear.textContent.replace(/year/g,'month')
//               monthly[0].innerText = '$9/yr'
//               monthly[1].innerText = '$1/yr'
//               monthly[2].innerText = '$2/yr'
//               monthly[3].innerText = '$12/yr'

//             changeArcadeCounter = resetArcade

//           }
//       });

// }

// if(tab[3].textContent==4){
//   //  MOVING TO TAB THANK YOU
//   confirmBtn.addEventListener('click',()=>{
//     if(counter==4){
//         thankYou.style.display='block';
//         confirmBtn.style.display='none';
//         goBack.style.display='none';
//     }
//   })
// }

//   goBack.addEventListener('click',()=>{

//     if(backCounter==1) {

//     //  console.log('HELLO, I AM BACK TO 2')

// //       tab[1].style = 'background:transparent';
//       tab[2].style = 'background:transparent';
// //       tab[3].style = 'background:transparent';
//       tab[1].style = `color: #02295a;background:#bfe2fd;`

//       selectPlan.style.display='block';
//       addOns.style.display ='none';
//       finishingUp.style.display='none';
//       thankYou.style.display='none';
//       personalBox.style.display='none';
//       // goBack.style.display='none';

//    }
//  });

// goBack.addEventListener('click',()=>{
//   nextBtn.style.display='block'
//   if(backCounter==0) {

//         console.log('Finally Back to 1')
//         tab[3].style = 'background:transparent';
//         tab[2].style = 'background:transparent';
//         tab[1].style = 'background:transparent;color:white';
//         tab[0].style = `color: #02295a;background:#bfe2fd;`

//           // selectPlan.style.display='block';
//           nextBtn.style.display ='block'; //I NEED THIS
//           personalBox.style.display='block';
//           addOns.style.display ='none';
//           goBack.style.display ='none';
//          // finishingUp.style.display='none';
//         // thankYou.style.display='none';
//          console.log(`WHAT IS VALUE'${backCounter}`)

//       }

//        counter = 0;
//       //  backCounter = 0;
//       //  threeTo4Counter = 0;
//       // backOfThreeTo4Counter = 0;

// //  if(backCounter==0){
// //   nextBtn.addEventListener('click',()=>{

// //     console.log('111')
// //   })
// //  }

//  });
