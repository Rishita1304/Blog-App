import { View,  TouchableOpacity, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import { FontAwesome5 } from 'react-native-vector-icons';
import  AsyncStorage  from '@react-native-async-storage/async-storage';

const HeaderMenu = () => {
    const [state, setState] = useContext(AuthContext);
    const handleLogout = async() => {
        setState({user:null, token:""});
        await AsyncStorage.removeItem("@auth");
        alert("Logged Out!!");
    }
  return (
    <View>
      <TouchableOpacity onPress={handleLogout}>
        <FontAwesome5 name="sign-out-alt" color={'red'} style={styles.iconButton}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    iconButton: {
        marginBottom: 3,
        alignSelf: "center",
        fontSize: 25,
      },
})

export default HeaderMenu