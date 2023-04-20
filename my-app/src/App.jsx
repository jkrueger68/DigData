import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/homePage/HomePage";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";

function App() {
	return (
		<div className="App container-fluid">
			<header className="App">
				<NavBar />
			</header>
			<div className="app-bg w-100">
				<Container>
					<Router>
          <div className="row">
						<div className="col-2 d-none d-xxl-block empty" />
						<div className="col my-4">
						<Routes>
							<Route path="/" element={<HomePage />}></Route>
							<Route path="/login" element={<Login />}></Route>
							{/* <Route path="/create" element={<Create />}></Route> */}
							{/* <Route path="/players" element={<Players />}></Route> */}
						</Routes>
            </div>
						<div className="col-2 d-none d-xxl-block empty" />
					</div>						
					</Router>
				</Container>
			</div>
		</div>
	);
}

export default App;
