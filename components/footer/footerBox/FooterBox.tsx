import { Box} from "@mui/material";
const FooterBox = (props:any)=>{
return(    

<Box sx={{width:"150px" , display:"flex" , flexDirection:"column" , height : "150px" , justifyContent:"space-evenly" , mt:5}}>
{props.children}
</Box>
)
}

export default FooterBox