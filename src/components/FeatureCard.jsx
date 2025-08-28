const FeatureCard = ({ title, icon: Icon, color, onClick, isCompact = false }) => {
  return (
    <div
      onClick={onClick}
      className={`feature-card ${isCompact ? 'w-32 h-32 p-3' : 'w-full h-40 p-6'} 
        flex flex-col items-center justify-center text-center group`}
      style={{
        background: `linear-gradient(135deg, hsl(var(--card)), ${color}15)`,
      }}
    >
      <Icon 
        className={`feature-icon ${isCompact ? 'w-6 h-6 mb-2' : 'w-8 h-8 mb-3'}`}
        style={{ color }}
      />
      <h3 className={`font-semibold text-card-foreground ${isCompact ? 'text-xs' : 'text-sm'}`}>
        {title}
      </h3>
    </div>
  );
};

export default FeatureCard;