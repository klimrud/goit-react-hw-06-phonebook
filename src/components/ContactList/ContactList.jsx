import React from 'react';
import PropTypes from 'prop-types';
import { IoTrashBin } from 'react-icons/io5';
import css from 'components/ContactList/ContactList.module.css';
// import { useDispatch, useSelector } from 'react-redux';
//  import { contactRemove } from 'store/contacts/slice';
//  import { contactRemove } from 'store/contacts/actions';

export const ContactList = ({ contacts = [], onDelete }) => {
  //   const { contacts } = useSelector(state => state.contacts);
  //   const dispatch = useDispatch();

  //   const removeContact = contactId => {
  // //  dispatch(contactRemove(contacts,contactId))
  //  dispatch(contactRemove(contacts.filter(contact => contact.id !== contactId)))

  // };

  return (
    <section>
      <div className={css.contactContainer}>
        <h3 className={css.contactHead}>Name</h3>
        <h3 className={css.contactHead}>Number</h3>
      </div>
      <ul className={css['contacts-list']}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={css.item}>
            <p className={css.contactTitle}>{name}</p>
            <a className={css.contactLink} href={'tel:' + number}>
              {number}
            </a>
            <button
              type="click"
              className={css.btnIcon}
              onClick={
                () => onDelete(id)
                // removeContact(id)
              }
            >
              <span className={css.stats}>
                <IoTrashBin className={css.icon} />
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
