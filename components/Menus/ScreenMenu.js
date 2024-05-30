import { View, Text } from "react-native";
import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../../screens/auth/Register";
import Login from "../../screens/auth/Login";
import Home from "../../screens/Home";
import { AuthContext } from "../../context/authContext";
import HeaderMenu from "./HeaderMenu";
import Myposts from "../../screens/Myposts";
import Post from "../../screens/Post";
import Account from "../../screens/Account";
import About from "../../screens/About";

const ScreenMenu = () => {
  const stack = createNativeStackNavigator();
  const [state] = useContext(AuthContext);
  const authUser = state?.user && state?.token;
  return (
    <stack.Navigator>
      {authUser ? (
        <>
          <stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Feed",
              headerRight: () => <HeaderMenu />,
            }}
          />
          <stack.Screen
            name="Myposts"
            component={Myposts}
            options={{
              headerBackTitle: "Back",
              headerRight: () => <HeaderMenu />,
            }}
          />
          <stack.Screen
            name="Post"
            component={Post}
            options={{
              headerBackTitle: "Back",
              headerRight: () => <HeaderMenu />,
            }}
          />
          <stack.Screen
            name="About"
            component={About}
            options={{
              headerBackTitle: "Back",
              headerRight: () => <HeaderMenu />,
            }}
          />
          <stack.Screen
            name="Account"
            component={Account}
            options={{
              headerBackTitle: "Back",
              headerRight: () => <HeaderMenu />,
            }}
          />
        </>
      ) : (
        <>
          <stack.Screen name="Login" component={Login} />
          <stack.Screen name="Register" component={Register} />
        </>
      )}
    </stack.Navigator>
  );
};

export default ScreenMenu;
