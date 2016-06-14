import * as React from "react";

export interface HelloProps { 
    compiler: string; 
    framework: string;
}

export interface HelloState {
    counter: number
}

export class Hello extends React.Component<HelloProps, HelloState> {
    
    public constructor(props: HelloProps) {
        super(props);
        this.state = {
            counter: 0
        };
    }
    
    public render() {
        return <div>
            <h1>Hello from <span style={{color: "green"}}>{this.props.compiler}</span> and {this.props.framework}!</h1>
            <h2>Total: {this.state.counter}</h2>
            <button onClick={(e) => { this._handleIncrement(); }}>+1</button>
            <button onClick={(e) => { this._handleDecrement(); }}>-1</button>
        </div>;
    }
    
    private _handleIncrement() {
        this.setState({ counter: (this.state.counter + 1) });
    }
    
    private _handleDecrement() {
         this.setState({ counter: (this.state.counter - 1) });
    }
    
}
