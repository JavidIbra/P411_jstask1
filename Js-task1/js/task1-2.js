let num = prompt("Enter number then check console :)");
if (num > 0) {
  for (let index = 1; index <= num; index++) {
    if (num % index == 0) {
      console.log("ededin tam bolenleri " + index);
    }
  }
} else {
  alert("add appropriate number!");
}
