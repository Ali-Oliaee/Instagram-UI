import React from "react"
import Comment from "./comment"

const getRandomNumber = () => {
  return Math.floor(Math.random() * 10)
}

const Comments = () => {
  let numberOfComments = getRandomNumber()
  let commentsArray = []
  for (let i = 0; i < numberOfComments; i++) {
    commentsArray.push(<Comment key={i} />)
  }
  return <div className="Post-comments">{commentsArray}</div>
}
export default Comments
