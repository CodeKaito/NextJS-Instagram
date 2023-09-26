import React from 'react'
import Post from './Post'

const posts = [
  {
    id: 1,
    username: 'Jerome',
    userImg: 'http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpropic.d191723d.png&w=48&q=75',
    img: 'https://images.pexels.com/photos/6154065/pexels-photo-6154065.jpeg?auto=compress&cs=tinysrgb&w=1600',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid',
  },
  {
    id: 1,
    username: 'Jerome',
    userImg: 'http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpropic.d191723d.png&w=48&q=75',
    img: 'https://images.pexels.com/photos/5193427/pexels-photo-5193427.jpeg?auto=compress&cs=tinysrgb&w=1600',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid',
  }
]

const Posts = () => {
  return (
    <div>
      {posts.map((post => (
          <Post key={post.id} id={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption} />
        )))}
    </div>
  )
}

export default Posts