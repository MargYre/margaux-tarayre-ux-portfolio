import styles from './Button.module.scss'

const Button = ({
  variant = 'primary',
  href,
  to,
  onClick,
  children,
  target,
  rel,
  ariaLabel,
  className = '',
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${className}`

  // External link
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={buttonClass}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    )
  }

  // Internal link (handled by parent with Link component if needed)
  if (to) {
    return (
      <a href={to} className={buttonClass} aria-label={ariaLabel}>
        {children}
      </a>
    )
  }

  // Button element
  return (
    <button onClick={onClick} className={buttonClass} aria-label={ariaLabel}>
      {children}
    </button>
  )
}

export default Button
