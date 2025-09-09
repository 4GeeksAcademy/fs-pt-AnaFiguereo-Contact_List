// store nombre de variables 

export const initialStore=()=>{
  return{
    contacts: []
  }
}



// A partir de aquí vamos a declarar las funciones que nos van a modificar las variables de arriba
export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'get_contacts':
      return {
        ...store, 
        contacts: action.payload
      }
    case `new_contact`:
      return {
        ...store, 
        contacts: [...contacts, action.payload]
      }
    
    default:
      throw Error('Unknown action.');
  }    
}
