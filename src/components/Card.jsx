


export const Card = () => {
    return (
        <>
            <div className="card mb-3" style={{maxwidth: "540px"}}>
                <div className="row g-0">
                    <div className="col-md-2">
                        <img src="..." className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Nombre con apellido </h5>
                            <p className="card-text">Ubi, tlf gmail</p>
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