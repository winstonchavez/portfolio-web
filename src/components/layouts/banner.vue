<template>
	<section class="hero is-light">
	  <div class="hero-body">
	    <div class="container">
	    	<div class="columns">
	    		<div class="column is-one-quarter" align="center">
	    			<figure class="image is-128x128">
					  <img src="src/assets/profile.jpg">
					</figure>
	    		</div>
	    		<div class="column is-three-quarter">
	    			<h1 class="title">
				        WIZ CHAVEZ
				    </h1>
				    <h2 class="subtitle">
				        {{$t('ownSentence')}}
				    </h2>
				    <a class="button is-info">Twitter</a>
				    <a class="button is-link">Facebook</a>
					<a class="button is-info">Linkedin</a>
					<a class="button">GitHub<i class="fas fa-github"></i></a>
	    		</div>
	    	</div>
	      
	    </div>
	  </div>
	</section>
</template>

<style lang="scss" scoped>
	
	img {
		border-radius:50%;
	}

</style>