import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
export const Form = () => {
    const handleSave
    // Creo que ahora hay que hacer que los id de los inputs se conecten a la store para que los agregue
    // usando parámetros. Ejemplo:
    // ni idea
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
                integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
                crossorigin="anonymous"
                referrerpolicy="no-referrer" />
            <div className="container mt-2">

                <div className="mb-3">
                    <label
                        for="Name"
                        className="form-label">
                        Full Name
                    </label>
                    <input
                        type="string"
                        className="form-control"
                        id="Name"
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
                        placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label
                        for="Phone"
                        className="form-label">
                        Phone number
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="Phone"
                        placeholder="19-16191646" />
                </div>
                <div className="mb-3">
                    <label
                        for="Address"
                        className="form-label">
                        Address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="Address"
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
                    className="btn btn-success ms-2">
                        Save change
                    </button>
                </div>
            </div>
        </>
    )
}