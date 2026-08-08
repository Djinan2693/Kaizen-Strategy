import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'accent' | 'outline' | 'light';
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
}

/**
 * Bouton pilule du template Nova (`.cta-btn` / `.btn-get-started`).
 */
const NovaButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'accent',
  type = 'button',
  disabled = false,
  className = '',
}) => {
  const base =
    'inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-medium tracking-wide transition-all duration-500 disabled:opacity-60 disabled:cursor-not-allowed';

  const variants: Record<string, string> = {
    accent: 'text-white hover:bg-[color:var(--nova-accent-dark)]',
    outline:
      'border-2 text-[color:var(--nova-accent)] border-[color:var(--nova-accent)] hover:bg-[color:var(--nova-accent)] hover:text-white',
    light: 'border-2 border-white text-white hover:bg-white hover:text-[color:var(--nova-accent)]',
  };

  const style = variant === 'accent' ? { backgroundColor: 'var(--nova-accent)' } : undefined;
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} style={style}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} style={style}>
      {children}
    </button>
  );
};

export default NovaButton;
