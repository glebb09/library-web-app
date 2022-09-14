
// User
export const LocalUserIn = ( user ) => {
  localStorage.setItem('user', JSON.stringify(user));
}

export const LocalUser = () => {
  return JSON.parse(localStorage.getItem('user'));
}

export const LocalUserId = () => {
  const { id } = JSON.parse(localStorage.getItem('user'));
  return id;
}

export const LocalUserOut = () => {
  localStorage.removeItem('user');
}

// Token

export const LocalTokenIn = ( token ) => {
  localStorage.setItem('token', JSON.stringify(token));
}

export const LocalToken = ( ) => {
  return JSON.parse(localStorage.getItem('token'));
}
