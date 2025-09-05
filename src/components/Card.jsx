
export const Card = ({name, phone, email, address}) => {
    return (
        <>
            <div className="card mb-3" style={{maxwidth: "540px"}}>
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
                    <div className="col-md-2 justify-content-end">
                        lapiz, papelera
                    </div>
                </div>
            </div>
        </>
    )
}