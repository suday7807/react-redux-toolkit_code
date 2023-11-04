import React from "react";
import {useDispatch,useSelector} from "react-redux"


const Home = () => {
  const {c} = useSelector(state=>state.custom)
    const dispatch = useDispatch();

    const addBtn = () =>{
      dispatch({
        type:"Increment"
      })
    }
    const addBtn25 = () =>{
      dispatch({
        type:"IncrementByValue",
        payload:25,
      })
    }
    
    const subBtn = () =>{
      dispatch({
        type:"Decrement"
      })
    }



  return (
  <div>
    <h2>{c}</h2>
    <button onClick={addBtn}>Increment</button>
    <button onClick={addBtn25}>Increment by 25</button>
    <button  onClick={subBtn}>Decrement</button>
  </div>);
};

export default Home;
