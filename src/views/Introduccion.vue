<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row
      .col-lg-6
        p.mb-3  El desarrollo del transporte está formado por diferentes componentes técnicos y legales que permiten el traslado de personas y/o productos de un lugar a otro. Entre dichos componentes hace parte importante e imprescindible la documentación requerida que permita el movimiento vehicular, de la mercancía, de las personas e incluso que formalice la relación contractual entre los actores de la cadena del transporte.
        p.mb-3  En el presente componente formativo se busca desarrollar conocimientos en el aprendiz que faciliten el transporte mediante la interacción con los documentos técnicos y legales, utilizados en el desarrollo de las operaciones de transporte, para lo cual, se realizará una distinción necesaria por modo y medio, tanto a nivel nacional como internacional. 
        p.mb-3  Al contar con los conocimientos correspondientes a la documentación de transporte, el aprendiz estará en la capacidad de planear las operaciones, gracias a la fundamentación en los procesos que debe gestionar y entregar, tanto a la compañía, al cliente y a los conductores de los vehículos asignados, y así lograr realizar diagnósticos para la toma de decisiones ante novedades documentales que se presenten durante las operaciones de transporte. Todo lo anterior, realizando siempre un seguimiento y trazabilidad a los recursos documentales requeridos durante la operación, al lugar y tiempo de trámite de las mismas, a las personas encargadas de su expedición y a los costos asociados, entre otros aspectos.
        p.mb-3  El conocimiento de la documentación también permitirá al aprendiz tener claridad respecto a los requerimientos normativos, evitando así novedades que generen daños, perjuicios, retrasos, multas, accidentes u otro tipo de inconvenientes durante la operación de transporte.
      .col-lg-6
        figure
          img(src='@/assets/curso/t0-i1.jpg', alt='Medios de transporte como avion, tren, barco y un camión')
  

    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
