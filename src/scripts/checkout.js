let data = JSON.parse(localStorage.getItem("amount"));
document.getElementById("wallet").innerText = data;

let appendMovie = () => {
    let div = document.getElementById("movie");

    let { Poster, Title } = JSON.parse(localStorage.getItem("movie"));

    let img = document.createElement("img");
    img.src = Poster;
    let title = document.createElement("h2");
    title.innerText = Title;

    div.append(title, img);
};

appendMovie();

let confirm = () => {
    let number = document.getElementById("number_of_seats").value;
    let total = +number * 100;
    let wallet = +JSON.parse(localStorage.getItem("amount"));

    if(total > wallet) {
        document.getElementById("booking_status").innerText = "Insufficient Balance!";
    } else {
        let balance = wallet - total;
        localStorage.setItem("amount", JSON.stringify(balance));

        document.getElementById("wallet").innerText = balance;
        document.getElementById("booking_status").innerText = "Booking Successful!";
    }
};