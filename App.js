import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Button, Pressable } from 'react-native';

export default function App() {

  const addHandler = () => {
    const sum = (num + num2)
    setResult(sum)
    setData([...data, { key: num, key2: num2, key3: sum}]);
    setNum('')
    setNum2('')
  }
  
  const subtractHandler = () => {
    const sum = (num - num2)
    setResult(sum)
  }
  
  const multiplyHandler = () => {
    const sum = (num * num2)
    setResult(sum)
  }
  
  const divideHandler = () => {
    const sum = (num / num2)
    setResult(sum)
  }
  
  const clear = () => {
    const result = setResult('')
    setNum("")
    setNum2("")
  }

  
  
  
  const [num, setNum] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(num + num2)
  const [data, setData] = useState([]);
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.whiteTxt}> Calculator app </Text>
        </View>
  
        <View style={styles.body}>
          <TextInput 
            onChangeText={num => setNum(+num)}
            style={styles.input} 
            placeholder="Give first number"
            keyboardType="numeric"
            value={num.toString()}
            >
            
          </TextInput>
          <TextInput    
            onChangeText={num2 => setNum2(+num2)}
            style={styles.input} 
            placeholder="Give second number"
            keyboardType="numeric"
            value={num2.toString()}
            >
            
            </TextInput>
          
          <View style={styles.buttonStyle}>
            <Button title="  +  " color="green" onPress={addHandler}></Button>
            <Button title="  -  " color="red" onPress={subtractHandler}></Button>
            <Button title="  *  " color="black"onPress={multiplyHandler}></Button>
            <Button title="  /  " color="grey" onPress={divideHandler}></Button>
          
          </View>
  
          <View style={styles.clear}>
            <Pressable onPress={clear}> 
              <Text style={styles.clearTxt}>Clear all</Text>
            </Pressable>
            {/* <Button title="Clear all" color="black" onPress={clear}>Clear</Button> */}
          </View>
  
          <Text style={{ marginTop: 50, fontSize: 30, color: "black", textAlign:"center"}}>Result: {result} </Text>

          <FlatList style={styles.list}
          keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{justifyContent: 'center', alignItems:"center", marginTop: 20,}}
            data={data}
            renderItem={({ item }) =>
              <Text>{item.key} + {item.key2} = {item.key3}</Text>
            }
            />
          
     
        
        </View>
  
        <View style={styles.footer}>
          <Text style={{ color: 'white', fontStyle:"italic"}}> by Sami Niskanen </Text>
        </View>
  
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    
    },
  
    header:{
      flex: 0.2,
      width:"100%",
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    body:{
      flex: 1,
      padding:20,  
      justifyContent: 'center',  
    },
  
    footer:{
      flex: 0.2,
      backgroundColor:"black", 
      width:"100%",
      height:"auto",
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      minWidth: "50%",
    },
  
    whiteTxt: {
      color: '#fff',
      marginTop: 20,
    
    },
  
    buttonStyle:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 40,
    },
  
    clear: {
      alignItems: 'center',
      marginTop: 40,
      justifyContent: 'center',
    },
  
    clearTxt:{
      backgroundColor: '#f3f3f3',
      color: 'black',
      width: 200,
      padding: 20,
      textAlign: 'center',
      fontWeight: "bold",
      borderRadius: 50,
      borderWidth: 1,
    },
  
  
  });
