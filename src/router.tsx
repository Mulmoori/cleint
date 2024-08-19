import React from "react";
import {
	BrowserRouter,
	Outlet,
	Route,
	Routes,
	useLocation,
} from "react-router-dom";
import { styled } from "styled-components";
import Home from "./pages/home/Home";
import Navbar from "./components/layouts/Navbart";
import Profile from "@pages/profile/Profile";
import Auth from "@pages/auth/Auth";
import Naruteo from "@pages/naruteo/Naruteo";

const Wrapper = styled.div`
	margin: 0 auto;
	min-height: 100vh;
	background-color: white;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
	display: flex;
	flex-direction: column;
`;

const Layout: React.FC = () => {
	const location = useLocation();
	const showNavbar =
		location.pathname !== "/entry" &&
		location.pathname !== "/naruteo" &&
		location.pathname !== "/";

	return (
		<Wrapper>
			{showNavbar && <Navbar />}
			<Outlet />
		</Wrapper>
	);
};

export default function Router(): JSX.Element {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<Auth />} />
					<Route path="/home" element={<Home />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/naruteo" element={<Naruteo />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
