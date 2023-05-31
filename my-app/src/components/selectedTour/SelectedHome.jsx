import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function HomePage() {
	const navigate = useNavigate();

	const onCreateMatchClicked = () => {
		navigate("/selected/createMatch");
	};

	const onManagePlayersClicked = () => {
		navigate("/managePlayers");
	};
	
	const onViewScoresClicked = () => {
		navigate("/playerScores");
	};

	return (
		<React.Fragment>
			<div className="row justify-content-center mx-2">
				<div className="col">
					<Card border="secondary" className="shadow">
						<Card.Header className="shadow-sm">
							insert logo here
							<Card.Title className="mt-2">Selected Tournament</Card.Title>
						</Card.Header>
						<Card.Body>
							<Card.Subtitle className="mb-2 text-muted">
								Edit the tournament with the buttons below.
							</Card.Subtitle>
							<div className="col">
								<Button onClick={onCreateMatchClicked} variant="primary shadow mt-2">Create Match</Button>
							</div>
							<br />
							<div className="col">
								<Button onClick={onManagePlayersClicked} variant="primary shadow mt-2">Manage Players</Button>
							</div>
							<br />
							<div className="col">
								<Button onClick={onViewScoresClicked} variant="primary shadow mt-2">View Scores</Button>
							</div>
							<br />
						</Card.Body>
					</Card>
				</div>
			</div>
		</React.Fragment>
	);
}

export default HomePage;
