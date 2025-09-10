import React, { useEffect } from "react";
import { Card } from "../components/Card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getContacts } from "../services/apiServices.js";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();
	//use effect se renderiza por cada recarga de pagina
	useEffect(()=>{
		const loadContacts = async () => {
			await getContacts(dispatch)
		}
			loadContacts()
	},[dispatch])  
	return (
		<>
			{store.contacts.map((contact) => (
				<div key={contact.id}>
					<Card
						name={contact.name}
						address={contact.address}
						phone={contact.phone}
						email={contact.email}
					/>
				</div>
			))}
		</>
	);
};