<template>
	<div class="card">
  <div class="card-image">
    <figure class="image is-2by1">
      <img src="src/assets/landing.jpg">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="src/assets/info.jpg">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">Winston Chavez</p>
        <p class="subtitle is-6">@wizwess</p>
      </div>
    </div>

    <div class="content">
      {{$t('name')}}: <strong>Winston Jose Chavez Goitia</strong><br>
      {{$t('citizen')}}: <strong>Caracas, Venezuela.</strong><br>
      {{$t('age')}}: <strong>22 {{$t('years')}}.</strong><br>
      {{$t('number')}}: <strong>+58 424 182 78 24.</strong><br>
      e-mails: <strong>winstonchavez53@gmail.com, wwizka@hotmail.com</strong><br>
      {{$t('actualJob')}}: <strong>{{$t('myJob')}}</strong><br><br>

      <p align="justify">
      	{{$t('profile')}}
      </p>
      <p align="center">
      	{{$t('pitagorasSentence')}}
      </p>
      <p align="right">
      	- Pitagoras.
      </p>
    </div>
  </div>
</div>
</template>