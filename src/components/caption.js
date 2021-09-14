import React from 'react';
import Faker from 'faker';

const Caption = (props) => {
    console.log(props);
    return (
        <React.Fragment>
            <div className="Post-caption">
                <span className="Post-caption-username">{props.username}</span>
                {Faker.lorem.words()}
                <div className="Post-caption-time">
                    {Math.floor(Math.random() * 10) + 5 + 'h'}
                </div>
            </div>
        </React.Fragment>
    )
}
export default Caption;