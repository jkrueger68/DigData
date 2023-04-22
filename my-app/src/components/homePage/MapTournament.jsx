import React from "react";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

function MapTournament() {
	return (
		<React.Fragment>
			<Accordion defaultActiveKey="">
				<Accordion.Item id="tourTemp" eventKey="0">
					<Accordion.Header>
                        <Link href="#">Tournament #1</Link></Accordion.Header>
					<Accordion.Body>
						<div className="row align-items-center">
						<div className="col-4">Date Created:</div>
							<div className="col-4">
								<Button variant="warning shadow mt-2">Rename</Button>
							</div>
							<div className="col-4">
								<Button variant="danger shadow mt-2">Delete</Button>
							</div>
						</div>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item id="tourTemp" eventKey="1">
					<Accordion.Header>
                        <Link href="#">Tournament #2</Link></Accordion.Header>
					<Accordion.Body>
					<div className="row align-items-center">
						<div className="col-4">Date Created:</div>
							<div className="col-4">
								<Button variant="warning shadow mt-2">Rename</Button>
							</div>
							<div className="col-4">
								<Button variant="danger shadow mt-2">Delete</Button>
							</div>
						</div>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</React.Fragment>
	);
}

export default MapTournament;
