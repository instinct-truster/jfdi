const freshIdea = document.querySelector("#fresh");

const freshIdeas = [
  "...a brisk morning walk as the birds begin to stir. ",
  "...lacing up your favorite shoes and heading out for a run.",
  "...keeping in touch with the Bible's wisdom",
];

function newFreshIdea() {
  let newRandomIdea = Math.floor(Math.random() * freshIdeas.length);
  document.getElementById("fresh").placeholder = freshIdeas[newRandomIdea];
}
newFreshIdea();
