import React from 'react';
import Title from '../components/Title'
import Textarea from '../components/Textarea';
import Preview from '../components/Preview';
import Footer from '../components/Footer';

class MarkdownPreviewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: initialMarkdowm
        }
        this.renderMarkdowm = this.renderMarkdowm.bind(this);
    }

    renderMarkdowm(e) {
        this.setState({
            markdown: e.target.value
        })
        console.log(

        );

    }

    render() {
        return (
            <article className="wrapper">
                <Title />
                <section className="container">
                    <Textarea initialMarkdowm={this.state.markdown} onChange={this.renderMarkdowm} />
                    <Preview markdown={this.state.markdown} />
                </section>
                <Footer />
            </article>
        );
    }
}

export default MarkdownPreviewer;


const initialMarkdowm = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`


// marked.setOptions({
//   breaks: true,
// });



// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             markdown: placeholder,
//             editorMaximized: false,
//             previewMaximized: false
//         }
//         this.handleChange = this.handleChange.bind(this);
//         this.handleEditorMaximize = this.handleEditorMaximize.bind(this);
//         this.handlePreviewMaximize = this.handlePreviewMaximize.bind(this);
//     }
//     handleChange(e) {
//         this.setState({
//             markdown: e.target.value
//         });
//     }
//     handleEditorMaximize() {
//         this.setState({
//             editorMaximized: !this.state.editorMaximized
//         });
//     }
//     handlePreviewMaximize() {
//         this.setState({
//             previewMaximized: !this.state.previewMaximized
//         });
//     }
//     render() {
//         const classes = this.state.editorMaximized ?
//             ['editorWrap maximized',
//                 'previewWrap hide',
//                 'fa fa-compress'] :
//             this.state.previewMaximized ?
//                 ['editorWrap hide',
//                     'previewWrap maximized',
//                     'fa fa-compress'] :
//                 ['editorWrap',
//                     'previewWrap',
//                     'fa fa-arrows-alt'];
//         return (
//             <div>
//                 <div className={classes[0]}>
//                     <Toolbar
//                         icon={classes[2]}
//                         onClick={this.handleEditorMaximize}
//                         text="Editor" />
//                     <Editor markdown={this.state.markdown}
//                         onChange={this.handleChange} />
//                 </div>
//                 <div className="converter">
//                 </div>
//                 <div className={classes[1]}>
//                     <Toolbar
//                         icon={classes[2]}
//                         onClick={this.handlePreviewMaximize}
//                         text="Previewer" />
//                     <Preview markdown={this.state.markdown} />
//                 </div>
//             </div>
//         )
//     }
// };
