# ts-react-workshop
A react + redux + typescript workshop

![TS](https://raw.githubusercontent.com/DublinTypeScript/ts-react-workshop/master/media/ts.png)
![REDUX](https://raw.githubusercontent.com/DublinTypeScript/ts-react-workshop/master/media/redux.png)
![REACT](https://raw.githubusercontent.com/DublinTypeScript/ts-react-workshop/master/media/react.png)

This is a self-learning tutorial. 

We have selected some of the best resources out there to ensure that you will have no problems during this workshop.

If you have any questions during the workshop feel free to ask for our help!

If you want to continue learning at home you will be able to [ask questions on github](https://github.com/DublinTypeScript/ts-react-workshop/issues).

# Seetting up your environment
You will need to download and install:
- [Node.js](https://nodejs.org/en/download/)
- [VS Code](https://code.visualstudio.com/Download)

We recommned to follow [the official React & Webpack guide](http://www.typescriptlang.org/docs/handbook/react-&-webpack.html) from the TypeScript website.

# Being more productive with the Webpack devserver
Everytime we change something in one if our TypeScript files we need to run the webpack command:

```
$ webpack
```

We can automate this by installing the [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html).

```
$ npm install -g webpack-dev-server
```

When the installation has been completed run the following command:

```
$ webpack-dev-server
```

If everything went right the application should be running at:

```
http://localhost:8080/webpack-dev-server/index.html
```

Note: If the port 8080 is already being used by another process you will be able to select a different port using the `--port` option:

```
$ webpack-dev-server --port 3001
```

The application will then be running on that port:

```
http://localhost:3001/webpack-dev-server/index.html
```

We are going to change the Hello component. At the moment it renders the following:

```
return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
```
Change it to the following:
```
return <h1>Hello from <span style={{color: "red"}}>{this.props.compiler}</span> and {this.props.framework}!</h1>;
```
Save the changes and you should see the web browser refreshing automatically.

# Learning TypeScript
Once more we recommend to take a look to [the official typescript handbook](http://www.typescriptlang.org/docs/handbook/basic-types.html).

The handbook contains 22 pages that will provide you with everything you need to be familiar with TypeScript:

- Basic Types
- Variable Declarations
- Interfaces
- Classes
- Functions
- Generics
- Enums
- Type Inference
- Type Compatibility
- Advanced Types
- Symbols
- Iterators and Generators
- Modules
- Namespaces
- Namespaces and Modules
- Module Resolution
- Declaration Merging
- Writing Declaration Files
- JSX
- Decorators
- Mixins
- Triple-Slash Directives

The good news is that you are already working with ES6, C# or Java you will be familiar with most of these contents.

# Learning React
You have already created your first React component but you need to get familiar with some basic concepts before learning Redux.

The best way to get started with React is by creating a "Counter application".

All you need is an integer which is displayed on screen and buttons to increment and decrement the counter.

This example will teach you how to work with:

- Events
- Component State
- JSX

Update the `Hello` component to be as the following:

```ts
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

```

# Learning Redux

