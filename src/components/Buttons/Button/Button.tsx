import "./Button.scss";

/**
 * Button component - renders a basic button.
 *
 * @param {string} btnText - The text to display on the button.
 * @param {() => void} onClick - The function to run when the button is clicked.
 * @param {boolean} [primary] - Whether to apply primary styles.
 * @param {boolean} [secondary] - Whether to apply secondary styles.
 *
 * @returns {JSX.Element} The rendered button component.
 */
type Props = {
  btnText: string;
  onClick: () => void;
  primary?: boolean;
  secondary?: boolean;
};

const Button = ({
  btnText,
  onClick,
  primary,
  secondary,
}: Props): JSX.Element => {
  const buttonClass = `button ${primary ? "button--primary" : ""} ${
    secondary ? "button--secondary" : ""
  }`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {btnText}
    </button>
  );
};

export default Button;
