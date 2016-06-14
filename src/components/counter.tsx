import * as React from "react";

export interface CounterProps { 
    items: number[];
}

export class Counter extends React.Component<CounterProps, {}> {
    
    public constructor(props: CounterProps) {
        super(props);
    }
    
    public render() {
       return <ul>{this._renderCounter()}</ul>;
    }
    
    private _renderCounter() {
        return this.props.items.map((item: number) => {
            return <li style={{color: (item > 0) ? "green" : "red" }}>{item}</li>;
        });
    }
    
}

