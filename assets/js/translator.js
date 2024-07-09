// translator.js
const translations = {
    es: {
      titulo: "Mi Portafolio",
      inicio:"Inicio",
      sobreMi:"Acerca de mi",
      sobreMiF:"Acerca de mi",
      servicios:"Servicios",
      contacto:"Contacto",
      miNombre:"Hola, Soy David Quintero",
      nombre:"Nombre:",
      perfil:"Perfil:",
      correo:"Correo:",
      celular:"Celular:",
      habilidades:"Habilidades",
      descripcion:"Soy una persona activa, con actitud de liderazgo y dedicada, busco obtener buenos resultados en programación en Java, C++, C# con asp.net y mediante el trabajo en equipo. Con conocimientos bases de datos en mysql con xampp, PostgreSQL, SQL server y framerwork Entity, .net core y .net framerwork, manejo de creación de API rest en .net core con microservicios en JAVA y C# ademas  de Microfrontend en Angular.",
      hobbies:"Me gusta jugar voleyball y me gusta los videojuegos para computadora",
      cafe:"Y como todo programador un buen cafe.  ☕",
      certificados:"CERTIFICADOS",
      certificadosEs:"Certificados de estudio",
      contactoF:"Contacto",
      serviciosC:"Servicios"
    },
    en: {
      titulo: "My portfolio",
      inicio:"Index",
      sobreMi:"About me",
      sobreMiF:"About me",
      servicios:"Services",
      contacto:"Contact",
      miNombre:"Hi, I'm David Quintero",
      nombre:"Name:",
      perfil:"Profile:",
      correo:"Email:",
      celular:"Phone:",
      habilidades:"Skills",
      descripcion:"I am an active person with a leadership attitude and dedication, seeking to achieve good results in programming in Java, C++, and C# with ASP.NET through teamwork. I have knowledge of databases in MySQL with XAMPP, PostgreSQL, SQL Server, and the Entity Framework, .NET Core, and .NET Framework. I manage the creation of REST APIs in .NET Core with microservices in Java and C#, as well as microfrontend in Angular.",
      hobbies:"I enjoy playing volleyball, and I also like computer video games.",
      cafe:"And like every programmer, a good cup of coffee. ☕",
      certificados:"CERTIFICATES",
      certificadosEs:"Study certificates",
      contactoF:"Contact",
      serviciosC:"Services"
    }
  };
  
  document.getElementById('Spanish').addEventListener('click', function() {
    traducir('es');
  });
  document.getElementById('English').addEventListener('click', function() {
    traducir('en');
  });

  function traducir(idioma){
    const selectedLanguage = idioma;
    let elements=[];
    for (var key in translations["es"]) {
        elements.push(document.getElementById(key));
    }

    /*let elements=[document.getElementById('titulo')];
    elements.push(document.getElementById('inicio'));
    elements.push(document.getElementById('sobreMi'));
    elements.push(document.getElementById('sobreMiF'));
    elements.push(document.getElementById('servicios'));
    elements.push(document.getElementById('contacto'));
    elements.push(document.getElementById('Spanish'));
    elements.push(document.getElementById('English'));
    elements.push(document.getElementById('miNombre'));
    elements.push(document.getElementById('nombre'));
    elements.push(document.getElementById('perfil'));
    elements.push(document.getElementById('correo'));
    elements.push(document.getElementById('celular'));
    elements.push(document.getElementById('habilidades'));
    elements.push(document.getElementById('descripcion'));
    elements.push(document.getElementById('hobbies'));
    elements.push(document.getElementById('cafe'));
    elements.push(document.getElementById('certificados'));
    elements.push(document.getElementById('certificadosEs'));*/
    var CV = document.getElementById("CV");
    if(idioma=="es"){
        CV.src="assets/CV/HojaDeVida_DavidJavierQuinteroSoto.pdf";
    }else{
        CV.src="assets/CV/CV_DavidJavierQuinteroSoto.pdf";
    }
    elements.forEach(element => {
      const translationKey = element.id;
      element.textContent = translations[selectedLanguage][translationKey];
    });
  }