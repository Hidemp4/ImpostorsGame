import { Play, Pause, RotateCcw, Users } from 'lucide-react';
import { formatTimerDisplay } from '@/types/game';
import { Player } from '@/types/game';
import { motion } from 'framer-motion';
import logoImpostor from '@/assets/logo-impostor.png';

interface TimerScreenProps {
  timeRemaining: number;
  totalTime: number;
  isRunning: boolean;
  players: Player[];
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

const TimerScreen = ({
  timeRemaining,
  totalTime,
  isRunning,
  players,
  onStart,
  onPause,
  onReset
}: TimerScreenProps) => {
  const progress = timeRemaining / totalTime;
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference * (1 - progress);

  const impostorCount = players.filter(p => p.isImpostor).length;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Logo */}
      <div className="mb-8">
        <div className="w-20 h-20 rounded-full border border-foreground/20 flex items-center justify-center overflow-hidden">
          <img src={logoImpostor} alt="Impostor" className="w-16 h-16 object-contain" />
        </div>
      </div>

      {/* Timer Circle */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative mb-8"
      >
        <svg className="w-48 h-48 transform -rotate-90">
          {/* Background circle */}
          <circle
            cx="96"
            cy="96"
            r="45"
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="8"
            className="opacity-30"
          />
          {/* Progress circle */}
          <circle
            cx="96"
            cy="96"
            r="45"
            fill="none"
            stroke={timeRemaining <= 10 ? 'hsl(var(--destructive))' : 'hsl(var(--primary))'}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-linear"
            style={{
              filter: timeRemaining <= 10 
                ? 'drop-shadow(0 0 10px hsl(var(--destructive)))' 
                : 'drop-shadow(0 0 10px hsl(var(--primary)))'
            }}
          />
        </svg>
        
        {/* Timer Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-4xl font-display ${
            timeRemaining <= 10 ? 'text-impostor animate-shake' : 'text-neon'
          }`}>
            {formatTimerDisplay(timeRemaining)}
          </span>
        </div>
      </motion.div>

      {/* Player Info */}
      <div className="flex items-center gap-4 mb-8 text-muted-foreground">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5" />
          <span>{players.length} jogadores</span>
        </div>
        <div className="w-1 h-1 rounded-full bg-muted-foreground" />
        <div className="flex items-center gap-2">
          <span className="text-destructive">{impostorCount}</span>
          <span>impostor{impostorCount > 1 ? 'es' : ''}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        <button
          onClick={onReset}
          className="w-14 h-14 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-secondary/80 transition-colors"
        >
          <RotateCcw className="w-6 h-6 text-foreground" />
        </button>

        <button
          onClick={isRunning ? onPause : onStart}
          className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${
            isRunning 
              ? 'bg-destructive/20 border-2 border-destructive glow-red' 
              : 'btn-neon glow-neon'
          }`}
        >
          {isRunning ? (
            <Pause className="w-8 h-8 text-destructive" />
          ) : (
            <Play className="w-8 h-8 text-primary-foreground ml-1" />
          )}
        </button>

        <div className="w-14 h-14" /> {/* Spacer for symmetry */}
      </div>

      {/* Instructions */}
      <p className="mt-8 text-muted-foreground text-center text-sm max-w-xs">
        Conversem e tentem descobrir quem é o impostor!
      </p>
    </div>
  );
};

export default TimerScreen;
