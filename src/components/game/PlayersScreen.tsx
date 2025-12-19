import { useState } from 'react';
import { ArrowLeft, Plus, Trash2, User } from 'lucide-react';
import { Player } from '@/types/game';
import { motion, AnimatePresence } from 'framer-motion';

interface PlayersScreenProps {
  players: Player[];
  onAddPlayer: (name: string) => void;
  onRemovePlayer: (id: string) => void;
  onBack: () => void;
}

const PlayersScreen = ({
  players,
  onAddPlayer,
  onRemovePlayer,
  onBack
}: PlayersScreenProps) => {
  const [newPlayerName, setNewPlayerName] = useState('');

  const handleAddPlayer = () => {
    if (newPlayerName.trim()) {
      onAddPlayer(newPlayerName.trim());
      setNewPlayerName('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddPlayer();
    }
  };

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
        <h1 className="text-xl font-display text-foreground">Jogadores</h1>
        <div className="ml-auto">
          <span className="text-primary font-bold">{players.length}</span>
        </div>
      </div>

      {/* Add Player Input */}
      <div className="p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={newPlayerName}
            onChange={(e) => setNewPlayerName(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Nome do jogador"
            className="flex-1 bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            maxLength={20}
          />
          <button
            onClick={handleAddPlayer}
            disabled={!newPlayerName.trim()}
            className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors disabled:bg-muted disabled:cursor-not-allowed"
          >
            <Plus className="w-6 h-6 text-primary-foreground" />
          </button>
        </div>
      </div>

      {/* Players List */}
      <div className="flex-1 px-4 pb-4 overflow-auto">
        <AnimatePresence mode="popLayout">
          {players.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <User className="w-16 h-16 text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground">
                Adicione jogadores para começar
              </p>
            </motion.div>
          ) : (
            <div className="space-y-2">
              {players.map((player, index) => (
                <motion.div
                  key={player.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between bg-secondary/50 border border-border rounded-lg p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-foreground font-medium">
                      {player.name}
                    </span>
                  </div>
                  <button
                    onClick={() => onRemovePlayer(player.id)}
                    className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center hover:bg-destructive/30 transition-colors"
                  >
                    <Trash2 className="w-5 h-5 text-destructive" />
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PlayersScreen;
