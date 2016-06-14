# ts-react-workshop
A react + typescript workshop

![TS]()
![REDUX]()
![REACT]()

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
You have already created your first React component.

# Learning Redux

