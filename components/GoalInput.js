import React, { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalTet] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalTet(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalTet('');
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
                        <Button title="ADD GOAL" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="CANCEL" onPress={props.onCancel} />
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
    borderColor: '#cccccc',
    borderWidth: 1,
    padding: 10,
    padding: 8
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