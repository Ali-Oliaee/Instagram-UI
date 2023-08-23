import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faker } from "@faker-js/faker"

const Header = (props) => {
  let avatar = faker.internet.avatar()
  return (
    <React.Fragment>
      <div className="Post-header">
        <div className="Post-header-profile-image">
          <img src={avatar} alt="PostProfileImage" />
        </div>
        <div className="Post-header-username">{props.username}</div>
        <div className="Post-header-more-btn">
          <FontAwesomeIcon icon={faBars} style={{ cursor: "pointer" }} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header
