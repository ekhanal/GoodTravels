import Button from "./Custombutton";

interface Props{
    title:string;
    selected:boolean;
}


export const CustomTab:React.FC<Props> = ({ title, selected }) => (
   
        <Button  title={title}
                  styles={`border  px-4 py-1 rounded ${
                    {selected}
                      ? "text-white bg-[#ec131b] "
                      : "text-black bg-white"
                  }`}/>
    
    
  );