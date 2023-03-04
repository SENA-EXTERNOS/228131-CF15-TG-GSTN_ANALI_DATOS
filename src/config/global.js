export default {
  global: {
    componenteFormativo: 'Procesos ETL (extracción, transformación y carga)',
    descripcionCurso:
      'Los procesos de extracción, transformación y carga, se utilizan en los proyectos de ciencias de datos para extraer información de diversas fuentes, transformarla para adaptarla a los requerimientos del proyecto en desarrollo y cargarla en un espacio compartido, donde los <em>stakeholders</em> de la organización, puedan emplearla útilmente. Esto posibilita un mejor aprovechamiento de los datos disponibles.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '¿Qué es ETL?',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Extracción de datos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Transformación de datos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: ' Carga de datos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '¿Qué es ETL?',
      referencia:
        'Microsoft. (s.f.). <em>Extracción, transformación y carga de datos (ETL).</em>',
      tipo: 'Sitio web',
      link:
        'https://learn.microsoft.com/es-es/azure/architecture/data-guide/relational-data/etl',
    },
    {
      tema: 'Extracción de datos',
      referencia:
        'IBM. (2021). <em>Conceptos básicos de ayuda de CRISP-DM.</em>',
      tipo: 'Sitio web',
      link:
        'https://www.ibm.com/docs/es/spss-modeler/saas?topic=dm-crisp-help-overview',
    },
    {
      tema: 'Transformación de datos',
      referencia: 'Digital Methods Initiative. (2020). <em>DMI Tools.</em>',
      tipo: 'Sitio web',
      link: 'https://wiki.digitalmethods.net/Dmi/ToolDatabase',
    },
    {
      tema: 'Transformación de datos',
      referencia:
        'Martín, I. y Fernández, A. (2020). <em>Ciencia de datos para la ciberseguridad</em>. Edición Ra-Ma.',
      tipo: 'Libro digital',
      link: 'https://bit.ly/3U2jvqQ',
    },
    {
      tema: 'Carga de datos',
      referencia: 'Evaluando Software. (2022). <em>ABC del OLAP</em>.',
      tipo: 'Sitio web',
      link: 'https://www.evaluandosoftware.com/abc-del-olap/',
    },
  ],
  glosario: [
    {
      termino: 'CRISP-DM',
      significado:
        'la Cross Industry Standard Process for Data Mining es una metodología estandarizada para la implementación de proyectos de ciencias de datos y minería de datos.',
    },
    {
      termino: '<em>Data lake</em>',
      significado:
        '“es un repositorio centralizado que permite almacenar todos sus datos estructurados y no estructurados a cualquier escala. Puede almacenar sus datos sin modificarlos y sin tener que estructurarlos primero” (AWS, s.f., párr. 1).',
    },
    {
      termino: '<em>Data warehouse</em>',
      significado:
        'también conocido como depósito de datos, es un repositorio unificado para todos los datos que recogen los diversos sistemas de una organización.',
    },
    {
      termino: 'ETL',
      significado:
        '<em>extract, transform and load</em> (extraer, transformar y cargar).',
    },
    {
      termino: 'Inteligencia de negocios',
      significado:
        'la <em>business intelligence </em>(BI) “combina análisis de negocios, minería, visualización, herramientas e infraestructura de datos, además de prácticas recomendadas para ayudar a las empresas a tomar decisiones basadas en los datos” (Tableau, s. f., párr. 1).',
    },
    {
      termino: 'JSON',
      significado:
        '“es un formato de archivo estándar abierto y un formato de intercambio de datos que utiliza texto legible para almacenar y transmitir objetos de datos que constan de pares atributo-valor y tipos de datos de matriz” (Ministerio de Ambiente y Desarrollo Sostenible, s. f., definición).',
    },
    {
      termino: '<em>Metadata</em>',
      significado:
        'son los datos que proporcionan información sobre uno o más aspectos de los mismos. Se utilizan para resumir información básica de estos, que puede facilitar el seguimiento y el trabajo con datos específicos.',
    },
    {
      termino: 'OCR',
      significado:
        'en español, reconocimiento óptico de caracteres, es una tecnología que reconoce el texto dentro de una imagen digital. Se utiliza habitualmente para reconocer texto en documentos e imágenes escaneadas.',
    },
    {
      termino: 'OLAP',
      significado:
        'en español, procesamiento analítico en línea. Es una solución empleada en el campo de la inteligencia de negocios, cuyo objetivo es agilizar la consulta de grandes cantidades de datos (Muñoz, 2018).',
    },
    {
      termino: '<em>Scraping</em>',
      significado:
        'se refiere al proceso de extracción de contenidos y datos de sitios web mediante <em>software</em> o algoritmos.',
    },
  ],
  referencias: [
    {
      referencia: 'AWS. (s f.). <em>¿Qué es un lago de datos?</em>',
      link: 'https://go.aws/3AH2U4X',
    },
    {
      referencia:
        'DataScientest. (2022). <em>Data Warehouse: ¿qué es y cómo utilizarlo?. </em>',
      link: 'https://bit.ly/3XwFXLo ',
    },
    {
      referencia: 'Hitachi. (2016). <em>Pentaho Data Integration.</em>',
      link: 'https://htchivantara.is/3AGs8jX ',
    },
    {
      referencia:
        'Joyanes, L. (2019).<em> Inteligencia de negocios y analítica de datos. Una visión global de business intelligence & analytics</em>. Alfaomega.',
    },
    {
      referencia:
        'Microsoft. (2022). <em>SQL Server Integration Services.</em> ',
      link: 'https://bit.ly/3EWjD6K ',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (s.f.). <em>JavaScript Object Notation (JSON)</em>.',
      link: 'https://bit.ly/3EUhs2D',
    },
    {
      referencia:
        'Muñoz, A. (2018). <em> OLAP. Resumen final.</em> Centro de Producción de Contenidos Digitales.',
      link: 'https://repositorio.upct.es/handle/10317/7168 ',
    },
    {
      referencia:
        'Rebollo, M. (2017).<em> Minería de datos. Usando la tecnología a nuestro favor.</em> ',
      link:
        'https://www.gestiopolis.com/mineria-datos-usando-la-tecnologia-favor/ ',
    },
    {
      referencia:
        'Tableau. (s.f.). <em>¿Qué es la inteligencia de negocios? Guía sobre la inteligencia de negocios y por qué es importante.</em>',
      link:
        'https://www.tableau.com/es-es/learn/articles/business-intelligence',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
