const Navbar =()=>{

    return (
<div className="width-full h-24 flex text-white bg-yellow-500 items-center	justify-around 	">

    <div>
        <h3 className="text-green-800 font-bold text-3xl hover:text-green-200 ">LensScope</h3>
    </div>
    <ul className="flex  gap-8">
        <li className="hover:text-green-300"><a href=""> Services  </a> </li>
        <li className="hover:text-green-300" ><a href=""> Portfolio  </a> </li>
        <li className="hover:text-green-300"><a href=""> About  </a> </li>
        <li className="hover:text-green-300"><a href=""> Book Now </a> </li>
     
    </ul>

</div>
    )
}

export default Navbar