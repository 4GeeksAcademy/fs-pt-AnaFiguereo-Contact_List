import React from "react";
import { Card } from "../components/Card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();

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