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
        .bloque-texto-a.color-secundario.mb-5.p-4
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              .wrap-ap
                figure
                  img(src='@/assets/curso/t2-i1.png', alt='Un pallet con cajas apiladas') 
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-3 La carga hace parte, desde tiempos antiguos, del intercambio comercial entre las personas y pueblos y para su movilización en diferentes medios, <b>se requiere de una documentación dependiendo del medio de transporte.</b>
    #t_2_1.titulo-segundo
      h2 1.1 Transporte aéreo
    p.mb-5  Para movilizar carga en el modo aéreo se utilizan los siguientes documentos:

    .row.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/t2-i2.png', alt='un avion recibiendo una carga')
      .col-lg-7
        TabsC.color-acento-contenido.mb-5
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

    #t_2_2.titulo-segundo
      h2 2.2  Transporte terrestre
    .row.mb-5
      .col-lg-2
        figure
          img(src='@/assets/curso/t2-i6.svg', alt='icono decorativo')  
      .col-lg-10
        p.mb-3  Para el desarrollo del transporte de carga en la modalidad terrestre, se debe considerar que se manejan diferentes documentos que permiten determinar un valor previo a la realización del contrato de transporte y con él se busca el aseguramiento del producto y la responsabilidad en caso de pérdida, daño, deterioro o hurto.
        p.mb-3  Los documentos para transporte de carga por terrestres, son:
    .box-slider.neg-margin-x
      .tarjeta.color-primario.p-5.mb-5.r-0
        SlyderA
          .row.p-4
            .col-md-7
              h3 Guía única para transporte de crudo
              p.mb-3  Este documento es utilizado para el transporte de petróleo crudo con el objetivo de identificar claramente las características del producto transportado. Allí se consignan datos correspondientes a: ubicación pozo/campos productores , gravedad API, lugar de entrega, vehículo, conductor, vigencia de tiempo para realizar el transporte y volumen transportado, entre otros.
              p.mb-3  Las guías sin diligenciar son entregadas por la Dirección de Hidrocarburos del Ministerio de Minas y Energía al operador del campo o productor, para que este a su vez las diligencie y entregue al transportador.

            .col-md-5.mb-4.mb-md-0
              figure
                img.shadow-box(src='@/assets/curso/t2-sl1.jpg', alt='un camion transportando crudo')
          
          .row.p-4
            .col-md-7
              h3 Guía única para transporte de Gas Licuado de Petróleo – GLP
              p.mb-3  Este documento surge ante la necesidad de combatir la ilegalidad presentada con este tipo de combustible y según la Ley 1753 de 2015 dicta la obligatoriedad de emisión y porte de este documento para cualquiera de los medios de transporte por el cual se realice.

            .col-md-5.mb-4.mb-md-0
              figure
                img.shadow-box(src='@/assets/curso/t2-sl2.jpg', alt='un camion transportando gas licuado')            
          
          .row.p-4
            .col-md-7
              h3 Planilla de despacho
              p.mb-3  Es un documento de control interno de las empresas que facilita el control de rutas y horarios. Aunque existe normatividad legal respecto a su expedición y porte, la Sentencia de la Sala de lo Contencioso Administrativo Sección Primera del 24 de septiembre de 2009, decidió que <b>“… no es un documento requisito de viaje”,</b> mas sí puede hacer parte de los requisitos contractuales o los lineamientos de control de algunas entidades gubernamentales.

            .col-md-5.mb-4.mb-md-0
              figure
                img.shadow-box(src='@/assets/curso/t2-sl3.jpg', alt='un operario firmando una planilla')            

          .row.p-4
            .col-md-7
              h3 Orden de cargue y descargue
              p.mb-3  Las empresas de transporte de carga, generalmente, utilizan este documento con el fin de dar claridad respecto a los productos a transportar, informando con él al despachador de la mercancía y al transportador. Entre otros datos, la orden de cargue relaciona: datos del cliente, de la mercancía, del conductor asignado para retirar y entregar la carga, del vehículo y en caso de vehículos articulados relaciona los datos del semirremolque.

            .col-md-5.mb-4.mb-md-0
              figure
                img.shadow-box(src='@/assets/curso/t2-sl4.jpg', alt='un operario transportando empaques')            

          .row.p-4
            .col-md-7
              h3 Manifiesto de carga 
              p.mb-3  Es el documento que ampara el transporte de mercancías ante las distintas autoridades, cuando estas se movilizan en vehículos de servicio público para transporte de carga. Este documento debe ser portado por el conductor <b>(recientemente fue posible portarlo por medios digitales)</b> durante todo el recorrido, es decir, desde la finalización del cargue hasta la entrega de la mercancía en destino. 
              p.mb-3  En él debe registrarse información de la transportadora, propietario, remitente y destinatario de la mercancía, vehículo, conductor, descripción de la mercancía, origen, destino, valor del flete, seguros, principalmente.
              p.mb-3  En Colombia, <b>el Decreto 173 de 2001,</b> exige lo correspondiente a este documento y la remesa de carga.

            .col-md-5.mb-4.mb-md-0
              figure
                img.shadow-box(src='@/assets/curso/t2-sl5.jpg', alt='un operario transportando empaques')            
          .row.p-4
            .col-md-7
              h3 Remesa de carga 
              p.mb-3  Corresponde al documento en el cual el comprador o destinatario del producto deja constancia del recibido de la mercancía y del estado en el cual la recibió (daños o faltantes). Este documento debe ir acompañado por el manifiesto de carga.

            .col-md-5.mb-4.mb-md-0
              figure
                img.shadow-box(src='@/assets/curso/t2-sl6.jpg', alt='un operario inspeccionando lista de chequeo')            

          .row.p-4
            .col-md-7
              h3 Otras certificaciones  
              p.mb-3  En los diferentes tipos de transporte terrestre se encuentran diversos requerimientos documentales adicionales como pueden ser las certificaciones de manejo preventivo, transporte de mercancías peligrosas, primeros auxilios, control de incendios, salud, origen, inspección, etc.

            .col-md-5.mb-4.mb-md-0
              figure
                img.shadow-box(src='@/assets/curso/t2-sl7.jpg', alt='un camion transportando maquinaria pesada')            
    Separador
    br
    br
    #t_2_3.titulo-segundo
      h2 2.3  Transporte férreo
    p.mb-5  A continuación, se presentan los documentos más utilizados:
    .row
      .col-lg-5
        figure
          img(src='@/assets/curso/t2-i7.png', alt='Vagones de un tren')  
      .col-lg-7
        TabsC.color-acento-contenido.mb-5
          .py-3.py-md-4(titulo="Carta de Porte Ferroviario (CIM)")
            .row.p-5
              .col-md-2.mb-5
                figure
                  img(src='@/assets/curso/t2-tab1.svg', alt='icono decorativo')            
              .col-md-12
                h3 Carta de Porte Ferroviario (CIM) 
                p.mb-3  Corresponde al documento emitido por la ferroviaria, da constancia del contrato de transporte por tren realizado y sirve como constancia de propiedad de la mercancía. En el documento se detalla información relativa a las partes contractuales, fletes, descripción de la mercancía a transportar, etc.
            


          .py-3.py-md-4(titulo="Declaración TIF")
            .row.p-5
              .col-md-2.mb-5
                figure
                  img(src='@/assets/curso/t2-tab2.svg', alt='icono decorativo')            
              .col-md-12
                h3 Declaración TIF
                p.mb-3  Transporte Internacional Ferroviario TIF y es un convenio aduanero entre países que relaciona las mercancías precintadas con el fin de evitar los controles aduaneros y permite que sea la compañía ferroviaria la que se comprometa con la garantía de dichas mercancías.

    Separador
    br
    br
    #t_2_4.titulo-segundo
      h2 2.4  Transporte acuático
    p.mb-5  En este modo de transporte hay:
    .row.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/t2-i8.png', alt='un barco con cargamento')       
      .col-lg-7
        .tarjeta.tarjeta--gris.p-4.mb-5
          LineaTiempoC.color-acento-contenido
            .row(titulo="Paso 1")
              .col-md-10
                .h3 Bill of Landing (BL) – Carta de porte - Guía de carga marítima
                p.mb-3  Este documento corresponde al contrato de transporte entre la naviera y el propietario de la carga a transportar, mediante el cual la naviera confirma el recibo a bordo del barco de la mercancía a movilizar antes de partir y al llegar al destino funciona como constancia de entrega. 
                p.mb-3  En este documento se da a conocer la información del importador y el exportador y el Incoterm bajo el cual se ha cerrado la transacción internacional. 

            .row(titulo="Paso 2")
              .col-md-10
                .h3 Sea Way Bill (SWB) – Conocimiento de embarque marítimo
                p.mb-3  Este documento se diferencia del anteriormente mencionado, en que no transmite la propiedad de la mercancía y solo deja constancia de que se ha realizado una operación de transporte por barco.
            .row(titulo="Paso 3")
              .col-md-10
                .h3 Packing List
                p.mb-3  En este documento se relacionan en detalle las mercancías remitidas y permite a las autoridades de control verificar los productos remitidos sin necesidad de realizar inspección física de la carga, más si las entidades aduaneras deciden realizar inspección, este permitirá identificar de mejor forma los productos a revisar.
            .row(titulo="Paso 4")
              .col-md-10
                .h3 Factura comercial
                p.mb-3  Cualquier transacción internacional que implique la importación o exportación de bienes debe estar acompañada del documento que prueba la venta y ese documento al igual que para el transporte aéreo es la factura comercial.
                p.mb-3  En gran parte, es similar a una factura estándar pero, a diferencia de las facturas comunes, incluye detalles sobre el envío de la carga para el despacho de aduanas.

            .row(titulo="Paso 5")
              .col-md-10
                .h3 Certificado de origen
                p.mb-3  Es el documento que legitima que las mercancías de un envío de exportación en particular han sido obtenidas, producidas, manufacturadas o procesadas en un determinado país. También sirve como una declaración del exportador.
                p.mb-3  El exportador debe facilitar al importador un certificado de origen por cada producto exportado, avalado por el ente autorizado gubernamental; ya que es requisito para el paso aduanero y determina impuestos y aranceles que el importador debe pagar.
            
            .row(titulo="Paso 6")
              .col-md-10
                .h3 Carta de crédito
                p.mb-3  Documento de acuerdo de pago entre el comprador y el vendedor que permite al vendedor realizar el cobro luego de enviado el producto a la entidad bancaria autorizada, la cual, posteriormente, solicitará reembolso a la entidad bancaria del comprador.

            .row(titulo="Paso 7")
              .col-md-10
                .h3 Documento Único Aduanero
                p.mb-3  Corresponde al documento, utilizado para realizar trámites aduaneros de importación y exportación. Al contener información del producto, será de utilidad para la declaración tributaria.
    
    h3.titulo-tercero Transporte fluvial y/o lacustre

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-a.color-secundario.mb-5.p-4 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              .wrap-ap
                figure
                  img(src='@/assets/curso/t2-i5.png', alt='Un pallet con cajas apiladas') 
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-3.text-bold Este transporte se realiza a través de los ríos o lagos que poseen condiciones adecuadas de navegabilidad, como la profundidad de navegación, el calado, la pendiente longitudinal, la corriente y los niveles de precipitación.
    br
    br
    #t_2_5.titulo-segundo
      h2 2.5  Transporte multimodal
    .row.mb-5
      .col-lg-6
        .cajon.color-secundario.p-5.mb-5(data-aos="fade-up")
          p.mb-3  Se refiere al transporte de mercancías mediante el uso de más de un tipo de vehículo para realizar la operación entre un origen y un destino, pero con la característica de que solo se utiliza un contrato de transporte, generalmente realizado con un <b>Operador de Transporte Multimodal (OTM)</b> que está en la capacidad de utilizar los medios necesarios y adecuados para cumplir con la trayectoria del producto. Este tipo de movimiento de carga sugiere la necesidad de realizar transbordos.
        p.mb-3  De acuerdo con el concepto general de transporte multimodal, es posible transportar carga por medios multimodales a granel, con o sin contenedores o efectuar operaciones de transporte multimodal doméstico. Dentro de este marco global, se distingue el transporte intermodal (utilizando diversos tipos de transporte, pero con una única medida de carga) y transporte combinado (diferentes medios dentro de una misma cadena de transportes). 
      .col-lg-6
        figure(data-aos="fade-up", data-aos-delay='100')
          img(src='@/assets/curso/t2-i9.svg', alt='Un pallet con cajas apiladas') 

    .row.mb-5
      .col-lg-2
        figure
          img(src='@/assets/curso/t2-i10.svg', alt='icono decorativo')  
      .col-lg-10
        p.mb-3  Generalmente el transporte multimodal es efectuado por un operador de transporte multimodal, quien celebra un “Contrato de Transporte Multimodal” y asume la responsabilidad de su cumplimiento en calidad de porteador.
        p.mb-3  El Fiata Bill of Landing (FBL), se refiere al conocimiento de embarque para el transporte multimodal mediante el cual se unen en un único contrato las diferentes secciones de un contrato de transporte combinado por varios modos de transporte y obliga al OTM a prestar el servicio durante todo el trayecto acordado con el destinatari


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
