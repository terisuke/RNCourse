import React, { View, TextInput, Button, StyleSheet, Modal, Image ,Alert} from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        if (enteredGoalText.trim().length === 0) {
            Alert.alert('Error', 'Please enter a goal', [{ text: 'OK', style: 'destructive' }]);
            return;
        }
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput
                    style={styles.textInput}
                    placeholder="Your Course Goal"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" onPress={props.onCancel} color='#f31282' />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD GOAL" onPress={addGoalHandler} color='#b180f0'/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311b6b',
    },
    textInput: {
    width: '100%',
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
    borderRadius:6,
    borderWidth: 1,
    padding: 16, // パディングの重複修正
    },
    image: {
        width: 200,
        height: 200,
        margin: 20,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: '40%',
        marginHorizontal: 8,
    },
});