import * as React from "react"
import {useState} from 'react';


function Blog (props) {
    const [message, setMessage] = useState('');
    const handleChange = event => {
        setMessage(event.target.value);
    
        console.log('value is:', event.target.value);
      };

    const post = props;
    console.log(props);
    return ( <div>
<input type="text" name="title" value={message} onChange={handleChange}/>
    
        <h2>{post.image}</h2>
        <img src={post.image} alt="test" />
        <p>{post.heading}</p>
        <p>{post.comment}</p>
        <p>{message}</p>
        </div>
    )
}


export default Blog