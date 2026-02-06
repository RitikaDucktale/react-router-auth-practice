import styles from "./UserCards.module.css"

const UserCards = ({user})=>{
    console.log('USerCArds renders*******')
    console.log(user,"UserCards==")
    
    return(
        <div className={styles.card}>
            <div className={styles.cardTop}>
                <img src={user.picture.large} alt="" />
                <h5>{user.name.title} {user.name.first} {user.name.last}</h5>
                <span>{user.email}</span>
                <span>{user.phone}</span>
            </div>
            <div className={styles.cardBottom}>
                <span>{user.dob.age}</span>
                <span>{user.gender}</span>
                <span>{user.location.country}</span>
            </div>

        </div>
    )
}
export default UserCards;