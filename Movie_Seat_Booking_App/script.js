const notOccupiedSeats = document.querySelectorAll(".row .seat:not(.occupied)");
// console.log(notOccupiedSeats);

const movieSelectBox = document.querySelector("#movie");
const count = document.getElementById("count");
const film = document.getElementById("film");
const total = document.getElementById("total");
const container = document.querySelector(".container");
let filmPrice;

window.addEventListener("load", () => {
    let price = movieSelectBox.options[movieSelectBox.selectedIndex].value;
    displayUI();
    updateMovieInfo(price);
});

const displayUI = () => {
    const selectedSeatsFromStorage = JSON.parse(
        localStorage.getItem("selectedSeats")
    );
    if (
        selectedSeatsFromStorage !== null &&
        selectedSeatsFromStorage.length > 0
    ) {
        notOccupiedSeats.forEach((seat, index) => {
            if (selectedSeatsFromStorage.indexOf(index) > -1) {
                seat.classList.add("selected");
            }
        });
    }
    console.log("JSON", selectedSeatsFromStorage);
};

//* movieSelectBox.onchange = () => {};  old version
movieSelectBox.addEventListener("change", (e) => {
    updateMovieInfo(e.target.value);
    //   console.log(e.target.value);
});

const updateMovieInfo = (filmPrice) => {
    let selectSeats = document.querySelectorAll(".row  .seat.selected");    //! .row  .seat.selected parent-child 
    console.log(selectSeats);

    //!   Array holding indexes of selected seats according to non-occupied ones
    const seatsIndexArray = [...selectSeats].map((seat) =>
        [...notOccupiedSeats].indexOf(seat)
    );
    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndexArray));

    const selectedSeatCount = selectSeats.length;
    count.innerText = selectedSeatCount;
    film.innerText =
        movieSelectBox.options[movieSelectBox.selectedIndex].innerText.split(
            "("
        )[0];
    // .split(" ")
    // .slice(0, -1)
    // .join(" ");
    //   console.log("film.innerText :>> ", film.innerText);
    total.innerText = selectedSeatCount * parseFloat(filmPrice);
};

container.addEventListener("click", (e) => {
    console.log(e.target);
    if (
        e.target.classList.contains("seat") &&
        !e.target.classList.contains("occupied")
    ) {
        e.target.classList.toggle("selected");
    }
    let price = movieSelectBox.options[movieSelectBox.selectedIndex].value;
    updateMovieInfo(price);
});




