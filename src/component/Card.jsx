const Card = ({title,description,image,id})=>{

    return (

 <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden ">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <button className="mt-4 text-blue-500 hover:text-blue-700">Read More</button>
      </div>
    </div>
    )
}

export default Card