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

    .row.justify-content-center.mb-4
      .col-lg-3
        .card-flip.cf1
          .text-xxl IN
      .col-lg-3
        .card-flip.cf2
          .text-xxl CO
      .col-lg-3
        .card-flip.cf3
          .text-xxl TERMS
    .row.justify-content-center.mb-5
      .col-lg-5
        p.text-center Es decir, <b>INternational COmmercial TERMS</b> o en español, <b>“Términos para el comercio Internacional”.</b>       


      .tarjeta--container.row.mb-5.justify-content-center
        .col-lg-6.tarjeta.c1.p-5.r-0
          p  Los Incoterms son un conjunto de reglas creadas por la Cámara de Comercio Internacional (CCI) en busca de facilitar la venta de productos a través de un lenguaje común con términos de negociación internacional y mediante los cuales se establecen las obligaciones en una compraventa internacional tanto al comprador como al vendedor en aspectos relacionados con: suministro de la mercancía, documentos de exportación e importación, formalidades que se deben cumplir en una compraventa internacional, responsabilidad en las operaciones aduaneras, contratación de seguros, contratación de transporte, suministro de documentos para la reclamación de las mercancías, comprobaciones, embalajes y marcado, entre otros aspectos. 
        .col-lg-4.tarjeta.c3.p-5.r-0
          figure.align-items-center
            img.h180(src='@/assets/curso/t4-ix1.svg', alt='representacion grafica de INCOTERMS')

    h3.titulo-tercero ¿Cuáles son los Incoterms?
    .row.justify-content-center.mb-5
      .col-lg-10
        figure.align-items-center
          img.shadow-box(src='@/assets/curso/t4-i1.jpg', alt='Ejemplo de INCOTERMS')

    h3.titulo-tercero Novedades en el año 2020
    p.mb-5  Los Incoterms cambian cada 10 años, es por ello que a partir del 01 de enero del año 2020 se definieron 13 de ellos y empezaron a regir las modificaciones correspondientes, entre las cuales se tienen, principalmente:
    .row.justify-content-center.mb-5
      .col-lg-4
        figure.align-items-center
          img.shadow-box(src='@/assets/curso/t4-ix3.svg', alt='imagen decorativa')
      .col-lg-8  
        ul.lista-ul
          li 
            i.fas.fa-square 
            | Se sustituye el Incoterm <b>Dat</b> (Delivered at Terminal) por <b>DPU</b> (Delivered at Place Unloaded). El nuevo nombre permite pactar la entrega en cualquier lugar, no únicamente en terminal.
          li 
            i.fas.fa-square 
            | Se establecen nuevas condiciones en la contratación del seguro para los Incoterms <b>CIF y CIP.</b>
          li 
            i.fas.fa-square 
            | Para el transporte marítimo bajo el <b>Incoterm FCA,</b> el comprador podrá pedir a la naviera o a su agente que emita el Bill of Landing (BL) o guía de carga marítima con la anotación <b>“On Board”</b> para el vendedor.       
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4
          p Para la determinación del Incoterm adecuado, es necesario definir aspectos previos respecto al costo y la facilidad de acceder a los temas de seguros, transportistas, personal para cargue y descargue, etc. Luego de este análisis se puede evidenciar en la imagen anterior que el Ïncoterm más benéfico para el vendedor o exportador es el <b>Ex Works EXW</b>, mediante el cual esta persona solo debe tener correctamente embalada la mercancía para que el comprador la recoja en el almacén del vendedor y se encargue de la gestión correspondiente de traslado hasta el destino. Por otra parte, con el <b>Incoterm DDP</b> el vendedor o exportador correrá con los gastos, así como con los riesgos que tenga la mercancía desde el lugar de partida hasta su destino final en el sitio del comprador o importador.

    Separador
    br
    br

    #t_4_2.titulo-segundo
      h2 4.2  Contrato de transporte

    p.mb-5  De acuerdo con el Código de Comercio:

















    

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
