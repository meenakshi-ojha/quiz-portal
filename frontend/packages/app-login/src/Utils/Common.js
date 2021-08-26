
// return the user data from the session storage
export const getUser = () => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) return userStr;
    else return null;
  }
   
  // return the token from the session storage
  export const getToken = () => {
    return sessionStorage.getItem('token') || null;
  }
   
  // remove the token and user from the session storage
  export const removeUserSession = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user'); 
  }
   
  // set the token and user from the session storage
  export const setUserSession = (token, username) => {
    console.log(token);
    console.log(username);
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(username));
  }