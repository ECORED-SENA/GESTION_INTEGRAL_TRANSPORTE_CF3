<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span  4
      h1 Términos de la negociación    
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-a.color-secundario.mb-5.p-4.p-md-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              .wrap-ap
                figure
                  img(src='@/assets/curso/t4-i1.svg', alt='imagen decorativa') 
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-3 Se refiere a las condiciones establecidas para realizar una transacción considerando las responsabilidades de las partes en diferentes aspectos <b>comerciales, de transporte, de manipulación de carga, de aseguramiento, entre otros.</b>
    #t_4_1.titulo-segundo
      h2 4.1  Negociación internacional
    p.mb-3  Para facilitar el comercio internacional, fueron establecidos diferentes lineamientos que en la actualidad rigen el intercambio entre vendedor y comprador, estos consideran las responsabilidades de cada uno de ellos en temas como el transporte, el aseguramiento del riesgo, las operaciones de cargue y descargue, etc., los cuales fueron planteados en los Incoterms que se mencionan a continuación.
    p.mb-5  Esta sigla corresponde a la denominación inglesa de:










</template>

<script>
export default {
  name: 'Tema4',
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
