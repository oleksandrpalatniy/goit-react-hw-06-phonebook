import styles from './phonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/contactActions';
import Filter from './Filter';

const AddPhoneList = () => {
  const dispatch = useDispatch();
  const contacts_n = useSelector(state => state.reducer.contacts.contacts.items);
  const filter = useSelector(state => state.reducer.contacts.contacts.filter);
 
  const getVisibleContact = () => {
    const normFilter = filter.toLowerCase();
    return contacts_n.filter(con =>
      con.name.toLowerCase().includes(normFilter),
    );
  };

  return (
    <>{contacts_n.length >0 &&
    <Filter />
    }
      <ul className={styles.PhoneList}>
      {getVisibleContact().map(({ id, name, number }) => (
        <li key={id}>
          <span className={styles.PhoneList_item}>{name}:</span>
          <span className={styles.PhoneList_item}>{number}</span>
          <button
            className={styles.PhoneList_button}
            onClick={() => dispatch(actions.delCon(id))}
          >
            Delete
          </button>
        </li>
      ))}
      </ul>
      </>
  );
};

export default AddPhoneList;
