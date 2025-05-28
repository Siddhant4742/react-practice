function customrender(reactElement, container) {
    /*const domElement = document.createElement(reactElement.type);
    const props=reactElement.props;
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', props.href);
    domElement.setAttribute('target', props.target);
    container.appendChild(domElement);
    */

    const domElement = document.createElement(reactElement.type);
    const props = reactElement.props;
    domElement.innerHTML = reactElement.children;
    for(const prop in props)
    {
        if(prop === 'children') {
            continue;
        } else {
            domElement.setAttribute(prop, props[prop]);
        }
    }

    container.appendChild(domElement);
    
    
}

const reactElement={
    "type": "a",
    "props": {
        "href": "https://google.com",
        "target": "_blank",
},
"children": "click here to go to google"
}
const mainContainer=document.querySelector('#root');

customrender(reactElement, mainContainer);