import Card from "./Card";

const Services = ()=>{

const photographyTypes = [
  {
    id: 1,
    title: "Portrait Photography",
    description: "Captures the personality and mood of a person or group.",
    image: "https://images.pexels.com/photos/33168575/pexels-photo-33168575.jpeg"
  },
  {
    id: 2,
    title: "Landscape Photography",
    description: "Showcases the beauty of nature and outdoor scenery.",
    image: "https://images.pexels.com/photos/3081487/pexels-photo-3081487.jpeg"
  },
  {
    id: 3,
    title: "Street Photography",
    description: "Captures candid moments in public places and city life.",
    image: "https://images.pexels.com/photos/1344537/pexels-photo-1344537.jpeg"
  },
  {
    id: 4,
    title: "Wildlife Photography",
    description: "Focuses on animals in their natural habitats.",
    image: "https://images.pexels.com/photos/1829979/pexels-photo-1829979.jpeg"
  },
  {
    id: 5,
    title: "Macro Photography",
    description: "Captures extreme close-ups of tiny subjects.",
    image: "https://images.pexels.com/photos/40896/larch-conifer-cone-branch-tree-40896.jpeg"
  },
  {
    id: 6,
    title: "Astrophotography",
    description: "Photographs celestial events and night skies.",
    image: "https://images.pexels.com/photos/1819662/pexels-photo-1819662.jpeg"
  },
  
];

    return (
        <> 

         <div className="font-bold text-3xl text-green-600 italic flex justify-center p-4 bg-gray-100">

            <h3> Services</h3>
        </div>
       

  <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-100 min-h-screen flex justify-center">

    
      {photographyTypes.map((blog) => (
        <Card
          key={blog.id}
          title={blog.title}
          description={blog.description}
          image={blog.image}
        />
      ))}
    </div>

     </>

    )
}

export default Services