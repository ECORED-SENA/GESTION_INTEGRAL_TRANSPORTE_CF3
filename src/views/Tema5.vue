<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span  5
      h1 Identificación de indicadores y factores de riesgos en la operación del servicio de transporte 
    figure.mb-5
      img(src='@/assets/curso/t5-i1.jpg', alt='composicion de procesos logisticos que incluye una tablet, un camión de carga  y las conexiones globales') 
    p.mb-5  Dentro de las operaciones de transporte existen etapas previas, durante y posteriores al viaje realizado, es por ello que al analizar las etapas previas hay documentación establecida con anterioridad que permite identificar los riesgos y realizar seguimiento a diferentes aspectos que facilitan el control del desempeño antes de realizar la actividad de transporte.
    .row.mb-5
      .col-lg-2
        figure
          img(src='@/assets/curso/t5-i2.svg', alt='imagen decorativa') 
      .col-lg-10
        p.mb-3  Para ello, las empresas cuentan en sus sistemas de gestión con documentos que contienen procedimientos e instructivos que indican paso a paso la manera de desarrollar las diferentes actividades en torno al transporte; desde <b>la gestión comercial pasando por talento humano, operaciones, atención de contingencias, monitoreo y seguridad.</b>
    .row.mb-3.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-5  A continuación, se presenta una figura de un ejemplo del sistema de gestión en una empresa de transporte de carga, donde se podrán visualizar los diferentes documentos como formatos y procedimientos, que intervienen para hacer posible su actividad. 
          .row.mb-4
            .col-lg-6
              figure
                img(src='@/assets/curso/t5-i2-1.jpg', alt='ejemplo de sistema de gestión')
            .col-lg-6
              figure
                img(src='@/assets/curso/t5-i2-2.jpg', alt='ejemplo de sistema de gestión')
          a.boton.color-acento-contenido.mb-5.indicador__container(@click="modal1 = true")
            span Abrir modal
            .indicador--click(v-if="mostrarIndicador")
      ModalA(:abrir-modal.sync="modal1")
        .row.align-items-center.justify-content-center
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/t5-ixxx2.jpg', alt='ejemplo de sistema de gestión')      



</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
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
