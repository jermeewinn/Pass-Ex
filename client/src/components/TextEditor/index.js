import React from 'react';
import { Editor } from '@tinymce/tinymce-react';


class TextApp extends React.Component {
  handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
  }

  render() {
    return (
      <Editor
        apiKey='dmpg80qwq1eyjegxuk4d0u6fj4l0he5nbo5y2y5hve8ywi5n' 
        cloudChannel='dev'
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          plugins: 'link image code',
          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
        }}
        onChange={this.handleEditorChange}
    //         <script src="https://cdn.tiny.cloud/1/dmpg80qwq1eyjegxuk4d0u6fj4l0he5nbo5y2y5hve8ywi5n/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>
      />
      
    );
  }
}

export default TextApp;