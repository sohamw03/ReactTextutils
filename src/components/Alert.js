import React from "react";

export default function Alert(props) {
    return (
        props.alert && (
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show m-3 rounded-pill ps-4 shadow-sm position-fixed bottom-0 end-0`} role="alert">
                <strong>{props.alert.msg}</strong>
                <button type="button" className="btn-close rounded-pill" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        )
    );
}
