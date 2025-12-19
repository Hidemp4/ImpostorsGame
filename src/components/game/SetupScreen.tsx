import { ChevronRight, Users, UserX, Grid3X3, Clock, Minus, Plus } from 'lucide-react';
import { Theme, THEMES, TIMER_OPTIONS, formatTime } from '@/types/game';
import { Player } from '@/types/game';
import GameHeader from './GameHeader';

interface SetupScreenProps {
  players: Player[];
  impostorCount: number;
  selectedTheme: Theme;
  timerSeconds: number;
  onImpostorChange: (count: number) => void;
  onThemeChange: (theme: Theme) => void;
  onTimerChange: (seconds: number) => void;
  onPlayersClick: () => void;
  onThemeClick: () => void;
  onTimerClick: () => void;
  onStartGame: () => void;
}

const SetupScreen = ({
  players,
  impostorCount,
  selectedTheme,
  timerSeconds,
  onImpostorChange,
  onPlayersClick,
  onThemeClick,
  onTimerClick,
  onStartGame
}: SetupScreenProps) => {
  const canStart = players.length >= 3 && impostorCount < players.length;

  return (
    <div className="min-h-screen flex flex-col">
      <GameHeader />

      <div className="flex-1 px-4 pb-24">
        <div className="card-game overflow-hidden">
          {/* Players Row */}
          <button
            onClick={onPlayersClick}
            className="w-full flex items-center justify-between p-4 hover:bg-secondary/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-muted-foreground" />
              <span className="text-foreground font-medium">Jogadores</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">{players.length}</span>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </button>

          <div className="h-px bg-border mx-4" />

          {/* Impostors Row */}
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <UserX className="w-5 h-5 text-muted-foreground" />
              <span className="text-foreground font-medium">Impostores</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onImpostorChange(Math.max(1, impostorCount - 1))}
                className="w-8 h-8 rounded-full bg-destructive/80 flex items-center justify-center hover:bg-destructive transition-colors"
                disabled={impostorCount <= 1}
              >
                <Minus className="w-4 h-4 text-destructive-foreground" />
              </button>
              <span className="text-foreground font-medium w-4 text-center">{impostorCount}</span>
              <button
                onClick={() => onImpostorChange(impostorCount + 1)}
                className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors"
              >
                <Plus className="w-4 h-4 text-primary-foreground" />
              </button>
            </div>
          </div>

          <div className="h-px bg-border mx-4" />

          {/* Themes Row */}
          <button
            onClick={onThemeClick}
            className="w-full flex items-center justify-between p-4 hover:bg-secondary/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Grid3X3 className="w-5 h-5 text-muted-foreground" />
              <span className="text-foreground font-medium">Temas</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">({THEMES.findIndex(t => t.id === selectedTheme.id) + 1}) {selectedTheme.name}</span>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </button>

          <div className="h-px bg-border mx-4" />

          {/* Timer Row */}
          <button
            onClick={onTimerClick}
            className="w-full flex items-center justify-between p-4 hover:bg-secondary/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-muted-foreground" />
              <span className="text-foreground font-medium">Timer</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">{formatTime(timerSeconds)}</span>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </button>
        </div>
      </div>

      {/* Start Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent">
        <button
          onClick={onStartGame}
          disabled={!canStart}
          className={`w-full py-4 rounded-full font-bold text-lg transition-all ${
            canStart 
              ? 'btn-neon glow-neon' 
              : 'bg-muted text-muted-foreground cursor-not-allowed'
          }`}
        >
          Iniciar Jogo
        </button>
        {!canStart && players.length < 3 && (
          <p className="text-center text-muted-foreground text-sm mt-2">
            Mínimo de 3 jogadores necessários
          </p>
        )}
      </div>
    </div>
  );
};

export default SetupScreen;
