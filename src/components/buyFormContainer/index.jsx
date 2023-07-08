import React from "react";
import CheckoutForm from "../buyForm";

function CheckoutContainer() {
    return(
        <div className="form">
            <h3>Ya casi estamos!</h3>
            <h4 className="form-subtitle">Kaiser solo necesita tu alma</h4>
            <CheckoutForm />
        </div>
    )
};

export default CheckoutContainer;