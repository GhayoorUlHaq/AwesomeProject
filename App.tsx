import React from 'react';
import TodoList from './src/TodoList';

import {RealmProvider} from '@realm/react';
import {Todo} from './src/utils/realmModels';

const App = () => {
  return (
    <RealmProvider schema={[Todo]}>
      <TodoList />
    </RealmProvider>
  );
};

export default App;
