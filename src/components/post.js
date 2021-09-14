import React from 'react';
import Faker from 'faker';

const Post = () => {
    return (
        <div className="Post-image">
            <img src={Faker.image.image()} alt="Post Image" />
        </div>
    )
}
export default Post;