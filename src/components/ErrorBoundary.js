import React, { Component } from 'react'

import { Button } from "@/components/Button";
import { CenterWrapper } from "@/components/Containers";

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
        <CenterWrapper>
          <h2>Oops, something went wrong.</h2>
          <code>{this.state.error.toString()}</code>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </CenterWrapper>
      );
    }
    return this.props.children;
  }
};