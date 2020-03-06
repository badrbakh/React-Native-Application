import TodoList from '../components/TodoList';
import {connect} from 'react-redux';
import {toggleTodo} from '../actions';

const mapStatetoProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispath => ({
  toggleTodo: id => dispath(toggleTodo(id)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(TodoList);
