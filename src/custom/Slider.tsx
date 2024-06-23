
interface Image{
    id:number| string;
    image:string;
}

interface Props{
    style?:string;
    images:Image[];
    
}


const Slider:React.FC<Props>= (images) => {
  return (
    <div className="flex relative">
        {
            images?.images.map((item:any,index :any)=>(
                <div key={index}  >
                    <div className="w-full ">
                    <img src={item.image} alt=""  className=" absolute"/>
                    </div>
                </div>
            ))
        }
      
    </div>
  )
}

export default Slider
