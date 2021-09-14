import React from 'react';
import Faker from 'faker';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

let num = 0;

const getRandomNumber = () => {
    return Math.floor(Math.random() * 5) + 1;
}


const getRandomHeartIcon = (x) => {
    if (Faker.random.boolean())
        return <FontAwesomeIcon icon={faHeartRegular} style={{ cursor: 'pointer' }} />
    return <FontAwesomeIcon icon={faHeart} style={{ color: 'red', cursor: 'pointer' }} />
}


const Comment = () => {
    return (
        <div className="Comment">
            <div className="Comment-user-profile">
                <img src={Faker.internet.avatar()} alt="User Comment Profile" />
            </div>
            <div className="Comment-comment">
                <div className="Comment-text">
                    <span className="Post-caption-username">{Faker.internet.userName()}</span>
                    {Faker.lorem.words()}
                </div>
                <div className="Comment-detail">
                    <span>{getRandomNumber() + 'h'}</span>
                    <span>Reply</span>
                </div>
            </div>
            <div className="Comment-like">
                {getRandomHeartIcon()}
            </div>
        </div>
    )
}
export default Comment;