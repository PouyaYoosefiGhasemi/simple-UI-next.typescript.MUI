import { Paper, Container, Typography, Box, Link } from "@mui/material";
import FooterBox from "./footerBox/FooterBox";
const Footer = () => {
  return (
    <Box sx={{ width: "100%", mt: 12 }}>
      <hr />
      <Box sx={{display:'flex', justifyContent:"space-evenly" , flexWrap:"wrap"}}>
      <FooterBox>
        <Typography variant="h5">Company</Typography>
        <Link href="#" color="#a8a8a8">
          Team
        </Link>
        <Link href="#" color="#a8a8a8">
          History
        </Link>
        <Link href="#" color="#a8a8a8">
          Contact us
        </Link>
        <Link href="#" color="#a8a8a8">
          Location
        </Link>
      </FooterBox>


      <FooterBox>
        <Typography variant="h5">Features</Typography>
        <Link href="#" color="#a8a8a8">
          Cool stuff
        </Link>
        <Link href="#" color="#a8a8a8">
          Random feature
        </Link>
        <Link href="#" color="#a8a8a8">
          Team feature
        </Link>
        <Link href="#" color="#a8a8a8">
          Developer stuff
        </Link>
        <Link href="#" color="#a8a8a8">
          Another one
        </Link>
      </FooterBox>

      <FooterBox>
        <Typography variant="h5">Resources</Typography>
        <Link href="#" color="#a8a8a8">
          Resource
        </Link>
        <Link href="#" color="#a8a8a8">
        Resource name
        </Link>
        <Link href="#" color="#a8a8a8">
          Another resource
        </Link>
        <Link href="#" color="#a8a8a8">
          Final resource
        </Link>
      </FooterBox>

      <FooterBox>
        <Typography variant="h5">Legal</Typography>
        <Link href="#" color="#a8a8a8">
          Privacy policy
        </Link>
        <Link href="#" color="#a8a8a8">
          Terms of use
        </Link>
      </FooterBox>
      </Box>
    </Box>
  );
};

export default Footer;
