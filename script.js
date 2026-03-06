// Catálogo ampliado: además de datos generales, cada película define salas disponibles.
// Cada sala tiene tipo, distribución de asientos y zonas (VIP/Preferencial) diferentes.
const movies = [
  {
    id: 1,
    title: "Hoppers: Operación Castor",
    schedule: "14:00",
    duration: 104,
    rating: "A",
    genre: "Animación / Familiar",
    priceGTQ: 38,
    priceUSD: 4.9,
    poster: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=900&auto=format&fit=crop",
    synopsis: "Un castor inventor lidera una misión para salvar su bosque usando tecnología reciclada y mucho humor.",
    rooms: [
      {
        id: "S1",
        name: "Sala 1",
        type: "Tradicional",
        layout: { rows: ["A", "B", "C", "D", "E", "F"], cols: 8, aisleAfterCols: [4] },
        zones: { preferential: ["C3", "C4", "C5", "D3", "D4", "D5"], vip: ["E3", "E4", "E5", "F3", "F4", "F5"] },
        initialOccupied: ["A1", "A2", "B5", "C6", "D3"]
      },
      {
        id: "S2",
        name: "Sala 2",
        type: "3D",
        layout: { rows: ["A", "B", "C", "D", "E"], cols: 10, aisleAfterCols: [5] },
        zones: { preferential: ["C4", "C5", "C6", "D4", "D5", "D6"], vip: ["E4", "E5", "E6", "E7"] },
        initialOccupied: ["A9", "B2", "C1", "D10"]
      }
    ]
  },
  {
    id: 2,
    title: "La Cabra Que Cambió El Juego",
    schedule: "15:20",
    duration: 100,
    rating: "A",
    genre: "Animación / Comedia",
    priceGTQ: 35,
    priceUSD: 4.5,
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=900&auto=format&fit=crop",
    synopsis: "Una cabra fuera de serie altera el campeonato local y demuestra que el trabajo en equipo lo cambia todo.",
    rooms: [
      {
        id: "S3",
        name: "Sala 3",
        type: "Tradicional",
        layout: { rows: ["A", "B", "C", "D", "E", "F", "G"], cols: 8, aisleAfterCols: [4] },
        zones: { preferential: ["D2", "D3", "D4", "D5", "E3", "E4"], vip: ["F3", "F4", "F5", "G3", "G4", "G5"] },
        initialOccupied: ["A4", "B4", "C8", "F1"]
      },
      {
        id: "S4",
        name: "Sala 4",
        type: "Dolby Atmos",
        layout: { rows: ["A", "B", "C", "D", "E", "F"], cols: 9, aisleAfterCols: [3, 6] },
        zones: { preferential: ["C3", "C4", "D3", "D4", "D5"], vip: ["E3", "E4", "E5", "F3", "F4", "F5"] },
        initialOccupied: ["A1", "A2", "B9", "E7"]
      }
    ]
  },
  {
    id: 3,
    title: "Scream 7",
    schedule: "19:40",
    duration: 114,
    rating: "B15",
    genre: "Terror / Suspenso",
    priceGTQ: 52,
    priceUSD: 6.7,
    poster: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=900&auto=format&fit=crop",
    synopsis: "La máscara regresa en una ciudad universitaria donde cada sospechoso guarda una conexión con el pasado.",
    rooms: [
      {
        id: "S5",
        name: "Sala 5",
        type: "IMAX",
        layout: { rows: ["A", "B", "C", "D", "E", "F", "G", "H"], cols: 10, aisleAfterCols: [5] },
        zones: { preferential: ["E4", "E5", "E6", "F4", "F5", "F6"], vip: ["G4", "G5", "G6", "H4", "H5", "H6"] },
        initialOccupied: ["A5", "B5", "C6", "D2", "H10"]
      },
      {
        id: "S6",
        name: "Sala 6",
        type: "4DX",
        layout: { rows: ["A", "B", "C", "D", "E", "F"], cols: 7, aisleAfterCols: [3] },
        zones: { preferential: ["C2", "C3", "D2", "D3"], vip: ["E2", "E3", "F2", "F3"] },
        initialOccupied: ["A1", "B7", "C6", "D1"]
      }
    ]
  },
  {
    id: 4,
    title: "¡La Novia!",
    schedule: "20:30",
    duration: 126,
    rating: "B15",
    genre: "Drama / Romance",
    priceGTQ: 48,
    priceUSD: 6.2,
    poster: "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=900&auto=format&fit=crop",
    synopsis: "Una historia intensa sobre segundas oportunidades justo antes de una boda que nunca debió ocurrir.",
    rooms: [
      {
        id: "S7",
        name: "Sala 7",
        type: "Dolby Atmos",
        layout: { rows: ["A", "B", "C", "D", "E", "F"], cols: 8, aisleAfterCols: [4] },
        zones: { preferential: ["C4", "C5", "D4", "D5"], vip: ["E4", "E5", "F4", "F5"] },
        initialOccupied: ["A8", "B1", "C8", "D8"]
      },
      {
        id: "S8",
        name: "Sala 8",
        type: "Tradicional",
        layout: { rows: ["A", "B", "C", "D", "E"], cols: 9, aisleAfterCols: [3, 6] },
        zones: { preferential: ["C3", "C4", "C5", "D4"], vip: ["E3", "E4", "E5"] },
        initialOccupied: ["A2", "A3", "B6"]
      }
    ]
  },
  {
    id: 5,
    title: "Venganza",
    schedule: "21:05",
    duration: 102,
    rating: "C",
    genre: "Acción / Thriller",
    priceGTQ: 50,
    priceUSD: 6.5,
    poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=900&auto=format&fit=crop",
    synopsis: "Dos exmilitares enfrentan una red criminal internacional en una operación contrarreloj.",
    rooms: [
      {
        id: "S9",
        name: "Sala 9",
        type: "IMAX",
        layout: { rows: ["A", "B", "C", "D", "E", "F", "G"], cols: 10, aisleAfterCols: [5] },
        zones: { preferential: ["D4", "D5", "D6", "E4", "E5", "E6"], vip: ["F4", "F5", "F6", "G4", "G5", "G6"] },
        initialOccupied: ["A10", "B9", "C8", "G1"]
      },
      {
        id: "S10",
        name: "Sala 10",
        type: "4DX",
        layout: { rows: ["A", "B", "C", "D", "E"], cols: 8, aisleAfterCols: [4] },
        zones: { preferential: ["C4", "D4", "D5"], vip: ["E4", "E5"] },
        initialOccupied: ["A1", "B8", "C1"]
      }
    ]
  },
  {
    id: 6,
    title: "¿Quieres Ser Mi Novia?",
    schedule: "18:10",
    duration: 97,
    rating: "B15",
    genre: "Comedia / Romance",
    priceGTQ: 44,
    priceUSD: 5.7,
    poster: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=900&auto=format&fit=crop",
    synopsis: "Una propuesta romántica se convierte en caos cuando las familias descubren secretos de años.",
    rooms: [
      {
        id: "S11",
        name: "Sala 11",
        type: "Tradicional",
        layout: { rows: ["A", "B", "C", "D", "E", "F"], cols: 8, aisleAfterCols: [4] },
        zones: { preferential: ["D3", "D4", "D5"], vip: ["E3", "E4", "E5", "F3", "F4", "F5"] },
        initialOccupied: ["A7", "B6", "C5"]
      },
      {
        id: "S12",
        name: "Sala 12",
        type: "3D",
        layout: { rows: ["A", "B", "C", "D", "E"], cols: 9, aisleAfterCols: [5] },
        zones: { preferential: ["C5", "D5", "D6"], vip: ["E5", "E6"] },
        initialOccupied: ["A9", "B1", "C2"]
      }
    ]
  },
  {
    id: 7,
    title: "Duna: Parte Dos",
    schedule: "17:15",
    duration: 166,
    rating: "B",
    genre: "Ciencia ficción",
    priceGTQ: 56,
    priceUSD: 7.2,
    poster: "https://images.unsplash.com/photo-1489599747135-8b6d5f07b9d0?q=80&w=900&auto=format&fit=crop",
    synopsis: "Paul Atreides abraza su destino en Arrakis en medio de guerras, profecías y alianzas peligrosas.",
    rooms: [
      {
        id: "S13",
        name: "Sala 13",
        type: "IMAX",
        layout: { rows: ["A", "B", "C", "D", "E", "F", "G", "H"], cols: 11, aisleAfterCols: [5] },
        zones: { preferential: ["E5", "E6", "F5", "F6"], vip: ["G5", "G6", "H5", "H6"] },
        initialOccupied: ["A11", "B10", "C9"]
      },
      {
        id: "S14",
        name: "Sala 14",
        type: "Dolby Atmos",
        layout: { rows: ["A", "B", "C", "D", "E", "F"], cols: 10, aisleAfterCols: [5] },
        zones: { preferential: ["D5", "D6", "E5", "E6"], vip: ["F5", "F6"] },
        initialOccupied: ["A3", "A4", "B8", "E10"]
      }
    ]
  },
  {
    id: 8,
    title: "Misión Imposible: Sentencia Final",
    schedule: "16:45",
    duration: 144,
    rating: "B",
    genre: "Acción / Espionaje",
    priceGTQ: 54,
    priceUSD: 7,
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=900&auto=format&fit=crop",
    synopsis: "Ethan Hunt enfrenta una inteligencia artificial fuera de control con consecuencias globales.",
    rooms: [
      {
        id: "S15",
        name: "Sala 15",
        type: "4DX",
        layout: { rows: ["A", "B", "C", "D", "E", "F"], cols: 8, aisleAfterCols: [4] },
        zones: { preferential: ["C4", "D4", "D5"], vip: ["E4", "E5", "F4", "F5"] },
        initialOccupied: ["A8", "B7", "E1"]
      },
      {
        id: "S16",
        name: "Sala 16",
        type: "IMAX",
        layout: { rows: ["A", "B", "C", "D", "E", "F", "G"], cols: 10, aisleAfterCols: [5] },
        zones: { preferential: ["E5", "F5", "F6"], vip: ["G5", "G6"] },
        initialOccupied: ["A1", "A2", "C10"]
      }
    ]
  },
  {
    id: 9,
    title: "Spider-Man: Across the Spider-Verse",
    schedule: "13:50",
    duration: 140,
    rating: "A",
    genre: "Animación / Superhéroes",
    priceGTQ: 46,
    priceUSD: 5.9,
    poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=900&auto=format&fit=crop",
    synopsis: "Miles Morales viaja por el multiverso y debe decidir qué significa realmente ser héroe.",
    rooms: [
      {
        id: "S17",
        name: "Sala 17",
        type: "3D",
        layout: { rows: ["A", "B", "C", "D", "E", "F"], cols: 9, aisleAfterCols: [4] },
        zones: { preferential: ["D4", "D5", "E4", "E5"], vip: ["F4", "F5"] },
        initialOccupied: ["A5", "B5", "C5"]
      },
      {
        id: "S18",
        name: "Sala 18",
        type: "Tradicional",
        layout: { rows: ["A", "B", "C", "D", "E"], cols: 8, aisleAfterCols: [4] },
        zones: { preferential: ["C4", "D4"], vip: ["E4"] },
        initialOccupied: ["A1", "B8"]
      }
    ]
  },
  {
    id: 10,
    title: "El Reino del Mar",
    schedule: "12:20",
    duration: 109,
    rating: "A",
    genre: "Aventura / Fantasía",
    priceGTQ: 40,
    priceUSD: 5.2,
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=900&auto=format&fit=crop",
    synopsis: "Una joven navegante descubre una civilización submarina y una antigua profecía oceánica.",
    rooms: [
      {
        id: "S19",
        name: "Sala 19",
        type: "Tradicional",
        layout: { rows: ["A", "B", "C", "D", "E", "F"], cols: 8, aisleAfterCols: [4] },
        zones: { preferential: ["D3", "D4", "D5"], vip: ["E3", "E4", "E5"] },
        initialOccupied: ["A6", "B2", "C7"]
      },
      {
        id: "S20",
        name: "Sala 20",
        type: "Dolby Atmos",
        layout: { rows: ["A", "B", "C", "D", "E"], cols: 9, aisleAfterCols: [5] },
        zones: { preferential: ["C5", "D5"], vip: ["E5"] },
        initialOccupied: ["A9", "D1"]
      }
    ]
  },
  {
    id: 11,
    title: "Código Omega",
    schedule: "22:00",
    duration: 121,
    rating: "C",
    genre: "Cyberpunk / Acción",
    priceGTQ: 53,
    priceUSD: 6.8,
    poster: "https://images.unsplash.com/photo-1460881680858-30d872d5b530?q=80&w=900&auto=format&fit=crop",
    synopsis: "Una hacker y un detective se infiltran en una megacorporación para evitar un colapso digital.",
    rooms: [
      {
        id: "S21",
        name: "Sala 21",
        type: "IMAX",
        layout: { rows: ["A", "B", "C", "D", "E", "F", "G"], cols: 10, aisleAfterCols: [5] },
        zones: { preferential: ["E5", "F5"], vip: ["G5"] },
        initialOccupied: ["A10", "B10", "C10", "D10"]
      },
      {
        id: "S22",
        name: "Sala 22",
        type: "4DX",
        layout: { rows: ["A", "B", "C", "D", "E"], cols: 7, aisleAfterCols: [3] },
        zones: { preferential: ["D3", "D4"], vip: ["E3", "E4"] },
        initialOccupied: ["A1", "B7", "E7"]
      }
    ]
  },
  {
    id: 12,
    title: "Noches de Jazz",
    schedule: "20:15",
    duration: 98,
    rating: "B",
    genre: "Drama / Musical",
    priceGTQ: 41,
    priceUSD: 5.3,
    poster: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=900&auto=format&fit=crop",
    synopsis: "Un pianista y una cantante luchan por su carrera en un club clásico a punto de cerrar.",
    rooms: [
      {
        id: "S23",
        name: "Sala 23",
        type: "Tradicional",
        layout: { rows: ["A", "B", "C", "D", "E"], cols: 8, aisleAfterCols: [4] },
        zones: { preferential: ["C4", "D4"], vip: ["E4"] },
        initialOccupied: ["A8", "B1"]
      },
      {
        id: "S24",
        name: "Sala 24",
        type: "Dolby Atmos",
        layout: { rows: ["A", "B", "C", "D", "E", "F"], cols: 9, aisleAfterCols: [5] },
        zones: { preferential: ["D5", "E5"], vip: ["F5"] },
        initialOccupied: ["A9", "C2", "F1"]
      }
    ]
  }
];

// Patrones semanales de cartelera (se reutilizan sobre fechas dinámicas).
const weeklyMoviePatterns = [
  [1, 2, 3, 4, 5, 6],
  [2, 3, 7, 8, 9, 10],
  [1, 4, 6, 7, 8, 11],
  [1, 2, 6, 9, 10, 12],
  [3, 5, 7, 8, 11, 12],
  [1, 2, 4, 9, 10, 12],
  [3, 4, 5, 6, 8, 11]
];

// Genera una semana válida a partir de la fecha actual para evitar años/fechas pasadas fijas.
function buildWeekSchedule() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return Array.from({ length: 7 }, (_, offset) => {
    const dayDate = new Date(today);
    dayDate.setDate(today.getDate() + offset);

    const label = offset === 0
      ? "Hoy"
      : offset === 1
        ? "Mañana"
        : dayDate.toLocaleDateString("es-GT", { weekday: "long" }).replace(/^./, (l) => l.toUpperCase());

    return {
      key: `day-${offset}`,
      label,
      date: dayDate.toLocaleDateString("es-GT", { day: "2-digit", month: "short", year: "numeric" }),
      isoDate: dayDate.toISOString().slice(0, 10),
      movieIds: weeklyMoviePatterns[offset]
    };
  });
}

const weekSchedule = buildWeekSchedule();

const seatGrid = document.getElementById("seatGrid");
const movieList = document.getElementById("movieList");
const weekScheduleEl = document.getElementById("weekSchedule");
const selectedDayLabel = document.getElementById("selectedDayLabel");
const ticketQty = document.getElementById("ticketQty");
const message = document.getElementById("message");
const themeToggle = document.getElementById("themeToggle");
const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");
const pdfBtn = document.getElementById("pdfBtn");
const roomSelect = document.getElementById("roomSelect");

const pricePerTicketEl = document.getElementById("pricePerTicket");
const seatCountEl = document.getElementById("seatCount");
const totalAmountEl = document.getElementById("totalAmount");

const moviePoster = document.getElementById("moviePoster");
const movieTitle = document.getElementById("movieTitle");
const movieSchedule = document.getElementById("movieSchedule");
const moviePrice = document.getElementById("moviePrice");
const movieRoomName = document.getElementById("movieRoomName");
const movieRoomType = document.getElementById("movieRoomType");
const movieRating = document.getElementById("movieRating");
const movieDuration = document.getElementById("movieDuration");
const movieSynopsis = document.getElementById("movieSynopsis");

const cardName = document.getElementById("cardName");
const cardNumber = document.getElementById("cardNumber");
const cardExpiry = document.getElementById("cardExpiry");
const cardCvv = document.getElementById("cardCvv");

// Estado principal de selección actual.
let selectedDay = weekSchedule[0];
let selectedMovie = null;
let selectedRoom = null;
let selectedSeats = new Set();
let reservationConfirmed = false;
let lastReservation = null;

// Separa ocupación por sesión (día + película + sala) para que cada sala tenga disponibilidad independiente.
const occupiedBySession = new Map();

const formatGTQ = new Intl.NumberFormat("es-GT", {
  style: "currency",
  currency: "GTQ",
  minimumFractionDigits: 2
});

const formatUSD = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});

function getMoviesByDay(day) {
  return day.movieIds.map((id) => movies.find((movie) => movie.id === id)).filter(Boolean);
}

function getSessionKey(dayKey, movieId, roomId) {
  return `${dayKey}-${movieId}-${roomId}`;
}

function getCurrentSessionKey() {
  if (!selectedDay || !selectedMovie || !selectedRoom) return "";
  return getSessionKey(selectedDay.key, selectedMovie.id, selectedRoom.id);
}

function ensureOccupiedSet(dayKey, movie, room) {
  const key = getSessionKey(dayKey, movie.id, room.id);
  if (!occupiedBySession.has(key)) {
    occupiedBySession.set(key, new Set(room.initialOccupied));
  }
  return occupiedBySession.get(key);
}

function getCurrentOccupiedSet() {
  if (!selectedDay || !selectedMovie || !selectedRoom) return new Set();
  return ensureOccupiedSet(selectedDay.key, selectedMovie, selectedRoom);
}

function showAlert(icon, title, text) {
  Swal.fire({
    icon,
    title,
    text,
    confirmButtonColor: "#2e6cf0"
  });
}

function renderWeekSchedule() {
  weekScheduleEl.innerHTML = "";

  weekSchedule.forEach((day) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "day-chip";
    if (day.key === selectedDay.key) button.classList.add("active");

    button.innerHTML = `${day.label}<b>${day.date}</b>`;

    button.addEventListener("click", () => {
      selectedDay = day;
      const dayMovies = getMoviesByDay(day);
      selectedMovie = dayMovies[0] || null;
      selectedRoom = selectedMovie?.rooms?.[0] || null;
      selectedSeats.clear();
      reservationConfirmed = false;

      renderWeekSchedule();
      renderMovies();
      renderRoomOptions();
      updatePosterInfo();
      renderSeats();
      updateTotals();
      showMessage(`Cartelera y salas actualizadas para ${day.label} ${day.date}.`);
    });

    weekScheduleEl.appendChild(button);
  });
}

function renderMovies() {
  movieList.innerHTML = "";
  const dayMovies = getMoviesByDay(selectedDay);

  selectedDayLabel.textContent = `Disponibles para ${selectedDay.label} ${selectedDay.date}: ${dayMovies.length} películas.`;

  if (dayMovies.length === 0) {
    movieList.innerHTML = "<p class='muted'>No hay películas para este día.</p>";
    return;
  }

  dayMovies.forEach((movie) => {
    const roomTypes = movie.rooms.map((room) => room.type).join(", ");

    const card = document.createElement("article");
    card.className = "movie-card";
    if (selectedMovie && movie.id === selectedMovie.id) card.classList.add("active");

    card.innerHTML = `
      <div class="movie-cover">
        <img src="${movie.poster}" alt="Poster de ${movie.title}" />
        <span class="rating-badge">${movie.rating}</span>
      </div>
      <strong class="movie-title">${movie.title}</strong>
      <p class="movie-meta">${movie.genre} | ${movie.duration} min</p>
      <p class="movie-meta">Horario: ${movie.schedule} | ${formatGTQ.format(movie.priceGTQ)} / ${formatUSD.format(movie.priceUSD)}</p>
      <p class="movie-meta">Salas: ${roomTypes}</p>
      <button class="synopsis-btn" type="button">Ver sinopsis</button>
    `;

    card.addEventListener("click", (event) => {
      if (event.target.classList.contains("synopsis-btn")) return;

      selectedMovie = movie;
      selectedRoom = movie.rooms[0] || null;
      selectedSeats.clear();
      reservationConfirmed = false;

      renderMovies();
      renderRoomOptions();
      updatePosterInfo();
      renderSeats();
      updateTotals();
      showMessage("Película seleccionada. Elige sala y asientos según boletos.");
    });

    const synopsisBtn = card.querySelector(".synopsis-btn");
    synopsisBtn.addEventListener("click", () => {
      Swal.fire({
        title: movie.title,
        html: `<strong>Clasificación:</strong> ${movie.rating}<br><strong>Sinopsis:</strong> ${movie.synopsis}`,
        icon: "info",
        confirmButtonColor: "#2e6cf0"
      });
    });

    movieList.appendChild(card);
  });
}

function renderRoomOptions() {
  roomSelect.innerHTML = "";

  if (!selectedMovie || !selectedMovie.rooms.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Sin salas disponibles";
    roomSelect.appendChild(option);
    roomSelect.disabled = true;
    return;
  }

  roomSelect.disabled = false;

  selectedMovie.rooms.forEach((room) => {
    const option = document.createElement("option");
    option.value = room.id;
    option.textContent = `${room.name} - ${room.type}`;
    if (selectedRoom && room.id === selectedRoom.id) option.selected = true;
    roomSelect.appendChild(option);
  });
}

function getSeatZone(seatId, room) {
  if (!room) return "";
  if (room.zones.vip.includes(seatId)) return "vip";
  if (room.zones.preferential.includes(seatId)) return "preferential";
  return "";
}

function updatePosterInfo() {
  if (!selectedMovie) {
    moviePoster.src = "";
    movieTitle.textContent = "Sin películas en este día";
    movieSchedule.textContent = "Horario: --:--";
    moviePrice.textContent = "Precio: Q 0.00 / $ 0.00";
    movieRoomName.textContent = "--";
    movieRoomType.textContent = "--";
    movieRating.textContent = "--";
    movieDuration.textContent = "-- min";
    movieSynopsis.textContent = "Selecciona otro día para ver cartelera.";
    return;
  }

  moviePoster.src = selectedMovie.poster;
  moviePoster.alt = `Poster de ${selectedMovie.title}`;
  movieTitle.textContent = selectedMovie.title;
  movieSchedule.textContent = `Horario: ${selectedMovie.schedule}`;
  moviePrice.textContent = `Precio: ${formatGTQ.format(selectedMovie.priceGTQ)} / ${formatUSD.format(selectedMovie.priceUSD)}`;
  movieRoomName.textContent = selectedRoom ? selectedRoom.name : "--";
  movieRoomType.textContent = selectedRoom ? selectedRoom.type : "--";
  movieRating.textContent = selectedMovie.rating;
  movieDuration.textContent = `${selectedMovie.duration} min`;
  movieSynopsis.textContent = selectedMovie.synopsis;
}

function getTicketQty() {
  return Math.max(1, Number(ticketQty.value) || 1);
}

function renderSeats() {
  seatGrid.innerHTML = "";

  if (!selectedRoom) return;

  const occupiedSeats = getCurrentOccupiedSet();
  const { rows, cols, aisleAfterCols } = selectedRoom.layout;

  // La grilla cambia por sala: columnas y pasillos varían según layout de esa sala.
  seatGrid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

  rows.forEach((row) => {
    for (let col = 1; col <= cols; col += 1) {
      const seatId = `${row}${col}`;
      const seat = document.createElement("button");
      const zoneClass = getSeatZone(seatId, selectedRoom);

      seat.className = "seat";
      if (zoneClass) seat.classList.add(zoneClass);

      seat.type = "button";
      seat.title = `Asiento ${seatId}`;
      seat.setAttribute("aria-label", `Asiento ${seatId}`);
      seat.textContent = seatId;
      seat.style.fontSize = "0.6rem";

      if (aisleAfterCols.includes(col)) {
        seat.style.marginRight = "10px";
      }

      if (occupiedSeats.has(seatId)) {
        seat.classList.add("occupied");
        seat.disabled = true;
      }

      if (selectedSeats.has(seatId)) {
        seat.classList.add("selected");
      }

      seat.addEventListener("click", () => {
        if (occupiedSeats.has(seatId)) return;

        if (selectedSeats.has(seatId)) {
          selectedSeats.delete(seatId);
          seat.classList.remove("selected");
          updateTotals();
          reservationConfirmed = false;
          return;
        }

        const qty = getTicketQty();

        if (selectedSeats.size >= qty) {
          showAlert("warning", "Límite de asientos", "No puedes seleccionar más asientos que la cantidad de boletos.");
          return;
        }

        selectedSeats.add(seatId);
        seat.classList.add("selected");
        reservationConfirmed = false;
        updateTotals();
      });

      seatGrid.appendChild(seat);
    }
  });
}

function updateTotals() {
  const qty = getTicketQty();
  ticketQty.value = String(qty);

  if (selectedSeats.size > qty) {
    const selectedArray = [...selectedSeats];
    selectedSeats = new Set(selectedArray.slice(0, qty));
    renderSeats();
    showAlert("warning", "Ajuste automático", "Se ajustaron tus asientos para coincidir con los boletos seleccionados.");
  }

  if (!selectedMovie) {
    pricePerTicketEl.textContent = "Q 0.00 / $ 0.00";
    seatCountEl.textContent = String(selectedSeats.size);
    totalAmountEl.textContent = "Q 0.00 / $ 0.00";
    return;
  }

  const totalGTQ = selectedMovie.priceGTQ * qty;
  const totalUSD = selectedMovie.priceUSD * qty;

  pricePerTicketEl.textContent = `${formatGTQ.format(selectedMovie.priceGTQ)} / ${formatUSD.format(selectedMovie.priceUSD)}`;
  seatCountEl.textContent = String(selectedSeats.size);
  totalAmountEl.textContent = `${formatGTQ.format(totalGTQ)} / ${formatUSD.format(totalUSD)}`;
}

function validateCardExpiry(expiryValue) {
  const raw = expiryValue.trim();
  if (!/^\d{2}\/\d{2}$/.test(raw)) {
    return { ok: false, message: "La fecha de expiración debe tener formato MM/AA." };
  }

  const [monthPart, yearPart] = raw.split("/");
  const month = Number(monthPart);
  const fullYear = 2000 + Number(yearPart);

  // Reglas básicas del calendario para evitar meses fuera de rango.
  if (!Number.isInteger(month) || month < 1 || month > 12) {
    return { ok: false, message: "El mes de expiración debe estar entre 01 y 12." };
  }

  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;

  if (fullYear < currentYear || (fullYear === currentYear && month < currentMonth)) {
    return { ok: false, message: "La tarjeta está vencida. Usa una fecha actual o futura." };
  }

  return { ok: true, message: "" };
}

function validatePayment() {
  const nameOk = cardName.value.trim().length > 3;
  const numberOk = cardNumber.value.replace(/\s/g, "").length >= 13;
  const expiryCheck = validateCardExpiry(cardExpiry.value);
  const cvvOk = /^\d{3,4}$/.test(cardCvv.value.trim());

  if (!nameOk) return { ok: false, message: "Ingresa el nombre completo de la tarjeta." };
  if (!numberOk) return { ok: false, message: "El número de tarjeta parece incompleto." };
  if (!expiryCheck.ok) return expiryCheck;
  if (!cvvOk) return { ok: false, message: "El CVV debe tener 3 o 4 dígitos." };

  return { ok: true, message: "" };
}

function showMessage(text, type = "ok") {
  message.textContent = text;
  message.style.color = type === "error" ? "var(--danger)" : "var(--ok)";
}

roomSelect.addEventListener("change", () => {
  if (!selectedMovie) return;

  const newRoom = selectedMovie.rooms.find((room) => room.id === roomSelect.value) || selectedMovie.rooms[0];
  selectedRoom = newRoom;
  selectedSeats.clear();
  reservationConfirmed = false;

  updatePosterInfo();
  renderSeats();
  updateTotals();
  showMessage(`Sala seleccionada: ${selectedRoom.name} (${selectedRoom.type}).`);
});

confirmBtn.addEventListener("click", () => {
  const qty = getTicketQty();

  if (!selectedMovie) {
    showAlert("error", "Sin película", "Selecciona una película antes de continuar.");
    return;
  }

  if (!selectedRoom) {
    showAlert("error", "Sin sala", "Selecciona una sala antes de confirmar.");
    return;
  }

  if (selectedSeats.size !== qty) {
    showAlert("warning", "Asientos incompletos", "La cantidad de asientos debe coincidir con la cantidad de boletos.");
    return;
  }

  const paymentValidation = validatePayment();
  if (!paymentValidation.ok) {
    showAlert("error", "Datos de pago", paymentValidation.message);
    return;
  }

  const occupiedSeats = getCurrentOccupiedSet();
  const reservedSeats = [...selectedSeats];
  reservedSeats.forEach((seatId) => occupiedSeats.add(seatId));

  const totalGTQ = selectedMovie.priceGTQ * qty;
  const totalUSD = selectedMovie.priceUSD * qty;

  lastReservation = {
    sessionKey: getCurrentSessionKey(),
    movieTitle: selectedMovie.title,
    schedule: selectedMovie.schedule,
    roomName: selectedRoom.name,
    roomType: selectedRoom.type,
    showDate: selectedDay.date,
    showDateISO: selectedDay.isoDate,
    seats: reservedSeats,
    qty,
    totalGTQ,
    totalUSD,
    priceGTQ: selectedMovie.priceGTQ,
    priceUSD: selectedMovie.priceUSD,
    rating: selectedMovie.rating
  };

  reservationConfirmed = true;
  selectedSeats.clear();
  renderSeats();
  updateTotals();

  showMessage(`Reserva confirmada en ${selectedRoom.name}. Asientos: ${reservedSeats.join(", ")}`);
  Swal.fire({
    icon: "success",
    title: "Reserva completada",
    text: "Tu reserva fue registrada correctamente.",
    confirmButtonColor: "#2e6cf0"
  });
});

cancelBtn.addEventListener("click", () => {
  // Si había una reserva confirmada, se liberan asientos solo de su sesión específica.
  if (lastReservation && occupiedBySession.has(lastReservation.sessionKey)) {
    const occupiedSet = occupiedBySession.get(lastReservation.sessionKey);
    lastReservation.seats.forEach((seatId) => occupiedSet.delete(seatId));
    lastReservation = null;
  }

  selectedSeats.clear();
  reservationConfirmed = false;
  ticketQty.value = "1";
  cardName.value = "";
  cardNumber.value = "";
  cardExpiry.value = "";
  cardCvv.value = "";
  renderSeats();
  updateTotals();
  showMessage("Reserva cancelada. Asientos liberados para la sala correspondiente.");
});

function formatDateForTicket(isoDate) {
  if (!isoDate) return "--/--/----";
  const date = new Date(`${isoDate}T00:00:00`);
  return date.toLocaleDateString("es-GT", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function drawPopcornIcon(doc, x, y, scale = 1) {
  // Icono vectorial simple de palomitas para evitar dependencias externas en el PDF.
  const w = 16 * scale;
  const h = 20 * scale;

  doc.setFillColor(220, 45, 45);
  doc.rect(x, y + 6 * scale, w, h, "F");

  doc.setFillColor(245, 235, 210);
  doc.rect(x + 2 * scale, y + 6 * scale, 2 * scale, h, "F");
  doc.rect(x + 6 * scale, y + 6 * scale, 2 * scale, h, "F");
  doc.rect(x + 10 * scale, y + 6 * scale, 2 * scale, h, "F");
  doc.rect(x + 14 * scale, y + 6 * scale, 2 * scale, h, "F");

  doc.setFillColor(247, 222, 146);
  doc.circle(x + 2 * scale, y + 6 * scale, 2 * scale, "F");
  doc.circle(x + 6 * scale, y + 4 * scale, 2.2 * scale, "F");
  doc.circle(x + 10 * scale, y + 5 * scale, 2.1 * scale, "F");
  doc.circle(x + 14 * scale, y + 4.5 * scale, 2 * scale, "F");
  doc.circle(x + 18 * scale, y + 6 * scale, 1.8 * scale, "F");
}

function drawTicket(doc, reservation, seatId, ticketIndex, totalTickets, ticketY) {
  // Plantilla visual inspirada en boleto de cine tradicional con cuerpo + talón lateral.
  const ticketX = 14;
  const ticketW = 182;
  const ticketH = 78;
  const stubX = 152;

  doc.setFillColor(107, 45, 20);
  doc.rect(ticketX, ticketY, ticketW, ticketH, "F");

  doc.setFillColor(245, 235, 210);
  doc.rect(ticketX + 3, ticketY + 3, ticketW - 6, ticketH - 6, "F");

  doc.setDrawColor(136, 90, 56);
  doc.setLineWidth(0.5);
  doc.rect(ticketX + 3, ticketY + 3, ticketW - 6, ticketH - 6);

  doc.setDrawColor(120, 80, 48);
  doc.setLineDashPattern([1.5, 1.5], 0);
  doc.line(stubX, ticketY + 3, stubX, ticketY + ticketH - 3);
  doc.setLineDashPattern([], 0);

  doc.setFillColor(107, 45, 20);
  doc.circle(stubX, ticketY + 3, 2.2, "F");
  doc.circle(stubX, ticketY + ticketH - 3, 2.2, "F");

  doc.setTextColor(55, 35, 23);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("BOLETO DE CINE", ticketX + 34, ticketY + 20);

  doc.setFontSize(10);
  doc.setTextColor(120, 70, 40);
  doc.text("CINEMA RESERVA PRO", ticketX + 34, ticketY + 27);

  // Imagen representativa (palomitas) integrada al diseño del boleto.
  drawPopcornIcon(doc, ticketX + 10, ticketY + 8, 0.9);

  doc.setTextColor(55, 35, 23);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("PELÍCULA:", ticketX + 10, ticketY + 36);
  doc.text("FECHA:", ticketX + 10, ticketY + 44);
  doc.text("HORA:", ticketX + 55, ticketY + 44);
  doc.text("SALA:", ticketX + 95, ticketY + 44);
  doc.text("ASIENTO:", ticketX + 10, ticketY + 52);
  doc.text("TIPO:", ticketX + 55, ticketY + 52);

  doc.setFont("helvetica", "normal");
  doc.text(reservation.movieTitle.slice(0, 42), ticketX + 35, ticketY + 36);
  doc.text(formatDateForTicket(reservation.showDateISO), ticketX + 28, ticketY + 44);
  doc.text(reservation.schedule, ticketX + 68, ticketY + 44);
  doc.text(reservation.roomName, ticketX + 107, ticketY + 44);
  doc.text(seatId, ticketX + 31, ticketY + 52);
  doc.text(reservation.roomType, ticketX + 67, ticketY + 52);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text(`TICKET ${ticketIndex}/${totalTickets}`, stubX + 9, ticketY + 18);
  doc.text("PELÍCULA", stubX + 9, ticketY + 27);
  doc.text("FECHA", stubX + 9, ticketY + 37);
  doc.text("HORA", stubX + 9, ticketY + 47);
  doc.text("ASIENTO", stubX + 9, ticketY + 57);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text(reservation.movieTitle.slice(0, 18), stubX + 9, ticketY + 31);
  doc.text(formatDateForTicket(reservation.showDateISO), stubX + 9, ticketY + 41);
  doc.text(reservation.schedule, stubX + 9, ticketY + 51);
  doc.text(seatId, stubX + 9, ticketY + 61);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text(`Emitido: ${new Date().toLocaleString("es-GT")}`, ticketX + 10, ticketY + 69);
}

pdfBtn.addEventListener("click", () => {
  if (!reservationConfirmed || !lastReservation) {
    showAlert("info", "PDF no disponible", "Primero confirma una reserva para generar el boleto PDF.");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF("p", "mm", "a4");

  // Se colocan 3 boletos por hoja; el 4to comienza en una nueva página.
  const slotsPerPage = 3;
  const firstTicketY = 12;
  const slotHeight = 86;

  lastReservation.seats.forEach((seatId, index) => {
    if (index > 0 && index % slotsPerPage === 0) {
      doc.addPage();
    }

    const slotIndex = index % slotsPerPage;
    const ticketY = firstTicketY + slotIndex * slotHeight;
    drawTicket(doc, lastReservation, seatId, index + 1, lastReservation.seats.length, ticketY);
  });

  const fileName = `boletos_${lastReservation.movieTitle.replace(/\s+/g, "_")}_${lastReservation.roomName.replace(/\s+/g, "_")}.pdf`;
  doc.save(fileName);

  showMessage(`PDF generado con ${lastReservation.seats.length} boleto(s), uno por asiento.`);
});

themeToggle.addEventListener("click", () => {
  const isDark = document.body.getAttribute("data-theme") === "dark";
  if (isDark) {
    document.body.removeAttribute("data-theme");
    localStorage.setItem("cinemaTheme", "light");
    themeToggle.textContent = "Modo Oscuro";
  } else {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("cinemaTheme", "dark");
    themeToggle.textContent = "Modo Claro";
  }
});

function loadTheme() {
  const savedTheme = localStorage.getItem("cinemaTheme");
  if (savedTheme === "dark") {
    document.body.setAttribute("data-theme", "dark");
    themeToggle.textContent = "Modo Claro";
  }
}

cardNumber.addEventListener("input", () => {
  const digits = cardNumber.value.replace(/\D/g, "").slice(0, 16);
  cardNumber.value = digits.replace(/(.{4})/g, "$1 ").trim();
});

cardExpiry.addEventListener("input", () => {
  const digits = cardExpiry.value.replace(/\D/g, "").slice(0, 4);
  let month = digits.slice(0, 2);
  const year = digits.slice(2);

  // Se normaliza el mes para mantenerlo entre 01 y 12 desde el input.
  if (month.length === 2) {
    const monthNumber = Number(month);
    if (Number.isFinite(monthNumber)) {
      month = String(Math.min(12, Math.max(1, monthNumber))).padStart(2, "0");
    }
  }

  cardExpiry.value = year ? `${month}/${year}` : month;
});

ticketQty.addEventListener("input", () => {
  reservationConfirmed = false;
  updateTotals();
});

function init() {
  loadTheme();

  const dayMovies = getMoviesByDay(selectedDay);
  selectedMovie = dayMovies[0] || null;
  selectedRoom = selectedMovie?.rooms?.[0] || null;

  // Inicializa estructura de ocupación para las sesiones visibles del día inicial.
  dayMovies.forEach((movie) => {
    movie.rooms.forEach((room) => {
      ensureOccupiedSet(selectedDay.key, movie, room);
    });
  });

  renderWeekSchedule();
  renderMovies();
  renderRoomOptions();
  updatePosterInfo();
  renderSeats();
  updateTotals();
}

init();
