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
        .bloque-texto-a.color-secundario.mb-5.p-3 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-lg-0
              .wrap-ap
                figure
                  img.h280(src='@/assets/curso/t4-i1.svg', alt='imagen decorativa') 
            .col-lg-8
              .bloque-texto-a__texto.p-4.lila-color.shadow-box
                p.mb-3 Se refiere a las condiciones establecidas para realizar una transacción considerando las responsabilidades de las partes en diferentes aspectos <b>comerciales, de transporte, de manipulación de carga, de aseguramiento, entre otros.</b>
    #t_4_1.titulo-segundo
      h2 4.1  Negociación internacional
    p.mb-3  Para facilitar el comercio internacional, fueron establecidos diferentes lineamientos que en la actualidad rigen el intercambio entre vendedor y comprador, estos consideran las responsabilidades de cada uno de ellos en temas como el transporte, el aseguramiento del riesgo, las operaciones de cargue y descargue, etc., los cuales fueron planteados en los Incoterms que se mencionan a continuación.
    p.mb-5  Esta sigla corresponde a la denominación inglesa de:

    .cards-container
      .row.justify-content-center.mb-5
        .col-lg-3.col-sm-3
          .cardF
            .content
              .front.cf1
                span.text-xxl IN
              .back
                span.text-back INternational
        .col-lg-3.col-sm-3
          .cardF
            .content
              .front.cf2
                span.text-xxl CO
              .back
                span.text-back COmmercial
        .col-lg-3.col-sm-3
          .cardF
            .content
              .front.cf3
                span.text-xxl TERMS
              .back
                span.text-back TERMS

    .row.justify-content-center.mb-5
      .col-lg-8
        p.text-center.mb-5 Es decir, <b>INternational COmmercial TERMS</b> o en español, <b>“Términos para el comercio Internacional”.</b>       


      .tarjeta--container.row.mb-5.justify-content-center
        .col-lg-6.tarjeta.c1.p-5.r-0
          p  Los Incoterms son un conjunto de reglas creadas por la Cámara de Comercio Internacional (CCI) en busca de facilitar la venta de productos a través de un lenguaje común con términos de negociación internacional y mediante los cuales se establecen las obligaciones en una compraventa internacional tanto al comprador como al vendedor en aspectos relacionados con: suministro de la mercancía, documentos de exportación e importación, formalidades que se deben cumplir en una compraventa internacional, responsabilidad en las operaciones aduaneras, contratación de seguros, contratación de transporte, suministro de documentos para la reclamación de las mercancías, comprobaciones, embalajes y marcado, entre otros aspectos. 
        .col-lg-4.tarjeta.c3.p-5.r-0
          figure.align-items-center
            img.h180.mt-5(src='@/assets/curso/t4-ix1.svg', alt='representacion grafica de INCOTERMS')


    h3.titulo-tercero ¿Cuáles son los Incoterms?
    .row.justify-content-center.mb-5
      .col-lg-12
        figcaption.no-bg Tipos de Incoterms
        figure.align-items-center
          img.shadow-box(src='@/assets/curso/t4-ip1.svg', alt='Ejemplo de INCOTERMS')
        figcaption Nota. Tomada de Grupo Transhipping (2020)

    .row.justify-content-center
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-2.col-lg-2
              img(src="@/assets/curso/t4-ix2.svg")
            .col-lg-9
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Tabla INCOTERMS 2020
                  p.text-small Reglas para de facilitar la venta de productos a través de un lenguaje común con términos de negociación internacional.
                .col-sm-auto
                  a.boton.color-acento-contenido(:href="obtenerLink('/downloads/TABLA_DE_INCOTERMS_2020.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download



    h3.titulo-tercero Novedades en el año 2020
    p.mb-5  Los Incoterms cambian cada 10 años, es por ello que a partir del 01 de enero del año 2020 se definieron 13 de ellos y empezaron a regir las modificaciones correspondientes, entre las cuales se tienen, principalmente:
    .row.justify-content-center.mb-5
      .col-lg-4
        figure.align-items-center
          img(src='@/assets/curso/t4-ix3.svg', alt='imagen decorativa')
      .col-lg-8  
        ul.lista-ul
          li(data-aos="fade-up", data-aos-delay='0') 
            i.fas.fa-square 
            p Se sustituye el Incoterm <b>Dat</b> (Delivered at Terminal) por <b>DPU</b> (Delivered at Place Unloaded). El nuevo nombre permite pactar la entrega en cualquier lugar, no únicamente en terminal.
          li(data-aos="fade-up", data-aos-delay='100')
            i.fas.fa-square 
            p Se establecen nuevas condiciones en la contratación del seguro para los Incoterms <b>CIF y CIP.</b>
          li(data-aos="fade-up", data-aos-delay='150') 
            i.fas.fa-square 
            p Para el transporte marítimo bajo el <b>Incoterm FCA,</b> el comprador podrá pedir a la naviera o a su agente que emita el Bill of Landing (BL) o guía de carga marítima con la anotación <b>“On Board”</b> para el vendedor.       
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4(data-aos="flip-up", data-aos-delay='50')
          p Para la determinación del Incoterm adecuado, es necesario definir aspectos previos respecto al costo y la facilidad de acceder a los temas de seguros, transportistas, personal para cargue y descargue, etc. Luego de este análisis se puede evidenciar en la imagen anterior que el Ïncoterm más benéfico para el vendedor o exportador es el <b>Ex Works EXW</b>, mediante el cual esta persona solo debe tener correctamente embalada la mercancía para que el comprador la recoja en el almacén del vendedor y se encargue de la gestión correspondiente de traslado hasta el destino. Por otra parte, con el <b>Incoterm DDP</b> el vendedor o exportador correrá con los gastos, así como con los riesgos que tenga la mercancía desde el lugar de partida hasta su destino final en el sitio del comprador o importador.

    Separador
    br
    br

    #t_4_2.titulo-segundo
      h2 4.2  Contrato de transporte

    p.mb-5  De acuerdo con el Código de Comercio:
    
    .row.justify-content-center.mb-5
      .col-lg-8    
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            .h3.mb-0 El transporte es un contrato por medio del cual una de las partes se obliga para con la otra, a cambio de un precio, a conducir de un lugar a otro, por determinado medio y en el plazo fijado, personas o cosas y entregar éstas al destinatario (Art. 981).
            span  - Código de Comercio
            i.fas.fa-quote-right

    .row.justify-content-center.mb-5
      .col-lg-12
        .bloque-texto-a.color-secundario.mb-5.p-3
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              .wrap-ap
                figure.pos2
                  img(src='@/assets/curso/t4-ix4.png', alt='imagen decorativa') 
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-3  Cabe aclarar que el simple hecho de utilizar el servicio de transporte configura la existencia de un contrato sin la necesidad de una formalidad documental. Generalmente, este suceso se presenta en el transporte terrestre de pasajeros, aunque en la gran mayoría de transportes interurbanos media la existencia de un tiquete de viaje que relaciona datos correspondientes al pasajero, la transportadora y los términos contractuales del servicio.
                p.mb-3  En el transporte de carga permanente es de uso general legalizar el acuerdo entre el contratante y la transportadora mediante un documento físico contractual firmado entre las partes que define los diferentes deberes y derechos de las partes para la prestación del servicio, además de tarifas y demás condiciones operativas.
    Separador
    br
    br

    #t_4_3.titulo-segundo
      h2 4.3 Aplicaciones – Nuevas plataformas para transporte terrestre
    .row.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/t4-i3.svg', alt='imagen decorativa') 
      .col-lg-8
        p.mb-3  Tanto en Colombia como en otros países se presenta la existencia y funcionamiento de plataformas colaborativas que permiten, mediante aplicaciones instaladas, tener asignado un vehículo para ser transportado bajo condiciones de información permanente las que son indicadas con claridad a través de la aplicación. 
        p.mb-3  Recientemente fue archivado un proyecto de ley que pretendía regular las plataformas colaborativas lo cual hace entender que dichas aplicaciones representan una ilegalidad para realizar la actividad transportadora de pasajeros, ya que se establece en cierta normatividad que el transporte de lujo regulado es un servicio público prestado por empresas habilitadas, a través de conductores igualmente autorizados y por medio de vehículos que cumplen ciertas características especiales. Lo anterior se aleja claramente del modelo colaborativo adoptado por la plataforma en virtud del cual quien presta el servicio puede ser cualquier individuo y no necesariamente un conductor profesional (Semana, 9 de mayo de 2016).

    .row.justify-content-center.p-4
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-3  <b>Por lo general,</b> estas plataformas expiden una factura que sirve como constancia de la prestación del servicio más no representa un contrato de transporte ya que las plataformas colaborativas no cuentan con las condiciones establecidas para la prestación del transporte público de pasajeros. Esto ha hecho que en varios países el tema de las plataformas colaborativas constituya un elemento de discordia para los diferentes actores del transporte.
    
    Separador
    br
    br

    #t_4_4.titulo-segundo
      h2 4.4 Pólizas de seguro
    p.mb-5  A continuación, se mencionan algunas de las pólizas de seguros exigidas para la prestación de servicios de transporte y que dependen generalmente de los requisitos del contratante.

    h3.titulo-tercero Pólizas contractuales

    .row.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/t4-i5.jpg', alt='hombre firmando un contrato') 

      .col-lg-8     
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Responsabilidad Civil Contractual")
            .col-md-12
              p Esta póliza de seguro genera cobertura por los perjuicios materiales causados a los pasajeros ocasionados durante el desarrollo de la actividad de transporte público terrestre de pasajeros.

          div(titulo="Responsabilidad Civil Extracontractual ")
            p.mb-3  Este documento corresponde a la cobertura que permite cubrir daños a los vehículos contra todos los riesgos inherentes a la actividad transportadora tales como reparaciones, reemplazo por hurto o daño mecánico o debido a accidente, entre otros.
            p.mb-3  Esta póliza constituye una cobertura adicional generalmente exigida por los contratantes del transporte.

          div(titulo="Cumplimiento")
            p.mb-3  En este tipo de póliza el tomador tiene como objetivo que a través del seguro la compañía aseguradora garantice el cumplimiento por parte del citado tomador de unas obligaciones contenidas en la ley (disposición legal) o en un contrato.

          div(titulo="Salarios y prestaciones")
            p.mb-3  Tiene por objeto cubrir a la entidad “asegurada”, generalmente, el contratante, de los perjuicios que se le ocasionen como consecuencia del incumplimiento de las obligaciones laborales del contratista frente al personal requerido para la ejecución del contrato al cual se le da amparo o cobertura.

    h3.titulo-tercero Póliza contra todo riesgo
    .row.justify-content-center.mb-5
      .col-lg-2
        figure
          img(src='@/assets/curso/t4-ix5.svg', alt='imagen decorativa') 
      .col-lg-8
        p.mb-3  Este tipo de seguro genera una cobertura contra todos los riesgos que generen perjuicio al vehículo utilizado para la actividad transportadora, ya sea daño o hurto generados por incendio, vandalismo e incluso caída de objetos.
        p.mb-3  Esta póliza genera una protección a la inversión en caso de daños al vehículo.

    h3.titulo-tercero Póliza extracontractual
    .row.justify-content-center.mb-5
      .col-lg-2
        figure
          img(src='@/assets/curso/t4-ix6.svg', alt='imagen decorativa') 
      .col-lg-8
        p.mb-3  Es aquella que permite dar cobertura a las peticiones para el resarcimiento de los daños causados por el vehículo amparando a terceras personas durante la actividad transportadora, ya sea a su patrimonio, lesiones personales e incluso fallecimiento. Este aseguramiento busca proteger los intereses y capital del tomador (asegurado) con el fin de no perder sus bienes ante la responsabilidad adquirida a causa de un accidente de tránsito.

    h3.titulo-tercero Transporte terrestre de pasajeros
    .row.justify-content-center.mb-5
      .col-lg-2
        figure
          img(src='@/assets/curso/t4-ix7.svg', alt='imagen decorativa') 
      .col-lg-8
        p.mb-3  Según lo indicado en los artículos 994 y 1003 del Código de Comercio colombiano y por el artículo 2.2.1.4.4.1. del Decreto 1079 de 2015, las empresas de transporte terrestre público automotor de pasajeros por carretera, deben tomar con una compañía de seguros las pólizas de responsabilidad civil contractual (implica una responsabilidad derivada de un contrato, ej.: conductor vinculado a la empresa) y extracontractual (no requiere medicación de un contrato, ej.: responsabilidad por daños a terceros).

    Separador
    br
    br

    #t_4_5.titulo-segundo
      h2 4.5 Entidades que rigen el comercio internacional
    p.mb-5  Algunas de las entidades que generan políticas, lineamientos, seguimiento y control al comercio entre países son:
    .row.justify-content-center.mb-5
      .col-lg-5(data-aos="fade-down", data-aos-delay='0')
        figure.mb-3
          img(src='@/assets/curso/t4-xx1.png', alt='Logotipo de ICC') 
        a.anexo.mb-4.mb-lg-0(href="https://iccwbo.org/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> www.iccwbo.org

      .col-lg-5(data-aos="fade-down", data-aos-delay='50')
        figure.mb-3
          img(src='@/assets/curso/t4-xx2.png', alt='Logotipo de INCEA') 
        a.anexo.mb-4.mb-lg-0(href="http://www.incea.org.mx/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> www.incea.org.mx

    .row.justify-content-center.mb-5
      .col-lg-5(data-aos="fade-down", data-aos-delay='100')
        figure.mb-3
          img(src='@/assets/curso/t4-xx3.png', alt='Logotipo de MINTIC') 
        a.anexo.mb-4.mb-lg-0(href="https://www.mincit.gov.co/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> www.mincit.gov.co

      .col-lg-5(data-aos="fade-down", data-aos-delay='150')
        figure.mb-3
          img(src='@/assets/curso/t4-xx4.png', alt='Logotipo de DIAN') 
        a.anexo.mb-4.mb-lg-0(href="https://www.dian.gov.co/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> www.dian.gov.co











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

<style lang="sass" scoped>
.h370{height: 370px}
.h280{height: 280px}
</style>
