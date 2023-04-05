
let state = {
    users: JSON.parse(localStorage.getItem("logInfo")),
    currentUser: {
        id:"",
        login : "",
        password : "",
        data:[]
    }
    
}

console.log(state.currentUser)
export default state;