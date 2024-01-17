import React, {useEffect} from 'react';
import {View, Text, Image, Pressable, ScrollView, Alert} from 'react-native';
import style from './styles';
import TodoItem from './TodoItem';
import {useQuery, useRealm} from '@realm/react';
import Realm from 'realm';
import {Todo} from '../utils/realmModels';

const addIcon = require('../../assets/add.png');

const TodoList = () => {
  const realm = useRealm();
  const todos = useQuery(Todo);

  const addToRealm = (task: string | undefined): void => {
    if (task?.length > 0) {
      const data = {
        text: task,
        _id: new Realm.BSON.ObjectID(),
        completed: false,
      };

      realm.write(() => {
        realm.create('Todo', data);
      });
    } else {
      alert('Invalid Task');
    }
  };

  const pressAdd = () => {
    Alert.prompt('New Task', 'Write to add new task!', [
      {
        text: 'Cancel',
        onPress: () => alert('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Add',
        onPress: addToRealm,
      },
    ]);
  };

  useEffect(() => {
    console.log('Path to realm file: ', realm.path);
  }, []);

  return (
    <View style={style.container}>
      <Text style={style.title}>What's up, Nick!</Text>
      <Text style={style.heading}>
        {todos?.length > 0 ? "TODAY's TASKS" : 'Tap on + button to add tasks'}
      </Text>
      <ScrollView>
        {todos?.map((item: Todo, i: number) => {
          return <TodoItem key={`todos_${i}`} data={item} />;
        })}
      </ScrollView>

      <Pressable onPress={pressAdd} style={style.floatIcon}>
        <Image style={style.addIcon} source={addIcon} />
      </Pressable>
    </View>
  );
};

export default TodoList;
