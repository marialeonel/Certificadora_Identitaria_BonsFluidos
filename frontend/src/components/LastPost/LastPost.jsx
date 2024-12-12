function LastPost({ post }) {
    const baseUrl = "http://localhost:3000/uploads/";
    const imageUrl = `${baseUrl}${post.imageUrl}`;

    return (
        <div className='group flex h-[150px] w-[500px] gap-[32px] rounded-lg transition duration-300 hover:scale-105'>
            <img crossorigin="anonymous" src={imageUrl} className='bg-white h-full w-[180px] rounded-lg'/>
            <div className='flex flex-col justify-center align-center gap-4'>
                <div className='flex justify-between text-white text-xs gap-2'>
                    <p>{post.createdAt}</p>
                    <p>•</p>
                    <p>By <span className='font-bold'>Bons Fluidos</span></p>
                </div>
                <h1 className='font-bold text-md text-wrap text-white'>{post.title}</h1>
            </div>
        </div>
    )
}
  
export default LastPost