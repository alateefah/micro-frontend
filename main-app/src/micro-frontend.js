import React, { Component } from 'react';

class MicroFrontend extends Component {

    componentDidMount() {
        const { name, host } = this.props;
        const scriptId = `micro-frontend-script-${name}`;
    
        if (document.getElementById(scriptId)) {
          this.renderMicroFrontend();
          return;
        }
    
        fetch(`${host}/asset-manifest.json`)
          .then(res => res.json())
          .then(manifest => {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = `${host}${manifest['main.js']}`;
            script.onload = this.renderMicroFrontend;
            document.head.appendChild(script);
        });
    }

    renderMicroFrontend = () => {
        const { name, history } = this.props;
    
        window[`render${name}`](`${name}-container`, history);
        // E.g.: window.renderBrowse('browse-container', history);
    };

    componentWillUnmount() {
        const { name } = this.props;
    
        window[`unmount${name}`](`${name}-container`);
    }

    render() {
      return <main id={`${this.props.name}-container`} />;
    }
}

export default MicroFrontend;