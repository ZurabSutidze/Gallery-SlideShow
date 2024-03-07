import '../App.css'

export type ModalProps = {
  img?: string; 
  fuct?: any
};

const Modal: React.FC<ModalProps> = ({ img , fuct}) => {
  return (
    <div onClick={()=>{fuct}} className="z-10  h-screen w-9/12 zuka flex items-center justify-center fixed">
      <img src={img} />
    </div>
  );
};

export default Modal;
