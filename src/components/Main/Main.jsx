import Income from "../Income/Income";
import { useState } from "react";
import Account from "../Accounts/Account";
import Expenses from "../Expenses/Expenses";
import History from "../History/History";
import HeaderInput from "../HeaderInput/HeaderInput";
import Header from "../Header/Header";

function Main(props) {
  const[historyActive,setHistoryActive] = useState(false)
  const logInfo = JSON.parse(localStorage.getItem("logInfo"));

  if (props.state.currentUser.data.length == 0) {
    for (let i = 0; i < props.defaultData.length; i++) {
      props.state.currentUser.data.push(props.defaultData[i]);
    }
  }

  return (
    <div className="appmain">
      <Header />
      <div>
        <HeaderInput
        history = {props.history}
        setHistory = {props.setHistory}
        historyActive = {historyActive}
        setHistoryActive = {setHistoryActive}
          data={props.state.currentUser.data}
          // setData={props.state.currentUser.data}
          rerenderTree={props.rerenderTree}
        />

        <div className="mainchapter">
        <div>
          <Income
          
            title={"Income"}
            data={props.state.currentUser.data}
            rerenderTree={props.rerenderTree} /*setData={props.setData}*/
          />
          <Account
            title={"Account"}
            data={props.state.currentUser.data}
            setData={props.setData}
            rerenderTree={props.rerenderTree}
          />
          <Expenses
            title={"Expenses"}
            data={props.state.currentUser.data}
            setData={props.setData}
            rerenderTree={props.rerenderTree}
          />
        </div>
        <History 
        history = {props.history}
        setHistory = {props.setHistory}
         historyActive = {historyActive}
         setHistoryActive = {setHistoryActive}
        />
        </div>
      </div>

      
    </div>
  );
}

export default Main;
