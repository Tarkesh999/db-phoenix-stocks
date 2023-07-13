import './modal.css';

export const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div style={{display:"flex", justifyContent:"center"}}>{children}</div>
        <button type="button" onClick={handleClose} style={{left:100}}>
          Close
        </button>
      </section>
    </div>
  );
};