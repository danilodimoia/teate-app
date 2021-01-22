import { createStore } from "vuex";

export default createStore({
  // This is an object that hold all  application wide data
  state() {
    return {
      settings: {
        images_path: '@/images/'
      },
      places: [
        {
          id: 1,
          title: "Il guerriero di Capestrano",
          abstract: `Il guerriero di Capestrano è una scultura in calcare tenero locale 
          del VI secolo a.C., del periodo dell'arte italica, rinvenuta in una necropoli 
          dell'antica città di Aufinum, località situata nei pressi di Capestrano, 
          e raffigurante un guerriero dell'antico popolo italico dei Vestini`,
          images: [
            "guerriero_capestrano_da_capestrano_dettaglio.jpg",
            "guerriero_capestrano_primissimo_piano.jpg",
            "guerriero_capestrano_primo_piano.jpg",
          ],
          cover: "guerriero_capestrano_da_capestrano_dettaglio.jpg",
        },
        {
          id: 2,
          title: "Il teatro Marrucino",
          abstract: `Il teatro fu edificato su decisione del Decurionato di Chieti 
          per sopperire alla scarsità di posti a sedere presenti nel Teatro Vecchio, 
          il precedente teatro principale della città, risalente alla seconda metà 
          del XVIII secolo. I lavori ebbero inizio nel marzo 1813.`,
          images: ["teatro_palchi.jpg"],
          cover: "teatro_palchi.jpg",
        },
        {
          id: 3,
          title: "Antifeatro romano",
          abstract: `La città esisteva sin dal IV secolo a.C. circa sopra il colle 
          del centro storico, popolata dagli italici Marrucini, che ne fecero la loro 
          capitale. La città non era interamente abitata, ma solo le parti 
          principali lungo la direttrice attuale via G. Ravizza.`,
          images: [
            'anfiteatro_romano_1.jpg',
            'anfiteatro_romano_2.jpg',
          ],
          cover: [
            'anfiteatro_romano_1.jpg',
          ]
        },
        {
          id: 4,
          title: "La Cattedrale",
          abstract: `La cattedrale di San Giustino, della arcidiocesi teatina, 
          è la più grande ed importante chiesa del comune di Chieti e monumento nazionale dal 1902.`,
          images: ['cripta_san_giustino.jpg'],
          cover: 'cripta_san_giustino.jpg'
        },
        {
          id: 5,
          title: "Le piazze e le porte",
          abstract: `Porta Pescara è l’unica sopravvissuta degli otto passaggi 
          aperti nelle antiche mura della città di Chieti.`,
          images: ['porta_pescara_notte.jpg'],
          cover: 'porta_pescara_notte.jpg'
        },
      ],
    };
  },
  mutations: {},
  actions: {},
  modules: {},
});
