import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import MapTournament from "./MapTournament";

function HomePage() {
	const navigate = useNavigate();

	const onCreateTourClicked = () => {
		navigate("/selected");
	};

	return (
		<React.Fragment>
			<div className="row justify-content-center mx-2">
				<div className="col">
					<Card border="secondary" className="shadow">
						<Card.Header className="shadow-sm">
							insert logo here
							<Card.Title className="mt-2">Create a Tournament</Card.Title>
						</Card.Header>
						<Card.Body>
							{/* <Card.Subtitle className="d-none mb-2 text-muted">
								Card Subtitle 
							</Card.Subtitle> */}
							<Card.Text>
								To create a new tournament, click on the "Create Tournament"
								button.
								<br />
								Or, select a previous tournament below the button.
							</Card.Text>
							<Button onClick={onCreateTourClicked} variant="primary mt-2">Create Tournament</Button>
							<br />
							<br />
							<MapTournament />
						</Card.Body>
					</Card>
				</div>
			</div>
		</React.Fragment>
	);
}

export default HomePage;
