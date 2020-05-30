import React from 'react';

class Textarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    console.log(this.props);
    return (

      <textarea id="editor"
        value={this.props.initialMarkdowm}
        onChange={this.props.onChange}
        type="text" />
    );
  }
}

export default Textarea;