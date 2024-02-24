import { Button as ButtonShad } from './ui/button'

interface ButtonProps {
  label: string
  variant?: null | 'secondary' | 'outline' | 'ghost' | 'link'
  size?: 'icon'
  onClick?: () => void
}

export const Button = ({ label, variant, size, onClick }: ButtonProps) => {
  return (
    <ButtonShad variant={variant} size={size} onClick={onClick}>
      {label}
    </ButtonShad>
  )
}
