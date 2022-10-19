import * as React from "react"
import {useState} from 'react';


function Blog (props) {
    const [message, setMessage] = useState('');
    const handleChange = event => {
        setMessage(event.target.value);
    
        console.log('value is:', event.target.value);
      };

    const post = props;
    console.log("props from Blog", props);
    return ( 
    <div>
        <h2>{post.heading}</h2>
        <div dangerouslySetInnerHTML={{__html: post.paragraph}} />
        {post.image && (
            <img src={post.image} alt="test" />
        )}     
    </div>
    )
}


export default Blog