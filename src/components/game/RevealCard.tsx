import { useState, useRef } from 'react';
import { ChevronUp, Eye, EyeOff } from 'lucide-react';
import { Player } from '@/types/game';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import logoImpostor from '@/assets/logo-impostor.png';

interface RevealCardProps {
  player: Player;
  word: string;
  currentIndex: number;
  totalPlayers: number;
  onNext: () => void;
}

const RevealCard = ({
  player,
  word,
  currentIndex,
  totalPlayers,
  onNext
}: RevealCardProps) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const constraintsRef = useRef(null);
  const y = useMotionValue(0);
  
  const opacity = useTransform(y, [-150, -50, 0], [1, 0.5, 0]);
  const scale = useTransform(y, [-150, 0], [1, 0.95]);

  const handleDragEnd = () => {
    const currentY = y.get();
    if (currentY < -80) {
      setIsRevealed(true);
      animate(y, 0, { duration: 0.3 });
    } else {
      animate(y, 0, { duration: 0.3 });
    }
  };

  const handleRevealClick = () => {
    setIsRevealed(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4" ref={constraintsRef}>
      {/* Progress */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
        <span className="text-muted-foreground text-sm">
          {currentIndex + 1} de {totalPlayers}
        </span>
        <div className="flex gap-1">
          {Array.from({ length: totalPlayers }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i <= currentIndex ? 'bg-primary' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Player Name */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <p className="text-muted-foreground text-sm mb-1">Vez de</p>
        <h2 className="text-2xl font-display text-foreground">{player.name}</h2>
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-xs"
      >
        {!isRevealed ? (
          <>
            {/* Hidden Card - Swipe to reveal */}
            <motion.div
              drag="y"
              dragConstraints={{ top: -200, bottom: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              style={{ y, scale }}
              className="relative bg-card border border-border rounded-2xl p-8 cursor-grab active:cursor-grabbing"
            >
              <div className="flex flex-col items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
                  <EyeOff className="w-10 h-10 text-muted-foreground" />
                </div>
                
                <div className="text-center">
                  <p className="text-muted-foreground text-sm mb-2">
                    Arraste para cima para ver
                  </p>
                  <div className="flex flex-col items-center gap-2">
                    <ChevronUp className="w-6 h-6 text-primary swipe-indicator" />
                    <ChevronUp className="w-6 h-6 text-primary/60 swipe-indicator" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tap to reveal alternative */}
            <motion.div style={{ opacity }} className="absolute inset-0 pointer-events-none" />
            
            <button
              onClick={handleRevealClick}
              className="mt-4 w-full py-3 text-muted-foreground text-sm hover:text-foreground transition-colors"
            >
              ou toque aqui para revelar
            </button>
          </>
        ) : (
          /* Revealed Card */
          <motion.div
            initial={{ rotateY: 90 }}
            animate={{ rotateY: 0 }}
            transition={{ duration: 0.3 }}
            className={`bg-card border rounded-2xl p-8 ${
              player.isImpostor ? 'border-destructive glow-red' : 'border-primary glow-neon'
            }`}
          >
            <div className="flex flex-col items-center gap-6">
              {player.isImpostor ? (
                <>
                  <div className="w-24 h-24 rounded-full overflow-hidden">
                    <img src={logoImpostor} alt="Impostor" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-display text-impostor mb-2">
                      IMPOSTOR!
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Você não tem palavra. Descubra qual é!
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                    <Eye className="w-10 h-10 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="text-muted-foreground text-sm mb-2">
                      Sua palavra é:
                    </p>
                    <h3 className="text-3xl font-display text-neon">
                      {word}
                    </h3>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Next Button */}
      {isRevealed && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent"
        >
          <button
            onClick={() => {
              setIsRevealed(false);
              onNext();
            }}
            className="w-full py-4 rounded-full btn-neon glow-neon font-bold text-lg"
          >
            {currentIndex < totalPlayers - 1 ? 'Próximo Jogador' : 'Iniciar Timer'}
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default RevealCard;
