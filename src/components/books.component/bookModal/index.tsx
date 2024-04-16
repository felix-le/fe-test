import Modal from "../../Modal";
interface IBookModal {
  children?: React.ReactNode;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
  modalTitle?: string;
}

const BookModal = ({
  children,
  setShowModal,
  showModal,
  modalTitle = "Book Modal",
}: IBookModal) => {
  return (
    <Modal
      setShowModal={setShowModal}
      showModal={showModal}
      modalTitle={modalTitle}
    >
      {children}
    </Modal>
  );
};

export default BookModal;
