import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import FooterMenu from '../components/Menus/FooterMenu';
import { PostContext } from '../context/postContext';
import PostCard from '../components/PostCard';

const Home = () => {
  const [posts, getAllPosts] = useContext(PostContext);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {}, [getAllPosts]);

  const onRefresh = useCallback(async() => {
    setRefreshing(true);
    await getAllPosts;
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <PostCard posts={posts}/>
      </ScrollView>
      <View style={{backgroundColor: '#ffffff'}}>
      <FooterMenu/>
      </View>
    </View>
  )
}
  const styles = StyleSheet.create({
  container: {
        flex: 1,
        margin: 10,
        justifyContent: 'space-between',
    }
  })

export default Home