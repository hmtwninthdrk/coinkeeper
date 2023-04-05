import logo from './logo.svg';
import './App.css';
import Income from './components/Income/Income';
import { useState } from 'react';
import Account from './components/Accounts/Account';
import Expenses from './components/Expenses/Expenses';
import History from './components/History/History';

function App() {
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
    name: "Стипендия",
    img: "",
    amount : 36000,
    opt:"",
    inp:"D"
},
{
  title:"Expenses",
  id:2,
  name: "Стипендия",
  img: "",
  amount : 36000,
  opt:"",
  inp:"D"
}
])


  let currentUser = {
    id:1,
    cname : "admin",
    password : "0000",
    data:data
  }


  return (
 <div className='appmain'>
 <div>
  <Income title = {"Income"}  data = {data} setData = {setData}/> 
  <Account title = {"Account"} data = {data} setData = {setData}/>
  <Expenses title ={"Expenses"} data = {data} setData = {setData} />
 </div>
  <History/>
 </div>
  );
}

export default App;
