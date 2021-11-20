const likes = document.querySelectorAll("span"); //like count
const commentsList = document.querySelector("ul");
const title = document.querySelector("#card-title");
const likeCount = document.querySelectorAll("#like-count");
const commentForm = document.querySelectorAll("#comment-form")




fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json")
.then((response) => response.json())
.then((carData) => (carData))


function renderCarName(e) {

  const carName = e.target.value;
  const filteredCars = carData.results.filter((car) => {
    return (
      car.Model_Name * Make_Name.includes(carName));
    })
    console.log(filteredCars);
}


const likeButton = document.querySelectorAll(".like-button");
document.body.addEventListener("click", addLikeOrComment);

function addLikeOrComment(event) {
  // console.log(event.target);
  if (event.target.className === "like-button") {
    // function addLikeOrComment() {
      // console.log("clicked")
      // const likeCount = likes.textContent
      const likeCount = parseInt(event.target.parentElement.firstElementChild.textContent.split(" ")[0])
      event.target.parentElement.firstElementChild.textContent = `${likeCount + 1} likes`
      // }
      // select span through event
      // update likes
    } else if (event.target.className === "comment-button") {
      // debugger
      // console.log("commented");
      const commentInput = document.querySelectorAll("#comment")
      const commentsList = event.target.parentElement.previousElementSibling.firstElementChild
      event.target.parentElement.previousElementSibling.firstElementChild.value = commentsList.li
      // get comment input
      // add it to the dom
      // commentForm.addEventListener('submit', (e) => {
      event.preventDefault()
      const li = document.createElement("li")
      li.textContent = commentsList.value
      commentInput.appendChild(li)
      e.target.reset()
    }
    // }
}

document.querySelectorAll('h2').forEach(h2 => h2.addEventListener('click', _ => h2.style.color = 'red'));
