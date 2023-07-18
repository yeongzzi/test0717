import React, { useRef, useState } from 'react';
import './TodoForm.css'


const TodoForm = ({onAdd}) => {
    const [text, setText] = useState('')
    const textRef = useRef(null)

    const changeInput = (e) =>{
        const {value} = e.target
        setText(value)
    }
    const onSubmit = (e) => {
        e.preventDefault()

        // if( text.length === 0 ) return
        if( !text ) return //텍스트값 없으면 나와라 

        onAdd(text) //추가버튼(text값)
        setText('')
        textRef.current.focus()
    }

    return (
        // form 성격떄문에 새로고침된다. 폼태그안에 onSubmit함수(e.preventDefalut)
        <form className='TodoForm' onSubmit={onSubmit} >
            <input type="text" ref={textRef} value={text} onChange={changeInput} />
            <button type="submit">추가</button>
        </form>
    );
};

export default TodoForm;