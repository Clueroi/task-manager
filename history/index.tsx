import eu2 from '/eu2.png'
import Eric from '/Eric.pdf'
import { Instagram, Github, Linkedin } from "lucide-react";


export function History() {
	return (
		<div className='mt-10'>
			<h1 className="text-5xl font-bold text-transparent bg-clip-text animate-gradient bg-gradient-to-r from-green-400 via-amber-500 to-green-400">
				Hello World, Eu sou o Eric
			</h1>
			<h2 className="mt-5 text-2xl text-zinc-200">Dev full-stack junior</h2>
			<div className="flex">
				<div className="flex">
					<div className=" flex-1">
						<span className="text-lg w-[400px] text-zinc-300">Sou um estudante ávido por programação web. Meu objetivo é desenvolver sites escaláveis, de fácil manutenção e fáceis de usar, que sigam as regras de good coding e sejam boas experiências a usuários. Mantenho uma frequência de estudo para encontrar melhores maneiras de resolver problemas e criar novas interfaces.</span>
						<br/>
						<button
							className="p-3 mt-20 bg-transparent border-2 font-bold text-white rounded-lg border-amber-500 cursor-pointer transition hover:bg-amber-500"
							onClick={() => {
								const link = document.createElement("a");
								link.href = "/Eric.pdf"; // URL do arquivo no servidor
								link.download = "/Eric.pdf"; // Nome sugerido para o arquivo no download
								link.click();
							}}
						>
							Baixar Curriculo
						</button>

						<div className='mt-20 flex gap-4 cursor-pointer'>
							<a href="https://www.instagram.com/eric_roomero__/" target='_blank'><Instagram  size={30} className='text-white hover:text-amber-400'/></a>
							<a href="https://github.com/Clueroi" target='_blank'><Github  size={30} className='text-white  hover:text-amber-400'/></a>
							<a href="https://www.linkedin.com/in/eric-romero-clueroi/" target='_blank'><Linkedin  size={30} className='text-white  hover:text-amber-400'/></a>

						</div>
					</div>
					<div className='flex items-end'>
						<img className='w-[570px]' src={eu2} alt="" />
					</div>
				</div>
			</div>
		</div >
	)
}