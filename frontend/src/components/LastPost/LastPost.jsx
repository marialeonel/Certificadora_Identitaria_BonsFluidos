function LastPost({ post }) {
    return (
        <div className='flex h-[150px] w-[500px] justify-between gap-[32px]'>
            <img src={post.imageUrl} className='bg-white h-full w-[180px] rounded-lg'/>
            <div className='flex flex-col justify-center align-center gap-4'>
                <div className='flex justify-between text-gray-500 text-xs'>
                    <p>{post.createdAt}</p>
                    <p>•</p>
                    <p>By <span className='font-bold'>Bons Fluidos</span></p>
                </div>
                <h1 className='font-bold text-md text-wrap'>{post.title}</h1>
            </div>
        </div>
    )
}
  
export default LastPost