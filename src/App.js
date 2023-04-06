
import './App.css';
import { useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

import card from '../src/components/credit-card.png';

function App(props) {
  const [isAuth, setIsAuth] = useState(false)
  const logInfo = JSON.parse(localStorage.getItem("logInfo"))
    if(!logInfo)localStorage.setItem(
      "logInfo",
      JSON.stringify({
        users: [{ id: 1, login: "ad1lek", password: "123123", isAuth: false, data:[], history:[] }],
      })
    );
    useEffect(() => {
        logInfo.users.forEach((user) => {
            if (user.isAuth) {
                setIsAuth(true)
            }
        })
    }, [])


  
   
  const defaultData = [{
      title:"Income",
      icons:card,
      id:1,
      name: "Стипендия",
      amount : 0,
      opt:""
    },
    {
      title:"Account",
      icons:"",
      id:2,
      name: "Kaspi",
      img: "",
      amount : 0,
      opt:"",
     
    },
    {
      title:"Expenses",
      icons:"",
      id:3,
      name: "Food",
      img: "",
      amount : 0,
      opt:"",
      
    }
  ]


  
  
  
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main state = {props.state} isAuth = {isAuth} setIsAuth={setIsAuth} defaultData={defaultData} rerenderTree={props.rerenderTree}/>}/>
        <Route path='/' element={<SignIn setIsAuth={setIsAuth} state = {props.state}/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>

 
  );
}

export default App;
