import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, undefined> {
    render() {
        return (
            <div className="Hello">
                <p>Test</p>
                <Dummy name="testName" testing="testing" />
                <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
            </div>
        );
    }
}

export interface DummyProps { name: string; testing: string; }
export class Dummy extends React.Component<DummyProps, undefined> {
    render() {
        return (
            <p>{this.props.name} OK {this.props.testing}</p>
        );
    }
}