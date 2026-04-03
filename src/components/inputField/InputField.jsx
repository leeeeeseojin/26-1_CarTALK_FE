import './InputField.css'

export default function InputField({
  id,
  type = 'text',
  name,
  placeholder,
  autoComplete,
  required,
}) {
  return (
    <div className='input-field'>
      <input
        id={id}
        className='input-field__input'
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
      />
    </div>
  )
}
