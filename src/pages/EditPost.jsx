import React, {useState, useEffect} from 'react'
import {Container, PostForm} from '../components/Index'
import  {Service} from '../appWrite/config'
import { useNavigate, useParams } from 'react-router-dom'

const EditPost = () => {
    const [post, setpost] = useState(null)
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
      if(slug){
        Service.getPost(slug).then((post) => {
            if(post) setpost(post)
        })
      }else{
        navigate('/')
      }
    }, [slug, navigate])
    
  return post ? (
    <div className="py-8">
        <Container >
            <PostForm post={post} />
        </Container>
    </div>
  ) : null 
}

export default EditPost