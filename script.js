const likes = document.querySelector("span"); //like count
const commentsList = document.querySelector("ul");
const title = document.querySelector("#card-title");
const likeCount = document.querySelectorAll("#like-count");

fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json")
.then((response) => response.json()
.then((carData) => carData));
// Each car will have a "like" button, a section to have comments and "submit" it.
//click on the heart button and your likes will increase


const likeButton = document.querySelectorAll(".like-button");
e.target.parentElement.firstElementChild.textContent
likeButton.addEventListener('click', addLike)

function addLike() {
    // console.log("clicked")
    // const likeCount = likes.textContent
    const likeCount = parseInt(likes.textContent.split(" ")[0])
    likes.textContent = `${likeCount + 1} likes`
}

const commentForm = document.querySelector("#comment-form")
const commentInput = document.querySelector("#comment")
commentForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const li = document.createElement("li")
    li.textContent = commentInput.value
    commentsList.appendChild(li)
    e.target.reset()
})

document.body.addEventListener("click", addLikeOrComment);

function addLikeOrComment(event) {
    console.log(event.target);
    if (event.target.className === "like-button") {
      console.log("liked");
      // select span through event
      // update likes
    } else if (event.target.className === "comment button") {
      console.log("commented");
      // get comment input
      // add it to the dom
    }
  }