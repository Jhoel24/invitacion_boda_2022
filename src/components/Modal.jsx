import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import Carousel from './Carousel';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: '80vh',
      width: '90%'
    },
  };
  
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement(document.getElementById('root'));

const ModalComponent = ({ modalIsOpen, closeModal }) => {

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal} className='close-modal' >
                    <CloseIcon style={{ fontSize: '20px' }} />
                </button>
                <Carousel />
            </Modal>
        </div>
    )

}

export default ModalComponent

