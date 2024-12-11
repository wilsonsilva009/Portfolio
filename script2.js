document.addEventListener("DOMContentLoaded", () => {
    

/* EFEITO SCROLL */
const stages = [".stage1",".stage2",".stage3",".stage4"];
const colors = ["#333","#222","#111","#050505"];

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
	const target = entry.target;
    const index = stages.indexOf("."+target.classList[0]);

    if (entry.isIntersecting) {
		target.style.opacity = '1';
		target.style.transform = 'scale(1.1)';
        document.body.style.backgroundColor = colors[index];
    } else {
		target.style.opacity = '0';
		target.style.transform = 'scale(1)';
    }
  });
}, {
  root: null,
  threshold: 0.2
});

for (let i = 0; i <= stages.length; i++){
    const element = document.querySelector(stages[i]);
    if (element){
        observer.observe(element);
    }
}

async function ChangeDisplayText() {
    const TheLine = document.querySelector("#display-text h1");
    var Lines = [
        "<h1>Pronto para <span class='gradient-text'>[texto]</span> os seus clientes?</h1>",
        "<h1>Pronto para <span class='gradient-text'>[texto]</span> os seus clientes?</h1>",
    ]

    while (true) {
        var rng = Math.floor(Math.random() * Lines.length);
        //TheLine.innerHTML = Lines[rng];
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}
ChangeDisplayText();
  


});
  
