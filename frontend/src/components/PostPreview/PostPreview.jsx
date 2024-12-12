function PostPreview({ post }) {
    const baseUrl = "http://localhost:3000/uploads/";
    const imageUrl = `${baseUrl}${post.imageUrl}`;

    return (
        <div className='group w-[320px] hover:shadow-[0_4px_8px_rgba(0,0,0,0.2)] rounded-lg transition-shadow duration-300'>
            <img crossorigin="anonymous" src={imageUrl} className='w-full h-[300px] transition-all duration-300 rounded-lg group-hover:rounded-b-none'/>
            <div className='flex flex-col h-[150px] justify-center items-center px-3 gap-6'>
                <h1 className='text-xl font-bold'>{post.title}</h1>
                <div className='flex w-[100%] justify-between text-sm text-gray-500'>
                    <p>By <span className='font-bold'>Bons Fluidos</span></p>
                    <p className='uppercase'>{post.createdAt}</p>
                </div>
            </div>
        </div>
    )
}
  
export default PostPreview