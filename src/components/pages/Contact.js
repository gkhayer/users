import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1>Contact page</h1>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            Example label
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Example input placeholder"
          />
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput2" className="form-label">
            Another label
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input placeholder"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
