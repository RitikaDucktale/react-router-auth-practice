import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import styles from "./Loader.module.css"

export default function CircularIndeterminate() {
  return (
   
    <Box
      sx={{
        display: "flex",
        zIndex: 4,
        justifyContent: "center",
        alignItems:"center",
        height:"63vh",
        width:"99vw",
        position:"absolute",
        bottom:"9.3em",
        alignSelf:"center",
        backgroundColor:"rgba(0,0,0,0.4)" ,
        borderRadius:"10px"
            
      }}
    >
      <CircularProgress />
    </Box>
  
  );
}
