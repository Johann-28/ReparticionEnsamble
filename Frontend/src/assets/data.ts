export const tipoMusicos = [
    { id: 1, instrumento: "GTR", categoria: "instrumento" },
    { id: 2, instrumento: "RHYTHM", categoria: "instrumento" },
    { id: 3, instrumento: "BASS", categoria: "instrumento" },
    { id: 4, instrumento: "BTR", categoria: "instrumento" },
    { id: 5, instrumento: "CPU", categoria: "instrumento" },
    { id: 6, instrumento: "TCL", categoria: "instrumento" },
    { id: 7, instrumento: "1era", categoria: "voz" },
    { id: 8, instrumento: "2da", categoria: "voz" },
    { id: 9, instrumento: "Coro", categoria: "voz" }
];

export const musicos = [
    { id: 1, nombre: "LALO", tipoMusico: tipoMusicos[0], presente: false },
    { id: 2, nombre: "MAX", tipoMusico: tipoMusicos[0], presente: false },
    { id: 3, nombre: "CRUZ", tipoMusico: tipoMusicos[1], presente: false },
    { id: 4, nombre: "HASELL", tipoMusico: tipoMusicos[2], presente: false },
    { id: 5, nombre: "BRIANNA", tipoMusico: tipoMusicos[3], presente: false },
    { id: 6, nombre: "ELPIDIO", tipoMusico: tipoMusicos[4], presente: false },
    { id: 7, nombre: "CPU", tipoMusico: tipoMusicos[5], presente: false },
    { id: 8, nombre: "RICARDO", tipoMusico: tipoMusicos[6], presente: false },
    { id: 9, nombre: "YARED", tipoMusico: tipoMusicos[6], presente: false },
    { id: 10, nombre: "AIMEE", tipoMusico: tipoMusicos[8], presente: false },
    { id: 11, nombre: "EMILY", tipoMusico: tipoMusicos[7], presente: false }
];

export const canciones = [
    {
        id: 1,
        titulo: "IRIS",
        seleccionada: false,
        musicos: [musicos[0], musicos[1], musicos[3], musicos[4], musicos[7]]
    },
    {
        id: 2,
        titulo: "When You Where Young",
        seleccionada: false,
        musicos: [musicos[1], musicos[0], musicos[3], musicos[5], musicos[7], musicos[8], musicos[10]]
    },
    {
        id: 3,
        titulo: "Selfless",
        seleccionada: false,
        musicos: [musicos[0], musicos[2], musicos[3], musicos[4], musicos[8]]
    },
    {
        id: 4,
        titulo: "Shut Up and Dance",
        seleccionada: false,
        musicos: [musicos[0], musicos[2], musicos[3], musicos[5], musicos[10], musicos[8], musicos[9]]
    },
    {
        id: 5,
        titulo: "Careless Whisper",
        seleccionada: false,
        musicos: [musicos[2], musicos[3], musicos[4], musicos[6], musicos[10], musicos[9]]
    },
    {
        id: 6,
        titulo: "Die With a Smile",
        seleccionada: false,
        musicos: [musicos[1], musicos[2], musicos[3], musicos[5], musicos[10], musicos[9], musicos[7]]
    },
    {
        id: 7,
        titulo: "Moderato - Amor Prohibido",
        seleccionada: false,
        musicos: [musicos[0], musicos[2], musicos[3], musicos[5], musicos[7], musicos[8]]
    },
    {
        id: 8,
        titulo: "Emmanuel Cortes - Amor",
        seleccionada: false,
        musicos: [musicos[1], musicos[0], musicos[3], musicos[5], musicos[9]]
    },
    {
        id: 9,
        titulo: "Can’t Help Falling in Love",
        seleccionada: false,
        musicos: [musicos[2], musicos[1], musicos[3], musicos[4], musicos[8], musicos[9], musicos[10]]
    },
    {
        id: 10,
        titulo: "Un Siglo Sin Ti",
        seleccionada: false,
        musicos: [musicos[0], musicos[2], musicos[3], musicos[4], musicos[5], musicos[9], musicos[10]]
    },
    {
        id: 11,
        titulo: "Enamorado Tuyo",
        seleccionada: false,
        musicos: [musicos[1], musicos[2], musicos[3], musicos[5], musicos[8], musicos[10]]
    }
];
