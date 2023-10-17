import { Component, ErrorInfo, ReactNode } from "react";

import classes from "./ErrorBoundary.module.scss";
import { Container } from "@/components";


interface Props {
	children?: ReactNode;
	t: (str: string) => any;
}

interface State {
	hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
	
	public state: State = {
		hasError: false
	};

	public static getDerivedStateFromError(_: Error): State {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		this.setState({ hasError: true });
		console.log("Uncaught error:", error, errorInfo);
	}

	public render() {
		if (this.state.hasError) {
			return (
        <Container>
          <div className={classes.container}>
            <h1>Xatolik yuz berdi</h1>
          </div>
        </Container>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
