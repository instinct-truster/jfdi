const freshIdea = document.querySelector("#fresh");

const freshIdeas = [
  "...Take a brisk morning walk as the birds begin to stir. ",
  "...Lace up your favorite shoes and head out for a run at dusk.",
  "...Enjoy a sample from the Bible's wisdom and apply it to your day.",
  "...Surprise a loved one by mailing them a hand written letter.",
  "...Widdle a small piece of wood into a figurine heirloom.",
  "...Brighten a stranger's mood with a smile and a nod.",
];
function newFreshIdea() {
  let newRandomIdea = Math.floor(Math.random() * freshIdeas.length);
  document.getElementById("fresh").placeholder = freshIdeas[newRandomIdea];
}
newFreshIdea();

const submitButton = document.querySelector("#submit-button");

function handleSubmit() {
  const goalDiv = document.querySelector("#goal-list");
  const newGoal = document.createElement("p");
  if (freshIdea.value) {
    newGoal.textContent = freshIdea.value;
  }
  freshIdea.value = "";
  freshIdea.placeholder = "";
  goalDiv.appendChild(newGoal);
}

submitButton.addEventListener("click", handleSubmit);
freshIdea.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    handleSubmit();
  }
});
