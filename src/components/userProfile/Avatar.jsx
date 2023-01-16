import editicon from '../../assets/editicon.svg'

const Avatar = ({name, isOpen, file})=> {


    return(
        <div className="flex flex-col relative justify-center mt-10 m-3 w-48 h-48 ">
            <img className="manImg  bg-openRose" src={file ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="Avatar" />
            <button type='button' className='flex items-center absolute bottom-0 right-0' onClick={isOpen}>
                <img className='bg-mediumBlue rounded-full w-12 h-12' src={editicon} alt="edit-icon" />
                </button>
            <p className="text-center py-2">{name}</p>
        </div>
    )
}

export default Avatar;