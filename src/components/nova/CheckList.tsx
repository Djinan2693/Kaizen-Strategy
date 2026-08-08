import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface CheckListProps {
  items: React.ReactNode[];
  light?: boolean;
  className?: string;
}

/**
 * Liste à puces cochées du template Nova (`bi-check-circle-fill`).
 */
const CheckList: React.FC<CheckListProps> = ({ items, light = false, className = '' }) => {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <CheckCircle2
            size={20}
            className="flex-shrink-0 mt-1"
            style={{ color: light ? '#ffffff' : 'var(--nova-accent)' }}
          />
          <span className={light ? 'text-white/85' : ''} style={light ? undefined : { color: 'var(--nova-default)' }}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default CheckList;
