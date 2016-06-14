import * as React from "react";

export interface BtnProps { 
    text: string;
    clickHandler: Function
}

export class Btn extends React.Component<BtnProps, {}> {
    
    public constructor(props: BtnProps) {
        super(props);
    }
    
    public render() {
        return <button onClick={(e) => { this.props.clickHandler(); }}>{this.props.text}</button>;
    }
    
}

