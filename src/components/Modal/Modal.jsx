const Modal = ({ isModalOpen, onClose }) => {
  return (
    <dialog open={isModalOpen} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">
          Please consult between 10:00am to 8:00pm
        </h3>
        <p className="py-4">Thanks.</p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button onClick={onClose} className="btn">
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
