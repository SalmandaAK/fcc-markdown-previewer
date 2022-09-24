import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Modal from 'react-bootstrap/Modal';

import './App.css';

import { marked } from 'marked';
import * as extendedTables from 'marked-extended-tables';
import text from './text.js';

marked
  .setOptions({
    gfm: true,
    breaks: true,
  })
  .use(extendedTables);

function App() {
  const [currentText, setText] = useState(text.getDefault());

  const handleChange = (e) => setText(e.target.value);

  const handleReset = () => setText(text.getDefault());
  const handleClearText = () => setText("");

  function createMarkup() {
    return { __html: marked.parse(currentText) };
  }

  return (
    <>
    <header className="d-flex bg-dark justify-content-center p-2 mb-3">
      <h1 className="text-light">Markdown Previewer</h1>
    </header>
    <main>
      <Container fluid="lg" className="rounded border p-3 bg-light">
        <Row className="gy-3">
          <Col xs={12}>
            <Stack direction="horizontal" gap={3}>
              <Button variant="primary" onClick={handleReset}>Reset</Button>
              <Button variant="danger" onClick={handleClearText}>Clear Text</Button>
              <HelpButton />
            </Stack>
          </Col>
          <Col md={6}>
            <Form>
              <Form.Control id="editor" as="textarea" onChange={handleChange} value={currentText}></Form.Control>
            </Form>
          </Col>
          <Col md={6}>
            <Form.Control as="div" className="mb-3" id="preview" dangerouslySetInnerHTML={createMarkup()}>
            </Form.Control>
          </Col>
        </Row>
      </Container>
    </main>
  </>
  );
}

function HelpButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow} className="ms-auto">
        Examples
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>You can copy paste these examples into the text editor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <pre>{text.getExamples()}</pre>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default App;
