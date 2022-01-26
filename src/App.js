import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store from './redux/store';
import Form from './components/phonebook/Form';
import AddPhoneList from './components/phonebook/PhoneList';
// import Filter from './components/phonebook/Filter';

export default function App() {
  return (
    <>
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <Form />
          {/* <Filter /> */}
          <AddPhoneList />
        </PersistGate>
      </Provider>
    </>
  );
}
