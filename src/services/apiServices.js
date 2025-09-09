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
export const createContacts = async (newContact, dispatch) => {
    const response = await fetch (`${url}/ana/contacts`, 
        {   method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(newContact)
        })
   if (response.ok) { 
    const data =response.json() 
    dispatch({
        type : "new_contact",
        payload : data
    })
    getContacts(dispatch)}
}
export const editContacts = async (id, updateData,dispatch) => {
    const response = await fetch(`${url}/ana/contacts/${id}`,
        {   method: "PUT",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify({updateData})
        })
    if (response.ok) {getContacts(dispatch)}
}
export const deleteContacts = async (id) => {
    const response = await fetch(`${url}/ana/contacts/${id}`,
        { method: "DELETE" }
    )
}