import { View, Text, StyleSheet, Alert } from 'react-native'
import React,{useContext, useState} from 'react'
import InputBox from '../../components/Forms/InputBox';
import SubmitButton from '../../components/Forms/SubmitButton';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../context/authContext';

const Login = ({navigation}) => {

  const [state,setState] = useContext(AuthContext);

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);

const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!email || !password) {
        Alert.alert("Please Fill All Fields");
        setLoading(false);
        return;
      }
      const {data} = await axios.post('/auth/login', {email,password});
      setLoading(false);
      alert(data && data.message);
      await AsyncStorage.setItem('@auth', JSON.stringify(data));
      setState(data);
      navigation.navigate("Home");
      console.log("LoggedIn Data==> ", { email, password });
    } catch (error) {
      alert(error.response.data.message);
      setLoading(false);
      console.log(error);
    }
  };

  const localStorage = async() => {
    let newData = await AsyncStorage.getItem("@auth");
    console.log("Local Storage => ",newData);
  }

  localStorage();

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Login</Text>
      <View style={{ marginHorizontal: 20 }}>
        <InputBox
          inputTitle={"Email"}
          keyboardType="email-address"
          autoComplete="email"
          value={email}
          setValue={setEmail}
        />
        <InputBox
          inputTitle={"Password"}
          secureTextEntry={true}
          autoComplete="password"
          value={password}
          setValue={setPassword}
        />
      </View>
      <SubmitButton
        btnTitle="Login"
        loading={loading}
        handleSubmit={handleSubmit}
      />
      <Text style={styles.linkText}>
        Not a user Please{" "}
        <Text style={styles.link} 
        onPress={() => navigation.navigate("Register")}
        >
          REGISTER
        </Text>{" "}
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#e1d5c9",
    },
    pageTitle: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        color: "#1e2225",
        marginBottom: 20,
      },
      inputBox: {
        height: 40,
        marginBottom: 20,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        marginTop: 10,
        paddingLeft: 10,
        color: "#af9f85",
      },
      linkText: {
        textAlign: "center",
      },
      link: {
        color: "red",
      },
})

export default Login