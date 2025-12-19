import logoImpostor from '@/assets/logo-impostor.png';

const GameHeader = () => {
  return (
    <div className="flex flex-col items-center gap-2 py-6">
      <div className="relative">
        <div className="w-28 h-28 rounded-full border-2 border-foreground/20 flex items-center justify-center overflow-hidden">
          <img 
            src={logoImpostor} 
            alt="Impostor Logo" 
            className="w-24 h-24 object-contain"
          />
        </div>
      </div>
      <h1 className="text-3xl font-display text-impostor tracking-wider">
        IMPOSTOR
      </h1>
    </div>
  );
};

export default GameHeader;
