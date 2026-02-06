import { useRef } from "react";
import styles from "./RefUseCase.module.css"

const RefUseCase = ()=>{
    const section1Ref = useRef();
    const section2Ref = useRef();
    const section3Ref = useRef();

    const onClickHandler = (ref)=>{
        ref.current.classList.add('transit');
        ref.current.scrollIntoView({behavior:'smooth',block: "start"});

          setTimeout(() => {
    ref.current.classList.remove("transit");
  }, 800);
    }

    return(
        <>
        <div className={styles.btnContainer}>
            <button onClick={()=>onClickHandler(section1Ref)}>Section1</button>
            <button onClick={()=>onClickHandler(section2Ref)}>Section2</button>
            <button onClick={()=>onClickHandler(section3Ref)}>Section3</button>
        </div>
        <div className={styles.sectionContainer}>
            <div className={styles.innerContainer}>
         <div className={styles.section} ref={section1Ref} style={{backgroundColor:"cadetblue"}}>First section</div>
         <div className={styles.section} ref={section2Ref} style={{backgroundColor:"rgb(160, 95, 109)"}}>Second section</div>
         <div className={styles.section} ref={section3Ref} style={{backgroundColor:"rgb(99, 95, 160)"}}>Third Section</div>
         </div>
        </div>
        </>
    )
}
export default RefUseCase;