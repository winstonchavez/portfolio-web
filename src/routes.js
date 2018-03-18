/*
*	routes.js
*/

///COMPONENTS
import PersonalInfo from '@/components/personal/info.vue'
import ProfessionalProfile from '@/components/professional/profile.vue'
import EducationalAchievements from '@/components/education/achievements.vue'
import Skills from '@/components/skills/skills.vue'
import Certifications from '@/components/certifications/certifications.vue'
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
		},
		{ 
			path : '/education',
			component: EducationalAchievements,
			name: 'education'
		},
		{ 
			path : '/skills',
			component: Skills,
			name: 'skills'
		},
		{ 
			path : '/certifications',
			component: Certifications,
			name: 'certifications'
		}
]

export default routes