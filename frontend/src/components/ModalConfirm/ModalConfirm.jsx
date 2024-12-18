import CloseButton from '../CloseButton/CloseButton'
import Button from '../Button/Button'
import warningIcon from '../../assets/warning.svg'

function ModalConfirm({ action, onClose, onAction }) {

    return (
        <div className='fixed flex top-0 items-center justify-center w-screen h-screen bg-gray-900/25 z-[999]'>
            <div className='fixed flex flex-col justify-center items-center bg-white p-6 gap-4 rounded-lg'>
                <CloseButton className='self-start' onClose={onClose}></CloseButton>
                <img src={warningIcon} className='w-[100px]' />
                <h1>Tem certeza que deseja {action} esse post?</h1>
                <div className='flex w-full gap-5'>
                    <Button className='bg-red-500 hover:bg-red-800 transition duration-300' onClick={onClose}>NÃO</Button>
                    <Button className='bg-green-500 hover:bg-green-800 transition duration-300' onClick={onAction}>SIM</Button>
                </div>
            </div>
        </div>
    )
}
  
export default ModalConfirm