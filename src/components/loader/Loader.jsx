// import React from 'react'
// import styles from "./Loader.module.css";
// const Loader = () => {
//   return (
//     <div className={styles.container}>
//          <h2>Loading....</h2>

//     </div>
//   )
// }

// export default Loader
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' ,zIndex:2,justifyContent:'center',marginTop:10}}>
      <CircularProgress />
    </Box>
  );
}
