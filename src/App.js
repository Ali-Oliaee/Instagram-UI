import React from "react"
import "./App.css"
import Faker from "faker"
import Header from "./components/header"
import Comments from "./components/comments"
import Caption from "./components/caption"
import Post from "./components/post"

const App = (props) => {
  let username = Faker.internet.userName()
  return (
    <div>
      <div className="Post">
        <Header username={username} />
        <Post />
        <Caption username={username} />
        <Comments />
      </div>
    </div>
  )
}

export default App
