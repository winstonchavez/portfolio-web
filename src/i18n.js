import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
	en: {
		home: "Home",
		about: "About me",
		ownSentence : "There are two kinds of professionals; Those who are preparing to obtain a better job. And we are ready to change the world.",
		name: "Name",
		citizen: "Citizen",
		age: "Age",
		actualJob: "Actual job",
		years : "years old",
		profile: "Young father, informatic student, and programmer. Without fear a news challenges, and keep on constant learning. I love tech and nature.",
		pitagorasSentence : "With order and time, it's foun the secret to do it all, and do it well.",
		myJob : "Software developer in Ademia.",
		professionalProfile : "Professional profile",
		educationalAchievements : "Education",
		technicallSkills : "Technical skills",
		certifications : "Certifications",
		hobbies : "Hobbies",
		projects : "Projects",
		posts : "Posts",
		experience : "Professional experience (4 years)",
		_experience1 : "MPPRIJP (Gobernment) / January 2014 - July 2016. Caracas, Venezuela.",
		experience_description1: "Design, develop, and test applications oriented to support the operations on MPPRIJP organization. Design databases and transactions with PostgreSQL. Develop software with PHP (Codeigniter), HTML5, and Javascript (JQuery). Write technical informs.",
		_experience2 : "JL Systems (IT Consuilting Microsoft partner) / Agost 2016 - October 2017. Caracas, Venezuela.",
		experience_description2 : "Develop and test modules of Pol21 ERP, here this activities supported by Microsoft technologies (VB, C#, ASP.net). Manage database transactions on SQL Server. Write technicall informs.",
		_experience3 : "Ademia (Software factory) / November 2017 - Actual. Guadalajara, Mexico.",
		experience_description3 : "Develop, test, and deploy on cloud development enviroment the CADEM web project (Online education). Developed like a single page application make on VUE JS (Javascript framework very similar to Angular JS) this app use API REST JSON service developed on PHP (Laravel).",
		number : "Phone number",
		professional_profile : "Professional qualities",
		_professional_profile : "I'm a very organized, creative, and analytical person. Goal oriented, eager to learn, and able take on challengues. Decree to contribute with my experience and knownledge on future projects. I'm interested on web developments focused on education, music, sports, video games, VR, internet of things, robotic, and video-games. I feel confident working with tested tools and standards (like ASP.NET of Microsoft), but feel excited when work a new tool to (a new javascript framework for example).",
		can_do : "What i can do?",
		what_i_can_do : "Desarrollo y mantenimiento de software, desarrollo de servicios web API REST JSON con las tecnologias PHP, C# ASP.NET, y Ruby on rails. Desarrollo de aplicaciones web con Angular JS y Vue JS. Desarrollo de paginas web responsivas con HTML5, CSS3, Bootstrap, y JQuery. Gestionar, y versionar el codigo fuente de los proyectos de manera eficiente y segura con GIT. Gestion de proyectos sencillos. Dominio del ingles tecnico.",
		professional_title : "TI Engineer",
		university : "Los Altos Mirandinos University"
	},
	es: {
		home: "Inicio",
		about: "Sobre mi",
		ownSentence : "Existen dos clases de profesionales en este negocio; Los que se preparan para obtener un mejor trabajo. Y los que nos preparamos para cambiar el mundo.",
		name: "Nombre",
		citizen: "Cuidadania",
		age: "Edad",
		actualJob: "Trabajo actualmente",
		years : "años",
		profile: "Padre joven, estudiante de informatica, y programador. No me asustan los retos, y me mantengo en constante capacitacion. Amo la tecnologia y la naturaleza.",
		pitagorasSentence : "Con orden y tiempo se encuentra el secreto de hacerlo todo, y de hacerlo bien.",
		myJob : "Desarrollador de software en Ademia.",
		professionalProfile : "Perfil profesional",
		educationalAchievements : "Educacion",
		technicallSkills : "Habilidades tecnicas",
		certifications : "Certificaciones",
		hobbies : "Hobbies",
		projects : "Proyectos",
		posts : "Publicaciones",
		experience : "Experiencia profesional (4 anos)",
		_experience1 : "MPPRIJP (Gobierno) / Enero 2014 - Julio 2016. Caracas, Venezuela.",
		experience_description1: "Diseno, desarrollo, y pruebas de software orientado a apoyar las operaciones de la organizacion MPPRIJP. Desarrollo de BD con PostgreSQL. Desarrollo de software con PHP (Codeigniter), HTML5, and Javascript (JQuery). Redaccion de informes tecnicos.",
		_experience2 : "JL Sistemas (Consultores de TI asociados de Microsoft) / Agosto 2016 - octubre 2017. Caracas, Venezuela.",
		experience_description2 : "Desarrollo y pruebas de modulos del ERP pol21, actividades realizadas con las tecnologias Microsoft ASP.NET C# y Visual Basic. Desarrollo de transacciones en SQL Server. Redaccion de informes tecnicos.",
		_experience3 : "Ademia (Fabrica de Software) / November 2017 - Actual. Guadalajara, Mexico.",
		experience_description3 : "Desarrollo, pruebas, y desplegar en ambiente de desarrollo en la nube el proyecto CADEM (educacion en linea). Desarrollado como un single page application hecho con VUE JS (Framework javascript similar a Angular JS) que consume API REST JSON desarrolladas con PHP (Laravel). En este proyecto se ha utilizado la metodologia agil SCRUM.",
		number : "Numero telefonico",
		professional_profile : "Cualidades",
		_professional_profile : "Soy una persona muy organizada, creativa, y analitica. Orientado al logro, con ganas de aprender, y dispuesto a asumir retos. Dipuesto a contribuir en nuevos proyectos con mis conocimientos y experiencia. Estoy interesado en desarrollos basados en proyectos educativos, de musica, deportes, VR, internet de las cosas, robotica y video juegos. Me siento comodo trabajando con tecnologias y estandares probados por la indutria como ASP.NET de microsoft, pero siento una emocion especial al trabajar con una nueva herramienta, como un nuevo framework de javascript.",
		can_do : "Que puedo hacer?",
		what_i_can_do : "Desarrollo y mantenimiento de software, desarrollo de servicios web API REST JSON con las tecnologias PHP, C# ASP.NET, y ruby on rails. Desarrollo de aplicaciones web con Angular JS y Vue JS. Desarrollo de paginas web responsivas con HTML5, CSS3, Bootstrap, y JQuery. Gestionar, y versionar el codigo fuente de los proyectos de manera eficiente y segura con GIT. Gestion de proyectos sencillos. Dominio del ingles tecnico.",
		professional_title : "Ingeniero en informatica",
		university : "Universidad de Los Altos Mirandinos"
	}
}

const i18n = new VueI18n ({
	messages,
	locale: 'en'
})

export default i18n