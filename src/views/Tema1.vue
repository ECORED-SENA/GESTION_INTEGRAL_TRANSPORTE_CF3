<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-md-5.p-4
    .main-wrap
      .titulo-principal
        .titulo-principal__numero
          span  1
        h1 Documentación necesaria para la operación del transporte de pasajeros
      .row.justify-content-center.mb-5
        .col-lg-10
          .bloque-texto-a.color-secundario.mb-5.p-4.p-md-5 
            .row.m-0.align-items-center.justify-content-between
              .col-lg-4.mb-4.mb-lg-0
                .wrap-ap
                  figure
                    img(src='@/assets/curso/t1-i1.png', alt='Un pasaporte abierto') 
              .col-lg-8
                .bloque-texto-a__texto.p-4
                  p.mb-3 En el presente capítulo se identifica la documentación utilizada en el transporte de pasajeros, la cual merece especial atención, ya que, al movilizar personas, las responsabilidades tienden a ser mayores <b>debido a la relevancia de transportar vidas humanas,</b> las cuales no tienen un valor económico fácilmente predeterminable que permita valorar los riesgos inherentes a este tipo de transporte.
                  p Los documentos necesarios para el transporte de pasajeros son:

      #t_1_1.titulo-segundo
        h2 Transporte aéreo
      p.mb-5  Aquí se describirá todo lo concerniente al transporte aéreo.

      h3.titulo-tercero Documentos de identificación
      p.mb-5  A continuación, se presentan los documentos de identificación utilizados en Colombia:
      TabsA.color-acento-botones.mb-5
        //- .tarjeta debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta.tarjeta--gris.p-4(titulo="Registro civil de nacimiento")
          .row
            .col-lg-6.mb-4
              figure
                img.shadow-box(src='@/assets/curso/t1-tab1.jpg', alt='')
            .col-lg-6
              h4 Registro civil de nacimiento (<7 años)
              p.mb-3  Es un registro permanente y oficial de la existencia de un niño, y ofrece el reconocimiento jurídico de su identidad. Para el caso colombiano, dicho registro se convierte en el instrumento tanto legal como administrativo por medio del cual el Estado reconoce los derechos y los deberes del recién nacido frente a la sociedad y la familia
              p.mb-3  Para el transporte aéreo, cuando un niño menor de siete años debe viajar, es este documento el que permite identificarlo claramente como pasajero. 
        .tarjeta.tarjeta--gris.p-4(titulo="Permiso de salida")
          .row
            .col-lg-6.mb-4
              figure
                img.shadow-box(src='@/assets/curso/t1-tap2.jpg', alt='')
            .col-lg-6
              h4 Permiso de salida
              p.mb-3  

        .tarjeta.tarjeta--gris.p-4(titulo="Tarjeta de identidad")
          h4 Tarjeta de identidad
          p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of 
            strong user style sheets
            |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

        .tarjeta.tarjeta--gris.p-4(titulo="Documento de identidad")
          h4 Documento de identidad
          p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of 
            strong user style sheets
            |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        
        .tarjeta.tarjeta--gris.p-4(titulo="Pasaporte")
          h4 Pasaporte
          p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of 
            strong user style sheets
            |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        
        .tarjeta.tarjeta--gris.p-4(titulo="Visa")
          h4 Visa
          p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of 
            strong user style sheets
            |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
















    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    Muestras
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
