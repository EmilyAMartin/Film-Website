//Home Page//
function showHomePage() {
  window.location = "index.html";
}
function showFavoritesPage() {
  window.location = "favorites.html";
}
function showListPage() {
  window.location = "list.html";
}
function showJournalPage() {
  window.location = "journal.html";
}
//Journal Page//
function showJournalForm() {
  let journalForm = document.getElementById("journalForm");
  if (journalForm.style.display === "none") {
    journalForm.style.display = "block";
  } else {
    journalForm.style.display = "none";
  }
}
function newEntry(){
  document.getElementById("newEntry").style.display = "block";
  document.getElementById("journalForm").style.display = "none";
}

let stars = document.getElementsByClassName("star");
let rating = document.getElementById("rating")

var currentRating = 0;

// HTMLCollection to Array
stars = Array.prototype.slice.call(stars);

stars.forEach((star, index) => {
  star.addEventListener("click",(e) => {
       for(let i = 0;i<stars.length;i++){
    stars[i].style.color = "";
  }
      colorStar(index);
      currentRating = index+1
      rating.innerHTML = " : " + currentRating
    },
    false
  );
});
 
const colorStar = (n) => {
  if (n < 0) return;
  stars[n].style.color = "#fc0";
  colorStar(n - 1);
};

//Film Page//
//List Page//
