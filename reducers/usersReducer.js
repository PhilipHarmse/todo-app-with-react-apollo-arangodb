
export default function (state={fetching: false,
                                    fetched: false,
                                    users:[],
                                    error:null}, 
                                    action) {
    switch (action.type) {
        case "FETCH_USERS_START":{
            return {...state, fetched:true}          
        }
        case "FETCH_USERS_ERROR":{
            return {...state, error: action.payload}
        }
        case "RECEIVE_USERS":{
            return {...state,
                    fetched:true,
                    fetching: false,
                    users: action.payload
            }
        }
    }
    return state
}