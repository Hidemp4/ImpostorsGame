import { useState, useEffect, useCallback } from 'react';
import { Player, Theme, GamePhase, THEMES } from '@/types/game';

const STORAGE_KEY = 'impostor-game-players';

export const useGameState = () => {
  const [phase, setPhase] = useState<GamePhase>('setup');
  const [players, setPlayers] = useState<Player[]>([]);
  const [impostorCount, setImpostorCount] = useState(1);
  const [selectedTheme, setSelectedTheme] = useState<Theme>(THEMES[0]);
  const [timerSeconds, setTimerSeconds] = useState(30);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [gameWord, setGameWord] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Load players from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const savedPlayers = JSON.parse(saved);
        setPlayers(savedPlayers.map((name: string) => ({
          id: crypto.randomUUID(),
          name,
          isImpostor: false,
          hasSeenWord: false
        })));
      } catch (e) {
        console.error('Error loading players:', e);
      }
    }
  }, []);

  // Save players to localStorage
  const savePlayers = useCallback((playersList: Player[]) => {
    const names = playersList.map(p => p.name);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(names));
  }, []);

  const addPlayer = useCallback((name: string) => {
    const newPlayer: Player = {
      id: crypto.randomUUID(),
      name: name.trim(),
      isImpostor: false,
      hasSeenWord: false
    };
    setPlayers(prev => {
      const updated = [...prev, newPlayer];
      savePlayers(updated);
      return updated;
    });
  }, [savePlayers]);

  const removePlayer = useCallback((id: string) => {
    setPlayers(prev => {
      const updated = prev.filter(p => p.id !== id);
      savePlayers(updated);
      return updated;
    });
  }, [savePlayers]);

  const startGame = useCallback(() => {
    if (players.length < 3) return;
    if (impostorCount >= players.length) return;

    // Select random word from theme
    const word = selectedTheme.words[Math.floor(Math.random() * selectedTheme.words.length)];
    setGameWord(word);

    // Shuffle players and assign impostors
    const shuffled = [...players].sort(() => Math.random() - 0.5);
    const gamePlayers = shuffled.map((player, index) => ({
      ...player,
      isImpostor: index < impostorCount,
      hasSeenWord: false
    }));

    // Shuffle again so impostors aren't always first
    const finalPlayers = gamePlayers.sort(() => Math.random() - 0.5);
    
    setPlayers(finalPlayers);
    setCurrentPlayerIndex(0);
    setPhase('reveal');
  }, [players, impostorCount, selectedTheme]);

  const markPlayerAsSeen = useCallback(() => {
    setPlayers(prev => prev.map((p, i) => 
      i === currentPlayerIndex ? { ...p, hasSeenWord: true } : p
    ));
  }, [currentPlayerIndex]);

  const nextPlayer = useCallback(() => {
    markPlayerAsSeen();
    
    if (currentPlayerIndex < players.length - 1) {
      setCurrentPlayerIndex(prev => prev + 1);
    } else {
      // All players have seen their cards, start timer
      setTimeRemaining(timerSeconds);
      setPhase('playing');
    }
  }, [currentPlayerIndex, players.length, timerSeconds, markPlayerAsSeen]);

  const startTimer = useCallback(() => {
    setIsTimerRunning(true);
  }, []);

  const pauseTimer = useCallback(() => {
    setIsTimerRunning(false);
  }, []);

  const resetGame = useCallback(() => {
    setPhase('setup');
    setCurrentPlayerIndex(0);
    setGameWord('');
    setTimeRemaining(0);
    setIsTimerRunning(false);
    setPlayers(prev => prev.map(p => ({
      ...p,
      isImpostor: false,
      hasSeenWord: false
    })));
  }, []);

  // Timer effect
  useEffect(() => {
    if (!isTimerRunning || timeRemaining <= 0) return;

    const interval = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          setIsTimerRunning(false);
          setPhase('finished');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isTimerRunning, timeRemaining]);

  return {
    phase,
    setPhase,
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
  };
};
