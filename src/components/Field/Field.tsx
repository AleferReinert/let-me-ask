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
  const commonStyles =
    'bg-white rounded-lg border border-zinc-400 text-zinc-800 px-4 w-full transition focus:outline-none focus:border-zinc-800'

  return (
    <div>
      <label htmlFor={name} className="cursor-pointer pb-1 block">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {as === 'textarea' ? (
        <textarea
          {...(props as ComponentProps<'textarea'>)}
          id={name}
          className={`${commonStyles} py-2 min-h-24`}
        />
      ) : (
        <input
          {...props}
          id={name}
          type="text"
          className={`${commonStyles} h-12`}
        />
      )}

      {errorMessage && (
        <span className="text-red-500 text-sm">{errorMessage}</span>
      )}
    </div>
  )
}
