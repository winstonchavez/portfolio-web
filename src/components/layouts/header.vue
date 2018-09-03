<template>

<nav class="navbar is-dark">

  <div class="navbar-brand">
    <router-link class="navbar-item" to="/">
        WJCG
    </router-link>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample" @click="desplegar()">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div v-if="!menuburguer" id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      <router-link class="navbar-item" to="/">
        {{$t('home')}}
      </router-link>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          {{$t('about')}}
        </a>
        <div class="navbar-dropdown is-boxed">
          <router-link class="navbar-item" to="/professional-profile">
            {{$t('professionalProfile')}}
          </router-link>
          <router-link class="navbar-item" to="/education">
            {{$t('educationalAchievements')}}
          </router-link>
          <router-link class="navbar-item" to="/skills">
            {{$t('technicallSkills')}}
          </router-link>
          <router-link class="navbar-item" to="/certifications">
            {{$t('certifications')}}
          </router-link>
          <!--<a class="navbar-item" href="">
            {{$t('hobbies')}}
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item" href="">
            {{$t('projects')}}
          </a>
          <a class="navbar-item" href="">
            {{$t('posts')}}
          </a>-->
        </div>
      </div>
    </div>

    <div align="center" class="navbar-end">
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

  <div v-if="menuburguer" id="navbarExampleTransparentExample" class="navbar-menu is-active">
    <div class="navbar-start">
      <router-link class="navbar-item" to="/">
        {{$t('home')}}
      </router-link>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          {{$t('about')}}
        </a>
        <div class="navbar-dropdown is-boxed">
          <router-link class="navbar-item" to="/professional-profile">
            {{$t('professionalProfile')}}
          </router-link>
          <router-link class="navbar-item" to="/education">
            {{$t('educationalAchievements')}}
          </router-link>
          <router-link class="navbar-item" to="/skills">
            {{$t('technicallSkills')}}
          </router-link>
          <router-link class="navbar-item" to="/certifications">
            {{$t('certifications')}}
          </router-link>
          <!--<a class="navbar-item" href="">
            {{$t('hobbies')}}
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item" href="">
            {{$t('projects')}}
          </a>
          <a class="navbar-item" href="">
            {{$t('posts')}}
          </a>-->
        </div>
      </div>
    </div>

    <div align="center" class="navbar-end">
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
  data : function () {
    return {
      menuburguer : false
    }
  },
	methods: {
		translate ( lang ) {
			this.$i18n.locale = lang
		},
    desplegar () {
      //console.log("burguer");

      if ( this.menuburguer ) {
        this.menuburguer = false;
      } else {
        this.menuburguer = true;
      }
      
    }
	}
}

</script>

<style lang="scss" scoped>
	
	img {
		//border-radius:50%;
	}

</style>