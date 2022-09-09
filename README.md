# Looks like React, Quacks like React, but it's not React.
A crude implementation of React from scratch. It highlights some core features in React like JSX and how the rendering process happens. It also shows how some Hooks are implemented under the hood.

#### :Disclaimers: 
    
1. The class component implementation is very hacky and does not accurately represent how class components function (pun intended) under the hood. However, it reflects some of the concepts that class components makes use of.

2. The useState Hook has a subtle bug. When we perform "let state = states[idx] || initialValue;" and the value of states[idx] is 0, the state picks the initialValue. I ignored this because I was writing the code in ungodly hours of the night and my mental capacity was quickly diminishing.


## How to run
The individual directories are bootstrapped with Vite, just because I like it.
You'll need to install Vite if you dont already have it.
Then: 
```js
cd not-react-fc
npm install

npm run start

```

### Command of interest
The unique command that allows us to treat the jsx in our js as "cool"

```js
    "build": "esbuild main.js --bundle --minify --sourcemap --outfile=dist/bundle.js --loader:.js=jsx",
```

This introduces a build step to bundle our ```js main.js ``` into ```js dist/bundle.js```. This way, the jsx we have inside ```js main.js ``` will be bundled into js. That is why in our index.html, we use the script ```js dist/bundle.js``` 


#### Hack Away :)
    

