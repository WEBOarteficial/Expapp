import React, { useState } from "react";
import {
  Text,
  Button,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";

import firebase from "../database/firebase";

const AddUserScreen = (props) => {
  const initalState = {
    name: "",
    email: "",
    phone: "",
  };

  const [state, setState] = useState(initalState);

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  

  const saveNewUser = async () => {
    if (state.name === "") {
      alert("Por favor Escribe tu nombre");
    } else {

      try {
        await firebase.db.collection("users").add({
          name: state.name,
          email: state.email,
          phone: state.phone,
        });

        props.navigation.navigate("UsersList");
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    
    <ScrollView style={styles.container}>

<Text style={{ fontSize: 18, color: '#38a7ce', alignItems: 'center'}} >
      

        
Buen día mi nombre es Juan Sánchez Villarreal estoy muy contento por la oportunidad  
que me han brindado de presentar la prueba. Desde ya muchas gracias, 
quedo muy comprometido a realizar las tareas de manera impecable, poniendo 
todo mi empeño y habilidades para una correcta consecución de los objetivos 
marcados. Quedando a su disposición me despido enviándoles un cordial saludo 
y un excelente resto de día.                                                     

</Text >

<br></br>

<Text style={{ fontSize: 22, color: '#42a9ce', alignItems: 'center'}} >
      
✅ Nota de Autoayuda                                                     


</Text >

<br></br>


<Text style={{ fontSize: 16, color: '#39a9ce', alignItems: 'center'}} >
      
Te invito a resgistrar tu usuario y hacer parte de las miles de personas que quieren una oportunidad para mi en el proyecto 🤣.                                                  .


</Text >




      {/* Name Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Nombre"
          onChangeText={(value) => handleChangeText(value, "name")}
          value={state.name}
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Apellido"
          multiline={true}
          numberOfLines={1}
          onChangeText={(value) => handleChangeText(value, "email")}
          value={state.email}
        />
      </View>

      {/* Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="E-Mail"
          onChangeText={(value) => handleChangeText(value, "phone")}
          value={state.phone}
        />
      </View>

      <View style={styles.button}>
        <Button title="Guardar Usuario" onPress={() => saveNewUser()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddUserScreen;