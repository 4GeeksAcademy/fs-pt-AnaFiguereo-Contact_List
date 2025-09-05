import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Form } from "../components/Form.jsx";

export const AddContact = () => {
    const {store, dispatch} =useGlobalReducer()
    return (
        <>
            <Form />
        </>
    )
};
