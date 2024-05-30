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
function addRating(){

}
function newEntry(){
  document.getElementById("newEntry").style.display = "block";
  document.getElementById("journalForm").style.display = "none";
}
//Film Page//
//List Page//
