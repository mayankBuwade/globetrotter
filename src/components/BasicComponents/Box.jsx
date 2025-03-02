import styles from "./Box.module.css";

const Box = ({ children, customClass = "", ...otherProps }) => {
  return (
    <div className={`${styles.main_cntnr} ${customClass}`} {...otherProps}>
      {children}
    </div>
  );
};
export default Box;
