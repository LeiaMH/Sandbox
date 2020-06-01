
function calculateTip(){
    let billAmount = document.getElementById("bill").value;
    let serviceQuality = document.getElementById("service").value;
    let numberOfPeople = document.getElementById("people").value;

    if(isNaN(billAmount) || isNaN(numberOfPeople) || billAmount === ''){
    return document.getElementById("validation").innerHTML = "Input invalid";
    }

    let tipAmount = (billAmount * serviceQuality) / numberOfPeople;
    let roundedAmount = tipAmount.toFixed(2);
    
    document.getElementById("result").innerHTML = `TIP AMOUNT <span>£${roundedAmount}</span> each`;
}