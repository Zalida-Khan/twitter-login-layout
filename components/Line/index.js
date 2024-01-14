import styles from "./Line.module.css"

export default function Line() {
return (
<div className={styles.orContainer}>
<div className={styles.horizontalLine}></div>
<span className={styles.orText} >or</span>
<div className={styles .horizontalLine}></div>
</div>
);
}
