const navSlide = () =>{
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.link-items');
    const contact= document.querySelector('.contacto');
    const navLinks = document.querySelectorAll('.link-items li');
    const navBack = document.querySelector('nav');
    //toggle Nav
    menu.addEventListener('click', ()=>{
        nav.classList.toggle('link-items-active');

        //animate links

        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 6 + 0.5}s`;
            }
        });
        //menu animate
        menu.classList.toggle('toggle');

        navBack.classList.toggle('active');
    });    
    //animate links
  

}

navSlide();



function hover(){
    let d = document
    var imagenGrande = d.querySelector('.integrante');
    var nombre = d.querySelector('#titulo');
    var descripcion = d.querySelector ('#descripcion');

    let ale = d.querySelector('#ale');
    let imgAle = d.querySelector('#imgAle')

    ale.addEventListener('mouseover', () => {
        imgAle.src = "assets/images/nosotras/ale.png"
    })
    ale.addEventListener('mouseout', () => {
        imgAle.src = "assets/images/ilustraciones/ale.svg"
    })
    ale.addEventListener('click', ()=>{
        imagenGrande.src = "assets/images/nosotras/ale.png";
        nombre.innerHTML = "Ale Rojas Paz"
        descripcion.innerHTML = "Va a toda velocidad en una bici de carretera manteniendo el dominio de múltiples accesorios impulsados por el poder de su voz. Es la que le pone el fuego, el calor y enciende el show."
    })

    let celia = d.querySelector('#celia');
    let imgCelia = d.querySelector('#imgcelia');
    celia.addEventListener('mouseover', () => {
        imgCelia.src = "assets/images/nosotras/celi.png"
        imgCelia.alt = "Clarinetista de la banda"
    })
    celia.addEventListener('mouseout', () => {
        imgCelia.src = "assets/images/ilustraciones/celi.svg"
    })
    celia.addEventListener('click', ()=>{
        imagenGrande.src = "assets/images/nosotras/celi.png";
        nombre.innerHTML = "Celi Mirabella"
         descripcion.innerHTML = "Viajando en triciclo jugando como en la infancia, nos mantiene unidas y divertidas entre redes de notas. Con el fluir de la flauta Traversa y el sonar del saxo soprano aviva el viento que nos hace bailar y gozar."
    })

    let dana = d.querySelector('#dana');
    let imgDana = d.querySelector('#imgdana');
    dana.addEventListener('mouseover', () => {
        imgDana.src = "assets/images/nosotras/dana.png"
        imgDana.alt = "Pianista de la banda"
    })
    dana.addEventListener('mouseout', () => {
        imgDana.src = "assets/images/ilustraciones/dana.svg"
    })
    dana.addEventListener('click', ()=>{
        imagenGrande.src = "assets/images/nosotras/dana.png";
        nombre.innerHTML = "Dana Yalour"
        descripcion.innerHTML = "Es una de las primeras en formar la banda. Con experiencia y dominio va en su monociclo circense paseando por las teclas del piano y la melódica juntandonos en un mismo compás."
    })

    let gi = d.querySelector('#gi');
    let imgGi = d.querySelector('#imgGi');
    gi.addEventListener('mouseover', () => {
        imgGi.src = "assets/images/nosotras/gi.png"
        imgGi.alt = "Guitarrista de la banda"
    })
    gi.addEventListener('mouseout', () => {
        imgGi.src = "assets/images/ilustraciones/gi.svg"
    })
    gi.addEventListener('click', ()=>{
        imagenGrande.src = "assets/images/nosotras/gi.png";
        nombre.innerHTML = "Giselle Machado"
        descripcion.innerHTML = "A ella le gustan los desafíos y por eso va en una Montain bike rodado 26 tirando solos mágicos que hacen estallar a su club de fans. Lo fantástico de la Gi es que conoce de estilos y colores que vibran con sus cuerdas y su risa súper graciosa."
    });


    let ito = d.querySelector('#ito');
    let imgIto = d.querySelector('#imgIto');
    ito.addEventListener('mouseover', () => {
        imgIto.src = "assets/images/nosotras/ito.png"
        imgIto.alt = "Kongas de la banda"
    })
    ito.addEventListener('mouseout', () => {
        imgIto.src = "assets/images/ilustraciones/ito.svg"
    })
    ito.addEventListener('click', ()=>{
        imagenGrande.src = "assets/images/nosotras/ito.png";
        nombre.innerHTML = "Ito Brandan"
        descripcion.innerHTML = "Ella viaja en una bici plegable llena de ritmo y sabor. <br> Va retumbando los parches, haciendo sonar las congas invitandonos a bailar y disfrutar."
    });

    let ana = d.querySelector('#ana');
    let imgAna = d.querySelector('#imgAna');
    ana.addEventListener('mouseover', () => {
        imgAna.src = "assets/images/nosotras/ana.png"
        imgAna.alt = "Baterista de la banda"
    })
    ana.addEventListener('mouseout', () => {
        imgAna.src = "assets/images/ilustraciones/ana.svg"
    })
    ana.addEventListener('click', ()=>{
        imagenGrande.src = "assets/images/nosotras/ana.png";
        nombre.innerHTML = "Ana Castellanos"
        descripcion.innerHTML = "Muy tranquila y paciente viaja en una bici playera. Dominando los platillos de la batería y marcando el pulso del tambor nos hace pasear con ritmos diferentes de la cumbia que se combinan con Funk y pasan al ska."
    });


    let ludmi = d.querySelector('#ludmi');
    let imgLudmi = d.querySelector('#imgLudmi');
    ludmi.addEventListener('mouseover', () => {
        imgLudmi.src = "assets/images/nosotras/ludmi.png"
        imgLudmi.alt = "Bajista de la banda"
    })
    ludmi.addEventListener('mouseout', () => {
        imgLudmi.src = "assets/images/ilustraciones/ludmi.svg"
    })
    ludmi.addEventListener('click', ()=>{
        imagenGrande.src = "assets/images/nosotras/ludmi.png";
        nombre.innerHTML = "Ludmilla Bardon Kheil"
        descripcion.innerHTML = "Es la que tiene una bici a motor, va tranqui,sin apuros. Parece tímida hasta que enciende el motor, y hace tumbar el bajo viajando de la salsa hasta el rock. Ella es la que le pone sabor."
    });


    let vale = d.querySelector('#vale');
    let imgVale = d.querySelector('#imgVale');
    vale.addEventListener('mouseover', () => {
        imgVale.src = "assets/images/nosotras/vale.png"
        imgVale.alt = "Cantante de la banda"
    })
    vale.addEventListener('mouseout', () => {
        imgVale.src = "assets/images/ilustraciones/vale.svg"
    })
    vale.addEventListener('click', ()=>{
        imagenGrande.src = "assets/images/nosotras/vale.png";
        nombre.innerHTML = "Vale Rovira"
        descripcion.innerHTML = "Ella tiene una bici con 8 silletas, siempre contenta y eufórica nos lleva y nos trae de aquí para allá. Tiene una voz potente que nos enciende y nos invita a gozar."
    });
}
hover();
// function CambioIntegrantes (IDnombre, IDimg, nombre, SRCpng, alt, SRCsvg, reseña){
//     let integrante = document.querySelector(IDnombre);
//     let img = document.querySelector(IDimg);

//     let d = document
//     var imagenGrande = d.querySelector('.integrante');
//     var n = d.querySelector('#titulo')
//     var descripcion = d.querySelector ('#descripcion');

//     integrante.addEventListener('mouseover', () => {
//         img.src = SRCpng
//         img.alt = alt
//     });
//     integrante.addEventListener('mouseout', () => {
//         img.src = SRCsvg
//     })
//     integrante.addEventListener('click', ()=>{
//         imagenGrande.src = SRCpng;
//         n.innerHTML = nombre;
//         descripcion.innerHTML = reseña;
//     })

//     console.log(integrante, img);
// }
// CambioIntegrantes ('#ale', 
// '#imgAle', 
// "Ale Rojas Paz",
// "assets/images/nosotras/ale.png","Cantante de la banda",
// "assets/images/ilustraciones/ale.svg",
// "Ale Rojas Paz es la cantante de la banda");

// CambioIntegrantes (
//     '#vale', 
//     '#imgVale', 
//     "Valentina Rovira",
//     "assets/images/nosotras/vale.png",
//     "Cantante de la banda",
//     "assets/images/ilustraciones/vale.svg");
// CambioIntegrantes ('#ito', '#imgIto', "Rosario Brandan" ,"assets/images/nosotras/ito.png","Cantante de la banda", "assets/images/ilustraciones/ito.svg");
