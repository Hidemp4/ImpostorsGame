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
    words: [
      'Príncipe', 'Dragão Infernal', 'Esqueleto Gigante', 'Corredor', 'Mago', 'PEKKA', 'Golem', 'Balão', 'Mega Cavaleiro', 'Bruxa',
      'Valquíria', 'Mini PEKKA', 'Hog Rider', 'Arqueiras', 'Gigante', 'Torre Inferno', 'Canhão', 'Mosqueteira', 'Zap', 'Bola de Fogo',
      'Foguete', 'Rage', 'Freeze', 'Espelho', 'Clone', 'Tornado', 'Veneno', 'Raio', 'Goblin', 'Goblin de Lança',
      'Exército de Esqueletos', 'Morcegos', 'Minions', 'Horda de Minions', 'Bebê Dragão', 'Eletro Dragão', 'Lava Hound', 'Sparky', 'Bowler', 'Executor',
      'Caçador', 'Lenhador', 'Electro Wizard', 'Ice Wizard', 'Princesa', 'Bandida', 'Night Witch', 'Miner', 'Royal Ghost', 'Magic Archer'
    ]
  },
  {
    id: 'filmes',
    name: 'Filmes',
    words: [
      'Titanic', 'Avatar', 'Matrix', 'Inception', 'Gladiador', 'Interestelar', 'Coringa', 'Vingadores', 'Batman', 'Star Wars',
      'Jurassic Park', 'Harry Potter', 'O Senhor dos Anéis', 'O Poderoso Chefão', 'Pulp Fiction', 'Forrest Gump', 'O Rei Leão', 'Toy Story', 'Frozen', 'Procurando Nemo',
      'Homem-Aranha', 'Pantera Negra', 'Doutor Estranho', 'Thor', 'Hulk', 'Capitão América', 'Homem de Ferro', 'Deadpool', 'Guardiões da Galáxia', 'Shrek',
      'Madagascar', 'Os Incríveis', 'Up', 'Wall-E', 'Ratatouille', 'Coco', 'Viva', 'Moana', 'Encanto', 'Divertida Mente',
      'E.T.', 'Tubarão', 'Indiana Jones', 'De Volta para o Futuro', 'Missão Impossível', 'John Wick', 'Velozes e Furiosos', 'Transformers', 'Piratas do Caribe', 'Top Gun'
    ]
  },
  {
    id: 'comidas',
    name: 'Comidas',
    words: [
      'Pizza', 'Hambúrguer', 'Sushi', 'Lasanha', 'Feijoada', 'Churrasco', 'Macarrão', 'Tacos', 'Risoto', 'Coxinha',
      'Pastel', 'Esfiha', 'Pão de Queijo', 'Brigadeiro', 'Pudim', 'Pavê', 'Bolo de Cenoura', 'Açaí', 'Tapioca', 'Acarajé',
      'Hot Dog', 'Batata Frita', 'Frango Frito', 'Nuggets', 'Burrito', 'Nachos', 'Paella', 'Croissant', 'Waffle', 'Panqueca',
      'Omelete', 'Bacon', 'Torrada', 'Sanduíche', 'Wrap', 'Salada Caesar', 'Sopa', 'Ramen', 'Yakisoba', 'Tempurá',
      'Strogonoff', 'Escondidinho', 'Moqueca', 'Vatapá', 'Bobó de Camarão', 'Picanha', 'Costela', 'Fraldinha', 'Linguiça', 'Cupim'
    ]
  },
  {
    id: 'esportes',
    name: 'Esportes',
    words: [
      'Futebol', 'Basquete', 'Vôlei', 'Tênis', 'Natação', 'Boxe', 'Surf', 'Skate', 'Ciclismo', 'Golf',
      'Handebol', 'Rugby', 'Beisebol', 'Críquete', 'Badminton', 'Squash', 'Polo Aquático', 'Nado Sincronizado', 'Salto Ornamental', 'Maratona',
      'Triathlon', 'Pentatlo', 'Esgrima', 'Judô', 'Taekwondo', 'Karatê', 'Jiu-Jitsu', 'MMA', 'Luta Livre', 'Wrestling',
      'Atletismo', 'Corrida', 'Salto em Altura', 'Salto com Vara', 'Lançamento de Disco', 'Lançamento de Dardo', 'Arremesso de Peso', 'Ginástica Olímpica', 'Ginástica Rítmica', 'Patinação Artística',
      'Hóquei no Gelo', 'Curling', 'Snowboard', 'Ski', 'Bobsled', 'Escalada', 'Rapel', 'Parkour', 'Crossfit', 'Musculação'
    ]
  },
  {
    id: 'animais',
    name: 'Animais',
    words: [
      'Leão', 'Elefante', 'Golfinho', 'Águia', 'Cobra', 'Tubarão', 'Gorila', 'Tigre', 'Lobo', 'Urso',
      'Panda', 'Koala', 'Canguru', 'Girafa', 'Zebra', 'Hipopótamo', 'Rinoceronte', 'Crocodilo', 'Jacaré', 'Tartaruga',
      'Baleia', 'Foca', 'Pinguim', 'Flamingo', 'Papagaio', 'Arara', 'Tucano', 'Coruja', 'Falcão', 'Gavião',
      'Onça', 'Leopardo', 'Guepardo', 'Pantera', 'Lince', 'Raposa', 'Coiote', 'Hiena', 'Chacal', 'Javali',
      'Veado', 'Alce', 'Bisão', 'Búfalo', 'Camelo', 'Dromedário', 'Lhama', 'Alpaca', 'Preguiça', 'Tatu'
    ]
  },
  {
    id: 'profissoes',
    name: 'Profissões',
    words: [
      'Médico', 'Astronauta', 'Chef', 'Piloto', 'Bombeiro', 'Cientista', 'Arquiteto', 'Atleta', 'Músico', 'Professor',
      'Advogado', 'Juiz', 'Promotor', 'Delegado', 'Policial', 'Detetive', 'Espião', 'Militar', 'Marinheiro', 'Capitão',
      'Engenheiro', 'Programador', 'Designer', 'Fotógrafo', 'Cineasta', 'Diretor', 'Produtor', 'Ator', 'Cantor', 'Dançarino',
      'Psicólogo', 'Psiquiatra', 'Nutricionista', 'Fisioterapeuta', 'Dentista', 'Veterinário', 'Enfermeiro', 'Farmacêutico', 'Biólogo', 'Químico',
      'Economista', 'Contador', 'Administrador', 'Empresário', 'Vendedor', 'Corretor', 'Jornalista', 'Escritor', 'Poeta', 'Cartunista'
    ]
  },
  {
    id: 'paises',
    name: 'Países',
    words: [
      'Brasil', 'Japão', 'França', 'Egito', 'Austrália', 'Canadá', 'Itália', 'México', 'Índia', 'Alemanha',
      'Argentina', 'Chile', 'Peru', 'Colômbia', 'Venezuela', 'Uruguai', 'Paraguai', 'Bolívia', 'Equador', 'Cuba',
      'Estados Unidos', 'Inglaterra', 'Espanha', 'Portugal', 'Holanda', 'Bélgica', 'Suíça', 'Áustria', 'Polônia', 'Suécia',
      'Noruega', 'Dinamarca', 'Finlândia', 'Rússia', 'China', 'Coreia do Sul', 'Tailândia', 'Vietnã', 'Filipinas', 'Indonésia',
      'África do Sul', 'Marrocos', 'Nigéria', 'Quênia', 'Etiópia', 'Turquia', 'Grécia', 'Irlanda', 'Escócia', 'Nova Zelândia'
    ]
  },
  {
    id: 'videogames',
    name: 'Video Games',
    words: [
      'Minecraft', 'Fortnite', 'GTA', 'FIFA', 'Call of Duty', 'League of Legends', 'Valorant', 'Among Us', 'Roblox', 'Counter-Strike',
      'Overwatch', 'Apex Legends', 'PUBG', 'Free Fire', 'Rocket League', 'Fall Guys', 'Genshin Impact', 'Elden Ring', 'Dark Souls', 'Sekiro',
      'The Last of Us', 'God of War', 'Uncharted', 'Spider-Man', 'Horizon Zero Dawn', 'Ghost of Tsushima', 'Death Stranding', 'Bloodborne', 'Demon Souls', 'Returnal',
      'Super Mario', 'Zelda', 'Pokemon', 'Kirby', 'Metroid', 'Donkey Kong', 'Animal Crossing', 'Splatoon', 'Smash Bros', 'Mario Kart',
      'Halo', 'Gears of War', 'Forza', 'Sea of Thieves', 'Fable', 'Assassins Creed', 'Far Cry', 'Watch Dogs', 'The Division', 'Rainbow Six'
    ]
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
