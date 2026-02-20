import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	min-height: 100vh;
	align-items: center;
	justify-content: center;
	background: hsl(var(--muted));
`;

const Content = styled.div`
	text-align: center;
`;

const Title = styled.h1`
	margin-bottom: 1rem;
	font-size: 2.25rem;
	font-weight: bold;
`;

const Message = styled.p`
	margin-bottom: 1rem;
	font-size: 1.25rem;
	color: hsl(var(--muted-foreground));
`;

const HomeLink = styled.a`
	color: hsl(var(--primary));
	text-decoration: underline;

	&:hover {
		color: hsl(var(--primary) / 0.9);
	}
`;

const NotFound = () => {
	const location = useLocation();

	useEffect(() => {
		console.error(
			"404 Error: User attempted to access non-existent route:",
			location.pathname,
		);
	}, [location.pathname]);

	return (
		<Container>
			<Content>
				<Title>404</Title>
				<Message>Oops! Page not found</Message>
				<HomeLink href="/">Return to Home</HomeLink>
			</Content>
		</Container>
	);
};

export default NotFound;
