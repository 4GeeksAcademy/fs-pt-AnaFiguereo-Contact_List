import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useState } from "react"
import { createContacts } from "../services/apiServices"
export const Form = () => {
    const [newContact, setNewContact] = useState({
        name : "",
        phone : "",
        email : "",
        address : ""
    }) 
    const {dispatch} =useGlobalReducer()
    const handleChange = (e) => {
        // target es para coger la posicion del evento
        const {id, value} = e.target
        // las id son las key del objeto de la api
        setNewContact({
            ...newContact,
            [id]: value
        })
        console.log(newContact);
        
    }
    const handleSubmit = () => {
        createContacts(newContact,dispatch)
        setNewContact({
        name : "",
        phone : "",
        email : "",
        address : ""
    }) 
    
    }
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
                integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
                crossOrigin="anonymous"
                referrerpolicy="no-referrer" />
            <div className="container mt-2">

                <div className="mb-3">
                    <label
                        for="name"
                        className="form-label">
                        Full Name
                    </label>
                    <input
                        type="string"
                        className="form-control"
                        id="name"
                        value={newContact.name}
                        onChange={handleChange}
                        placeholder="Name and Last Name" />
                </div>
                <div className="mb-3">
                    <label
                        for="email"
                        className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={newContact.email}
                        onChange={handleChange}
                        placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label
                        for="phone"
                        className="form-label">
                        Phone number
                    </label>
                    <input
                        type="telf"
                        className="form-control"
                        id="phone"
                        value={newContact.phone}
                        onChange={handleChange}
                        placeholder="19-16191646" />
                </div>
                <div className="mb-3">
                    <label
                        for="address"
                        className="form-label">
                        Address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="address"
                         value={newContact.address}
                        onChange={handleChange}
                        placeholder="wonderfull n-2" />
                </div>
                <div className="d-flex justify-content-center">
                    <div style={{ fontSize: "25px" }}>
                        <Link to="/">
                            <button type="button" className="btn btn-secondary">
                                <i className="fa-solid fa-caret-left"></i>
                            </button>
                        </Link>
                    </div>
                    <button 
                    type="button" 
                    className="btn btn-success ms-2"
                    onClick={handleSubmit}>
                        Save change
                    </button>
                </div>
            </div>
        </>
    )
}