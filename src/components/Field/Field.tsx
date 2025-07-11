import type { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

interface FieldProps extends ComponentProps<'input'> {
  label: string
  name: string
  errorMessage?: string
  as?: 'input' | 'textarea'
}

const field = tv({
  base: 'leading-normal bg-white rounded-lg border text-zinc-800 px-4 w-full transition focus:outline-none focus:border-zinc-800',
  variants: {
    errorMessage: {
      true: 'border-red-700',
      false: 'border-zinc-400'
    },
    as: {
      input: 'h-12',
      textarea: 'py-2 min-h-24 resize-none'
    }
  }
})

export function Field({ label, name, required, errorMessage, as = 'input', ...rest }: FieldProps) {
  const styles = field({ errorMessage: !!errorMessage, as })

  return (
    <div data-testid="FieldComponent" className="leading-0">
      <label htmlFor={name} className="cursor-pointer pb-1 font-medium text-sm block">
        {label} {required && <span className="text-red-700">*</span>}
      </label>

      {as === 'textarea' ? (
        <textarea id={name} name={name} {...(rest as ComponentProps<'textarea'>)} className={styles} />
      ) : (
        <input id={name} name={name} type="text" {...rest} className={styles} />
      )}

      {errorMessage && <span className="text-red-700 text-sm block mt-1">{errorMessage}</span>}
    </div>
  )
}
