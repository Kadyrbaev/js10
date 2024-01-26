import React, { useState } from 'react'
import { store } from '../store';
import { useDispatch, useSelector } from 'react-redux';

const Forma = () => {
    // const [state, setState] = useState()
    // console.log(store.getState());
    const test = useSelector((state)=>state)
    const dispatch = useDispatch()
    console.log(test);

    function clickHandler(){
        dispatch({type: "NUM"})
        // setState((prev)=>!prev)
    }

    

  return (
    <div>
      <button onClick={clickHandler}>CLICK</button>

        {
            test.todos.map((el)=>(
                <h1>{el.name}</h1>
            ))
        }

    </div>
  )
}

export default Forma
