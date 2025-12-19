import { ArrowLeft, Check } from 'lucide-react';
import { Theme, THEMES } from '@/types/game';
import { motion } from 'framer-motion';

interface ThemeSelectorProps {
  selectedTheme: Theme;
  onSelectTheme: (theme: Theme) => void;
  onBack: () => void;
}

const ThemeSelector = ({
  selectedTheme,
  onSelectTheme,
  onBack
}: ThemeSelectorProps) => {
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
        <h1 className="text-xl font-display text-foreground">Temas</h1>
      </div>

      {/* Themes List */}
      <div className="flex-1 p-4 overflow-auto">
        <div className="grid grid-cols-2 gap-3">
          {THEMES.map((theme, index) => (
            <motion.button
              key={theme.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => {
                onSelectTheme(theme);
                onBack();
              }}
              className={`relative p-4 rounded-lg border transition-all ${
                selectedTheme.id === theme.id
                  ? 'bg-primary/20 border-primary glow-neon'
                  : 'bg-secondary/50 border-border hover:border-primary/50'
              }`}
            >
              {selectedTheme.id === theme.id && (
                <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
              )}
              <span className="text-foreground font-medium text-sm">
                {theme.name}
              </span>
              <p className="text-muted-foreground text-xs mt-1">
                {theme.words.length} palavras
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;
