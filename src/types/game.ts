export interface Player {
  id: string;
  name: string;
  isImpostor: boolean;
  hasSeenWord: boolean;
}

export interface Theme {
  id: string;
  name: string;
  words: string[];
}

export interface GameConfig {
  players: Player[];
  impostorCount: number;
  selectedTheme: Theme;
  timerSeconds: number;
}

export type GamePhase = 'setup' | 'players' | 'reveal' | 'playing' | 'finished';

export const THEMES: Theme[] = [
  {
    id: 'clash-royale',
    name: 'Clash Royale',
    words: ['Príncipe', 'Dragão Infernal', 'Esqueleto Gigante', 'Corredor', 'Mago', 'PEKKA', 'Golem', 'Balão', 'Mega Cavaleiro', 'Bruxa']
  },
  {
    id: 'filmes',
    name: 'Filmes',
    words: ['Titanic', 'Avatar', 'Matrix', 'Inception', 'Gladiador', 'Interestelar', 'Coringa', 'Vingadores', 'Batman', 'Star Wars']
  },
  {
    id: 'comidas',
    name: 'Comidas',
    words: ['Pizza', 'Hambúrguer', 'Sushi', 'Lasanha', 'Feijoada', 'Churrasco', 'Macarrão', 'Tacos', 'Risoto', 'Coxinha']
  },
  {
    id: 'esportes',
    name: 'Esportes',
    words: ['Futebol', 'Basquete', 'Vôlei', 'Tênis', 'Natação', 'Boxe', 'Surf', 'Skate', 'Ciclismo', 'Golf']
  },
  {
    id: 'animais',
    name: 'Animais',
    words: ['Leão', 'Elefante', 'Golfinho', 'Águia', 'Cobra', 'Tubarão', 'Gorila', 'Tigre', 'Lobo', 'Urso']
  },
  {
    id: 'profissoes',
    name: 'Profissões',
    words: ['Médico', 'Astronauta', 'Chef', 'Piloto', 'Bombeiro', 'Cientista', 'Arquiteto', 'Atleta', 'Músico', 'Professor']
  },
  {
    id: 'paises',
    name: 'Países',
    words: ['Brasil', 'Japão', 'França', 'Egito', 'Austrália', 'Canadá', 'Itália', 'México', 'Índia', 'Alemanha']
  },
  {
    id: 'videogames',
    name: 'Video Games',
    words: ['Minecraft', 'Fortnite', 'GTA', 'FIFA', 'Call of Duty', 'League of Legends', 'Valorant', 'Among Us', 'Roblox', 'Counter-Strike']
  }
];

export const TIMER_OPTIONS = [30, 60, 90, 120, 180, 300];

export const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return mins > 0 ? `${mins}min` : `${secs}s`;
};

export const formatTimerDisplay = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};
