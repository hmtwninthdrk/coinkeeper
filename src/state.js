
let state = {
    users: JSON.parse(localStorage.getItem("logInfo")),
    currentUser: {
        id:"",
        login : "",
        password : "",
        data:[],
        history: []
    },

    deleteHistory(id){
        for(let i = 0; i<this.currentUser.history.length;i++){
            if(id == this.currentUser.history[i.id]){
                this.currentUser.history.splice(i,1);
            }
        }

    }
    
    
}


export default state;