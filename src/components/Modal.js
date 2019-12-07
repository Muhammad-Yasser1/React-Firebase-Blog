import React from "react";

const Modal = () => {
  return (
    <div className="modal fade" id="modelId" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-danger">Important !!</h5>
            <button type="button" className="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            your changes won't be committed to the database, it will be handled
            in the front end, I wrote the requests but commented it, if you want
            to check the source code I'll happily sent it to you
            <br />
            <br />I did this so no body make any permanent changes or just mess
            around by deleting all the test articles,
            <br />
            <br />
            in other words: you are the one refresh admin now, peace :)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
