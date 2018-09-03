<template>
	<div class="box">
	  <article class="media">
	    <div class="media-content">
	      <div class="content">
	      	<div class="media columns is-mobile">
		      <div class="media-content column">
		        <h3>{{$t('professional_profile')}}</h3>
		        <p align="justify">
		          {{$t('_professional_profile')}}
		        </p>
		      </div>
		    </div>
		    <div class="media columns is-mobile">
		      <div class="media-left column">
		        <figure aling="center" class="image">
		          <img src="src/assets/developmentoffice.jpg">
		        </figure>
		      </div>
		    </div>
	      	
	      </div>
	      <div class="content">
	      	<div class="media">
		      <div class="media-content">
		        <h3>{{$t('experience')}}</h3>
		        <ul>
				    <li>
				    	{{$t('_experience1')}}
				    	<ul>
				    		<li>
				    			{{$t('experience_description1')}}
				    		</li>
				    	</ul>
				    </li>
				    <li>
				    	{{$t('_experience2')}}
				    	<ul>
				    		<li>
				    			{{$t('experience_description2')}}
				    		</li>
				    	</ul>
				    </li>
				    <li>
				    	{{$t('_experience3')}}
				    	<ul>
				    		<li>
				    			{{$t('experience_description3')}}
				    		</li>
				    	</ul>
				    </li>
						<li>
				    	{{$t('_experience4')}}
				    	<ul>
				    		<li>
				    			{{$t('experience_description4')}}
				    		</li>
				    	</ul>
				    </li>
				</ul>
		      </div>
		    </div>
	      </div>
	      <div class="content">
	      	<div class="media">
		      <div class="media-content">
		        <h3>{{$t('can_do')}}</h3>
			        <p>
			          Desarrollo de aplicaciones web (SPA, PWA), aplicaciones moviles hibridas,
								servicios web, y bases de datos. Gestion y version de codigo fuente con GIT.
								Despliegue de aplicaciones y servicios en diversos ambientes de cloud computing.
								Gestion de proyectos agiles con metodologias como SCRUM, aplicando conceptos de PMI.
			        </p>
		      </div>
		    </div>
	      </div>
	    </div>
	  </article>
	</div>
</template>