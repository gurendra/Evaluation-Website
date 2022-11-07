if (!localStorage.getItem("amount")){
    localStorage.setItem("amount", JSON.stringify(0));

    document.querySelector("#wallet").innerText = 0;
} else {
    let data = JSON.parse(localStorage.getItem("amount"));
    document.querySelector("#wallet").innerText = data;
}


let addToWallet = () => {
    let amount = document.querySelector("#amount").value;
    let data = JSON.parse(localStorage.getItem("amount"));

    let newAmount = Number(data) + Number(amount);
    console.log(newAmount);

    document.querySelector("#wallet").innerText = newAmount;

    localStorage.setItem("amount", JSON.stringify(newAmount));
}