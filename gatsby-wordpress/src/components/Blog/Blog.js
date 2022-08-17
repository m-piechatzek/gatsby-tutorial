import * as React from "react"


function Blog (props) {
    const post = props;
    console.log(props);
    return ( <div>

    
        <h2>{post.image}</h2>
        <p>{post.heading}</p>
        <p>{post.comment}</p>
        </div>
    )
}


export default Blog