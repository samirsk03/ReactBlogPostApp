import React, { useState, useEffect } from "react";
import { PostCard, Container } from "../components/Index";
import { Service as appwriteService } from "../appWrite/config";


const AllPost = () => {
    const [post, setpost] = useState([]);
    useEffect(() => {
     
    }, []);

    appwriteService.getPosts([]).then((posts)=> {
        if(posts) setpost(posts.documents)
    })
    
  return (
    <div className="w-full py-8">
        <Container >
            <div className="flex flex-wrap">
                {post.map((post)=> (
                    <div className="" key={post.$id}>
                        <PostCard post={post}/>
                    </div>
                ) )}
            </div>
        </Container>
    </div>
  )
};

export default AllPost;
