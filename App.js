import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Components
import CreateUserScreen from "./screens/CreateUserScreen";
import UserDetailScreen from "./screens/UserDetailScreen";
import UsersList from "./screens/UsersList";
import GuiaFacil from "./screens/GuiaFacil";

const Stack = createStackNavigator();

function MyStack() {

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#6bbef9",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 30,
          color : "#FCFCFC",
          textAlign: "center", 
          
        },
      }}
    >

      
      <Stack.Screen
        name="UsersList"
        component={UsersList}
        options={{ title: "App Sopra Steria" }}
      />
      <Stack.Screen
        name="CreateUserScreen"
        component={CreateUserScreen}
        options={{ title: "Crear Usuario" }}
      />
      <Stack.Screen
        name="UserDetailScreen"
        component={UserDetailScreen}
        options={{ title: "Detalles de Usuario" }}
      />
      <Stack.Screen
        name="GuiaFacil"
        component={GuiaFacil}
        options={{ title: "Agradecimientos" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
