function CambiarContraste() {
    let body = document.body;
    let estiloBody = window.getComputedStyle(body);
    let fondoActual = estiloBody.backgroundColor;
    let eH1 = document.getElementsByClassName("h1_cambiar");
    let nav1 = document.getElementsByClassName("nav1");


    //Hace que el si el fondo es lightskyblue (el color de fondo) pase a ser negro y cambia las letras a lightskyblue
    if (fondoActual == "lightskyblue") {
        body.style.backgroundColor = "#ffffff"; 
        body.style.color = "#000000";
        for (let index = 0; index < eH1.length; index++) {
            const element = eH1[index];
            element.style.color = "black";
        }
        for (let index = 0; index < eH1.length; index++) {
            const element = nav1[index];
            element.style.color = "black";
        }

    } else { 
        body.style.backgroundColor = "#0b0b0e"; 
        body.style.color = "lightskyblue";
        for (let index = 0; index < eH1.length; index++) {
            const element = eH1[index];
            element.style.color = "white";
        }
        for (let index = 0; index < eH1.length; index++) {
            const element = nav1[index];
            element.style.color = "red";
        }
    }
}
