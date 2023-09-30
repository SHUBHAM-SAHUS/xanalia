import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Card, CardBody, CardHeader, CardTitle } from 'reactstrap';

const TextEditor = () => {
  const [text, setText] = useState('');
  const handleChange = (value) => setText(value);

  return (
    <Card className="desTxtBox">
      <CardHeader>
          <label>
            Description
          </label>
          <h6> 1/3000 </h6>
      </CardHeader>
      <CardBody>
        <ReactQuill value={text} onChange={handleChange}  placeholder="Type something"/>
      </CardBody>
    </Card>
  );
};

export default TextEditor;
