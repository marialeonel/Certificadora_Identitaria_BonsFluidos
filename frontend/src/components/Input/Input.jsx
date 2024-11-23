function Input({ label, type='text', placeholder, onChange, name, id, className, icon, value }) {
  return (
    <>
        {label && <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
            {label}
        </label>}
        <div className="mt-2 relative">
          {icon && <img src={icon} className={`absolute top-1 right-1 w-24px h-24px`}/>}
            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-light sm:text-sm/6 ${icon ? 'pr-8' : ''} ${className}`}
                required
            />
        </div>
    </>
  )
}

export default Input