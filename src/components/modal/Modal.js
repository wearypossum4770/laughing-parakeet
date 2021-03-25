import ReactDom from "react-dom";
import "./styles_modal.css";
export default function Modal({ isOpen, onClose, children }) {
  return !isOpen
    ? null
    : ReactDom.createPortal(
        <>
          <div className="modal-overlay" />
          <div className="modal-style">
            <div>
              <button
                className="close"
                onClick={onClose}
                shortcode=":cross_mark_button:|:cross_mark_button:"
                content="❎"
              >
                <span>close❎</span>
              </button>
            </div>
            {children}
          </div>
        </>,
        document.getElementById("portal")
      );
}
