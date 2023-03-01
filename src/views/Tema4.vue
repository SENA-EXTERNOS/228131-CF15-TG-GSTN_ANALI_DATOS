<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Carga de datos

    .row.justify-content-center.mb-5
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img25.png', alt='imagen relacionada')
      .col-md-7      
        p.mb-0 En esta última fase de los procesos #[i ETL], se cargan los datos recopilados y transformados en un formato ahora consistente y homogéneo. Estos datos se almacenan en un <i>data warehouse</i> (DW) o depósito de datos. Por lo general, el DW se encuentra separado de la base de datos de producción de la organización, lo que propende así a su uso y aprovechamiento sin afectar la labor diaria del negocio. El depósito de datos funciona como un repositorio central, con información que proviene de diversas fuentes de datos y de diferentes tipos (estructurados, semiestructurados y no estructurados). Una vez se encuentran en el depósito, los usuarios pueden acceder a estos mediante herramientas de inteligencia de negocios.

    h3.mb-4 Data warehouse: conceptos y herramientas
    
    .row.justify-content-center.mb-5
      .col-md-7      
        .cajon.color-acento-botones.color-fondo-secundario.p-4.mb-4
          p.mb-0 Un <i>data warehouse</i>, o depósito de datos, es una plataforma utilizada para almacenar y procesar datos que provienen de diversas fuentes y formatos y que ocupa un lugar central en un sistema de inteligencia de negocios (DataScientest, 2022). Allí es donde se cargan los datos recolectados mediante las técnicas de extracción, después de que se transforman, para que tengan el formato y la calidad adecuados para su explotación en los procesos de ciencia de datos. Por lo general, estos depósitos de información se encuentran separados de las bases de datos de producción de la organización para no alterar la información original ni sobrecargar el sistema de información de producción.
        p.mb-0 Sumado a lo anterior, los depósitos de datos funcionan como repositorio central, y su información proviene de una o varias fuentes de datos, como son los sistemas de información de la organización, los sistemas transaccionales y las bases de datos relacionales. Al tener la información centralizada en un solo lugar, la organización logra una visión holística de sus sistemas y procesos claves para un mejor entendimiento y un proceso de toma de decisiones soportado en los datos. Además, los <i>data warehouse</i> están orientados al análisis de información histórica; por tanto, dependiendo de la antigüedad y tamaño de la organización, esta debe disponer de una gran capacidad de almacenamiento (en algunas organizaciones ya se trabaja en cantidades de petabytes), ya que muchos de los datos permanecen por largos periodos de tiempo. Por tal razón, cada vez es más frecuente el uso de soluciones en la nube para este proceso y evitar así que la organización deba realizar grandes inversiones en equipos e infraestructura para desarrollar sus procesos. Con el uso de la computación en la nube o infraestructura como servicio, las organizaciones solo pagan por los servicios usados y bajo demanda.
      .col-md-5
        figure.mw-sm-350px
          img(style="height: 600px" src='@/assets/curso/temas/texto_destacado/img26.png', alt='imagen relacionada') 

    p.mb-4 Continuando con una aproximación al concepto de <i>data warehouse</i> en esta tercera parte del proceso ETL, las siguientes son las características que debe tener un DW:

    .row.justify-content-center.align-items-top.mb-5
      .col-md-4.mb-5.mb-md-0
        img(src='@/assets/curso/temas/texto_destacado/img27.png', alt='Imagen ilustrativa')
      
      .col-md-8.mb-5.mb-md-0
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Orientado a temas")
            .col-md-12.mb-4.mb-md-0
              p.text-small Los datos contenidos en los DW están organizados por temáticas o entidades (cliente, vendedor, producto), que contienen únicamente información relevante para la toma de decisiones.
          
          .row(numero="2" titulo="Integrado")
            .col-md-12.mb-4.mb-md-0
              p.text-small Las fuentes de datos de los DW son diversas, pero, al almacenarse en estos depósitos de datos, deben ser integradas y homogenizadas para que puedan compararse y utilizarse en conjunto.

          .row(numero="3" titulo="Variable con el tiempo")
            .col-md-12.mb-4.mb-md-0
              p.text-small Los DW mantienen los datos históricos, a diferencia de los sistemas de información transaccionales, que solo almacenan la información reciente. En estos depósitos, los datos pueden permanecer por años según las necesidades y políticas de la organización.

          .row(numero="4" titulo="No volátil")
            .col-md-12.mb-4.mb-md-0
              p.text-small Los usuarios no deben cambiar ni actualizar los datos almacenados en los DW. En caso de ser necesario, los cambios en los datos solo podrán realizarlos los profesionales TI de la organización.
          
          .row(numero="5" titulo="Multidimensional")
            .col-md-12.mb-4.mb-md-0
              p.text-small Los DW pueden utilizar una estructura relacional o multidimensional para almacenar los datos. Una representación típica de estas estructuras son los cubos de datos, donde las dimensiones del negocio o los temas son aristas en el cubo de datos.

          .row(numero="6" titulo="Metadatos")
            .col-md-12.mb-4.mb-md-0
              p.text-small Los DW contienen metadatos (datos acerca de los datos), que facilitan la gestión de los datos complejos allí almacenados.

    .row.justify-content-center.mb-5
      .col-md-2
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img28.png', alt='imagen relacionada')
      .col-md-10
        p.mb-4 Existen otro tipo de depósitos de datos conocidos como <i>data lakes</i> o lago de datos. Estos son repositorios de información que se encuentran almacenados en su forma nativa, es decir, sin procesar (estructurados, semiestructurados o no estructurados). Estos almacenan no solo la información que se utiliza en el momento, sino también los datos históricos.
        p.mb-0 La siguiente infografía presenta las principales diferencias entre los <i>data lakes</i> y los <i>data warehouse:</i>

    .mx-auto.col-md-10.mb-4
      .tarjeta
        .imgCont.m-auto
          .row.justify-content-center.mb-4
            ImagenInfografica.color-secundario.mb-5
              template(v-slot:imagen)
                figure
                  img(data-aos="fade-left" src='@/assets/curso/temas/figuras/figura1.svg', alt='diagrama').mb-3
                figcaption(style='background-color: #E4F8FB') 
                  p.p-2 #[b Nota.] tomada y adaptada de https://www.7puentes.com/blog/wp-content/uploads/2021/08/Post_42_2-630x1024.jpg


              .tarjeta.color-puntoC.p-4(x="12%" y="53%" numero="+" style='border-radius: 10px; transform: translate(40px,150px);background-color: #F0FAFC')
                p.text-center Se almacena toda la información independientemente de la fuente y su estructura 
                .tarjeta.color-acento-contenido.p-5(style="background-color: #E4F8FB; margin-left: -22px; width:300px; height: 210px")
                  p.text-center Funciona como un repositorio de datos estructurados, semi-estructurados y no-estructurados 
                .tarjeta.color-acento-contenido.p-5(style="background-color: #C1EFF5; margin-left: -22px; width:300px; height: 130px")
                  p.text-center Se define el esquema de datos después de su almacenamiento, al momento de ser usados  
                .tarjeta.color-acento-contenido.p-5(style="background-color: #9FF0FA; margin-left: -22px; width:300px; height: 130px")
                  p.text-center Usa el proceso extracción - carga - transformación 
                .tarjeta.color-acento-contenido.p-5(style="background-color: #4DD0E1; margin-left: -22px; width:300px; height: 130px")
                  p.text-center Ideal para hacer todo tipo de análisis en profundidad 
              
              .tarjeta.color-puntoC.p-4(x="88%" y="53%" numero="+" style='border-radius: 10px; transform: translate(-150px,150px);background-color: #F0FAFC')
                p.text-center Se almacena información proveniente de sistemas transaccionales, que pasa por un proceso de normalización y transformación 
                .tarjeta.color-acento-contenido.p-5(style="background-color: #E4F8FB; margin-left: -22px; width:300px; height: 210px")
                  p.text-center Se combinan tecnologías para recopilar y gestionar datos procedentes de distintas fuentes (suelen almacenarse de manera estructurada) 
                .tarjeta.color-acento-contenido.p-5(style="background-color: #C1EFF5; margin-left: -22px; width:300px; height: 130px")
                  p.text-center Se define el esquema antes del almacenamiento y antes de su uso 
                .tarjeta.color-acento-contenido.p-5(style="background-color: #9FF0FA; margin-left: -22px; width:300px; height: 130px")
                  p.text-center Usa el proceso extracción - transformación - carga 
                .tarjeta.color-acento-contenido.p-5(style="background-color: #4DD0E1; margin-left: -22px; width:300px; height: 130px")
                  p.text-center Ideal para usuarios operacionales 

    separador
    h3 Tecnologías de almacenamiento (OLAP, ROLAP, MOLAP, HOLAP)
    
    .row.justify-content-center.mb-5
      .col-md-7
        p.mb-4 OLAP es el acrónimo en inglés de procesamiento analítico en línea (OnLine Analytical Processing) y su objetivo es agilizar las consultas de grandes cantidades de datos (Muñoz, 2018). Para ello, utiliza estructuras multidimensionales, también conocidos como cubos OLAP, que almacenan información de grandes bases de datos. Sus principales usos son, en procesos de minería de datos, ventas, #[i marketing] e inteligencia de negocios. El creador del concepto OLAP fue Edgar Frank Codd, conocido también por ser precursor de las bases de datos relacionales. Su propuesta inicial consistió en tener una disposición de los datos en vectores para permitir un análisis rápido. (Joyanes, 2019)
        .cajon.color-acento-botones.color-fondo-secundario.p-4.mb-4
          p.mb-0 Los cubos OLAP se suelen comparar con una hoja de datos ampliada. Este cubo es una base de datos que tiene varias dimensiones, que amplían las posibilidades que ofrecen en la actualidad las hojas de cálculo de solo dos dimensiones. Los OLAP pueden a su vez contener varios cubos o vectores, que también aumentan las posibilidades del sistema (estos son conocidos como hipercubos). Por lo general, los cubos OLAP se componen de tres dimensiones, pero pueden albergar más si es necesario, por el tipo de organización o por la información almacenada.
        
      .col-md-5
        figure.mw-sm-350px
          img(style="height: 600px" src='@/assets/curso/temas/texto_destacado/img29.png', alt='imagen relacionada') 

    .row.justify-content-center.mb-5.mt-4
      .col-md-7
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 4
          p #[i Ejemplo cubo OLAP]      
        figure
          img(data-aos="flip-left" src='@/assets/curso/temas/figuras/figura2.svg', alt='diagrama').mb-3
        figcaption(style='background-color: #E4F8FB') 
          p.p-2 #[b Nota.] tomado y adaptado de https://geeks.ms/lmblanco/wp-content/uploads/sites/117/2016/05/CubosDatosSQLServer2008_01.jpg


    p.mb-4 En el procesamiento analítico en línea también hay disponibles variadas herramientas. Algunas de ellas se caracterizan por

    .row.justify-content-center.mb-5
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/texto_destacado/img30.png", alt="imagen ilistrativa").img400.m-auto
      .col-lg-8
        SlyderF.custom.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjeta--slyder.p-4(style="border: 1px solid grey; height: 340px")
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tarjetas/placeholder11.svg", alt="imagen ilistrativa").img100.m-auto     
            p.text-center.mb-0 Ofrecer una visión multidimensional de los datos.

          .tarjeta.tarjeta--slyder.p-4(style="border: 1px solid grey; height: 340px")
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tarjetas/placeholder12.svg", alt="imagen ilistrativa").img100.m-auto  
            p.text-center.mb-0 No imponer restricciones con relación al número de dimensiones a manejar.

          .tarjeta.tarjeta--slyder.p-4(style="border: 1px solid grey; height: 340px")
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tarjetas/placeholder13.svg", alt="imagen ilistrativa").img100.m-auto       
            p.text-center.mb-0 Permitir la definición de forma flexible sobre las dimensiones: restricciones, agregaciones y jerarquías entre ellas.

          .tarjeta.tarjeta--slyder.p-4(style="border: 1px solid grey; height: 340px")
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tarjetas/placeholder14.svg", alt="imagen ilistrativa").img100.m-auto     
            p.text-center.mb-0 Ofrecer operadores intuitivos de manipulación.
          
          .tarjeta.tarjeta--slyder.p-4(style="border: 1px solid grey; height: 340px")
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tarjetas/placeholder15.svg", alt="imagen ilistrativa").img100.m-auto     
            p.text-center.mb-0 Permitir consultas a la herramienta OLAP, seleccionando atributos del esquema multidimensional.

    p.mb-5 Las herramientas OLAP se clasifican en tres grupos: MOLAP (procesamiento analítico multidimensional en línea), ROLAP (procesamiento analítico en línea relacional) y HOLAP (procesamiento analítico en línea híbrido).

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="MOLAP" :icono="require('@/assets/curso/temas/pestañas/pestaña_icono_01.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p La información es precalculada y luego almacenada en cubos de datos multidimensionales. Los datos se organizan en una estructura tipo cubo que el usuario puede rotar. Es el más usado para resúmenes e informes financieros.
             
          .col-md-6.mb-4.mb-md-0
            img(src="@/assets/curso/temas/texto_destacado/img31.png", alt="imagen ilistrativa")

      .py-4.py-md-5(titulo="ROLAP" :icono="require('@/assets/curso/temas/pestañas/pestaña_icono_02.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p Los datos son introducidos directamente desde el <i>data warehouse</i> u otra fuente de datos relacional y no son almacenados por separado. La base de datos relacional maneja los requerimientos de DW, y el motor de ROLAP proporciona la función analítica.
          .col-md-6.mb-4.mb-md-0
            img(src="@/assets/curso/temas/texto_destacado/img32.png", alt="imagen ilistrativa")

      .py-4.py-md-5(titulo="HOLAP" :icono="require('@/assets/curso/temas/pestañas/pestaña_icono_03.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p Trata de combinar las ventajas de las soluciones MOLAP y ROLAP. Almacena algunos datos de un motor relacional, mientras que otros los compendia en una base de datos multidimensional.
             
          .col-md-6.mb-4.mb-md-0
            img(src="@/assets/curso/temas/texto_destacado/img33.png", alt="imagen ilistrativa")
    
    separador
    h3.mb-5 Mantenimiento del #[i data warehouse]
    
    .row.justify-content-center.mb-5
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img34.png', alt='imagen relacionada')
      .col-md-7      
        p.mb-0 La fase de mantenimiento del DW es un proceso que implica el monitoreo, evaluación, reparación y mejora del sistema. Por lo general, los sistemas de información y, en este caso, los depósitos de datos necesitan actualizarse con nuevos productos, estándares, normas, regulaciones o reglas del negocio. En este sentido, es fundamental que las herramientas seleccionadas sean flexibles y provean las funciones necesarias para realizar estos procesos. Los procesos de mantenimiento de DW, como pueden ser actualización de las vistas o ingreso de nuevos datos, deben ser realizados por profesionales TI con experiencia en este tipo de actividades, porque una modificación no planificada o que se realice de forma incorrecta puede acarrear pérdida de información.

    .row.justify-content-center.mb-5
      .col-md-8     
        .cajon.color-primario.color-fondo-4.p-4
          p.mb-0 Durante todo el ciclo de vida del proceso de ciencia de datos, es importante realizar procesos de evaluación sobre el sistema. Esta evaluación debe ser periódica y sistemática para determinar si el sistema está funcionando de la forma esperada y con eficiencia y si se está cumpliendo con los requerimientos y necesidades de la organización. La evaluación también permitirá identificar necesidades de actualización para dar respuesta a las necesidades cambiantes del proceso.
      .col-md-4
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img35.png', alt='imagen relacionada') 

    p.mb-4 Existen tres tipos de mantenimiento para considerar: depuración, actualización y adición de nuevas funcionalidades.
    
    .row.justify-content-center.mb-4
      .col-md-3.col-lg-3(style="margin-top: 10px; ")
        img(src='@/assets/curso/temas/texto_destacado/img36.png', alt='imagen relacionada') 
      .col-md-4.col-lg-9
        TabsA.color-acento-botones.mb-4
          .tarjeta.color-acento-contenido-borde.p-4(titulo="Depuración")
            .row
              .col-md-12.p-4.color-fondo
                p Consiste en la detección, prueba y reparación de errores. Muchas de las fallas son corregidas durante el proceso de implementación, pero algunas solo se detectan en fase de producción. Así que es necesario realizar los ajustes requeridos para que el <i>data warehouse</i> funcione de la forma esperada.

          .tarjeta.color-acento-contenido-borde.p-4(titulo="Actualización")
            .row
              .col-md-12.p-4.color-fondo
                p Las condiciones y necesidades de la organización cambian con el tiempo. Por ende, es necesario que el <i>data warehouse</i>, sus vistas y la información allí almacenada se adapten a estos cambios para que sean de utilidad.
          .tarjeta.color-acento-contenido-borde.p-4(titulo="Adición")
            .row
              .col-md-12.p-4.color-fondo
                p En algunos casos puede ser necesario agregar nuevas funcionalidades o vistas en el <i>data warehouse</i>, sin afectar su funcionamiento.


    .row
      p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.





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
