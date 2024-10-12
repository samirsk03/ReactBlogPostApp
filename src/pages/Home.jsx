import React, {useState, useEffect} from 'react'
import appwriteService from "../appWrite/config";
import {Container, PostCard} from '../components/Index'

const Home = () => {
    const [post, setpost] = useState([]);

    // useEffect(() => {
    //     appwriteService.getPosts().then((post) => {
    //     if(post) setpost(post);
    //   })
    // }, [])
    
  if(post.length === 0) {
    return (
       <Container >
        no Post found
       </Container>
    )
  }

  return (
    <div className="w-full py-8">
        <Container >
            <div className="">
                {post.map((Post) => (
                    <div className="" key={Post.$id}>
                        <PostCard {...Post}/>
                    </div>
                )
            )}
            </div>
        </Container>
    </div>
  )
  
}

export default Home