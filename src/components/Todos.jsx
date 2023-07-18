import React, { useRef, useState } from 'react';
import './Todos.css'
import TodoForm from './TodoForm'
import TodoList from './TodoList';
import {dataList} from '../assets/api/data'

const Todos = () => {
    const no = useRef(4)
    const [data, setData] = useState(dataList) 

    const onAdd = (text) => setData([ ...data, { id: no.current++, text : text, isChk : false}])
    const onDel = (id) => setData( data.filter( item =>item.id !== id))
    const onToggle = (id) => setData( data.map(item => item.id === id ? {...item, isChk : !item.isChk} : item) )

    return (
        <div className='Todos'>
            <h1>할일만들기</h1>
            <TodoForm onAdd={onAdd}/>
            <TodoList data={data} onDel={onDel} onToggle={onToggle}/>
        </div>
    );
};

export default Todos;