import { Trophy, RotateCcw, Eye } from 'lucide-react';
import { Player } from '@/types/game';
import { motion } from 'framer-motion';
import logoImpostor from '@/assets/logo-impostor.png';

interface GameFinishedProps {
  players: Player[];
  word: string;
  onPlayAgain: () => void;
}

const GameFinished = ({ players, word, onPlayAgain }: GameFinishedProps) => {
  const impostors = players.filter(p => p.isImpostor);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', duration: 0.5 }}
        className="mb-8"
      >
        <div className="w-24 h-24 rounded-full bg-destructive/20 border-2 border-destructive flex items-center justify-center glow-red">
          <Trophy className="w-12 h-12 text-destructive" />
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-display text-foreground mb-2 text-center"
      >
        Tempo Esgotado!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-muted-foreground text-center mb-8"
      >
        Hora de descobrir quem eram os impostores
      </motion.p>

      {/* Word Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="card-game p-6 mb-6 w-full max-w-sm text-center"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Eye className="w-5 h-5 text-primary" />
          <span className="text-muted-foreground text-sm">A palavra era:</span>
        </div>
        <h2 className="text-2xl font-display text-neon">{word}</h2>
      </motion.div>

      {/* Impostors Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="card-game p-6 mb-8 w-full max-w-sm"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <img src={logoImpostor} alt="Impostor" className="w-8 h-8" />
          <span className="text-muted-foreground text-sm">
            {impostors.length > 1 ? 'Os impostores eram:' : 'O impostor era:'}
          </span>
        </div>
        <div className="space-y-2">
          {impostors.map((impostor, index) => (
            <motion.div
              key={impostor.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="flex items-center justify-center gap-3 p-3 bg-destructive/10 rounded-lg border border-destructive/30"
            >
              <span className="text-xl font-display text-impostor">
                {impostor.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Play Again Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent"
      >
        <button
          onClick={onPlayAgain}
          className="w-full py-4 rounded-full btn-neon glow-neon font-bold text-lg flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-5 h-5" />
          Jogar Novamente
        </button>
      </motion.div>
    </div>
  );
};

export default GameFinished;
