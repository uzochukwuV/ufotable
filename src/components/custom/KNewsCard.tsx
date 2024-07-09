

function KNewsCard(props: {image: string, text:string}) {
    const {image, text}=props;
  return (
    <div className=' h-full w-full rounded-lg flex-1 bg-white'>
        <div className="img-wrapper h-[50%]">
            <img src={image} className=' h-full w-full bg-cover bg-center rounded-t-lg' />
        </div>
        <div className="text p-3">
            <h2 className="font-bold text-sm">{text}</h2>
            <p className="text-gray-500">2024/07/05 10:47</p>
        </div>
    </div>
  )
}

export default KNewsCard;