import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function HomePage() {
	return (
		<React.Fragment>
			<div className="row justify-content-center mx-2">
				<div className="col">
					<Card border="secondary" className="shadow">
						<Card.Body>
							insert logo here
							<Card.Title className="mt-2">Selected Tournament</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">
								Edit the tournament with the buttons below.
							</Card.Subtitle>
							<br />
							<div className="col">
								<Button variant="primary shadow mt-2">Roll Call</Button>
							</div>
							<br />
							<div className="col">
								<Button variant="primary shadow mt-2">Create Match</Button>
							</div>
							<br />
							<div className="col">
								<Button variant="primary shadow mt-2">Manage Players</Button>
							</div>
							<br />
							<div className="col">
								<Button variant="primary shadow mt-2">View Scores</Button>
							</div>
							<br />
							<div className="col">
								<Button variant="warning shadow mt-2">View/Edit Match</Button>
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
