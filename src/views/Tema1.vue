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
          .bloque-texto-a.color-secundario.mb-5.p-4.py-0
            .row.m-0.align-items-center.justify-content-between
              .col-lg-4.mb-4.mb-lg-0
                .wrap-ap
                  figure.pos1
                    img(src='@/assets/curso/t1-i1.png', alt='Un pasaporte abierto') 
              .col-lg-8
                .bloque-texto-a__texto.p-4.shadow-box.lila-color 
                  p.mb-3 En el presente capítulo se identifica la documentación utilizada en el transporte de pasajeros, la cual merece especial atención, ya que, al movilizar personas, las responsabilidades tienden a ser mayores <b>debido a la relevancia de transportar vidas humanas,</b> las cuales no tienen un valor económico fácilmente predeterminable que permita valorar los riesgos inherentes a este tipo de transporte.
                  p Los documentos necesarios para el transporte de pasajeros son:

      #t_1_1.titulo-segundo
        h2 1.1 Transporte aéreo
      p.mb-5  Aquí se describirá todo lo concerniente al transporte aéreo.

      h3.titulo-tercero Documentos de identificación
      p.mb-5  A continuación, se presentan los documentos de identificación utilizados en Colombia:
      TabsA.color-acento-contenido.mb-5
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
              p.mb-3 Los menores de edad al salir de un país, deben contar con un permiso expedido por los padres o el padre que no viaja con él, para salir del país. En Colombia, el Ministerio de Relaciones Exteriores expide dicho permiso luego del cumplimiento de requisitos. 

        .tarjeta.tarjeta--gris.p-4(titulo="Tarjeta de identidad")
          .row
            .col-lg-6.mb-4
              figure
                img(src='@/assets/curso/t1-tab3.png', alt='')
            .col-lg-6
              h4 Tarjeta de identidad
              p.mb-3 Documento oficial que permite la identificación para los menores de edad entre los 7 y los 18 años. Tiene un número único y otorga distinción para adelantar procedimientos de individualización.

        .tarjeta.tarjeta--gris.p-4(titulo="Documento de identidad")
          .row
            .col-lg-6.mb-4
              figure
                img(src='@/assets/curso/t1-tab4.png', alt='')
            .col-lg-6
              h4 Documento de identidad
              p.mb-3  Conocido con diferentes denominaciones dependiendo el país de expedición (Cédula de Ciudadanía, Documento Único de Identidad, Documento Nacional de identidad, Identificación Oficial, Carta de Identidad), es un documento público que contiene datos de identificación personal y es emitido por una autoridad competente para permitir la identificación personal e inequívoca de los ciudadanos.  
              p.mb-3  En Colombia a partir de diciembre de 2020 se inició la expedición de la cédula de seguridad personalizada en policarbonato y cédula de ciudadanía digital, quienes actualmente tienen la anterior cédula amarilla con hologramas, cuentan con igual validez para identificación.
        
        .tarjeta.tarjeta--gris.p-4(titulo="Pasaporte")
          .row
            .col-lg-6.mb-4
              figure
                img.shadow-box(src='@/assets/curso/t1-tap5.jpg', alt='')
            .col-lg-6
              h4 Pasaporte
              p.mb-3  Es un documento que expide cada país y que permite identificar a sus ciudadanos cuando viajan a otros países.  
        
        .tarjeta.tarjeta--gris.p-4(titulo="Visa")
          .row
            .col-lg-6.mb-4
              figure
                img.shadow-box(src='@/assets/curso/t1-tap6.jpg', alt='')
            .col-lg-6
              h4 Visa
              p.mb-3  Corresponde a una autorización que permite transitar libremente y que es entregada por ciertos países a extranjeros para el ingreso temporal a dichos países. La visa va dentro del pasaporte, por tanto, permite al mismo tiempo la identificación personal en otros países que requieren de ella.  
      
      h3.titulo-tercero Tarjeta de embarque
      .row.mb-5
        .col-lg-4
          figure
            img(src='@/assets/curso/t1-i2.svg', alt='')
        .col-lg-8
          p.mb-3  Es un título de transporte que la compañía aérea emite en un momento posterior a la celebración del contrato, es decir previamente a la ejecución efectiva del servicio.
          p.mb-3  <b>La tarjeta de embarque contiene una información más específica sobre el pasajero</b> y el vuelo que la fijada en el billete de pasajero que será mencionado en el numeral 4.2. En ella constan principalmente: el nombre del pasajero, número de vuelo, compañía aérea, la hora y la puerta de embarque, clase en la que viaja y asiento designado. 
          .cajon.color-secundario.p-4
            ul.lista-ul
              li(data-aos="fade-up", data-aos-delay='50') 
                i.fas.fa-square
                p Su requerimiento permite que las compañías aéreas conozcan con exactitud los pasajeros que han realizado <b>el check in y agilizar los trámites de embarque</b> para el inicio del vuelo.
              li(data-aos="fade-up", data-aos-delay='100') 
                i.fas.fa-square
                p En la actualidad, <b>este documento puede presentarse en formato electrónico</b> y minimiza tiempos presenciales en los aeropuertos.
              li(data-aos="fade-up", data-aos-delay='150') 
                i.fas.fa-square
                p La tarjeta de embarque no cuenta con fundamento legal, sino que hace parte de los procesos internos de las aerolíneas que buscan la optimización de sus operaciones.

      h3.titulo-tercero Talón de equipaje
      .row.mb-5
        .col-lg-4
          figure
            img(src='@/assets/curso/t1-i3.svg', alt='')
        .col-lg-8
          p.mb-3  Este es un documento que permite registrar y tener constancia de la entrega de equipaje por parte del pasajero al transportador aéreo, para ser llevado en bodega y que le sirve, posteriormente, al pasajero para que dicho equipaje le sea devuelto. Por lo general, es una etiqueta adhesiva que se pega a la tarjeta de embarque.

      Separador
      br
      br
      #t_1_2.titulo-segundo
        h2 1.2  Transporte terrestre
      p.mb-5  Aquí se describirá todo lo concerniente al transporte aéreo.   
      .box-slider.neg-margin-x
        .tarjeta.color-primario.p-5.mb-5.r-0
          SlyderA
            .row.p-4
              .col-md-7
                h3 Licencia de tránsito
                p.mb-3  En Colombia se define como el documento público que identifica un vehículo automotor, acredita su propiedad e identifica a su propietario y autoriza a dicho vehículo para circular por las vías públicas y por las privadas abiertas al público. (Ley 769 de 2002 – Código Nacional de Tránsito).
                p.mb-3  En todos los países del mundo se debe realizar una matrícula de vehículo, más cada uno de ellos cuenta con su propia legislación al respecto. Posterior a la matrícula se recibe un documento en el cual, se asocia el vehículo y el propietario junto con una placa metálica en la cual se encuentra el código, generalmente alfanumérico, asignado al automotor y que luego de ser adherida al mismo, permite su identificación.

              .col-md-5.mb-4.mb-md-0
                figure
                  img.shadow-box(src='@/assets/curso/t1-sl1.jpg', alt='Texto que describa la imagen')            
            
            .row.p-4
              .col-md-7
                h3 Licencia de conducción
                p.mb-3  Documento público de carácter personal e intransferible, expedido por autoridad competente, el cual autoriza a una persona para la conducción de vehículos con validez en todo el territorio nacional (Ley 769 de 2002 – Código Nacional de Tránsito).
                p.mb-3  Cada país tiene su propia legislación, en cuanto este documento, más diferentes convenios han permitido que mediante la homologación y el cumplimiento de requisitos específicos, se puede obtener autorización de conducción mediante el llamado pase internacional autorizado por la Federación Internacional de Automovilismo FIA, o su representante autorizado en cada país. Dicha autorización es temporal, ya que, para estancias prolongadas, será necesario el trámite en el país correspondiente.

              .col-md-5.mb-4.mb-md-0
                figure
                  img.shadow-box(src='@/assets/curso/t1-sl2.png', alt='Ejemplo de licencia de conducción')            

            .row.p-4
              .col-md-7
                h3 Seguro Obligatorio de Accidentes de Tránsito – SOAT
                p.mb-3  Este seguro tiene como finalidad cubrir la responsabilidad civil del propietario o el conductor por los daños o lesiones que se ocasionen a terceros en caso de accidente de tránsito su objetivo es asegurar la atención, de manera inmediata e incondicional, de las víctimas de accidentes de tránsito (asegurados, ocupantes y peatones) que sufren lesiones corporales y muerte. Este seguro no cubre costos como el de los daños al vehículo propio involucrado. 

              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/t1-sl3.svg', alt='logotipo del SOAT')            

            .row.p-4
              .col-md-7
                h3 Certificado de Revisión Técnico-mecánica
                p.mb-3  En este documento se registra la condición mecánica actual del vehículo, es decir, lo correspondiente al estado y funcionamiento de los diferentes sistemas del vehículo como son eléctrico, suspensión, llantas y frenos, adicionalmente, se registra la condición ambiental con el fin de dar cumplimiento a los límites de emisiones contaminantes.

              .col-md-5.mb-4.mb-md-0
                figure
                  img.shadow-box(src='@/assets/curso/t1-sl4.jpg', alt='mecanico en frente a un auto hablando con el cliente')            
            .row.p-4
              .col-md-7
                h3 Chequeo preoperacional
                p.mb-3  Este documento corresponde a la lista de chequeo mediante la cual se verifica diariamente el estado del vehículo asignado para realizar el transporte de pasajeros. El documento también es solicitado para el transporte de carga y corresponde a una exigencia legal emitida mediante la Resolución 1565 de 2014, la cual expidió la guía metodológica para la elaboración del Plan Estratégico de Seguridad Vial – PESV al cual todas las empresas de transporte deben acogerse y dar cumplimiento.

              .col-md-5.mb-4.mb-md-0
                figure
                  img.shadow-box(src='@/assets/curso/t1-sl5.jpg', alt='parqueadero de buses')           
            .row.p-4
              .col-md-7
                h3 Transporte Terrestre individual de pasajeros
                ul.lista-ul
                  li 
                    i.fas.fa-square
                    | Tarjeta de operación (taxi): según la normatividad vigente (Decreto 172 de 2001) es el documento único que autoriza a un vehículo automotor para prestar el servicio público ,bajo la responsabilidad de una empresa de transporte, de acuerdo con el radio de acción autorizado.
                  li 
                    i.fas.fa-square
                    | Tarjeta de control (taxi): es emitida por las empresas encargadas con una periodicidad bimensual y con el objetivo de realizar control a los vehículos y conductores asignados a la prestación del servicio. En este documento se consignan datos como: conductor, empresa, placas del vehículo, firma y sello de la empresa y, adicionalmente, cuenta con espacio de refrendaciones, entre otros.
                  li 
                    i.fas.fa-square
                    | Planilla única de viaje ocasional: corresponde al documento emitido por la autoridad de control que permite a los vehículos tipo taxi, de pasajeros o mixto (carga y pasajeros) realizar desplazamientos fuera del radio de acción autorizado.  
              .col-md-5.mb-4.mb-md-0
                figure
                  img.shadow-box(src='@/assets/curso/t1-sl6.jpg', alt='Un taxi con luz encendida')            
             
            .row.p-4
              .col-md-7
                h3 Transporte Público colectivo de pasajeros
                p.mb-3  Formato Único de Extracto de contrato FUEC: este documento debe ser portado por los conductores de vehículos de transporte especial de pasajeros y muestra en resumen las condiciones de un contrato de transporte suscrito entre las partes, una de ellas debe ser la empresa de transporte especial legalmente habilitada. Este documento deberá contener: número del FUEC, empresa, número de contrato, contratante, objeto, origen-destino, puntos intermedios del recorrido, convenio empresarial, duración, descripción del vehículo, número de tarjeta de operación y conductores autorizados.

              .col-md-5.mb-4.mb-md-0
                figure
                  img.shadow-box(src='@/assets/curso/t1-sl7.jpg', alt='bus de transporte público en ruta')            
      Separador
      br
      br
      #t_1_3.titulo-segundo
        h2 1.3 Transporte acuático
      p.mb-5  Será necesario considerar:

      .tarjeta--container.row.mb-5
        //- .tarjeta debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .col-lg-6.tarjeta.c1.p-5
          .row.justify-content-center.mb-4.p-5.text-center
            .col-6
              figure.mb-5(data-aos="flip-left", data-aos-delay='0')
                img.h180(src='@/assets/curso/t1-i4.svg', alt='Imagen Decorativa')
            
            h3 Transporte marítimo de pasajeros
            p Este tipo de transporte, se realiza en barcos conocidos como “crucero”, debidamente adecuado para el transporte de pasajeros y generalmente utilizado para viajes de turismo y placer, el cual requiere para su abordaje y disfrute del viaje el pasaporte que permita la identificación del usuario.

        .col-lg-6.tarjeta.c2.p-5
          .row.justify-content-center.mb-4.p-5.text-center
            .col-6
              figure.mb-5(data-aos="flip-right", data-aos-delay='100')
                img.h180(src='@/assets/curso/t1-i5.svg', alt='imagen decorativa')
            
            h3  Transporte Fluvial y/o lacustre de pasajeros
            p El billete de transporte, es un documento utilizado para movilizarse en pequeñas embarcaciones generalmente denominadas “Ferry”, las cuales permiten transportar personas entre dos orillas cercanas o a lo largo de una zona costera. Para realizar este tipo de transporte, igualmente, los pasajeros deben estar identificados mediante un pasaporte o su documento de identificación.
      


  
</template>

<script>
export default {
  name: 'Tema1',

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
.h180{height: 180px}
</style>
