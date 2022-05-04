export default {
  global: {
    componenteFormativo: 'Documentación del transporte',
    descripcionCurso:
      'El Servicio Nacional de Aprendizaje SENA a través del componente de formación denominado Documentación del transporte, busca facilitar en el aprendiz el conocimiento de la información necesaria respecto a los requisitos y documentos que faciliten el traslado de personas y/o productos de un lugar a otro, bajo el cumplimiento de lineamientos técnicos y legales apropiados para cada sector del transporte.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        titulo:
          'Documentación necesaria para la operación del transporte de pasajeros',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Transporte aéreo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Transporte terrestre',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Transporte acuático',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Documentos de carga empleados en el recibo y entrega',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Transporte aéreo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Transporte terrestre',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Transporte férreo',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Transporte acuático',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Transporte multimodal',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Gestión de requerimientos y disponibilidad de la organización - Estudio de caso',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Términos de la negociación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Negociación internacional',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Contrato de transporte',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo:
              'Aplicaciones – Nuevas plataformas para transporte terrestre',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Pólizas de seguro',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Entidades que rigen el comercio internacional',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo:
          'Identificación de indicadores y factores de riesgos en la operación del servicio de transporte',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
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
  referencias: [
    {
      referencia:
        'Registraduría Nacional del Estado Civil. (2021). Cédula de ciudadanía. ',
      link: 'https://www.registraduria.gov.co/-Cedula-de-Ciudadania,3689-.html',
    },
    {
      referencia:
        'Ferrer, B. (2013). El contrato de transporte aéreo de pasajeros: sujetos, estatuto y responsabilidad. Editorial Dykinson.',
    },
    {
      referencia:
        'Guzmán, J. (2003). General Aspects of Contracts on International Carriage of Goods by Air. Revista e-mercatoria, 2.',
    },
    {
      referencia:
        'Ministerio de Transporte. (26 de mayo de 2015). Decreto 1079.',
    },
    {
      referencia:
        'Ministerio de Transporte. (06 de junio de 2014). Resolución 1565.',
    },
    {
      referencia:
        'Ministerio de Transporte. (23 de abril de 2015). Resolución 1069.',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1971). Decreto 410. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41102',
    },
  ],
  glosario: [
    {
      termino: 'Accidente de tránsito',
      significado:
        'evento generalmente involuntario, generado al menos por un vehículo en movimiento, que causa daños a personas y bienes involucrados en él, e igualmente afecta la normal circulación de los vehículos que se movilizan por la vía o vías comprendidas en el lugar o dentro de la zona de influencia del hecho (CNTT, 2002).',
    },
    {
      termino:
        'Categorías de licencia de conducción de vehículos automotores de servicio público',
      significado:
        'tendrán las siguientes categorías, dentro de una nomenclatura única: C1 Para la conducción de automóviles, camperos, camionetas y microbuses. C2 Para la conducción de camiones rígidos, busetas y buses. C3 Para la conducción de vehículos articulados.',
    },
    {
      termino: 'Comparendo',
      significado:
        'orden formal de notificación para que el presunto contraventor o implicado se presente ante la autoridad de tránsito por la comisión de una infracción.',
    },
    {
      termino: 'Conductor',
      significado:
        'persona habilitada y capacitada técnica y teóricamente para operar un vehículo (CNTT, 2002).',
    },
    {
      termino: 'Documento',
      significado:
        'escrito en que constan datos fidedignos o susceptibles de ser empleados como tales para probar algo.',
    },
    {
      termino: 'Plan Estratégico de Seguridad Vial (PESV)',
      significado:
        'instrumento de planificación que, consignado en un documento, contiene las acciones, mecanismos, estrategias y medidas que deberán adoptar las diferentes entidades, organizaciones o empresas del sector público y privado existentes en Colombia. Dichas acciones están encaminadas a alcanzar la seguridad vial como algo inherente al ser humano y así reducir la accidentalidad vial de los integrantes de las organizaciones mencionadas y de no ser posible evitar, o disminuir los efectos que puedan generar los accidentes de tránsito.',
    },
    {
      termino: 'Tráfico',
      significado:
        'volumen de vehículos, peatones o productos que pasan por un punto específico durante un periodo determinado.',
    },
    {
      termino: 'Tránsito',
      significado:
        'acción de desplazamiento de personas, vehículos y animales por las vías.',
    },
    {
      termino: 'Transporte',
      significado:
        'acarreo de personas, animales o cosas de un punto a otro a través de un medio físico.',
    },
  ],
  complementario: [
    {
      texto: '',
      tipo: '',
      link: '',
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
      {
        nombre: 'Edwin Humberto Jiménez Gómez',
        cargo: 'Experto temático',
        centro: 'Centro de Tecnologías del Transporte',
      },
      {
        nombre: 'Claudia Milena Hernández Naranjo',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología Regional - Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro de la Industria de la Comunicación Gráfica - Regional Distrito Capital',
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
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jorge Armando Villamizar Moreno',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Fabian Robles Méndez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Isabel Román Rueda',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
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
