import '../App.css'

export type ModalProps = {
  img?: string; 
  fuct?: string
};

const Modal: React.FC<ModalProps> = ({ img , fuct}) => {
  return (
    <div onClick={()=>{fuct}} className="z-10  h-full w-9/12 zuka flex items-center justify-center fixed">
      <img src={img} />
    </div>
  );
};

export default Modal;
