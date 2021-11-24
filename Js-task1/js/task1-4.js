let num = prompt("add number!");
factorial(num);

function factorial(number) {
  let fact = 1;
  if (number < 0) {
    alert("musbet ve 0 dan boyuk eded daxil edin!");
  } else if (number == 0) {
    alert("0 faktorial 1 e beraberdir!");
  } else {
    for (let index = number; index >= 2; index--) {
      fact = fact * index;
    }
    alert( num + "! = " + fact);
  }
}

