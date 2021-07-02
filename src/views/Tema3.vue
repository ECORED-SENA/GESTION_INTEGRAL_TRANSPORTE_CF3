<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span  3
      h1 Gestión de requerimientos y disponibilidad de la organización - Estudio de caso    
    
    figure.mb-5
      img(src='@/assets/curso/t3-i1.jpg', alt='un camion y varios autos en un autopista')

    .row.mb-5
      .col-lg-2
        figure.mb-5
          img(src='@/assets/curso/t3-i2.svg', alt='imagen decorativa')
      .col-lg-10
        p.mb-3  Dentro del Plan Estratégico de Seguridad Vial con el cual deben contar todas las organizaciones que lleven a cabo actividades de transporte para el desarrollo de su objeto misional, se encuentran los pilares estratégicos que permiten abordar las áreas principales que conducen a la minimización de la accidentalidad vial. 
        p.mb-3  Uno de ellos es denominado la “Gestión institucional”, y así como para la seguridad vial son necesarios algunos lineamientos, igualmente al momento de hablar de documentación de transporte, se hace necesario el involucramiento de las organizaciones a través de la planificación y gestión bajo el empoderamiento de la dirección y las personas encargadas que faciliten mediante su gestión:
    .row.mb-5
      .col-lg-7
        figure
          //- aqui va animacion de los checks
          img(src='@/assets/curso/t3-i3.svg', alt='Lista de chequeo')
          
      .col-lg-5 
        .cajon.color-secundario.p-4
          p.mb-3  Hoy en día, las organizaciones se encuentran en la obligación de brindar los recursos económicos, humanos y tecnológicos que permitan la gestión documental del transporte al interior; igualmente, el flujo de la información es parte determinante dentro de la gestión documental del transporte ya que allí intervienen diferentes actores: clientes, conductores, personal interno, autoridades y organismos de control, principalmente, a quienes debe llegar la información con oportunidad y calidad.
    
    p.mb-5  A continuación, se presentará un estudio de caso, que permitirá mayor comprensión de la temática tratada:  
    .row
      .col-lg-4
        figure.mb-5
          img(src='@/assets/curso/t3-i4.png', alt='parte frontal de un vehículo transportador de carga')
      .col-lg-8
        .box-slider.t3-slider
          .tarjeta.color-primario.p-5.mb-5.r-0
            SlyderA
              .row.p-4
                .col-lg-7
                  h3  
                    span.lista-ol--cuadro__vineta.text-center.circle 1
                    | Estudio de caso
                  p.mb-3  El conductor del vehículo de la empresa ABC, que transporta maquinaria extradimensionada desde el municipio de Barrancabermeja hasta la ciudad de Bucaramanga, decide tomar ruta no autorizada y es detenido por las autoridades de tránsito siendo las 3:00 a. m., los cuales le solicitan la documentación pertinente. 
                  p.mb-3  Luego de revisada la documentación el vehículo es retenido y puesto en custodia por las autoridades de tránsito.

                .col-lg-5
                  figure
                    img.shadow-box(src='@/assets/curso/t3-i5.jpg', alt='un camion transportando crudo')
              .row.p-4
                .col-lg-7
                  h3  
                    span.lista-ol--cuadro__vineta.text-center.circle 2
                    | ¿Qué sucedió?
                  p.mb-3  El conductor transitaba en horario no permitido para la movilización de carga extradimensionada y no portaba documentación completa.

                .col-lg-5
                  figure
                    img(src='@/assets/curso/t3-i6.svg', alt='imagen decorativa')
              .row.p-4
                .col-lg-7
                  h3  
                    span.lista-ol--cuadro__vineta.text-center.circle 3
                    | ¿Qué documentos portaba?
                  p.mb-3  Cédula de ciudadanía del conductor, licencia de conducción del conductor, licencia de tránsito del vehículo, carta de propiedad del semirremolque, manifiesto de carga, revisión técnico mecánica, Seguro Obligatorio de Accidentes de Tránsito – SOAT.

                .col-lg-5
                  figure
                    img(src='@/assets/curso/t3-i7.svg', alt='imagen decorativa')
              .row.p-4
                .col-lg-7
                  h3  
                    span.lista-ol--cuadro__vineta.text-center.circle 4
                    | ¿Qué documentos no portaba?
                  p.mb-3  Permiso para el transporte de cargas indivisibles, extrapesadas, extradimensionadas, documento original que acredite el peso de la carga que transporta expedido por el generador de la carga.

                .col-lg-5
                  figure
                    img(src='@/assets/curso/t3-i8.svg', alt='imagen decorativa')
              
              .row.p-4
                .col-lg-7
                  h3  
                    span.lista-ol--cuadro__vineta.text-center.circle 5
                    | ¿Qué hizo la empresa al enterarse?
                  p.mb-3  El representante legal de la empresa fue notificado sobre las 6:00 a. m., a esa hora el vehículo junto con la carga transportada ya estaba retenido, por lo cual, sobre las 08:00 a. m. el encargado de las operaciones envió el permiso al conductor y procedió a solicitar el documento que acreditaba el peso de la carga al generador, documento que tardó 24 horas en llegar.

                .col-lg-5
                  figure
                    img(src='@/assets/curso/t3-i9.svg', alt='imagen decorativa')

              .row.p-4
                .col-lg-7
                  h3  
                    span.lista-ol--cuadro__vineta.text-center.circle 6
                    | ¿Cuáles fueron las consecuencias?
                  ul.lista-ul
                    li 
                      i.fas.fa-square 
                      | Revocatoria del permiso para el transporte de cargas indivisibles, extrapesadas, extradimensionadas.
                    li 
                      i.fas.fa-square 
                      | Imposición de sanción económica a la empresa por falta a los requerimientos legales para este tipo de transporte. 
                    li 
                      i.fas.fa-square 
                      | Despido del funcionario encargado. 
                    li 
                      i.fas.fa-square 
                      | 72 horas con vehículo detenido e improductivo.

                .col-lg-5
                  figure
                    img(src='@/assets/curso/t3-i10.svg', alt='imagen decorativa')
              
              .row.p-4
                .col-lg-12
                  h3  
                    span.lista-ol--cuadro__vineta.text-center 7
                    | ¿Qué falencias se identificaron en el proceso?
                  ul.lista-ul
                    li 
                      i.fas.fa-square 
                      | Falta de documentos necesarios para realizar el viaje.
                    li 
                      i.fas.fa-square 
                      | Fallas en la planeación del viaje tanto en rutas, documentos y horarios.
                    li 
                      i.fas.fa-square 
                      | Cambio de ruta sin autorización. 
                    li 
                      i.fas.fa-square 
                      | Falta de control en el seguimiento satelital.
                    li 
                      i.fas.fa-square 
                      | Fallas en la gestión documental para la consecución.  
                    li 
                      i.fas.fa-square 
                      | Fallas en la información para la entrega al conductor de los documentos necesarios.
                    li 
                      i.fas.fa-square 
                      | Fallas en la gestión de trámite post incidente para generar mejores tiempos en la solución, entre otros.    

              .row.p-4
                .col-lg-7
                  h3  
                    span.lista-ol--cuadro__vineta.circle.text-center 8
                    | Conclusión
                  p.mb-3  Podemos identificar dentro de las falencias cometidas: La falta de documentación (la más importante), lo anterior considerando para el caso mencionado, su inexistencia, y la no entrega al personal idóneo, los errores y demoras para la gestión documental, entre otros. 
                  p.mb-3  Todo lo anterior, generó pérdidas significativas para el personal, para el cliente y sobre todo para la compañía, generando afectación a la imagen corporativa y sanciones económicas, incumplimientos en procesos de calidad, despidos, entre otros.
                
                .col-lg-5
                  figure
                    img(src='@/assets/curso/t3-i11.svg', alt='imagen decorativa')


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

<style lang="sass" scoped></style>
