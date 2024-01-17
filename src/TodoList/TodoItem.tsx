import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import style from './styles';
import {useRealm} from '@realm/react';
import {Todo} from '../utils/realmModels';

const checkIcon = require('../../assets/checked.png');
const unCheckIcon = require('../../assets/unchecked.png');
const bin = require('../../assets/bin.png');

type props = {
  data: Todo;
};

const TodoItem: React.FC<props> = ({data}) => {
  const {completed, text} = data;
  const realm = useRealm();

  const markComplete = () => {
    realm.write(() => {
      // data.completed = true;
      realm.create('Todo', {...data, completed: true}, 'modified');
    });
  };

  const deleteFromRealm = () => {
    realm.write(() => {
      realm.delete(data);
    });
  };

  return (
    <View style={style.itemContainer}>
      <Pressable onPress={markComplete}>
        <Image
          source={completed ? checkIcon : unCheckIcon}
          style={[
            style.icon,
            completed ? style.completeIcon : style.notCompleteIcon,
          ]}
        />
      </Pressable>
      <Text style={[style.itemTitle, completed && style.completedItemText]}>
        {text}
      </Text>
      <Pressable onPress={deleteFromRealm} style={style.binIconContainer}>
        <Image source={bin} style={style.binIcon} />
      </Pressable>
    </View>
  );
};

export default TodoItem;
