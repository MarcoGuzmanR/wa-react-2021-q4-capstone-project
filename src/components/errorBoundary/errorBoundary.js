import React from "react";
import styles from './errorBoundary.module.css';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        hasError: false
      };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { error, hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.log(error);
      console.log(errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
          <div className={styles.container}>
            <h3 style={{ color: '#9a1111', textAlign: 'center' }}>
              The error is: {this.state.error.message}
            </h3>
          </div>
        );
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;