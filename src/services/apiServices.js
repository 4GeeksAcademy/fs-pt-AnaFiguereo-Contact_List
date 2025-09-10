// CRUD (create, read, update, delete)
//llamaremos a la api y la exportaremos

const url = (`https://playground.4geeks.com/contact/agendas`)


// POST AGENDA


export const createAgenda = async () => {
    // la respuesta es la espera del fetch 
    //                                                1                                     2
    await fetch(`${url}/ana`, {method: "POST"})
    
}


// GET CONTACTS


export const getContacts = async (dispatch) => {
    const response = await fetch(`${url}/ana/contacts`, {method: "GET"}) 
    if (!response.ok) {
        await createAgenda() // PORQUE CREAMOS CONTACTO SI DA FALLO LA LLAMADA??
    }
    //                 los métodos van con paréntesis pegado
    const data = await response.json()
    // La recogida de contacto la metemos en el store para trabajar con esa informacion
    dispatch({type: "get_contacts", payload:data.contacts}) 
}


// POST CONTACTS

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
        payload : data  // POR QUË ARRIBA DATA:CONTACTS Y AQUI SOLO DATA
    })
   await getContacts(dispatch)} // que nos traiga los contactos actualizados ?
}


//  PUT

export const editContacts = async (id, updateData,dispatch) => {
    const response = await fetch(`${url}/ana/contacts/${id}`,
        {   method: "PUT",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify({updateData})
        })
    if (response.ok) {getContacts(dispatch)} // trae la info de nuevo de contacts
}

// DELETE

export const deleteContacts = async (id) => {
    const response = await fetch(`${url}/ana/contacts/${id}`,
        { method: "DELETE" }
    )
}