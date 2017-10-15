import React from 'react';
import PropTypes from 'prop-types';
import './todoItem.css';

const AddTodo = (props) => (
  <div className="todo-item__container">
    <div>
      <input type="text" id='text_id'/>
      <input type="button" onClick={(event) => props.addclicked(document.getElementById('text_id').value)} value="Add todo" />
    </div>

  </div>
);



AddTodo.propTypes = {
  addclicked: PropTypes.func

};

export default AddTodo;
