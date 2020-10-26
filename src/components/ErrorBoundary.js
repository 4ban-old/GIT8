import React, { Component } from 'react'

import Button from "@/components/Button";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: ''
    };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      errorInfo: errorInfo
    })
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h2>Oops, something went wrong.</h2>
          <code>{this.state.error.toString()}</code>
          <Button to="/" text='Go home' />
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
};