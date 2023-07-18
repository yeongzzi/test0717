import React from 'react';


const TodoItem = ({item , onDel, onToggle}) => {
    const {id, text, isChk} = item
    return (
        <li className={ isChk ? "on" : ""}>
            <input type="checkbox" checked={isChk} onChange={()=>onToggle(id)}/>
            <em>{text}</em>
            <button onClick={()=>onDel(id)}>삭제</button>
        </li>
    );
};

export default TodoItem;