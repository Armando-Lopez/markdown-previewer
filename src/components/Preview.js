import React from 'react';

//!markdown library
import marked from 'marked';

marked.setOptions({
    breaks: true,
});

const renderer = new marked.Renderer();

class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        return (
            <div id="preview" dangerouslySetInnerHTML={{ __html: marked(this.props.markdown, { renderer: renderer }) }} ></div>
        );
    }
}

export default Preview;