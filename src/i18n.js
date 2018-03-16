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
		educationalAchievements : "Educational achievements",
		technicallSkills : "Technical skills",
		certifications : "Certifications",
		hobbies : "Hobbies",
		projects : "Projects",
		posts : "Posts"
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
		educationalAchievements : "Logros educativos",
		technicallSkills : "Habilidades tecnicas",
		certifications : "Certificaciones",
		hobbies : "Hobbies",
		projects : "Proyectos",
		posts : "Publicaciones"
	}
}

const i18n = new VueI18n ({
	messages,
	locale: 'en'
})

export default i18n