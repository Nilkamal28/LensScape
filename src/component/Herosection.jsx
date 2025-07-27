const Herosection = ()=>{

    return (

<div className="width-full h-[550px] bg-green-100 gap-16 flex items-center">
<div className="gap-6">
    <h3 className="text-5xl italic mt-24 mb-5 font-bolder">Professional Photography for Every Occasion</h3>

    <p className="text-3xl mb-3 font-medium">Weddings, portraits, products, and more — captured with style and precision.</p>

<div className="w-1/2 grid grid-cols-2  gap-6 mt-12"> 
    <button className="bg-pink-100 w hover:border-2 hover:shadow-md ">View Portfolio</button> 
    <button className="bg-red-100  hover:border-2 hover:shadow-md">Book a Shoot</button>

    </div>
 </div>
 <div className="w-72 h-[400px] mt-12 rounded-xl">
    <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/17709685/pexels-photo-17709685.jpeg" alt="hero-img" />
 </div>
</div>
    )
}

export default Herosection