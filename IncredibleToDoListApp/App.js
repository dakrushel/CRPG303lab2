import React from 'react';
import { SafeAreaView, } from 'react-native';
import ToDoForm from './app/toDoForm';
import ToDoList from './app/toDoList';


function App() {
  return (
    <SafeAreaView>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;
//you just need to chuck npx expo start -c in the terminal to start