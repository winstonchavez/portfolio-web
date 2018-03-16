/*
*	routes.js
*/

///COMPONENTS
import PersonalInfo from '@/components/personal/info.vue'
import ProfessionalProfile from '@/components/professional/profile.vue'

///ROUTE

const routes = [
		{ 
			path : '/',
			component: PersonalInfo,
			name: 'personal-info'
		},
		{ 
			path : '/home',
			component: PersonalInfo,
			name: 'personal-info-home'
		},
		{ 
			path : '/professional-profile',
			component: ProfessionalProfile,
			name: 'professional-profile'
		}
]

export default routes