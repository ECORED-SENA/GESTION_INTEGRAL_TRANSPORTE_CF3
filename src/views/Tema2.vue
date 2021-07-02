<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span  2
      h1 Documentos de carga empleados en el recibo y entrega

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-a.color-secundario.mb-5.p-4.p-md-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              .wrap-ap
                figure
                  img(src='@/assets/curso/t2-i1.png', alt='Un pallet con cajas apiladas') 
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-3 La carga hace parte, desde tiempos antiguos, del intercambio comercial entre las personas y pueblos y para su movilización en diferentes medios, <b>se requiere de una documentación dependiendo del medio de transporte.</b>
    #t_1_1.titulo-segundo
      h2 1.1 Transporte aéreo
    p.mb-5  Para movilizar carga en el modo aéreo se utilizan los siguientes documentos:

    .row.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/t2-i2.png', alt='un avion recibiendo una carga')
      .col-lg-7
        TabsC.color-primario.mb-5
          .py-3.py-md-4(titulo="Guía de carga aérea ")
            .row.p-5
              .col-md-2.mb-5
                figure
                  img(src='@/assets/curso/t2-i3.svg', alt='icono decorativo')            
              .col-md-12
                h3 Air Will Bill – AWB – Guía de carga aérea 
                p.mb-3  Este documento corresponde al contrato de transporte entre la aerolínea y el propietario de la carga a transportar entre aeropuertos. Con este documento, la aerolínea confirma el recibo de la mercancía a transportar y sirve como recibo para quien remite. Al llegar al aeropuerto de destino funciona como constancia de haber completado el viaje. Entre los datos consignados allí se encuentran: exportador, destinatario, número de vuelo, aeropuertos origen y destino, detalles de la carga y condiciones del contrato, principalmente.
            


          .py-3.py-md-4(titulo="Factura comercial")
            .row.p-5
              .col-md-2.mb-5
                figure
                  img(src='@/assets/curso/t2-i4.svg', alt='icono decorativo')            
              .col-md-12
                h3 Factura comercial 
                p.mb-3  Es un documento legal emitido por quien vende (exportador) al comprador (importador) en una transacción internacional y sirve como prueba de venta.
                p.mb-3  Este documento describe las mercancías vendidas, junto con más datos adicionales relacionados con la transacción realizada entre las partes. Mediante este documento se pueden liquidar impuestos y aranceles.
            
          .py-3.py-md-4(titulo="Ficha técnica")
            .row.p-5
              .col-md-2.mb-5
                figure
                  img(src='@/assets/curso/t2-i5.svg', alt='icono decorativo')            
              .col-md-12
                h3 Ficha técnica 
                p.mb-3  En este documento se informan las características y el funcionamiento de cada producto a transportar.
    Separador
    br
    br
      





    

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

<style lang="sass" scoped></style>
