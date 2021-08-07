calculateTip = (bill, persons, percentage) => {
  console.log(bill, persons, percentage);
  let tipAmount = (bill * percentage) / persons;
  let totalAmount = (bill * percentage + parseFloat(bill)) / persons;

  console.log(bill + bill * percentage);

  document.getElementById("tipPrice").innerText = `$${tipAmount.toFixed(2)}`;
  document.getElementById("totalPrice").innerText = `$${totalAmount.toFixed(
    2
  )}`;
};

getTipPercentage = () => {
  let percentage =
    document.getElementsByClassName("selected")[0]?.dataset.percentage;

  if (percentage) {
    return parseFloat(percentage);
  }

  if (document.getElementById("customTip").value != "") {
    return parseFloat(document.getElementById("customTip").value / 100);
  }

  return false;
};

selectTip = (element) => {
  resetButtons();
  element.classList.toggle("selected");
};

resetAll = () => {
  resetButtons();

  document.getElementById("btnReset").disabled = true;

  document.getElementById("inputBill").value = "";
  document.getElementById("inputPersons").value = "";

  document.getElementById("tipPrice").innerText = `$0.00`;
  document.getElementById("totalPrice").innerText = `$0.00`;

  main();
};

resetButtons = () => {
  let btns = document.getElementsByClassName("btn");

  for (btn of btns) {
    btn.classList.remove("selected");
  }
};

main = () => {
  // Activate 'reset' buttton
  document.getElementById("btnReset").disabled = false;
  // Test if 'number of people' input is valid, if not triggers alert
  if (!document.getElementById("inputPersons").checkValidity()) {
    document.getElementById("error").style.display = "block";
  } else {
    document.getElementById("error").style.display = "none";
  }

  //Test if all inputs are inserted and valid
  if (
    document.getElementById("inputBill").value != "0" &&
    document.getElementById("inputBill").value != "" &&
    document.getElementById("inputPersons").value != "0" &&
    document.getElementById("inputPersons").value != ""
  ) {
    //if all inputs are inserted and valid then test if tip percentage is selected

    if (getTipPercentage()) {
      //if tip percentage is selected, then calculate tip
      calculateTip(
        document.getElementById("inputBill").value,
        document.getElementById("inputPersons").value,
        getTipPercentage()
      );
    }
  }
};
