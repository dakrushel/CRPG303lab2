
import {StyleSheet, Pressable, Text, View, ScrollView} from 'react-native';
import React from 'react'

const ToDoList = () => {
  return (
    <ScrollView>
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Do laundry</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task]}>
            <Text style={styles.taskText}>Go to the gym</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task]}>
            <Text style={styles.taskText}>Walk the dog</Text>
          </View>
        </Pressable>
    </ScrollView>
  )
}

export default ToDoList

const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomeWidth: 1,
        borderColor: '#ccc',
      },
      completed: {
        backgroundColor: '#e0e0e0',
      },
      taskText: {
        fontSize: 16,
      },
})    