import {Component, ErrorInfo, ReactNode, Suspense} from 'react';
import {ErrorContent} from "@/widgets/error-content";
import {Loader} from "@/shared/ui/loader";

type ErrorBoundaryProps = {
    children: ReactNode;
};

type ErrorBoundaryState = {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
        this.setState({
            hasError: true,
            error,
            errorInfo
        });
    }

    render(): ReactNode {
        if (this.state.hasError) {
            return (
                <Suspense fallback={<Loader/>}>
                    <ErrorContent/>
                </Suspense>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary
