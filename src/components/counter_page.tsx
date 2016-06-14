import * as React from "react";
import { Btn } from "./btn";
import { Counter } from "./counter";

export interface CounterPageProps { 
    compiler: string; 
    framework: string;
}

export interface CounterPageState {
    list: number[]
}

export class CounterPage extends React.Component<CounterPageProps, CounterPageState> {
    
    public constructor(props: CounterPageProps) {
        super(props);
        this.state = {
            list: []
        };
    }
    
    public render() {
        return <div>
            <h1>
                Hello from <span style={{color: "green"}}>{this.props.compiler}</span> 
                and {this.props.framework}!
            </h1>
            <Counter items={this.state.list} />
            <Btn text="Add +1" clickHandler={() => { this._addPossitive(); }} />
            <Btn text="Add -1" clickHandler={() => { this._addNegative(); }} />
        </div>;
    }
    
    private _addPossitive() {
        this.setState({ list: [...this.state.list, +1 ] });
    }
    
    private _addNegative() {
         this.setState({ list: [...this.state.list, -1 ] });
    }
    
}

