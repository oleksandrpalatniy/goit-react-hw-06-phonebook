import React from 'react';
import { useState } from 'react';
import shortid from 'shortid';
import styles from './phonebook.module.css';

import * as actions from '../../redux/contactActions';
import { useDispatch, useSelector } from 'react-redux';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.reducer.contacts.items);

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const findName = contacts.find(con => con.name === name);
    if (findName) {
      alert(`${name} is already in contacts`);
    } else {
      const id = shortid.generate();
      dispatch(actions.addCon({ id, name, number }));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.Container} onSubmit={handleSubmit}>
      <h2>Phonebook</h2>
      <label htmlFor={nameInputId} className={styles.InputForm}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
          id={nameInputId}
        ></input>
      </label>
      <label htmlFor={numberInputId} className={styles.InputForm}>
        {' '}
        Number
        <input
          type="number"
          name="number"
          value={number}
          onChange={handleChange}
          id={numberInputId}
        ></input>
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}
