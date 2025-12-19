import { useState } from 'react';
import { useGameState } from '@/hooks/useGameState';
import SetupScreen from '@/components/game/SetupScreen';
import PlayersScreen from '@/components/game/PlayersScreen';
import ThemeSelector from '@/components/game/ThemeSelector';
import TimerSelector from '@/components/game/TimerSelector';
import RevealCard from '@/components/game/RevealCard';
import TimerScreen from '@/components/game/TimerScreen';
import GameFinished from '@/components/game/GameFinished';
import { AnimatePresence, motion } from 'framer-motion';

type SubScreen = 'main' | 'players' | 'themes' | 'timer';

const Index = () => {
  const {
    phase,
    players,
    addPlayer,
    removePlayer,
    impostorCount,
    setImpostorCount,
    selectedTheme,
    setSelectedTheme,
    timerSeconds,
    setTimerSeconds,
    currentPlayerIndex,
    gameWord,
    timeRemaining,
    isTimerRunning,
    startGame,
    nextPlayer,
    startTimer,
    pauseTimer,
    resetGame
  } = useGameState();

  const [subScreen, setSubScreen] = useState<SubScreen>('main');

  const renderSetupPhase = () => {
    switch (subScreen) {
      case 'players':
        return (
          <PlayersScreen
            players={players}
            onAddPlayer={addPlayer}
            onRemovePlayer={removePlayer}
            onBack={() => setSubScreen('main')}
          />
        );
      case 'themes':
        return (
          <ThemeSelector
            selectedTheme={selectedTheme}
            onSelectTheme={setSelectedTheme}
            onBack={() => setSubScreen('main')}
          />
        );
      case 'timer':
        return (
          <TimerSelector
            timerSeconds={timerSeconds}
            onSelectTimer={setTimerSeconds}
            onBack={() => setSubScreen('main')}
          />
        );
      default:
        return (
          <SetupScreen
            players={players}
            impostorCount={impostorCount}
            selectedTheme={selectedTheme}
            timerSeconds={timerSeconds}
            onImpostorChange={setImpostorCount}
            onThemeChange={setSelectedTheme}
            onTimerChange={setTimerSeconds}
            onPlayersClick={() => setSubScreen('players')}
            onThemeClick={() => setSubScreen('themes')}
            onTimerClick={() => setSubScreen('timer')}
            onStartGame={startGame}
          />
        );
    }
  };

  const currentPlayer = players[currentPlayerIndex];

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {phase === 'setup' && (
          <motion.div
            key={`setup-${subScreen}`}
            initial={{ opacity: 0, x: subScreen === 'main' ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: subScreen === 'main' ? 20 : -20 }}
            transition={{ duration: 0.2 }}
          >
            {renderSetupPhase()}
          </motion.div>
        )}

        {phase === 'reveal' && currentPlayer && (
          <motion.div
            key={`reveal-${currentPlayer.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen"
          >
            <RevealCard
              key={currentPlayer.id}
              player={currentPlayer}
              word={gameWord}
              currentIndex={currentPlayerIndex}
              totalPlayers={players.length}
              onNext={nextPlayer}
            />
          </motion.div>
        )}

        {phase === 'playing' && (
          <motion.div
            key="playing"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <TimerScreen
              timeRemaining={timeRemaining}
              totalTime={timerSeconds}
              isRunning={isTimerRunning}
              players={players}
              onStart={startTimer}
              onPause={pauseTimer}
              onReset={resetGame}
            />
          </motion.div>
        )}

        {phase === 'finished' && (
          <motion.div
            key="finished"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <GameFinished
              players={players}
              word={gameWord}
              onPlayAgain={resetGame}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
