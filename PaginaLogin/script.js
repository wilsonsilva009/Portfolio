let form_selected = 1;

document.addEventListener("DOMContentLoaded", () => {
    const form1 = document.querySelector("#form1");
    const form2 = document.querySelector("#form2");

    /*               FUNCTION               */

    let extraTilt = 1;

    function applyTilt(_form) {
        const rect = form1.getBoundingClientRect();
        const mouseY = event.clientX - rect.left;
        const mouseX = event.clientY - rect.top;

        

        if (_form == 1){
            const rotateY = (    ((mouseY / rect.height) - 0.5) * 10    ) * extraTilt;
            const rotateX = (    ((mouseX / rect.width) - 0.5) * -10    ) * extraTilt;
            form1.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
        else{
            const rotateY = (    ((mouseY / rect.height) - 0.5) * -10    ) * extraTilt;
            const rotateX = (    ((mouseX / rect.width) - 0.5) * -10    ) * extraTilt;
            form2.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY + 180}deg)`;
        }
    }

    /*               FORM 1               */

    form1.addEventListener("mousemove", () => applyTilt(1));

    form1.addEventListener("mouseleave", () => {
        form1.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
    
    /*               FORM 2               */

    form2.addEventListener("mousemove", () => applyTilt(2));

    form2.addEventListener("mouseleave", () => {
        form2.style.transform = "rotateX(0deg) rotateY(180deg)";
    });

    /*               Extra mouse tilt               */

    window.addEventListener("mousedown", () => {
        extraTilt = 2;
        applyTilt(form_selected);
    });

    window.addEventListener("mouseup", () => {
        extraTilt = 1;
        applyTilt(form_selected);
    });

});

/*               ROTATE BACKGROUND               */

var isInLogin = true;

function Switch()
{
    const formbg = document.querySelector(".form-bg");
    const form1 = document.querySelector("#form1");
    const form2 = document.querySelector("#form2");

    const timing = 300;

    if (isInLogin == true)
    {
        formbg.style.transform = "rotateY(180deg)";

        setTimeout(function() {
            form1.style.opacity = "0";
            form2.style.opacity = "1";
        }, timing);

        form1.style.pointerEvents = "none";
        form2.style.pointerEvents = "auto";

        form_selected = 2;
    }else
    {
        formbg.style.transform = "rotateY(0deg)";

        setTimeout(function() {
            form1.style.opacity = "1";
            form2.style.opacity = "0";
        }, timing);

        form1.style.pointerEvents = "auto";
        form2.style.pointerEvents = "none";

        form_selected = 1;
    }
    isInLogin = !isInLogin;
}