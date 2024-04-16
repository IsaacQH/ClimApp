import { ReactNode } from "react"
import styles from "./Alert.module.css"

type AlertProp = {children: ReactNode}

const Alert = ({children}:AlertProp) => {
  return (
    <div className={styles.alert}>{children}</div>
  )
}

export default Alert