import React , { useState } from "react";
const Post =(props) =>{
    const [likes, setLikes] = useState(0);
    const handleLike = () => {
        setLikes(likes + 1);
        console.log(likes +1);
    };
    return(
        <div className="post">
            <img src={props.image} alt={props.name} />
            <p>{props.name}</p>
            <button onClick={handleLike}>Like</button>
            <p>Likes: {likes}</p>
        </div>
    )
}

export default Post;