const React = (() => {
  const createElement = (htmlTag, props, ...children) => {
    if (typeof htmlTag === 'function') {
      return htmlTag(props);
    }
    const element = { htmlTag, props: { ...props, children } };
    return element;
  };

  const render = (reactElement, root) => {
    const mainDOMElement = document.createElement('div');
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
  };

  return { createElement, render };
})();

class Component {
  constructor(el) {
    this.element = el;
    React.render(el, document.querySelector('#app'));
  }

  render() {
    React.createElement(this.element);
    console.log(args, 'argssss');
    console.log('render is called');
  }
}

class ReactComponent extends Component {
  componentDidMount() {
    console.log('cdm');
  }
}

const App = new ReactComponent(
  (
    <div>
      <h1>This is not a React Class Component</h1>
    </div>
  )
);
App.componentDidMount();
console.log(<App />);
