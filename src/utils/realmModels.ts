import Realm, {ObjectSchema} from 'realm';

class Todo extends Realm.Object<Todo> {
  _id!: Realm.BSON.ObjectId;
  text!: 'string';
  completed?: 'bool';

  static schema: ObjectSchema = {
    name: 'Todo',
    properties: {
      _id: 'objectId',
      text: 'string',
      completed: 'bool',
    },
    primaryKey: '_id',
  };
}

export {Todo};
