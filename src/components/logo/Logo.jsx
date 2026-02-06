import ReactLogo from '../../assets/react.svg'

import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.container}>
      <img src={ReactLogo} alt="react logo" style={{height:50,color:'black'}}/>
    </div>
  )
}

export default Logo