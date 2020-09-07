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
        // descripcion.innerHTML = "hola commo estas"
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
        // descripcion.innerHTML = "hola commo estas"
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
        // descripcion.innerHTML = "hola commo estas"
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
        // descripcion.innerHTML = "hola commo estas"
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
        // descripcion.innerHTML = "hola commo estas"
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
        // descripcion.innerHTML = "hola commo estas"
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
        // descripcion.innerHTML = "hola commo estas"
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
        // descripcion.innerHTML = "hola commo estas"
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