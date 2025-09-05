import React from "react";
import { Form } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const AddContact = () => {
    const {store, dispatch} =useGlobalReducer()
    return (
        <>
            <Form />
        </>
    )
};