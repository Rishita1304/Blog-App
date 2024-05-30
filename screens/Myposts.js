import { View, Text, StyleSheet,ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import FooterMenu from "../components/Menus/FooterMenu";
import PostCard from "../components/PostCard";

const Myposts = () => {

  const [state, setState] = useState([])
  const [loading, setLoading] = useState(false)

  const getAllPosts  = async() =>{
    try{
      setLoading(true);
      const {data} = await axios.get('/post/get-user-post');
      setState(data?.userPost)
      setLoading(false)
    }catch(err){
      setloading(false);
      console.log(err);
    }
  }
useEffect(()=>{
  getAllPosts();
})
  return (
    <View style={styles.container}>
      <ScrollView>
        <PostCard posts={state} myPostScreen={true}/>
      {/* <Text>{JSON.stringify(state, null, 4)}</Text> */}
      </ScrollView>
      <View style={{backgroundColor: '#ffffff'}}>
      <FooterMenu/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
        flex: 1,
        margin: 10,
        justifyContent: 'space-between',
    }
  })

export default Myposts;
