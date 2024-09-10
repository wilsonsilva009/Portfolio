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
		const icondescs = [
			{ id: "wordpress", image: 'Images/wordpress.svg', title: 'Wordpress', description: 'Teste1' },
			{ id: "apache", image: 'Images/apache.jpg', title: 'Apache', description: 'Teste2' },
			{ id: "mysql", image: 'Images/mysql.png', title: 'MySQL', description: 'Teste3' },
			{ id: "linux", image: 'Images/linux.png', title: 'Linux', description: 'Teste4' },	
			{ id: "windows", image: 'Images/windows.png', title: 'Windows', description: 'Teste5' },
			{ id: "unity", image: 'Images/unity.png', title: 'Unity', description: 'Teste6' },
			{ id: "godot", image: 'Images/godot.png', title: 'Godot', description: 'Teste7' },
			{ id: "github", image: 'Images/github.png', title: 'Github', description: 'Teste8' },
			{ id: "blender", image: 'Images/blender.png', title: 'Blender', description: 'Teste9' },
			{ id: "photoshop", image: 'Images/photoshop.png', title: 'Photoshop', description: 'Teste10' },
			{ id: "illustrator", image: 'Images/illustrator.png', title: 'Illustrator', description: 'Teste11' }
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
