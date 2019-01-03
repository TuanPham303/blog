import React, { Component, Fragment } from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import { EdittingPanel } from '../../components';

import './BlogEditor.css';

class BlogEditor extends Component {
  constructor (props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  handleEditorChange = (editorState) => {
    this.setState({
      editorState
    })
  };

  handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  onBoldClick = () => {
    this.handleEditorChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  onItalicClick = () => {
    this.handleEditorChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
  }

  onUnderlineClick = () => {
    this.handleEditorChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
  }

  onCodeClick = () => {
    this.handleEditorChange(RichUtils.toggleInlineStyle(this.state.editorState, 'CODE'));
  }

  onRedClick = () => {
    this.handleEditorChange(RichUtils.toggleInlineStyle(this.state.editorState, 'RED'));
  }

  styleMap = {
    'RED': {
      color: 'red',
    },
  }

  render() {
    return (
      <Fragment>
        <div>
          {/* <button onClick={this.onBoldClick}>B</button>
          <button onClick={this.onItalicClick}>I</button>
          <button onClick={this.onUnderlineClick}>U</button>
          <button onClick={this.onCodeClick}>CODE</button>
          <button onClick={this.onRedClick}>RED</button> */}
          <EdittingPanel
            handleEditorChange={this.handleEditorChange}
          />
        </div>
        <div className="blogEditorWrapper">
          <Editor 
            customStyleMap={this.styleMap}
            editorState={this.state.editorState} 
            onChange={this.handleEditorChange} 
          />
        </div>
      </Fragment>
    )
  }
}

export default BlogEditor;