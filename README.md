# TypeScript React Workshop

<img src="https://raw.githubusercontent.com/DublinTypeScript/ts-react-workshop/master/media/ts.png" width="200"/>
<img src="https://raw.githubusercontent.com/DublinTypeScript/ts-react-workshop/master/media/redux.png" width="200"/>
<img src="https://raw.githubusercontent.com/DublinTypeScript/ts-react-workshop/master/media/react.png" width="250"/>

This is a self-learning tutorial. We have selected some of the best resources out there to ensure that you will have no problems during this workshop.

If you have any questions during the workshop feel free to ask for our help!

If you want to continue learning at home you will be able to [ask questions on github](https://github.com/DublinTypeScript/ts-react-workshop/issues).

# Setting up your environment
You will need to download and install:
- [Node.js](https://nodejs.org/en/download/)
- [VS Code](https://code.visualstudio.com/Download)

We recommend following [the official React & Webpack guide](http://www.typescriptlang.org/docs/handbook/react-&-webpack.html) from the TypeScript website.

# Being more productive with the Webpack devserver
Every time we change something in one if our TypeScript files we need to run the webpack command:

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
Once more we recommend taking a look to [the official typescript handbook](http://www.typescriptlang.org/docs/handbook/basic-types.html).

The handbook contains 22 sections that will provide you with everything you need to be familiar with TypeScript:

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

## Example 1
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
            <h1>
                Hello from <span style={{color: "green"}}>{this.props.compiler}</span> 
                and {this.props.framework}!
            </h1>
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

As you can see now the component has properties and state.

- The properties are passed via its constructor and they don't change (they are immutable).

- The state is initialized in the constructor but it is modified by the `_handleIncrement` and `_handleDecrement` methods (it is mutable).

The `setState` method is part of [the React component API](https://facebook.github.io/react/docs/component-api.html).
 
In the example you can also see how to create event handlers using the `onClick` attribute.

In the example we have used JSX which is very similar to HTML. 

The best way to learn JSX is to use a [HTML to JSX compiler](http://magic.reactjs.net/htmltojsx.htm).

## Example 2

Now we are going to change the component once more to understand how to map data to JSX elements.

This time instead of using a numeric counter we are going to use an array and we will add the `+1` or `-1` to it.

All the elements in the array will be displayed on screen using a colour code:

- Red for `-1`
- Green for `+1`

```ts
import * as React from "react";

export interface HelloProps { 
    compiler: string; 
    framework: string;
}

export interface HelloState {
    list: number[]
}

export class Hello extends React.Component<HelloProps, HelloState> {
    
    public constructor(props: HelloProps) {
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
            <ul>{this._renderCounter()}</ul>
            <button onClick={(e) => { this._addPossitive(); }}>Add +1</button>
            <button onClick={(e) => { this._addNegative(); }}>Add -1</button>
        </div>;
    }
    
    private _renderCounter() {
        return this.state.list.map((item: number) => {
            return <li style={{color: (item > 0) ? "green" : "red" }}>{item}</li>;
        });
    }
    
    private _addPossitive() {
        this.setState({ list: [...this.state.list, +1 ] });
    }
    
    private _addNegative() {
         this.setState({ list: [...this.state.list, -1 ] });
    }
    
}
```

This example showcase how we can invoke functions from JSX:

```ts
<ul>{this._renderCounter()}</ul>
```

And how to map data to JSX elements:

```ts
 return this.state.list.map((item: number) => {
    return <li style={{color: (item > 0) ? "green" : "red" }}>{item}</li>;
});
```

## Example 3
Now we are going to split the previous component into multiple components that can be re-used.

We are going to rename the `hello.tsx` file and change it for `counter_page.tsx`.

```ts
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
```

As we can see we are importing and using two components:

```ts
import { Btn } from "./btn";
import { Counter } from "./counter";
```

We need to create these two components.

Create a file named `btn.tsx`:

```ts
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
```

As we can see this component takes a function `clickHandler` as on of its properties.

And a file named `counter.tsx`:

```ts
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
```

One interestingn thing about this component is that the list of items is not a property of the `Counter` component and state of the `CounterPage` component.

- The `Counter` component is what we call a dumb component because it is not aware of any kind of state it has only props.
- The `CounterPage` component is what we call a smart component because it is aware of some state.

Dumb components are important because they are usually easier to re-use than smart components.

Redux is a library that focuses on this concept to help us to develop better React applications.

# What to learn next?
We recommend to do the following before learning Redux:

- [Build something more complex with React](http://blog.wolksoftware.com/working-with-react-and-typescript).
- [Learn how to use the React Router](https://github.com/reactjs/react-router).

# Learning Redux
Redux is not par of this workshop but we have included some resources so you know waht to learn next:

- [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux).
- [Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux).
- [Redux real-world Examples](https://github.com/reactjs/redux/tree/master/examples/real-world).
