
export const Card = ({ name, phone, email, address }) => {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
                integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer" />
            <div className="card mb-3" style={{ maxwidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-2">
                        <img src="..." className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name} </h5>
                            <p className="card-text">{address}, {phone}, {email}</p>
                        </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-end">
                        <button
                            type="button"
                            className="btn btn-outline-danger">
                            <i className="fa-regular fa-pen-to-square" style={{ color: "#ff0000" }}></i>
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-danger">
                            <i className="fa-regular fa-trash-can" style={{ color: "#ff0000" }}></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}