const cardHolderName = document.querySelector("#cardHolderName");
const cardNumber = document.querySelector("#cardNumber");
const cardExpiryMonth = document.querySelector("#cardExpiryMonth");
const cardExpiryYear = document.querySelector("#cardExpiryYear");
const cardCvc = document.querySelector("#cardCvc");
const Mediv = document.querySelector("#spacer");
const cardExpMonthYearError = document.querySelector(".cardExpMonthYearError");
const cardCvcSpaceError = document.querySelector(".cardCvcSpaceError");
const cardNumberError = document.querySelector(".cardNumberError");

const form = document.querySelector("#form");

function formatCardNumber(input) {
  let output = "";
  let counter = 0;

  console.log("THe original input", input);

  for (let i = 0; i < input.length; i++) {
    ++counter;
    const char = input[i];
    console.log(`the index is ${i}, the value is ${char}`);
    if (counter === 4) {
      output += `${char} `;
      counter = 0;
    } else {
      output += char;
    }
  }

  console.log(output);

  return output;
}

cardHolderName.addEventListener("input", function (e) {
  const isMorethanfiftyCharacters = e.target.value.length > 20;
  const isequalorgreaterthantwenty = e.target.value.length >= 20;
  const isEmpty = e.target.value.length === 0;

  if (isequalorgreaterthantwenty) {
    Mediv.classList.add("hide");
  } else {
    Mediv.classList.remove("hide");
  }

  if (isMorethanfiftyCharacters) {
    // dont do anything
  } else if (isEmpty) {
    cardHolderNameplacement.innerText = "Ichie Agwu";
  } else {
    cardHolderNameplacement.innerText = e.target.value;
  }
});

cardNumber.addEventListener("input", function (e) {
  const isMorethanfiftyCharacters = e.target.value.length > 16;
  const isEmpty = e.target.value.length === 0;

  if (isMorethanfiftyCharacters) {
    // dont do anything
  } else if (isEmpty) {
    cardNumberplacement.innerText = "0000 0000 0000 0000";
  } else {
    cardNumberplacement.innerText = formatCardNumber(e.target.value);
  }

  const isNumber = /^[0-9]*$/.test(e.target.value);
  console.log({ isNumber });

  if (!isNumber) {
    cardNumberError.classList.remove("white");
    cardNumberError.classList.add("red");
    cardNumber.classList.add("borderLine");
  } else {
    cardNumberError.classList.add("white");
    cardNumberError.classList.remove("red");
    cardNumber.classList.remove("borderLine");
  }
});

cardExpiryMonth.addEventListener("input", function (e) {
  const isMorethanfiftyCharacters = e.target.value.length > 2;
  const isEmpty = e.target.value.length === 0;

  if (isMorethanfiftyCharacters) {
    // dont do anything
  } else if (isEmpty) {
    cardExpiryMonthplacement.innerText = "00";
  } else {
    cardExpiryMonthplacement.innerText = e.target.value;
  }
});

cardExpiryYear.addEventListener("input", function (e) {
  const isMorethanfiftyCharacters = e.target.value.length > 2;
  const isEmpty = e.target.value.length === 0;

  if (isMorethanfiftyCharacters) {
    // dont do anything
  } else if (isEmpty) {
    cardExpiryYearplacement.innerText = "00";
  } else {
    cardExpiryYearplacement.innerText = e.target.value;
  }
});

cardCvc.addEventListener("input", function (e) {
  const isMorethanfiftyCharacters = e.target.value.length > 3;
  const isEmpty = e.target.value.length === 0;

  if (isMorethanfiftyCharacters) {
    // dont do anything
  } else if (isEmpty) {
    cardCvcplacement.innerText = "000";
  } else {
    cardCvcplacement.innerText = e.target.value;
  }
});

// const elements = [cardHolderName, cardNumber,cardExpiryMonth, cardExpiryYear, cardCvc]

// elements.forEach((element)=>{

//     element.addEventListener('input', function(e){
//      const ouptputElement = document.querySelector(`#${element.id}_output`)

//      const isMorethanfiftyCharacters = e.target.value.length > 20
//      const isEmpty = e.target.value.length === 0;

//      if(isMorethanfiftyCharacters){
//     // dont do anything
//      }else if(isEmpty){
//         // ouptputElement.innerText = "Ichie Agwu"
//      }else{
//         ouptputElement.innerText = e.target.value

//      }
//     })
// })

// form.addEventListener('submit', function(e){
//     e.preventDefault();

//     console.log({
//         cardHolderName: cardHolderName.value,
//         cardNumber: cardNumber.value
//     })

// })

// form.addEventListener("submit" , function(e){
//     if(!back){
//         trada.appendChild("This page cannot be empty ")
//         tada.appendChild(trada)
//      }

//     const back = humo.elements.username.value;
//     const fack = humo.elements.number.value;
//     const pack = humo.elements.Exp.value;
//     const dack = humo.elements.mm1.value;
//     const kack = humo.elements.cvc.value;

//     humo.elements.username.value = '';
//     humo.elements.number.value = '';
//     humo.elements.Exp.value = '';
//     humo.elements.mm1.value = '';
//     humo.elements.cvc.value = '';

//     e.preventDefault();
//     console.log(back , fack ,pack , dack, kack);
//     // cardNum.elements.numb.value = "delete";
//     // cardName.elements.surg.value = "delete";
//     // const huy =document.querySelectorAll('input')[0]
//     // const guy =document.querySelectorAll('input')[1]
//     const inpo = document.querySelector('input')[0];
//     const inpo1 = document.querySelector('input')[1];
//     const inpo2 = document.querySelector('input')[2];
//     const inpo3 = document.querySelector('input')[3];
//     const inpo4 = document.querySelector('input')[4];

//     // cardNum.elements.numb.value ='';
//     // cardName.elements.surg.value = '';

//     cada.innerText = fack;
//     fada.innerText = back;
//     mada.innerText = pack;
//     dada.innerText = kack;
//     yada.innerText = `/${dack}`
//     console.log(back , fack ,pack , dack, kack)

//  })
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const cardExpiryInputValue = cardExpiryYear.value;
  const cardCvcInputValue = cardCvc.value;

  let isOk = false;

  if (!cardExpiryInputValue) {
    cardExpMonthYearError.classList.remove("white");
    cardExpMonthYearError.classList.add("red");
    cardExpiryYear.classList.add("borderLine");
    isOk = false;
  } else {
    isOk = true;
  }

  if (!cardCvcInputValue) {
    cardCvcSpaceError.classList.remove("white");
    cardCvcSpaceError.classList.add("red");
    cardCvc.classList.add("borderLine");
    isOk = false;
  } else {
    isOk = true;
  }

  //   } else if (!cardExpiryMonth.value) {
  //     cardExpMonthYearError.classList.remove("white");
  //     cardExpMonthYearError.classList.add("red");
  //     cardExpiryYear.classList.add("borderLine")

  //   }else if (!cardExpiryInputValue) {
  //     cardExpMonthYearError.classList.remove("white");
  //     cardExpMonthYearError.classList.add("red");
  //     cardExpiryYear.classList.add("borderLine")

  // }else if (!cardCvc.value) {
  //     cardCvcSpaceError.classList.remove("white");
  //     cardCvcSpaceError.classList.add("red");
  //     cardCvcSpaceError.classList.add("borderLine")
  // }else{
  //     console.log('Submitted')
  // }

  if (isOk) {
    window.location.href = "file:///Users/macbook/Desktop/coding/greeting/Visual_Card/VisualCardThankYouPage.html";
  } else {
    alert("There is some error");
  }
});
