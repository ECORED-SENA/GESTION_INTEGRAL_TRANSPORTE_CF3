<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .slider-wrapper.mb-5
      p.item-1
        | Bienvenidos al componente formativo documentación del transporte
      p.item-2
        | Este componente facilitará al aprendiz el conocimiento de la información necesaria respecto a los requisitos y documentos que facilitan el traslado de personas y/o productos de un lugar a otro.
      p.item-3
        | Con el cumplimiento de lineamientos técnicos y legales apropiados para cada sector del transporte.   

    p.mb-3  <b>El desarrollo del transporte está formado por diferentes componentes técnicos y legales</b> que permiten el traslado de personas y/o productos de un lugar a otro. Entre dichos componentes hace parte importante e imprescindible la documentación requerida que permita el movimiento vehicular, de la mercancía, de las personas e incluso que formalice la relación contractual entre los actores de la cadena del transporte.
    p.mb-3  En el presente componente formativo se busca desarrollar conocimientos en el aprendiz que faciliten el transporte mediante la interacción con los documentos técnicos y legales, utilizados en el desarrollo de las operaciones de transporte, para lo cual, se realizará una distinción necesaria por modo y medio, tanto a nivel nacional como internacional.   
    .row.justify-content-center.mb-5
      .col-lg-12
        .bloque-texto-a.color-secundario.mb-5.p-4.p-md-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              .wrap-ap
                figure
                  img(src='@/assets/curso/t0-i4.svg', alt='Un pasaporte abierto') 
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-3 Al contar con los conocimientos correspondientes a la documentación de transporte, el aprendiz estará en la capacidad de planear las operaciones, gracias a la fundamentación en los procesos que debe gestionar y entregar, tanto a la compañía, al cliente y a los conductores de los vehículos asignados, y así lograr realizar diagnósticos para la toma de decisiones ante novedades documentales que se presenten durante las operaciones de transporte. Todo lo anterior, realizando siempre un seguimiento y trazabilidad a los recursos documentales requeridos durante la operación, al lugar y tiempo de trámite de las mismas, a las personas encargadas de su expedición y a los costos asociados, entre otros aspectos.


    .row.justify-content-center.pmb-5
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-3  <b>El conocimiento de la documentación</b> también permitirá al aprendiz tener claridad respecto a los requerimientos normativos, evitando así novedades que generen <b>daños, perjuicios, retrasos, multas, accidentes u otro tipo de inconvenientes</b> durante la operación de transporte.  

  

    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    datosSlyder: [
      {
        titulo:
          'Bienvenidos al componente formativo documentación del transporte',
        texto: '',
        imagen: require('@/assets/curso/t0-i1.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Este componente facilitará al aprendiz el conocimiento de la información necesaria respecto a los requisitos y documentos que facilitan el traslado de personas y/o productos de un lugar a otro.',
        texto: '',
        imagen: require('@/assets/curso/t0-i1.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Con el cumplimiento de lineamientos técnicos y legales apropiados para cada sector del transporte.',
        texto: '',
        imagen: require('@/assets/curso/t0-i1.svg'),
      },
    ],
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
