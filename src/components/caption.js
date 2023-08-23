import React from "react"
import { faker } from "@faker-js/faker"

const Caption = (props) => {
  return (
    <React.Fragment>
      <div className="Post-caption">
        <span className="Post-caption-username">{props.username}</span>
        {faker.lorem.words()}
        <div className="Post-caption-time">
          {Math.floor(Math.random() * 10) + 5 + "h"}
        </div>
      </div>
    </React.Fragment>
  )
}
export default Caption
