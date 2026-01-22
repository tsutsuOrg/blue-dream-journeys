import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  icon?: LucideIcon;
  tagline?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader = ({ 
  icon: Icon, 
  tagline, 
  title, 
  subtitle, 
  centered = false,
  className 
}: SectionHeaderProps) => {
  return (
    <div className={cn(
      "mb-12",
      centered && "text-center",
      className
    )}>
      {Icon && (
        <div className={cn(
          "w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4",
          centered && "mx-auto"
        )}>
          <Icon className="w-7 h-7 text-secondary" />
        </div>
      )}
      {tagline && (
        <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">
          {tagline}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
