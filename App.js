import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Calculator = () => {
 const [input, setInput] = useState('');
 const [result, setResult] = useState('');

 const handlePress = (value) => {
  if (value === '=') {
     try {
       setResult(eval(input).toString());
     } catch (error) {
       setResult('Error');
     }
  } else if (value === 'C') {
     setInput('');
     setResult('');
  } else if (value === '%') {
     setInput((prevInput) => prevInput + value);
  } else {
     setInput((prevInput) => prevInput + value);
  }
 };

 return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.input}>{input}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.buttons}>
      {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', '%','(',')','C'].map((value) => (
 <TouchableOpacity key={value} style={styles.button} onPress={() => handlePress(value)}>
    <Text style={styles.buttonText}>{value}</Text>
 </TouchableOpacity>
))}
      </View>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: 'black',
 },
 display: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
 },
 input: {
    fontSize: 40,
    color: 'white',
 },
 result: {
    fontSize: 30,
    color: 'gray',
 },
 buttons: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
 },
 button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    height: '20%',
 },
 buttonText: {
    fontSize: 30,
    color: 'white',
 },
});

export default Calculator;
