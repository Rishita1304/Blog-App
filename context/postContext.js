import { createContext, useEffect, useState } from "react";
import axios from 'axios';

const PostContext = createContext();

const PostProvider = ({children}) => {

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    const getAllPosts = async() => {
        try{
            setLoading(true);
            const {data} = await axios.get('/post/get-all-posts');
            setLoading(false);
            setPosts(data?.posts);
        }catch(err){
            console.log(err);
            setLoading(false);
        }
    }

    useEffect(()=>{
        getAllPosts();
    },[]);

    return(
        <PostContext.Provider value={[posts, setPosts, getAllPosts]} >
            {children}
        </PostContext.Provider>
    )
}

export {PostContext, PostProvider};