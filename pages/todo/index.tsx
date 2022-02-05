import React, {useState} from 'react';
import { useRef } from 'react';
import styles from './style.module.css';

const todo = () => {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [testInput, setTestInput] = useState('');
  const testInputRef = useRef<HTMLInputElement>(null);

  const onAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(testInput === '') {
      return;
    }
    
    for(let i = 0; i < todoList.length; i++) {
      if(todoList[i] === testInput) {
        alert('todo\'s 중복');
        setTestInput('');
        if(testInputRef.current) {
          testInputRef.current.focus();
        }
        return;
      };
    }

    setTodoList(prev=>{
      return [...prev, testInput]
    })
    setTestInput('');
    if(testInputRef.current) {
      testInputRef.current.focus();
    }
  }

  const onChangeTestInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTestInput(e.currentTarget.value);
  } 

  return(
    <>
      <form onSubmit={onAddTodo}>
        <input 
          type="text" 
          onChange={onChangeTestInput} 
          value={testInput} 
          ref={testInputRef} 
          className={`${styles.input} ${styles.head}`}
        />
        <button type='submit'>add todos</button>
        <ul>
        {
          todoList?.map((v, i)=>{
            return(
              <li key={i}>
                {v}
              </li>
            )
          })
        }
        </ul>
      </form>
    </>
  )
}

export default todo;