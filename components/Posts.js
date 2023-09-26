import React from 'react'
import Post from './Post'

const posts = [
  {
    id: 1,
    username: 'username1',
    userImg: 'https://avatars.githubusercontent.com/u/1234?v=4',
    img: 'https://images.pexels.com/photos/5960402/pexels-photo-5960402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid',
  },
  {
    id: 1,
    username: 'username1',
    userImg: 'https://avatars.githubusercontent.com/u/1234?v=4',
    img: 'https://images.pexels.com/photos/5960402/pexels-photo-5960402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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