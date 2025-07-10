import type { ComponentProps } from 'react'

interface FieldProps extends ComponentProps<'input'> {
  label: string
  name: string
  errorMessage?: string
  as?: 'input' | 'textarea'
}

export function Field({
  label,
  name,
  required,
  errorMessage,
  as = 'input',
  ...props
}: FieldProps) {
  const commonStyles = `${errorMessage ? 'border-red-400' : 'border-zinc-400'} bg-white rounded-lg border text-zinc-800 px-4 w-full transition focus:outline-none focus:border-zinc-800`

  return (
    <div data-testid="FieldComponent">
      <label
        htmlFor={name}
        className="cursor-pointer pb-1 font-medium text-sm block"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {as === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          className={`${commonStyles} py-2 min-h-24 resize-none`}
          {...(props as ComponentProps<'textarea'>)}
        />
      ) : (
        <input
          id={name}
          name={name}
          type="text"
          className={`${commonStyles} h-12`}
          {...props}
        />
      )}

      {errorMessage && (
        <span className="text-red-500 text-sm">{errorMessage}</span>
      )}
    </div>
  )
}
