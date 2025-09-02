// CRUD (create, read, update, delete)
//llamaremos a la api y la exportaremos

const url = (`https://playground.4geeks.com/contact/agendas`)
export const createAgenda = async () => {
    // la respuesta es la espera del fetch 
    //                                                1                                     2
    const response = await fetch(`${url}/ana`, {method: "POST"})
}

export const getContacts = async (dispatch) => {
    const response = await fetch(`${url}/ana/contacts`, {method: "GET"}) 
    if (!response.ok) {
        createAgenda()
    }
    //                 los métodos van con paréntesis pegado
    const data = await response.json()
    dispatch({type: "get_contacts", payload:data.contacts}) 
}