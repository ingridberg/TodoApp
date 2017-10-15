import React from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import { createTodo } from './todoActions';
import PropTypes from 'prop-types';
import Todo from './Todo';
import AddTodo from './AddTodo';

class TodoListContainer extends React.Component {
  constructor(props) {
    super(props);
  }


    componentDidMount() {
       this.props.createTodoItem('Wake up');
       this.props.createTodoItem('Do the dishes');
       this.props.createTodoItem('Fold clothes');
       this.props.createTodoItem('Browse Reddit');
     }


  render() {
    return <div><AddTodo addclicked={(value) => this.props.createTodoItem(value)}/><TodoList {...this.props} /></div>;
  }
}

const mapStateToProps = state => ({
  todoItems: state.todos,
});

const mapDispatchToProps = dispatch => ({
  createTodoItem: description => dispatch(createTodo(description)),
});

TodoListContainer.propTypes = {
  todoItems: PropTypes.arrayOf(PropTypes.instanceOf(Todo)).isRequired,
  createTodoItem: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoListContainer);
