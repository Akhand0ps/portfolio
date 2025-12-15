interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Section({ children, id, className = '', style }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-12 sm:py-16 md:py-24 lg:py-32 ${className}`}
      style={style}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {children}
      </div>
    </section>
  );
}
