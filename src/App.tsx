import logo from '@/assets/img/logo-impostor.png';
import GameMode from '@/components/GameMode';
import { Button } from '@/components/ui/button';

function App() {

  return (
    <div className="bg-[#000711] w-screen h-screen flex justify-center items-center">
      <div className="bg-zinc-950 w-screen h-screen md:w-120 md:h-160 rounded-lg shadow-lg flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4 mt-10">
          <img src={logo} alt="logo-impostor" className="size-40 bg-transpent p-4 rounded-full border border-white" />
          <p className="text-4xl bg-gradient-to-b from-[#f0573b] to-[#cb3644] font-black bg-clip-text text-transparent">IMPOSTOR</p>
        </div>

        <div className="w-full h-full p-3">
          <GameMode />
        </div>
        <div className="w-screen h-dvh max-h-28 bg-[#1b1b27] flex justify-center items-center rounded-t-3xl">
          <Button className="bg-[#00c753] cursor-pointer font-bold text-xl text-white rounded-2xl w-5/6 h-4/6 hover:bg-[#00c753] focus:text-[#b4d4c3] focus:scale-[.97] focus:bg-[#078d44]">Iniciar Jogo</Button>
        </div>
      </div>
    </div>
  )
}

export default App
