
export const setBookId = ( id ) => {
  localStorage.setItem('id', JSON.stringify(id));
}

export const getBookId = () => {
  return JSON.parse(localStorage.getItem('id'));
}

export const removeBookId = ( id ) => {
  const items = JSON.parse(localStorage.getItem('id'));

  items.map((item, index) => {
      let newItem = JSON.parse(items[index])
      if ( newItem == id ) { items.slice(index, 1); };
  });

  localStorage.setItem('id', JSON.stringify(items));
  
}

export const removeBook = () => {
  localStorage.removeItem('id')
}
