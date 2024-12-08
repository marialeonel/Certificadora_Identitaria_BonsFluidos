function Button({ className, onClick, type='button', icon, children }) {
    return (
        <>
            <button
                type={type}
                onClick={onClick}
                className={`flex w-[100%] justify-center items-center rounded-3xl bg-logo-color px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-dark hover:outline hover:outline-1  ${icon ? 'gap-2' : ''} ${className}`}
            >
            {icon && <img src={icon} className={`w-4 h-4`}/>}
            {children}
            </button>
        </>
    )
  }
  
  export default Button