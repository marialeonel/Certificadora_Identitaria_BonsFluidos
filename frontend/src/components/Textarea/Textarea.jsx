function Textarea({ label, value, onChange, name }) {
    return (
        <>
            <label className={`block text-sm/6 font-medium text-gray-900`}>{label}</label>
            <textarea value={value} name={name} onChange={onChange} required className={`block mt-2 w-full h-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-light sm:text-sm/6 resize-none`}></textarea>
        </>
    )
  }
  
  export default Textarea