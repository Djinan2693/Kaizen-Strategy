import React from 'react';
import { LucideIcon } from 'lucide-react';
import Reveal from './Reveal';

interface InfoItemProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  delay?: number;
}

/**
 * Bloc d'information de contact du template Nova (`.info-item`) :
 * icône accent sur pastille claire, titre puis contenu.
 */
const InfoItem: React.FC<InfoItemProps> = ({ icon: Icon, title, children, delay = 0 }) => {
  return (
    <Reveal delay={delay}>
      <div className="flex gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div
          className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
          style={{ backgroundColor: 'var(--nova-light-bg)' }}
        >
          <Icon size={22} style={{ color: 'var(--nova-accent)' }} />
        </div>
        <div>
          <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--nova-heading)' }}>
            {title}
          </h3>
          <div
            className="text-[15px] leading-relaxed"
            style={{ color: 'color-mix(in srgb, var(--nova-default), transparent 30%)' }}
          >
            {children}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default InfoItem;
