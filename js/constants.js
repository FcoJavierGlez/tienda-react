const ITEMS_DB = [
    {
        id: 1,
        name: `Paleta Ibérica de Bellota de 4,5 kg Covap`, //Paleta 100 % Ibérica de Bellota Alta Expresion Plata de Covap de 4,5 kg
        description: `Paleta 100 % Ibérica de Bellota Alta Expresion Plata de Covap con un peso de 4,5 kg. 
            Este jamón esta elaborado con cerdos de raza 100 % ibérica criados en total libertad en las mejores 
            dehesas del valle de los Pedroches en Cordoba, con una alimentacion a base de Bellotas. 
            Para potenciar todas sus aromas este jamón ha sido curado naturalmente durante más de 24 meses.`,
        img: `jamon.png`,
        price: 300,
        ud: 1,
        intoCart: false
    },
    {
        id: 2,
        name: `Pack de 5 calcetines Mujer Algodón para invierno`,
        description: `Calcetines 100% de algodón puro, calentitos, para el invierno.`,
        img: `calcetines.png`,
        price: 9.95,
        ud: 1,
        intoCart: false
    },
    {
        id: 3,
        name: `Piano electrónico Yamaha P45`,
        description: `Piano electrónico con 88 teclas de martillo graduables.`,
        img: `yamaha_p45.png`,
        price: 500,
        ud: 1,
        intoCart: false
    },
    {
        id: 4,
        name: `Meade LX200 telescopio de 25,4 cm F/10 ACF Tubo Azul UHTC`,
        description: `Tubo de 25,4 cm (10 pulgadas) F/10 ACF óptica con Snoot azul con uhtc)`,
        img: `meade_lx200.png`,
        price: 2290,
        ud: 1,
        intoCart: false
    },
    {
        id: 5,
        name: `Juego de tronos - Canción de hielo y fuego 1`,
        description: `Tras el largo verano, el invierno se acerca a los Siete Reinos. 
            Lord Eddard Stark, señor de Invernalia, deja sus dominios para unirse 
            a la corte de su amigo el rey Robert Baratheon, llamado el Usurpador, 
            hombre díscolo y otrora guerrero audaz cuyas mayores aficiones son comer, 
            beber y engendrar bastardos. Eddard Stark ocupará el cargo de Mano del Rey 
            e intentará desentrañar una maraña de intrigas que pondrá en peligro su vida y la de todos los suyos.`,
        img: `juego_de_tronos_gigamesh.png`,
        price: 29.95,
        ud: 1,
        intoCart: false
    },
    {
        id: 6,
        name: `Código limpio`,
        description: `Cada año, se invierten innumerables horas y se pierden numerosos recursos debido a código mal escrito, 
            ralentizando el desarrollo, disminuyendo la productividad, generando graves fallos e incluso pudiendo acabar 
            con la organización o empresa. El reconocido experto de software Robert C. Martin, junto con sus colegas de 
            Object Mentor, nos presentan sus óptimas técnicas y metodologías ágiles para limpiar el código sobre la marcha y 
            crearlo de forma correcta, de este modo mejorará como programador. Esta obra se divide en tres partes. 
            La primera describe los principios, patrones y prácticas para crear código limpio. 
            La segunda incluye varios casos de estudio cuya complejidad va aumentando. 
            Cada ejemplo es un ejercicio de limpieza y transformación de código con problemas. 
            La tercera parte del libro contiene una lista de heurística y síntomas de código erróneo (smells) confeccionada 
            al crear los casos prácticos. El resultado es una base de conocimientos que describe cómo pensamos cuando creamos, 
            leemos y limpiamos código. Imprescindible para cualquier desarrollador, ingeniero de software, director de proyectos, 
            jefe de equipo o analista de sistemas interesado en crear código de mejor calidad. 
            ¡El libro que todo programador debe leer!`,
        img: `codigo_limpio.png`,
        price: 49.95,
        ud: 1,
        intoCart: false
    },
    {
        id: 7,
        name: `Chaqueta pesada de motociclista hombre`,
        description: `Chaqueta de motociclista de cuero 100% vacuno para hombre.`,
        img: `bohmberg_man.png`,
        price: 159.95,
        ud: 1,
        intoCart: false
    },
    {
        id: 8,
        name: `Chaqueta pesada de motociclista mujer`,
        description: `Chaqueta de motociclista de cuero 100% vacuno para mujer.`,
        img: `bohmberg_woman.png`,
        price: 149.95,
        ud: 1,
        intoCart: false
    },
    {
        id: 9,
        name: `El Señor de los Anillos - La Comunidad del Anillo`,
        description: `El Señor de los Anillos (1ª parte): La Comunidad del Anillo. versión tapa dura.`,
        img: `la_comunidad_del_anillo_minotauro.png`,
        price: 19.95,
        ud: 1,
        intoCart: false
    },
    {
        id: 10,
        name: `El Señor de los Anillos - Las dos Torres`,
        description: `El Señor de los Anillos (2ª parte): Las dos Torres. versión tapa dura.`,
        img: `las_dos_torres_minotauro.png`,
        price: 19.95,
        ud: 1,
        intoCart: false
    },
    {
        id: 11,
        name: `El Señor de los Anillos - El retorno del Rey`,
        description: `El Señor de los Anillos (3ª parte): El retorno del Rey. versión tapa dura.`,
        img: `el_retorno_del_rey_minotauro.png`,
        price: 19.95,
        ud: 1,
        intoCart: false
    },
];

export default ITEMS_DB;