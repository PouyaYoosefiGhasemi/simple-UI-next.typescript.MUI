import { Paper, Typography, Box, Button } from "@mui/material";
import Header from "../header/Header";
const ProposalCard =(props:any)=>{
return(
    <Paper
    elevation={2}
    sx={{
      minWidth: "250px",
      minHeight: "300px",
      display: "flex",
      flexDirection:"column",
      justifyContent:"space-between",
      alignItems:"center",
      pb:1,
      mt:4
    
    }}
  >
    <Header title={"FREE"}></Header>
    <Typography>${props.cost}/mo</Typography>
    <Box>
    <Typography>{props.users} users included</Typography>
    <Typography>{props.storage} of storage</Typography>
    <Typography>Help center access</Typography>
    <Typography>{props.support} support</Typography>
    </Box>
    <Button variant="outlined" sx={{width:"90%"}} >{props.action}</Button>
  </Paper>
)
}

export default ProposalCard