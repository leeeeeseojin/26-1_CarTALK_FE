import './Button.css'

export default function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  width,
  onClick,
  children,
}) {
  return (
    <button
      className={`btn btn--${variant} btn--${size}`}
      style={width ? { width } : undefined}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
