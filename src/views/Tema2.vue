<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Extracción de datos
    
    .row.justify-content-center.mb-5
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img5.png', alt='imagen relacionada')
      .col-md-7      
        p.mb-4 El proceso de extracción de datos consiste en recopilar desde las diversas fuentes, la información requerida para la realización del proyecto de ciencias de datos. Estas fuentes son, en la mayoría de casos, muy diversas, dado que incluyen archivos físicos, como facturas, registros en papel, libros contables y de respaldo, o también digitales, como hojas de cálculo, documentos de texto, bases de datos, entre otros. Los formatos y la compatibilidad entre estas fuentes de información, hacen que la extracción se convierta en un reto importante para la organización.

        p.mb-4 En algunos casos, al revisar los datos requeridos para el proyecto de ciencias de datos, se puede encontrar que la organización no cuenta con la información requerida para el proceso, ante lo cual es necesario definir los elementos faltantes y su posible fuente y diseñar instrumentos para su levantamiento.

        p.mb-0 A continuación, se presentan los pasos a realizar para un correcto proceso de extracción de datos:

    .tarjeta.tarjeta--secundario.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-7.mb-4.mb-md-0

            p.mb-4 Definir o identificar los datos requeridos para el proyecto de ciencia de datos y su ubicación origen.

          .col-md-5
            figure
              img(src='@/assets/curso/temas/tarjetas/placeholder1.svg', alt='imagen ilustrativa')
        
        .row.justify-content-center.align-items-center.my-lg-4            
          .col-md-7.mb-4.mb-md-0
            p Extraer los datos desde su fuente de origen.

          .col-md-5
            figure
              img(src='@/assets/curso/temas/tarjetas/placeholder2.svg', alt='imagen ilustrativa')
        
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-7.mb-4.mb-md-0
    
            p Analizar la calidad y el estado de los datos extraídos.

          .col-md-5
            figure
              img(src='@/assets/curso/temas/tarjetas/placeholder3.svg', alt='imagen ilustrativa')
        
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-7.mb-4.mb-md-0
    
            p Definir, a partir de análisis de la calidad realizado, si los datos extraídos, cumplen con los requerimientos esperados. Si estos no cumplen, deberán ser rechazados.

          .col-md-5
            figure
              img(src='@/assets/curso/temas/tarjetas/placeholder4.svg', alt='imagen ilustrativa')

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-11
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/texto_destacado/img6.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Una acción para considerar en los procesos de extracción de datos es la de generar el menor impacto en el sistema de origen, dado que, si se afecta el sistema original, esto mismo podría pasar con la actividad cotidiana de la organización. Para evitar este tipo de inconvenientes, se recomienda seleccionar los horarios para hacer el proceso de extracción o realizarlo en bloques o lotes, y así minimizar el impacto.

    separador
    h3 Análisis de necesidades de información


    .row.justify-content-center.mb-5
      .col-md-7      
        p.mb-4 En esta fase de extracción, es muy importante tener claros los requisitos y expectativas de la organización, así como los objetivos del proceso de ciencia de datos que se realizarán, con el fin de dar respuesta y definir las necesidades de información. Estas necesidades son aquellos datos que el equipo debe tener para hacer a cabalidad su trabajo, investigación, estudio o predicción. Se puede dar el caso que la organización necesite la información que sabe o no, que existe, o que no sabe que necesita.
        p.mb-0 Un aspecto útil para identificar las necesidades y posibles fuentes de información es conocer cómo esta fluye al interior de la organización. En este sentido, la información fluye de diferentes maneras:
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img7.png', alt='imagen relacionada')       

    .row.justify-content-center.mb-5
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/texto_destacado/img8.png", alt="imagen ilistrativa").img400.m-auto
      .col-lg-8
        SlyderF.custom.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjeta--slyder.p-4(style="border: 1px solid grey; height: 320px")
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tarjetas/placeholder5.svg", alt="imagen ilistrativa").img100.m-auto     
            p.text-center.mb-0 De forma vertical ascendente.

          .tarjeta.tarjeta--slyder.p-4(style="border: 1px solid grey; height: 320px")
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tarjetas/placeholder5.svg", alt="imagen ilistrativa").img100.m-auto  
            p.text-center.mb-0 De subordinado a superior o vertical ascendente.

          .tarjeta.tarjeta--slyder.p-4(style="border: 1px solid grey; height: 320px")
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tarjetas/placeholder5.svg", alt="imagen ilistrativa").img100.m-auto       
            p.text-center.mb-0 De superior a subordinado.

          .tarjeta.tarjeta--slyder.p-4(style="border: 1px solid grey; height: 320px")
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tarjetas/placeholder5.svg", alt="imagen ilistrativa").img100.m-auto     
            p.text-center.mb-0 De forma horizontal entre personas de un mismo nivel jerárquico, que tienen responsabilidades compartidas.

    .row.justify-content-center.mb-5
      .col-md-7      
        p.mb-4 En esta etapa, también existen flujos externos de información con actores del entorno de la organización que deben ser identificados y saber si son necesarios para el proyecto. Todos estos flujos tienen que analizarse para identificar en ellos la información requerida para el proceso de ciencia de datos que se ejecutará y, por consiguiente, definirán cuál es la fuente de datos más pertinente y adecuada. En esta etapa también se analiza el tipo de información que se está generando, quién la usa, cómo y para qué, y quiénes no deben tener acceso a esa información y por qué, con el fin de evitar compartir información delicada o confidencial con actores que no están autorizados.

        p.mb-0 Para modelar el flujo de la información a través de la organización, se utilizan los diagramas de flujo, los cuales permiten representar el proceso y el orden en que se ejecutan las tareas. El organigrama, los manuales de procedimiento y las entrevistas a actores claves serán un insumo fundamental para la elaboración de estos modelos.
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img9.png', alt='imagen relacionada')        

    .row.justify-content-center.mb-5
      .col-md-7
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2
          p #[i Diagrama de flujo]
        figure
          img(data-aos="flip-left" src='@/assets/curso/temas/texto_destacado/img10.svg', alt='diagrama').mb-3
        figcaption(style='background-color: #E4F8FB') 
          p.p-2 #[b Nota.] tomado y adaptado de https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/activity-diagram-for-login-UML/activity-diagram-for-login-UML-650x797.png


    .row.justify-content-center.mb-4
      .col-md-10.mb-4
        .cajon.color-acento-botones.color-fondo-secundario.p-4
          p.mb-0 Para hacer el análisis de necesidades de información se emplean dos enfoques, uno directo y otro indirecto. En el directo, se utilizan técnicas para obtener de primera mano información del usuario. Algunas de estas técnicas son: entrevistas, cuestionarios, observación de hábitos de búsqueda y uso de información, técnica de incidente crítico y métodos de consenso (algunos de estos métodos utilizados son la técnica “Delphi” y los #[i focus groups] o grupos orientados). Por su parte, el enfoque indirecto consiste en el análisis de documentos, referencias y solicitudes de documentos, además de la observación y el registro de los hechos.

    p.mb-4 La siguiente infografía presenta algunas de las técnicas utilizadas en el proceso de análisis de necesidades de información:

    
    .mx-auto.col-md-10.mb-4
      .tarjeta
        .imgCont.m-auto
          .row.justify-content-center.mb-4
            ImagenInfografica.color-secundario.mb-5
              template(v-slot:imagen)
                figure
                  img(data-aos="fade-left" src='@/assets/curso/temas/texto_destacado/img11.svg', alt='diagrama')

              .tarjeta.color-puntoC.p-4(x="9%" y="75%" numero="+" style='border-radius: 10px')
                h5 Análisis de referencias
                p Permite conocer los hábitos de información que utilizan los usuarios en sus labores diarias y en sus procesos de investigación. Este análisis permite identificar las necesidades de información del usuario, tipología de documentos, fuentes de información y vigencias.

              .tarjeta.color-puntoC.p-4(x="26%" y="75%" numero="+" style='border-radius: 10px;')
                h5 Análisis de documentos
                p Se realiza a partir de los documentos que se producen o publican en la organización. Este análisis se realiza sin consultar a los usuarios, permitiendo conocer sus hábitos, necesidades y uso de la información.

              .tarjeta.color-puntoC.p-4(x="41%" y="75%" numero="+" style='border-radius: 10px')
                h5 Consenso
                p Busca conseguir acuerdos entre un grupo de personas acerca de aspectos controvertidos. Entre estos se encuentran la técnica "Delphi" que buscar obtener la opinión de expertos de forma sistemática, individual, organizada y anónima.
                  
              .tarjeta.color-puntoC.p-4(x="57%" y="75%" numero="+" style='border-radius: 10px')
                h5 Incidente crítico
                p La técnica consiste en: 
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta
                      span 1
                    | Recoger y clasificar información sobre los incidentes. 
                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    | Realizar inferencias basadas en la información obtenida. (Un incidente es cualquier actividad observable lo suficientemente compleja como para realizar inferencias acerca de quien la realiza).
              
              .tarjeta.color-puntoC.p-4(x="75%" y="75%" numero="+" style='border-radius: 10px')
                h5 Observación
                p Esta técnica consiste en observar a la persona dentro del contexto en el que normalmente realiza sus actividades para entender los aspectos más significativos y para recopilar de esta los datos que se consideren pertinentes.
                  
              .tarjeta.color-puntoC.p-4(x="90%" y="75%" numero="+" style='border-radius: 10px')
                h5 Cuestionarios
                p Conjunto de preguntas preparadas sobre aspectos de interés para el proyecto de ciencia de datos a realizar. Esta puede estar dirigida a toda la organización o a una muestra de esta.

    separador  
    h3 Técnicas de extracción de datos


    .row.justify-content-center.mb-5
      .col-md-7      
        p.mb-4 El proceso de extracción de datos se basa en acceder a fuentes de distintos orígenes para luego normalizar los datos adquiridos y almacenarlos para su uso, por otras herramientas. Dependiendo de los formatos y de las diferentes fuentes, se pueden usar herramientas que facilitan y automatizan la consolidación de la información. Así que es importante tener en cuenta que dichas fuentes suelen estar mal organizadas y, en muchos casos, desestructuradas.

        p.mb-0 La extracción de datos se puede realizar de las siguientes formas: #[b manual], en la cual se requiere todo el tiempo de la intervención humana, #[b automatizada] y, por último, #[i human in the loop], que es una combinación de las dos primeras. En la actualidad, y aprovechando los procesos de inteligencia artificial y las herramientas que se están diseñando, se busca que la extracción de datos sea automatizada, debido a algunas ventajas como mejora de la precisión, reducción de costos, ahorro de tiempo y mejores tiempos de respuesta.
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img12.png', alt='imagen relacionada') 

    p.mb-4 Uno de los procesos de extracción de datos es el que se hace a través de documentos físicos. Este se puede realizar siguiendo los pasos descritos a continuación:

    .tarjeta.tarjeta--secundario.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-7.mb-4.mb-md-0
            h5 Cargar el documento
            p.mb-4 El documento físico (en papel) debe ser transformado en un documento digital mediante herramientas como escáner o teléfono inteligente. Este documento digital, por lo general, se almacena en formatos como JPG, PDF o PNG, y se recomienda que su calidad sea óptima para facilitar los procesos de reconocimiento y análisis posteriores (imágenes de baja calidad pueden dificultar el proceso de reconocimiento y generar resultados erróneos).

          .col-md-5
            figure
              img(src='@/assets/curso/temas/tarjetas/placeholder6.svg', alt='imagen ilustrativa').p-1
        
        .row.justify-content-center.align-items-center.my-lg-4            
          .col-md-7.mb-4.mb-md-0
            h5 Convertir documento a texto
            p Las tecnologías de OCR (reconocimiento óptico de caracteres u <i>optical character recognition</i>, en inglés) realizan la conversión electrónica o mecánica de imágenes de texto mecanografiado, manuscrito o impreso en texto codificado por la máquina, ya sea a partir de un documento escaneado, de una foto de un documento, de una foto de escena o de un texto de subtítulos superpuesto a una imagen. De esta forma, el texto o los datos incluidos en el documento físico podrán ser usados por aplicaciones para su gestión y almacenamiento.

          .col-md-5
            figure
              img(src='@/assets/curso/temas/tarjetas/placeholder7.svg', alt='imagen ilustrativa')
        
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-7.mb-4.mb-md-0
            h5 Análisis de sintaxis
            p Las herramientas de análisis de sintaxis permiten convertir el documento digital (ahora en texto) identificando las secciones que lo componen y pasándolo a un formato estructurado (JSON, XML, CSV).

          .col-md-5
            figure
              img(src='@/assets/curso/temas/tarjetas/placeholder8.svg', alt='imagen ilustrativa').p-1
        
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-7.mb-4.mb-md-0
            h5 Verificación de datos
            p Se recomienda realizar una verificación de los datos extraídos para validar su calidad. Según la cantidad de información, este proceso se puede hacer a todos los documentos convertidos o por medio de una muestra significativa.

          .col-md-5
            figure
              img(src='@/assets/curso/temas/tarjetas/placeholder9.svg', alt='imagen ilustrativa')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-7.mb-4.mb-md-0
            h5 #[i Scraping] o web #[i scraping]
            p También llamada extracción de datos de la web, consiste en desarrollar algoritmos o usar herramientas para recuperar documentos e información de una página web. El #[i scraping] hace uso del lenguaje de marcado (etiquetas HTML), con el cual están construidos los sitios web y expresiones regulares, para extraer de estos sitios solo la información requerida. Algunas de estas herramientas son: Octoparse, Cyotek WebCopy y Scraper (esta última funciona como una extensión del navegador Google Chrome).

          .col-md-5
            figure
              img(src='@/assets/curso/temas/tarjetas/placeholder10.svg', alt='imagen ilustrativa')

    .row.justify-content-center.mb-5
      .col-md-2
        figure(style="margin-top: 15%")
          img(src='@/assets/curso/temas/texto_destacado/img13.png', alt='imagen relacionada')
      .col-md-8      
        p.mb-4 En el sitio web <strong style="color: blue ">https://tools.digitalmethods.net/</strong>el aprendiz encontrará varias herramientas de <i>scraping</i>, análisis y recolección de datos, que podrá usar para recopilar información de diferentes fuentes digitales en Internet, como buscadores, redes sociales y repositorios. Por ejemplo, la herramienta <i>YouTube Data Tools</i> sirve para extraer información desde YouTube, usando la API de la plataforma. Entre los datos que se pueden tomar, se encuentra la información de un canal de videos específico o los comentarios de los videos de este canal. Este tipo de información puede ser muy útil al momento de realizar un estudio del grado de aceptación de una marca o empresa.
        a.anexo.mb-4.mb-lg-0(href="https://tools.digitalmethods.net/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p Enlace web. https://tools.digitalmethods.net/ 

    p.mb-4 La consulta de ejemplo que se presenta en la siguiente imagen arroja como resultados archivos CSV con la información básica del video consultado, los comentarios, los autores y la red de comentarios.
    .row.justify-content-center.mb-5
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 3
          p #[i Interfaz herramienta YouTube Data Tools]
        
        figure
          img(data-aos="flip-left" src='@/assets/curso/temas/texto_destacado/img14.svg', alt='diagrama') 


    separador
    h3 Minería de datos: conceptos y herramientas
    
    .row.justify-content-center.mb-5
      .col-md-7      
        p.mb-4 La minería de datos es el proceso de búsqueda y análisis de información valiosa, que se utiliza en la toma de decisiones. Esta forma de obtener información se realiza en enormes cantidades de fuentes que manejan las organizaciones. La analogía con el concepto de minería se emplea por su similitud en la búsqueda de riquezas y materiales valiosos.
        .cajon.color-acento-botones.color-fondo-secundario.p-4
          p.mb-0 Sumado a lo anterior, la minería de datos es un proceso que utiliza técnicas matemáticas, estadísticas y de aprendizaje de máquina, para identificar y extraer información útil de enormes cantidades de datos que existen, para luego convertirla en conocimiento en forma de patrones (Rebollo, 2017). Por ejemplo, se puede utilizar para procesar grandes cantidades de información de clientes e identificar sus hábitos de compra y, de esta manera, poder definir nuevos productos y características o hacer mejoras en los productos que ya se encuentran en circulación.

      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img15.png', alt='imagen relacionada') 
    


    .row.justify-content-center.mb-5
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img16.png', alt='imagen relacionada') 
      .col-md-7      
        p.mb-4 Este proceso se enfoca en realizar dos operaciones:
        p #[i.fas.fa-angle-right.txt--orange] Predecir tendencias y comportamientos.
        p.mb-4 #[i.fas.fa-angle-right.txt--orange] Identificar patrones previamente desconocidos.
        p.mb-0 Un ejemplo de la aplicación de la minería de datos para la identificación de patrones, es la detección de transacciones fraudulentas con tarjetas de crédito. Conforme se utiliza una tarjeta de crédito de manera normal y periódica, se identifican, en estos usos, patrones de hábitos de compra, lugares de uso y cantidades de dinero retiradas o gastadas en compras. Cuando esta tarjeta es robada o se pierde y se emplea de forma fraudulenta, su nuevo uso tendrá un patrón diferente al acostumbrado, lo cual generará alertas al cliente o bloqueos por seguridad.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/texto_destacado/img17.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            h5 Herramientas para la minería de datos
            br
            br   
            p Existen diversas metodologías y marcos de trabajo para los proyectos de minería de datos. Uno de los modelos más utilizados y aceptados por investigadores, científicos de datos, desarrolladores y usuarios es CRISP-DM (Cross Industry Standard Process for Data Mining), que fue propuesto en los años noventa por un consorcio europeo de empresas. Esta metodología plantea un ciclo de vida compuesto por seis etapas secuenciales (se ejecuta una después de la otra), donde es común la retroalimentación y el retorno a fases previas según se avanza en el proceso.

    p.mb-4 Como ya se mencionó, existen seis etapas secuenciales en el ciclo de vida del modelo CRISP-DM. Estas se ilustran a continuación, de la siguiente manera:

    .row.justify-content-center.mb-5
      .col-md-9
        figure
          img(data-aos="flip-left" src='@/assets/curso/temas/texto_destacado/img18.svg', alt='diagrama')  

    .row.justify-content-center.mb-5
      .col-md-2
        figure(style="margin-top: 75%")
          img(src='@/assets/curso/temas/texto_destacado/img19.png', alt='imagen relacionada')
      .col-md-10
        p.mb-4 Si desea conocer más herramientas tanto de <i>software</i> propietario (pagas) como de código abierto, que se pueden emplear para los procesos de minería de datos, visite los siguientes enlaces:
        .row
          .col-md-6     
            h5 SPSS: 
            a.anexo.mb-4.mb-lg-0(href="https://www.ibm.com/products/spss-statistics" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Enlace web.<br> https://www.ibm.com/products/spss-statistics 
            
            h5 <i>Microsoft SQL Data Mining:  </i>
            a.anexo.mb-4.mb-lg-0(href="https://www.microsoft.com/es-mx/evalcenter/evaluate-sql-server-2019 " target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Enlace web.<br>https://www.microsoft.com/es-mx/evalcenter/evaluate-sql-server-2019 
            
            h5 KNIME: 
            a.anexo.mb-4.mb-lg-0(href="https://www.knime.com/ " target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Enlace web.<br>https://www.knime.com/   
          .col-md-6
            h5 SAS
            a.anexo.mb-4.mb-lg-0(href="https://www.sas.com/en_us/home.html" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Enlace web. https://www.sas.com/en_us/home.html 
            
            h5 R: 
            a.anexo.mb-4.mb-lg-0(href="https://www.r-project.org/" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Enlace web. https://www.r-project.org/    


</template>

<script>
export default {
  name: 'Tema2',
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
