import styles from "./Button.module.scss";
import PropTypes from "prop-types";

const Button = ({ href, onClick, children, classes, type, ...otherProps }) => {
  let additionalClasses = "";
  if (classes) {
    additionalClasses = classes;
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className={`
        ${
          type === "primary"
            ? !otherProps.disable
              ? styles.primary__button
              : styles.primary__disabledButton
            : type === "secondary-indigo"
            ? !otherProps.disable
              ? styles.secondary_indigo__button
              : styles.secondary_indigo__button // fallback to normal if disabled is not defined separately
            : !otherProps.disable
            ? styles.secondary__button
            : styles.secondary__disabledButton
        }
          ${additionalClasses}
      `}
      {...otherProps}
    >
      {children}
    </a>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
  classes: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
