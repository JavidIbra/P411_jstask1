let loan = prompt("Enter desired loan amount");
let month = prompt("Enter month");

let money = loan / month;
let reminder = loan % month;
let last = Math.floor(money) + reminder;

if (reminder == 0) {
  console.log(month + " ay odeyeceyiniz mebleg: " + money);
} 

else {
  console.log(
    month -
      1 +
      " ay odeyeceyiniz mebleg: " +
      Math.floor(money) +
      " manat; " +
      month +
      "ci ay ise: " +
      last
  );
}
