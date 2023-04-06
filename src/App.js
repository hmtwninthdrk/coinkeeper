import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';


function App(props) {
  const [isAuth, setIsAuth] = useState(false)
  const logInfo = JSON.parse(localStorage.getItem("logInfo"))
    if(!logInfo)localStorage.setItem(
      "logInfo",
      JSON.stringify({
        users: [{ login: "ad1lek", password: "123123", isAuth: false, data:[] }],
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
      id:1,
      name: "Стипендия",
      img: "",
      amount : 0,
      opt:""
    },
    {
      title:"Account",
      id:2,
      name: "Kaspi",
      img: "",
      amount : 0,
      opt:"",
     
    },
    {
      title:"Expenses",
      id:3,
      name: "Food",
      img: "",
      amount : 0,
      opt:"",
      
    }
  ]
  const[data,setData] = useState([{
        title:"Income",
        id:1,
        name: "Стипендия",
        img: "",
        amount : 0,
        opt:""
  },
  {
    title:"Account",
    id:2,
    name: "Kaspi",
    img: "",
    amount : 0,
    opt:"",
    
},
{
  title:"Expenses",
  id:3,
  name: "Food",
  img: "",
  amount : 0,
  opt:"",
  
}
])
  

const[history,setHistory] = useState([{
  id:1,
  from_title:"Стипендия",
  to_title:"Kaspi",
  money:100
}])
  
  
  
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main history = {history} setHistory = {setHistory} data={data} setData={setData} state = {props.state} defaultData={defaultData} rerenderTree={props.rerenderTree}/>}/>
        <Route path='/' element={<SignIn setIsAuth={setIsAuth}/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>

 
  );
}

export default App;
