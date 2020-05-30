import React from 'react';

//!markdown library
import marked from 'marked';
marked.setOptions({
    breaks: true,
});

// INSERTS target="_blank" INTO HREF TAGS (required for codepen links)
const renderer = new marked.Renderer();
// renderer.link = function (href, title, text) {
// return `<a target="_blank" href="${href}">${text}` + '</a>';
// }

class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // markedOutout: marked('# hola')
        }
    }
    render() {

        return (
            <div id="preview" dangerouslySetInnerHTML={{ __html: marked(this.props.markdown, { renderer: renderer }) }} ></div>
        );
    }
}

export default Preview;

// const Preview = (props) => {
//     return (
//         <div id='preview' dangerouslySetInnerHTML={{__html: marked(props.markdown, { renderer: renderer })}} />
//       )
//   }