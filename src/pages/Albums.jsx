import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Contacts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => setPosts(data))

    const newData = []



    console.log(newData);
  },[])
  return (
    <div>
      {posts && posts.map(post =>(
        <Link key={post.id} to={`/albums/${post.id}`}>
          <ul>
          <li>{post.title}</li>
          
          </ul>
        </Link>

      ))}
    </div>
  )
}

export default Contacts



