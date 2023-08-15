<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Transformación de datos

    .row.justify-content-around.align-items-center.mb-4
      .col-lg-10
        .bloque-texto-h.color-primario.p-3.p-sm-4.p-md-4.mb-4
          .bloque-texto-h__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/texto_destacado/img20.png')})`}"
            )   
          .bloque-texto-h__texto.p-4
            p.mb-4 En esta fase se realiza la transformación de los datos corrigiendo y resolviendo posibles inconvenientes que pueda presentar la información para que la organización la aproveche. Esto se hace a través de un conjunto de reglas que buscan proporcionar orden y claridad a la información recopilada. Las reglas y los parámetros que debe cumplir la información dependerán de los criterios y necesidades de cada organización.
            br
            br
            p.mb-4 En esta etapa se realizan actividades de validación, eliminación de duplicados, codificación, ajustes de formato y otras requeridas, que ayudan a identificar qué datos son útiles y cuáles son deficientes para iniciar el proceso. En el caso de los datos deficientes, es necesario decidir qué se hará con ellos, si se omiten o se ajustan de alguna manera para realizar el análisis de la información.
    
    separador 
    h3 Técnicas de limpieza y transformación de datos
    
    .row.justify-content-center.mb-5
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img21.png', alt='imagen relacionada')
      .col-md-7      
        p.mb-3 En la actualidad, los datos son el principal activo de las organizaciones y el insumo principal en los procesos de ciencias de datos e inteligencia de negocios, así que garantizar su calidad es una de las actividades más importantes de estos procesos. La limpieza de estos datos, también llamada <i>data cleansing</i> o <i>data scrubbing</i>, consiste en resolver inconsistencias en los conjuntos de datos. Esto incluye corregir o eliminar registros inexactos o incompletos, eliminar información irrelevante, ajustar los formatos de los datos, entre otros. Cuando la información proviene de diferentes fuentes, aumenta la necesidad de realizar un adecuado proceso de limpieza de datos, debido a que diversas fuentes pueden contener formatos de datos redundantes, incompatibles o sucios.

        p.mb-3 Las siguientes son algunas de las ventajas de la limpieza de datos:

        p.mb-3 #[i.fas.fa-angle-right.txt--orange] Mejor calidad en los datos, que repercute de forma positiva en todos los procesos y actividades realizados con la información.
        p.mb-3 #[i.fas.fa-angle-right.txt--orange] Permite cumplir con normatividades vigentes, relacionadas con la privacidad y uso de los datos.
        p.mb-4 #[i.fas.fa-angle-right.txt--orange] Uso de datos de mejor calidad, que puede ayudar a mejorar los procesos internos de la organización.

      p.mb-4 Las técnicas de limpieza de datos pueden variar según el tipo de información y de organización. Para realizar este proceso, a continuación se describen algunos pasos básicos:


    .row.justify-content-center.mb-4
      .col-md-6
        AcordionA(tipo="a" clase-tarjeta="tarjeta color-secundario")
          .row(titulo="Eliminación de datos duplicados o irrelevantes")
            .col-md-12.mb-4.mb-md-0
              p(style="color: black") Cuando se recopila información desde diferentes fuentes, existe una alta probabilidad de obtener datos duplicados. En este caso, se deben eliminar todos los datos que se repiten o combinar estos registros para no perder información (en algunos casos, los registros duplicados poseen cada uno información que el otro no). También se deberá eliminar cualquier otro tipo de dato que no sea relevante para el objetivo del proyecto de ciencias de datos.
        
          .row(titulo="Corrección de errores estructurales")
            .col-md-12.mb-4.mb-md-0
              p(style="color: black") Esto ocurre cuando en los conjuntos de datos se encuentran errores tipográficos o nomenclaturas extrañas, lo que puede ocasionar categorías mal etiquetadas. Para esto, se pueden usar filtros o funciones (según las herramientas que se estén utilizando) para eliminar o corregir los registros con estas características.

          .row(titulo="Tratamiento de valores atípicos (<i style=color:black>outliers</i>)")
            .col-md-12.mb-4.mb-md-0
              p(style="color: black") Este tipo de datos se debe administrar con mucha atención, porque los valores atípicos no necesariamente son valores incorrectos. En caso de ser incorrectos, se pueden reemplazar por valores como el promedio. En otros casos, estas observaciones únicas se eliminan para que no alteren los cálculos realizados con los valores del atributo.

          .row(titulo="Manejo de datos faltantes (imputación)")
            .col-md-12.mb-4.mb-md-0
              p(style="color: black") Un factor a considerar es no ignorar los datos faltantes en los conjuntos de datos, dado que muchos procedimientos, algoritmos y funciones no aceptan este tipo de valores y pueden arrojar errores y resultados incorrectos. Existen varias opciones para tratar este tipo de problemas. La primera es eliminar los registros con valores perdidos, y solo se recomienda cuando son pocos los que tienen estos problemas. La segunda consiste en ingresar valores perdidos con base en otros registros. Esta opción implica analizar los registros existentes, similares a los que tienen problemas, con el fin de identificar el valor posible que puede asignarse al dato faltante. La tercera opción es modificar la forma en que se usan los datos, para usar los demás de manera efectiva.
      .col-md-5
        img(src='@/assets/curso/temas/texto_destacado/img22.png', alt='imagen relacionada')  

    .row 
      p Recordemos que la limpieza y la transformación de datos no son lo mismo. La limpieza consiste en convertir los datos de un formato a otro, mientras que la transformación (también llamada #[i Wrangling] o #[i Munging]) convierte los datos brutos mediante un formato adecuado para su análisis; en el siguiente video, podrá observar aspectos más detallados sobre este interesante tema:

    figure.mt-4.mb-5
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/hKwuc-JJisI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    separador
    h3.mb-5 Herramientas para transformación y limpieza de datos
    
    .row.justify-content-center.mb-5
      .col-md-2
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img23.png', alt='imagen relacionada')
      .col-md-10
        p.mb-4 Al momento de realizar actividades de transformación y limpieza de datos, hay una gran variedad de herramientas para utilizar, algunas de código abierto y otras pagadas, que ayudarán a realizar este proceso de ciencias de datos, que, por lo general, ocupa gran parte del tiempo.
        p.mb-0 A continuación, se describe algunas de estas herramientas:

    .justify-content-center.mb-4
      .col-md-10.col-lg-12
        TabsA.color-acento-botones.mb-4
          .tarjeta.color-acento-contenido-borde.p-4(titulo="Python")
            .row
              .row.col-md-12.p-4.color-fondo
                .col-md-3.col-xs-5
                  figure
                    img(src='@/assets/curso/temas/tarjetas/tarjeta1.svg', alt='imagen relacionada')
                .col-md-9.col-xs-5
                  p.mb-4 Este es uno de los lenguajes de programación más utilizados para proyectos de ciencias de datos. Se utilizan en la fase de limpieza y transformación de librerías, como NumPy, Pandas y Matplotlib, cada una con procedimientos y funciones de gran utilidad para manipular los conjuntos de datos. (https://www.python.org/)
                  a.anexo.mb-4.mb-lg-0(href="https://www.python.org/" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p Enlace web. https://www.python.org/    

          .tarjeta.color-acento-contenido-borde.p-4(titulo="NumPy")
            .row
              .row.col-md-12.p-4.color-fondo
                .col-md-3.col-xs-5
                  figure
                    img(src='@/assets/curso/temas/tarjetas/tarjeta6.svg', alt='imagen relacionada')
                .col-md-9.col-xs-5
                  p.mb-4 Es una librería que se utiliza para realizar operaciones matemáticas requeridas en los conjuntos de datos.
                 
          .tarjeta.color-acento-contenido-borde.p-4(titulo="Pandas")
            .row
              .row.col-md-12.p-4.color-fondo
                .col-md-3.col-xs-5
                  figure
                    img(src='@/assets/curso/temas/tarjetas/tarjeta5.svg', alt='imagen relacionada')
                .col-md-9.col-xs-5
                  p.mb-4 Es una herramienta que se emplea para importar y gestionar los conjuntos de datos (#[i dataframes]).
                 
          .tarjeta.color-acento-contenido-borde.p-4(titulo="Matplotlib")
            .row
              .row.col-md-12.p-4.color-fondo
                .col-md-3.col-xs-5
                  figure
                    img(src='@/assets/curso/temas/tarjetas/tarjeta4.svg', alt='imagen relacionada')
                .col-md-9.col-xs-5
                  p.mb-4 Es una librería que ayuda a realizar gráficos a partir de los conjuntos de datos disponibles.


          .tarjeta.color-acento-contenido-borde.p-4(titulo="R")
            .row
              .row.col-md-12.p-4.color-fondo
                .col-md-3.col-xs-5
                  figure
                    img(src='@/assets/curso/temas/tarjetas/tarjeta3.svg', alt='imagen relacionada')
                .col-md-9.col-xs-5
                  p.mb-4 Es un lenguaje de programación orientado especialmente a labores de análisis exploratorio de datos para tareas de ciencia de datos. El entorno de R proporciona un conjunto de librerías de gran utilidad para la manipulación de información, clasificación, generación de gráficos y técnicas estadísticas. Gracias a los paquetes de computación distribuida, R puede administrar grandes cantidades de datos en segundos y ejecutarse en diversos sistemas operativos. (https://www.r-project.org/)
                  a.anexo.mb-4.mb-lg-0(href="https://www.r-project.org/ " target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p Enlace web. https://www.r-project.org/  

          .tarjeta.color-acento-contenido-borde.p-4(titulo="OpenRefine")
            .row
              .row.col-md-12.p-4.color-fondo
                .col-md-3.col-xs-5
                  figure
                    img(src='@/assets/curso/temas/tarjetas/tarjeta2.svg', alt='imagen relacionada')
                .col-md-9.col-xs-5
                  p.mb-4 Es una herramienta de código abierto para trabajar con datos desordenados. Realiza la manipulación de información mediante el uso de filtros y particiones en los conjuntos de datos a través del uso de expresiones regulares. (https://openrefine.org/)
                  a.anexo.mb-4.mb-lg-0(href="https://openrefine.org/" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p Enlace web. https://openrefine.org/ 
    
    p.mb-4 Otras herramientas importantes, en este caso de pago, son las siguientes:

    .row.justify-content-center.mb-4
      .col-md-4
        img(src='@/assets/curso/temas/texto_destacado/img24.png', alt='imagen relacionada')  
      .col-md-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta color-secundario")
          .row(titulo="Pentaho Data Integration ")
            .col-md-12.mb-4.mb-md-0
              .col-md-9.col-xs-5
                  p(style="color:black").mb-4 Es el componente de la plataforma Pentaho, orientado a las tareas de ETL. Entre otras funciones, comprende la migración de información entre aplicaciones o bases de datos, la exportación de información desde bases de datos o archivos planos, y herramientas de limpieza de datos (Hitachi, 2016). 
                  a.anexo.mb-4(style="width:700px" href="https://help.hitachivantara.com/Documentation/Pentaho/7.0/0D0/Pentaho_Data_Integration" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p(style="color:black") Enlace web. https://help.hitachivantara.com/Documentation/Pentaho/7.0/0D0/Pentaho_Data_Integration
          
          .row(titulo="Microsoft SQL Server Integration Services (SSIS)")
            .col-md-12.mb-4.mb-md-0
              .col-md-9.col-xs-5
                p(style="color:black").mb-4 Esta herramienta de Microsoft, proporciona sus propios servicios de integración de SQL Server para conectar con otros motores de bases de datos. Una de sus principales características es que permite una fácil migración a estructuras de datos, que ayuda a garantizar la consistencia de estos y disminuir los riesgos habituales de este tipo de operaciones. (Microsoft, 2022)
                a.anexo.mb-4.mb-lg-0(href="https://learn.microsoft.com/en-us/sql/integration-services/sql-server-integration-services?view=sql-server-ver16" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p(style="color:black") Enlace web. https://learn.microsoft.com/en-us/sql/integration-services/sql-server-integration-services?view=sql-server-ver16) 

</template>

<script>
export default {
  name: 'Tema3',
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
