import editicon from '../../assets/editicon.svg'

const Avatar = ({name, isOpen, image})=> {


    return(
        <div className="flex flex-col relative justify-center mt-10 m-3 w-48 h-48 ">
            <img className="rounded-full  bg-openRose" src={image} alt="Avatar" />
            <button type='button' className='flex items-center absolute bottom-0 right-0' onClick={isOpen}>
                <img className='bg-mediumBlue rounded-full w-12 h-12' src={editicon} alt="edit-icon" />
                </button>
            <p className="text-center py-2">{name}</p>
        </div>
    )
}

export default Avatar;