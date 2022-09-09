import './style.css';

const React = (() => {
  const createElement = (htmlTag, props, ...children) => {
    if (typeof htmlTag === 'function') {
      return htmlTag(props);
    }
    const element = { htmlTag, props: { ...props, children } };
    return element;
  };

  const render = (reactElement, root) => {
    const mainDOMElement = document.createElement(String(reactElement.htmlTag));
    if (['number', 'string'].includes(typeof reactElement)) {
      return root.appendChild(document.createTextNode(String(reactElement)));
    }

    if (reactElement.props) {
      Object.keys(reactElement.props)
        .filter((i) => i !== 'children')
        .forEach((i) => (mainDOMElement[i] = reactElement.props[i]));
    }

    if (reactElement.props.children) {
      reactElement.props.children.forEach((child) =>
        render(child, mainDOMElement)
      );
    }

    root.appendChild(mainDOMElement);
    idx = 0;
  };
  let states = [];
  let idx;
  const useState = (initialValue) => {
    let state = states[idx] || initialValue;
    let _idx = idx;
    const setState = (newVal) => {
      states[_idx] = newVal;
      rerender();
    };
    idx++;

    return [state, setState];
  };

  return { createElement, render, useState };
})();

const App = () => {
  const [count, setCount] = React.useState(10);
  const [count1, setCount1] = React.useState(0);
  return (
    <div>
      <h1 color="red">This is Not React!!!</h1>
      <br />
      <p>{count}</p>

      <button onclick={() => setCount(count + 1)}>+</button>
      <button onclick={() => setCount(count - 1)}>-</button>

      <p>{count1}</p>

      <button onclick={() => setCount1(count1 + 1)}>+</button>
      <button onclick={() => setCount1(count1 - 1)}>-</button>
    </div>
  );
};

const rerender = () => {
  document.querySelector('#app').firstChild.remove();
  React.render(<App />, document.querySelector('#app'));
};

React.render(<App />, document.querySelector('#app'));
