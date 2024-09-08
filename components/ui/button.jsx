import Link from "next/link"
import styles from "./button.module.css"
const Button = ({link,children,onClick}) => {
  if(link){
    return (
      <Link href={link} className={styles.btn}>{children}</Link>
    )
  }

  return (
    <button  className={styles.btn} onClick={onClick}>{children} </button>
  )
}

export default Button