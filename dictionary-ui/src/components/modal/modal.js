import React, { useEffect } from 'react';
import Modal from 'react-modal';
import './modal.css';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


function ModalPopup(props){
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);


  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }
  useEffect(()=>{
    if(props.result)
    {setIsOpen(true)}
  },[props.result])
  function closeModal(){
    setIsOpen(false);
  }

    return (
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Pop Up Modal"
        >

          <h2 ref={_subtitle => (subtitle = _subtitle)}>{props.header}</h2>
          <div className="result">{props.result}</div>
          <button onClick={closeModal}>close</button>
         
        </Modal>
      </div>
    );
}
export default ModalPopup