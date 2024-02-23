import { NavigationContainer } from "@react-navigation/native";
import Login from "./Screens/Login/Login";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Screens/Home/Home";
import Chat from "./Screens/Chat/Chat"
import Profile from "./Screens/Profile/Profile"
import Register from "./Screens/Register/Register";
import Course from "./Screens/CourseDetail/CourseDetail";

import { FontAwesome5, Entypo, FontAwesome } from '@expo/vector-icons';
import React, { useReducer, useState } from "react";
import MyConText from "./config/MyConText";
import MyUserReducer from "./redurcer/MyUserReducer";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

// nhom stak nav
function StackGroup() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Course" component={Course} />
        </Stack.Navigator>
    )
}

// nhom bottom nav
function TabGroup() {

    return (
        <Tab.Navigator screenOptions={({ route, navigation }) => ({
            tabBarIcon: ({ color, focused, size }) => {
                let iconName;
                if (route.name === 'StackGroup') {
                    iconName = "home";
                    return <FontAwesome5 name={iconName} size={size} color={color} />
                } else if (route.name === 'Chat') {
                    iconName = "chat";
                    return <Entypo name={iconName} size={size} color={color} />
                } else if (route.name === 'Profile') {
                    iconName = "user";
                    return <FontAwesome name={iconName} size={size} color={color} />
                }
                return <FontAwesome name={iconName} size={size} color={color} />
            },
        })}

        >
            <Tab.Screen name="StackGroup"
                component={StackGroup}
                options={{ headerShown: false, tabBarLabel: "Home" }}
            />
            <Tab.Screen name="Chat" component={Chat}
            />
            <Tab.Screen name="Profile" component={Profile}
            />
        </Tab.Navigator>

    )
}

export default function navigation() {

    const [user, dispatch] = useReducer(MyUserReducer, null);

    return (
        <MyConText.Provider value={[user, dispatch]}>

            <NavigationContainer>
                <Stack.Navigator initialRouteName={user ? 'Nav' : 'Login'}>
                    <Stack.Screen name="Nav" component={TabGroup} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>

        </MyConText.Provider>
    )
}
