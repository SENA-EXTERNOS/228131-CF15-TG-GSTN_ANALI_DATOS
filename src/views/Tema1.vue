<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 ¿Qué es ETL?

    .row.justify-content-center.mb-5
      .col-md-7      
        p.mb-0 Los procesos extracción, transformación y carga ETL, (#[i extract, transform and load]), son parte esencial de los procesos de ciencia de datos, en los que se aplican diferentes herramientas, técnicas y actividades que permiten, como su nombre lo indica, extraer la información de las diversas fuentes con que cuenta la organización (estas pueden estar soportadas en sistemas digitales o físicos). Luego, transformar esa información mediante procesos de limpieza, validación e imputación, que permitan tener un conjunto de datos de calidad que sea íntegro, seguro y utilizable. Por último, se debe cargar la información en un repositorio central, donde la organización pueda aprovecharla. La secuencia de aplicación de estas fases, se observa con mayor claridad a continuación:
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img2.png', alt='imagen relacionada')

    .row.justify-content-center.mb-5
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1
          p #[i ETL]      
        figure
          img(data-aos="flip-left" src='@/assets/curso/temas/texto_destacado/img3.svg', alt='diagrama')
        figcaption(style='background-color: #E4F8FB') 
          p.p-2 #[b Nota.] tomado y adaptado de https://learn.microsoft.com/es-es/azure/architecture/data-guide/images/etl.png  


    .row.justify-content-center.mb-5
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img4.png', alt='imagen relacionada')
      .col-md-7      
        p.mb-0 De la calidad en la realización de estas tareas dependerá en gran medida el éxito o fracaso de los ejercicios de ciencias de datos. En este ámbito de uso y aprovechamiento de la información, se dice de manera constante que “si entra basura, sale basura”. Si los datos y la información recolectada son incompletos, incorrectos y no son claros, los resultados y los análisis realizados con dicha información serán de poca o nula utilidad para la organización. Es por esto que en los últimos años se ha trabajado arduamente en el desarrollo de mejores herramientas para apoyar los procesos de ETL, así como procesos más claros y metodologías y marcos de trabajo que permitan estandarizar y hacer más eficiente esta labor.
   
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
