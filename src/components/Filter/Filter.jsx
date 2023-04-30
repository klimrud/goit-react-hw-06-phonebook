import React from 'react';
import PropTypes from 'prop-types';
import { BiSearchAlt2 } from 'react-icons/bi';
import css from 'components/Filter/Filter.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { filterChange } from 'store/filter/actions';
// import { CHANGEFILTER } from 'store/filter/types';

export const Filter = (
   {filter ,onChange }
  ) => {

//   const { filter } = useSelector(state => state.filter);
//   const dispatch = useDispatch();

  
//   const changeFilter = filter => {
//     // setFilter(filter);
// console.log('value', filter)
//     // dispatch({ type: CHANGEFILTER, payload: value });
//     // console.log('value', value)
//      dispatch(filterChange(filter))
//   };


  // console.log('filter-Filter', filter)
  return (
    <div>
      <div className={css.filterContainer}>
        <p className={css.filterTitle}>Find contacts by name</p>
        <BiSearchAlt2 className={css.iconFilter} />
        <input
          className={css.filterInput}
          type="text"
          name="name"
          value={filter}
          onChange={e => 
             onChange(e.currentTarget.value)
            // {console.log('v', e.currentTarget.value)
            //   changeFilter(e.currentTarget.value)}
            }
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
    </div>
  );
};

Filter.propTypes = {
  // filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
