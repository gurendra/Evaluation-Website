let data = JSON.parse(localStorage.getItem("amount"));
document.getElementById("wallet").innerText = data;

let movies_list = [];
let id;

let search_movies = async () => {
    let query = document.getElementById("search").value;
    let res = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=ff30bbe3`);

    let data = await res.json();
    // console.log(data);
    if(data.Response == "True"){
        console.log(data);
        movies_list = data.Search;
        append(data.Search);
    } else {
        console.log("Error")
    }
};

let append = (data) => {
    let container = document.getElementById("movies");
    container.innerHTML = null;

    data.forEach(({ Poster, Title }, i) => {
        let div = document.createElement("div");
        div.setAttribute("class", "movie_tab");

        let img = document.createElement("img");
        img.src = Poster;
        let title = document.createElement("p");
        title.innerText = Title;
        let book = document.createElement("button");
        book.setAttribute("class", "book_now");
        book.innerText = "Book Now";
        book.onclick = () => {
            bookMovie(i);
        };

        div.append(img, title, book);
        container.append(div);
    });
};

let bookMovie = (index) => {
    localStorage.setItem("movie", JSON.stringify(movies_list[index]));
    window.location.href = "checkout.html";
};

let debounce = (delay) => {
    if (id) {
        clearTimeout(id);
    }
    id = setTimeout(() => {
        search_movies();
    }, delay);
};