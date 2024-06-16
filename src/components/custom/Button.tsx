
interface Props{
    name:string,
    className:string,
}


const Button:React.FC<Props> = ({name,className}) => {
 

 return (
    <div>
        <button className={className}>{name}</button>
    </div>
  )
}

export default Button
