import { observer } from 'mobx-react-lite';
import React from 'react';
import todoStore from '../../../store/todo-store';
import TodoItem from '../todo-item/todo-item';
import cl from './todo-list.module.scss';

const TodoList = observer(() => {
    return (
        <ul className={cl.list}>
            {todoStore.todos.map((todo) => (<TodoItem todo={todo} key={todo.id}/>))}
        </ul>
    );
})

export default TodoList;
