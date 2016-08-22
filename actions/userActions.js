export function fetchUsers() {
    return {type:"FETCH_USERS_FULFILLED",payload:{name:"will",age:35}}
}   
     
export function setUserName(name) {
    return {
        type: "SET_USER_NAME",
        payload: name,
    }
}
   
export function setUserAge(age) {
    return {
        type: "SET_USER_AGE",
        payload: age,
    }
}