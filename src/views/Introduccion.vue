<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-5
      .col-md-4
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img1.png', alt='imagen relacionada')
      .col-md-8      
        p.mb-4 Estimado aprendiz, reciba un cordial saludo y sea bienvenido a este componente formativo en el que conocerá las actividades realizadas en los procesos de extracción, transformación y carga de datos en un proyecto de ciencia de datos. En este componente aprenderá técnicas para la extracción de información de diversas fuentes, así como recomendaciones para realizar la limpieza e imputación de datos, todo esto con el objetivo de preparar la información disponible y aprovecharla al máximo para el beneficio de la organización.

        p.mb-4 El enlace que encontrará a continuación lo dirigirá al video introductorio, con el cual podrá conocer sobre lo que trabajará durante esta
         span.color-primario.color-fondo-4.p-2 etapa formativa. Deseamos que pueda culminar satisfactoriamente este proceso.
          
        b ¡Muchos éxitos!
       
    figure.mt-4
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/jASywqOHrQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
