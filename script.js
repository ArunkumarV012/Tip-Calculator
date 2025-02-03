let billAmountElement = document.getElementById("billAmount");
let percentageTipElement = document.getElementById("percentageTip");
let tipAmountElement = document.getElementById("tipAmount");
let totalAmountElement = document.getElementById("totalAmount");

let errorMessageElement = document.getElementById("errorMessage");

function calculateButton() {
    let billAmountInput = billAmountElement.value;
    let percentageTipInput = percentageTipElement.value;

    if (billAmountInput === "") {
        errorMessageElement.textContent = "Please Enter a Valid Input.";
    } else if (percentageTipInput === "") {
        errorMessageElement.textContent = "Please Enter a Valid Input.";
    } else {
        errorMessageElement.textContent = "";

        let billAmount = parseInt(billAmountInput);
        let percentageTip = parseInt(percentageTipInput);

        let calculateTip = (percentageTip / 100) * billAmount;
        let totalAmount = billAmount + calculateTip

        tipAmountElement.value = calculateTip;
        totalAmountElement.value = totalAmount
    }

}