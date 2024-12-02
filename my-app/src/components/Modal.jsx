function Modal({ isOpen, content, closeModal }) {
    return (
        <div
            style={{
                display: isOpen ? "block" : "none",
            }}
        >
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "rgba(0, 0, 0, 0.45)",
                }}
            ></div>
            <div
                style={{
                    textAlign: "center",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    overflowY: "auto",
                    backgroundColor: "white",
                    padding: "20px",
                    width: "350px",
                    borderRadius: "5px"
                }}
            >
                <div>{content}</div>
                <button onClick={closeModal} className="btn btn-primary">추가</button>
            </div>
        </div>
    );
}
export default Modal;