import { ArrowLeft, Check } from 'lucide-react';
import { TIMER_OPTIONS, formatTime } from '@/types/game';
import { motion } from 'framer-motion';

interface TimerSelectorProps {
  timerSeconds: number;
  onSelectTimer: (seconds: number) => void;
  onBack: () => void;
}

const TimerSelector = ({
  timerSeconds,
  onSelectTimer,
  onBack
}: TimerSelectorProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-4 p-4 border-b border-border">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <h1 className="text-xl font-display text-foreground">Timer</h1>
      </div>

      {/* Timer Options */}
      <div className="flex-1 p-4 overflow-auto">
        <div className="grid grid-cols-2 gap-3">
          {TIMER_OPTIONS.map((seconds, index) => (
            <motion.button
              key={seconds}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => {
                onSelectTimer(seconds);
                onBack();
              }}
              className={`relative p-4 rounded-lg border transition-all ${
                timerSeconds === seconds
                  ? 'bg-primary/20 border-primary glow-neon'
                  : 'bg-secondary/50 border-border hover:border-primary/50'
              }`}
            >
              {timerSeconds === seconds && (
                <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
              )}
              <span className="text-foreground font-bold text-lg">
                {formatTime(seconds)}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimerSelector;
