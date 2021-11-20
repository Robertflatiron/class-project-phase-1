const likes = document.querySelectorAll("span"); //like count
const commentsList = document.querySelector("ul");
const title = document.querySelector(".card-title");
const likeCount = document.querySelectorAll("#like-count");
const commentForm = document.querySelectorAll("#comment-form")

fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json")
.then((response) => response.json())
.then((carData) => {
  const allCarTitles = document.querySelectorAll('.car-title')
  // console.log(allCarTitles)
  for (let i = 0; i <= 5; i++) {
    console.log(allCarTitles[i])
    console.log(carData.Results[i])
    allCarTitles[i].innerHTML = `${carData.Results[i].Make_Name} ${carData.Results[i].Model_Name}`
  }
}) 

const likeButton = document.querySelectorAll(".like-button");
document.body.addEventListener("click", addLikeOrComment);

function addLikeOrComment(event) {
  if (event.target.className === "like-button") {
    const likeCount = parseInt(event.target.parentElement.firstElementChild.textContent.split(" ")[0])
    event.target.parentElement.firstElementChild.textContent = `${likeCount + 1} likes`
  } else if (event.target.className === "comment-button") {
    const commentText = event.target.parentElement.firstElementChild.value
    const commentsList = event.target.parentElement.previousElementSibling
    // get comment input
    // add it to the dom
    const commentLi = document.createElement("li")
    commentLi.textContent = commentText
    commentsList.append(commentLi)
    event.target.parentElement.firstElementChild.value = ""
  }
}

document.querySelectorAll('h2').forEach(h2 => h2.addEventListener('click', _ => h2.style.color = 'red'));
