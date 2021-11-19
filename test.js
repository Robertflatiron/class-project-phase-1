document.body.addEventListener("click", addLikeOrComment);

function addLikeOrComment(event) {
    console.log(event.target);
    if (event.target.className === "like-button") {
      console.log("liked");
      debugger;
      // select span through event
      // update likes
    } else if (event.target.className === "comment button") {
      console.log("commented");
      // get comment input
      // add it to the dom
    }
  }