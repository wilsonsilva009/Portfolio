var styleElem = document.head.appendChild(document.createElement("style"));

window.addEventListener('scroll', function() {
	const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
	
	/*if (scrollPercentage > 8){
		document.getElementById("cvdownload-parent").classList.add("cvdownload-fixed");
	} else{
		document.getElementById("cvdownload-parent").classList.remove("cvdownload-fixed");
	}*/
	
	const progressBars = [
		{ id: "#progress-bar-1", width: '90%', background: 'linear-gradient(to right, #f99344, #fb6c4a)' },
		{ id: "#progress-bar-2", width: '75%', background: 'linear-gradient(to right, #f99344, #fb6c4a)' },
		{ id: "#progress-bar-3", width: '60%', background: 'linear-gradient(to right, #f99344, #fb6c4a)' },
		{ id: "#progress-bar-4", width: '50%', background: 'linear-gradient(to right, #f99344, #fb6c4a)' },
		{ id: "#progress-bar-5", width: '40%', background: 'linear-gradient(to right, #f99344, #fb6c4a)' },
		{ id: "#progress-bar-6", width: '40%', background: 'linear-gradient(to right, #f99344, #fb6c4a)' }
	];
	
	const colors = [
		{ percent: 2, color: '#6E6E6E', target: '.stage3' },
		{ percent: 5, color: '#6E6E6E', target: '.stage3' },
		{ percent: 35, color: '#333', target: '.stage1' },
		{ percent: 70, color: '#222', target: '.stage2' },
		{ percent: 101, color: '#111', target: '.stage3' },
	];

	let newStyles = '';
	for (const { target } of colors) {
		document.querySelector(target).style.transform = 'scale(1)';
		document.querySelector(target).style.opacity = '0';
		newStyles += `${target} h1 span::before {width: 0%;}\n`;
		if (target == ".stage2") {
			document.querySelector('.habilidades-caroussel').style.opacity = '0';
			document.querySelector('.habilidades-caroussel').style.transform = 'scale(1)';
			newStyles += `${'.habilidades-caroussel'} h1 span::before {width: 0%;}\n`;
		}
	}
	
	for (const {id} of progressBars){
		document.querySelector(id).style.width = '10%';
	}
	
	styleElem.innerHTML = newStyles;

	for (const { percent, color, target } of colors) {
		if (scrollPercentage <= percent) {
			document.body.style.backgroundColor = color;

			document.querySelector(target).style.transform = 'scale(1.1)';
			document.querySelector(target).style.opacity = '1';
			styleElem.innerHTML += `${target} h1 span::before {width: 100%;}\n`;

			if (target == ".stage2") {

				document.querySelector('.habilidades-caroussel').style.opacity = '1';
				document.querySelector('.habilidades-caroussel').style.transform = 'scale(1.1)';
				styleElem.innerHTML += `${'.habilidades-caroussel'} h1 span::before {width: 100%;}\n`;

				for (const { id, width, background } of progressBars) {
					document.querySelector(id).style.width = width;
					document.querySelector(id).style.background = background;
				}
			}
			break;
		}
	}
});

/*ICONS DO CARROUSSEL*/
document.addEventListener('DOMContentLoaded', function() {
	const icons = document.querySelectorAll('.icons img');

	function handleIconHover(event) {
		const iconId = event.target.id;

		const iconDesc = document.querySelector('.icon-desc');
		iconDesc.style.animation = '';

		void iconDesc.offsetWidth;

		iconDesc.style.animation = 'moveIconDesc 1s ease forwards';

		displayIconInfo(iconId);
	}

	icons.forEach(icon => {
		icon.addEventListener('mouseover', handleIconHover);
	});

	function displayIconInfo(iconId) {
		/*const icondescs = [
			{ id: "wordpress", image: 'Images/wordpress.svg', title: 'Wordpress', description: 'Já utilizei wordpress para criar e hospedar websites para empresas e clientes dessas empresas. Já criei e alterei temas de acordo com as necessidades da empresa.' },
			{ id: "apache", image: 'Images/apache.jpg', title: 'Apache', description: 'Utilizo o apache quando preciso de testar coisas na máquina local sem enviar para a produção. Já hospedei e testei websites, bases de dados, etc.' },
			{ id: "mysql", image: 'Images/mysql.png', title: 'MySQL', description: 'MySQL foi utilizado para as bases de dados dos vários websites e aplicações que criei quando necessitava de guardar dados.' },
			{ id: "linux", image: 'Images/linux.png', title: 'Linux', description: 'Já utilizei Linux para hospedar vários tipos de serviços, nomeadamente websites, servidores dhcp, ou até criar dominios numa rede.' },	
			{ id: "windows", image: 'Images/windows.png', title: 'Windows', description: 'O OS que uso desde o início da minha carreira. Já hospedei varios serviços com o Windows (e Windows Server), tal como Linux.' },
			{ id: "unity", image: 'Images/unity.png', title: 'Unity', description: 'Utilizei Unity para criar vários jogos 3D e 2D num ambiente de programação orientada a objetos. Também foi utilizado para melhorar a minha capacidade de lidar com conteudo média.' },
			{ id: "godot", image: 'Images/godot.png', title: 'Godot', description: 'Como Unity, já utilizei a Godot Engine para criação de Jogos como também aplicações para dispositivos Android.' },
			{ id: "github", image: 'Images/github_black.png', title: 'Github', description: 'Já utilizei Git e github para a organização da codebase entre as minhas equipas e manter alterações e testes fora de produção, como também para trabalhar em ambientes de equipa.' },
			{ id: "blender", image: 'Images/blender.png', title: 'Blender', description: 'Já utilizei blender para criar vários tipos de média, nomeadamente animações 3D e criação de modelos.' },
			{ id: "photoshop", image: 'Images/photoshop.png', title: 'Photoshop', description: 'Já utilizei o Photoshop para editar e criar vários tipos de média, como o blender, mas 2D.' },
			{ id: "illustrator", image: 'Images/illustrator.png', title: 'Illustrator', description: 'Como o Photosho, utilizei o Illustrator para criar vários tipos de conteudo 2D.' }
		];*/

		const icondescs = [
			{ id: "wordpress", image: 'Images/wordpress.svg', title: 'Wordpress', description: 'Experiência na criação e hospedagem de websites para empresas e clientes corporativos, com personalização de temas conforme exigências específicas.' },
			{ id: "apache", image: 'Images/apache.jpg', title: 'Apache', description: 'Utilizo o Apache para realizar testes em ambiente local, garantindo estabilidade antes da implantação em produção. Experiência em hospedar e testar websites, bases de dados, entre outros.' },
			{ id: "mysql", image: 'Images/mysql.png', title: 'MySQL', description: 'Implementação de MySQL em bases de dados para websites e aplicações, possibilitando o armazenamento e recuperação eficientes de dados.' },
			{ id: "linux", image: 'Images/linux.png', title: 'Linux', description: 'Administração de Linux para hospedar diversos serviços, incluindo websites, servidores DHCP, e criação de domínios em redes corporativas.' },
			{ id: "windows", image: 'Images/windows.png', title: 'Windows', description: 'Extensa experiência com Windows e Windows Server para hospedagem de serviços e administração de ambientes semelhantes ao Linux.' },
			{ id: "unity", image: 'Images/unity.png', title: 'Unity', description: 'Desenvolvimento de jogos 3D e 2D com Unity, aprimorando habilidades em programação orientada a objetos e gestão de conteúdo multimídia.' },
			{ id: "godot", image: 'Images/godot.png', title: 'Godot', description: 'Experiência com Godot Engine para a criação de jogos e desenvolvimento de aplicações Android, focando em usabilidade e desempenho.' },
			{ id: "github", image: 'Images/github_black.png', title: 'Github', description: 'Utilização de Git e GitHub para versionamento, colaboração em equipa e gestão de código-fonte, garantindo integridade e organização da codebase.' },
			{ id: "blender", image: 'Images/blender.png', title: 'Blender', description: 'Desenvolvimento de mídia 3D e animações com Blender, incluindo modelagem e criação de gráficos tridimensionais de alta qualidade.' },
			{ id: "photoshop", image: 'Images/photoshop.png', title: 'Photoshop', description: 'Experiência em edição e criação de mídia 2D com Photoshop, desenvolvendo conteúdos visuais profissionais e criativos.' },
			{ id: "illustrator", image: 'Images/illustrator.png', title: 'Illustrator', description: 'Criação de conteúdos gráficos 2D com Illustrator, com foco em design vetorial e ilustrações de alta qualidade.' }
		];
		

		const selectedIcon = icondescs.find(icon => icon.id === iconId);

		if (selectedIcon) {
			const iconImg = document.querySelector('.icon-thumbnail img');
			const iconTitle = document.querySelector('.icon-thumbnail h1');
			const iconDesc = document.querySelector('.icon-desc p');
			
			iconImg.src = selectedIcon.image;
			iconTitle.textContent = selectedIcon.title;
			iconDesc.textContent = selectedIcon.description;
		}
	}

});
