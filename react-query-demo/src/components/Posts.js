import { useQuery } from 'react-query';
import axios from 'axios';
import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';

const fetchPosts =  async () => {
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
}

const Posts = () => {
  // the post string is used to cache and track any results
  const {data, isError, error, isLoading} = useQuery('posts', fetchPosts);

  if(isLoading){
    return <div>Loading...</div>
  }
  if(isError){
    return <div>Error! {error.message}</div>
  }

  return (
    <div>
      <h1>Posts</h1>
      {
        data.map((post, index) => {
          return <li key={index}>{post.title}</li>
        })
      }
      <ReactQueryDevtools />
    </div>
  )
};

export default Posts;