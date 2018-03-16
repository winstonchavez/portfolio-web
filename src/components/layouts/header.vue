<template>
<nav class="navbar is-dark">
  <div class="navbar-brand">
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="">
        {{$t('home')}}
      </a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a router-link class="navbar-link" href="">
          {{$t('about')}}
        </a>
        <div class="navbar-dropdown is-boxed">
          <router-link class="navbar-item" to="/professional-profile">
            {{$t('professionalProfile')}}
          </router-link>
          <a class="navbar-item" href="">
            {{$t('educationalAchievements')}}
          </a>
          <a class="navbar-item" href="">
            {{$t('technicallSkills')}}
          </a>
          <a class="navbar-item" href="">
            {{$t('certifications')}}
          </a>
          <a class="navbar-item" href="">
            {{$t('hobbies')}}
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item" href="">
            {{$t('projects')}}
          </a>
          <a class="navbar-item" href="">
            {{$t('posts')}}
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
    	<a class="navbar-item" @click="translate('es')">
    		<figure class="image is-32x32">
			  <img src="src/assets/spain.png">
			</figure>
    	</a>
      	<a class="navbar-item" @click="translate('en')">
    		<figure class="image is-32x32">
			  <img src="src/assets/england.png">
			</figure>
    	</a>
    </div>
  </div>
</nav>
</template>

<script>

export default {
	methods: {
		translate ( lang ) {
			this.$i18n.locale = lang
		}
	}
}

</script>

<style lang="scss" scoped>
	
	img {
		border-radius:50%;
	}

</style>