import React from "react"
import { faker } from "@faker-js/faker"

const Post = () => {
  return (
    <div className="Post-image">
      <img src={faker.image.url()} alt="PostImage" />
    </div>
  )
}
export default Post
