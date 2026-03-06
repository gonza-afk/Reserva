// Catálogo ampliado de películas con clasificación, duración, sinopsis y precio en GTQ/USD.
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
    poster: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.vjIwX-mKbnzb8ZOXU9QbbQHaJQ%3Fpid%3DApi&f=1&ipt=5791e3d5dcf323237739091d561a66f3471d62e4ce84535a9a0200dce026ce71&ipo=images",
    synopsis: "Un castor inventor lidera una misión para salvar su bosque usando tecnología reciclada y mucho humor."
  },
  {
    id: 2,
    title: "Interstellar",
    schedule: "15:20",
    duration: 169,
    rating: "TV-PG",
    genre: "Animación / Comedia",
    priceGTQ: 35,
    priceUSD: 4.5,
    poster: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%2Fid%2FOIP.15MKH3stQdVApMybWu9TyQHaKk%3Fpid%3DApi&f=1&ipt=ddaf4e3742003cf89e8657ae7431699d345b0f4397f98e7f5eac141b8e1c0beb&ipo=images",
    synopsis: "Cuando la Tierra se vuelve inhabitable en el futuro, Joseph Cooper, un granjero y expiloto de la NASA, recibe la misión de pilotar una nave espacial, junto con un equipo de investigadores, para encontrar un nuevo planeta para los humanos."
  },
  {
    id: 3,
    title: "Scream 7",
    schedule: "19:40",
    duration: 114,
    rating: "R",
    genre: "Terror / Suspenso",
    priceGTQ: 52,
    priceUSD: 6.7,
    poster: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.4j7r_wxZ-BHb6j0grbKC2AHaK-%3Fpid%3DApi&f=1&ipt=73d1924a4b576afd48e857a1cf5e8cf95ec25888fb8e7c1d5fd270bb98d69684&ipo=images",
    synopsis: "La máscara regresa en una ciudad universitaria donde cada sospechoso guarda una conexión con el pasado."
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
    synopsis: "Una historia intensa sobre segundas oportunidades justo antes de una boda que nunca debió ocurrir."
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
    synopsis: "Dos exmilitares enfrentan una red criminal internacional en una operación contrarreloj."
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
    synopsis: "Una propuesta romántica se convierte en caos cuando las familias descubren secretos de años."
  },
  {
    id: 7,
    title: "Duna: Parte Dos",
    schedule: "17:15",
    duration: 166,
    rating: "PG-13",
    genre: "Ciencia ficción",
    priceGTQ: 56,
    priceUSD: 7.2,
    poster: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.QTpd6oI6MgV2bFhTZXgKNgHaJQ%3Fpid%3DApi&f=1&ipt=a9158caeaaa3adb99e94687dfa557b7a506e00cca0b3d5eb8925f7d566f3f45a&ipo=images",
    synopsis: "Paul Atreides abraza su destino en Arrakis en medio de guerras, profecías y alianzas peligrosas."
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
    synopsis: "Ethan Hunt enfrenta una inteligencia artificial fuera de control con consecuencias globales."
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
    poster: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sonypictures.ca%2Fsites%2Fcanada%2Ffiles%2F2023-08%2FDP_7175931_SPIDER-MANACROSSTHESPIDER-VERSE_2000x3000_HEDkRedShadowKeyArt%2520(1)-min-min.jpg&f=1&nofb=1&ipt=3574e9dcada2114c3d4ab9c3b80523020c1cd0672cac387a9cc4f3d4fb91e327",
    synopsis: "Miles Morales viaja por el multiverso y debe decidir qué significa realmente ser héroe."
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
    synopsis: "Una joven navegante descubre una civilización submarina y una antigua profecía oceánica."
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
    synopsis: "Una hacker y un detective se infiltran en una megacorporación para evitar un colapso digital."
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
    synopsis: "Un pianista y una cantante luchan por su carrera en un club clásico a punto de cerrar."
  }
];

// Definición semanal: cada día muestra cartelera diferente, como cines reales.
const weekSchedule = [
  { key: "hoy", label: "Hoy", date: "5 Mar", movieIds: [1, 2, 3, 4, 5, 6] },
  { key: "manana", label: "Mañana", date: "6 Mar", movieIds: [2, 3, 7, 8, 9, 10] },
  { key: "sabado", label: "Sábado", date: "7 Mar", movieIds: [1, 4, 6, 7, 8, 11] },
  { key: "domingo", label: "Domingo", date: "8 Mar", movieIds: [1, 2, 6, 9, 10, 12] },
  { key: "lunes", label: "Lunes", date: "9 Mar", movieIds: [3, 5, 7, 8, 11, 12] },
  { key: "martes", label: "Martes", date: "10 Mar", movieIds: [1, 2, 4, 9, 10, 12] },
  { key: "miercoles", label: "Miércoles", date: "11 Mar", movieIds: [3, 4, 5, 6, 8, 11] }
];

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

const pricePerTicketEl = document.getElementById("pricePerTicket");
const seatCountEl = document.getElementById("seatCount");
const totalAmountEl = document.getElementById("totalAmount");

const moviePoster = document.getElementById("moviePoster");
const movieTitle = document.getElementById("movieTitle");
const movieSchedule = document.getElementById("movieSchedule");
const moviePrice = document.getElementById("moviePrice");
const movieRating = document.getElementById("movieRating");
const movieDuration = document.getElementById("movieDuration");
const movieSynopsis = document.getElementById("movieSynopsis");

const cardName = document.getElementById("cardName");
const cardNumber = document.getElementById("cardNumber");
const cardExpiry = document.getElementById("cardExpiry");
const cardCvv = document.getElementById("cardCvv");

let selectedDay = weekSchedule[0];
let selectedMovie = null;
let selectedSeats = new Set();
let occupiedSeats = new Set(["A1", "A2", "B5", "C6", "D3", "F8"]);
let reservationConfirmed = false;
let lastReservation = null;

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

function showAlert(icon, title, text) {
  // Wrapper de SweetAlert2 para reutilizar estilo y evitar repetir configuración.
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
      selectedSeats.clear();
      reservationConfirmed = false;
      renderWeekSchedule();
      renderMovies();
      updatePosterInfo();
      renderSeats();
      updateTotals();
      showMessage(`Cartelera actualizada para ${day.label} ${day.date}.`);
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
      <button class="synopsis-btn" type="button" data-synopsis-id="${movie.id}">Ver sinopsis</button>
    `;

    card.addEventListener("click", (event) => {
      // Evita conflicto cuando el usuario solo quiere abrir el modal de sinopsis.
      if (event.target.classList.contains("synopsis-btn")) return;

      selectedMovie = movie;
      selectedSeats.clear();
      reservationConfirmed = false;
      renderMovies();
      updatePosterInfo();
      renderSeats();
      updateTotals();
      showMessage("Película seleccionada. Elige asientos según boletos.");
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

function updatePosterInfo() {
  if (!selectedMovie) {
    moviePoster.src = "";
    movieTitle.textContent = "Sin películas en este día";
    movieSchedule.textContent = "Horario: --:--";
    moviePrice.textContent = "Precio: Q 0.00 / $ 0.00";
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
  movieRating.textContent = selectedMovie.rating;
  movieDuration.textContent = `${selectedMovie.duration} min`;
  movieSynopsis.textContent = selectedMovie.synopsis;
}

function getTicketQty() {
  return Math.max(1, Number(ticketQty.value) || 1);
}

function renderSeats() {
  seatGrid.innerHTML = "";
  const rows = ["A", "B", "C", "D", "E", "F"];

  rows.forEach((row) => {
    for (let col = 1; col <= 8; col += 1) {
      const seatId = `${row}${col}`;
      const seat = document.createElement("button");
      seat.className = "seat";
      seat.type = "button";
      seat.title = `Asiento ${seatId}`;

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

        // Límite estricto: no puede marcar más asientos que boletos comprados.
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

  // Si baja la cantidad de boletos y sobran asientos, se recortan los últimos elegidos.
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

function validatePayment() {
  const nameOk = cardName.value.trim().length > 3;
  const numberOk = cardNumber.value.replace(/\s/g, "").length >= 13;
  const expiryOk = /^\d{2}\/\d{2}$/.test(cardExpiry.value.trim());
  const cvvOk = /^\d{3,4}$/.test(cardCvv.value.trim());
  return nameOk && numberOk && expiryOk && cvvOk;
}

function showMessage(text, type = "ok") {
  message.textContent = text;
  message.style.color = type === "error" ? "var(--danger)" : "var(--ok)";
}

confirmBtn.addEventListener("click", () => {
  const qty = getTicketQty();

  if (!selectedMovie) {
    showAlert("error", "Sin película", "Selecciona una película antes de continuar.");
    return;
  }

  if (selectedSeats.size !== qty) {
    showAlert("warning", "Asientos incompletos", "La cantidad de asientos debe coincidir con la cantidad de boletos.");
    return;
  }

  if (!validatePayment()) {
    showAlert("error", "Datos de pago", "Completa correctamente los datos de la tarjeta.");
    return;
  }

  const reservedSeats = [...selectedSeats];
  reservedSeats.forEach((seatId) => occupiedSeats.add(seatId));

  const totalGTQ = selectedMovie.priceGTQ * qty;
  const totalUSD = selectedMovie.priceUSD * qty;

  // Se guarda un snapshot para que el PDF use datos de la compra confirmada.
  lastReservation = {
    movieTitle: selectedMovie.title,
    schedule: selectedMovie.schedule,
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

  showMessage(`Reserva confirmada para ${selectedMovie.title}. Asientos: ${reservedSeats.join(", ")}`);
  Swal.fire({
    icon: "success",
    title: "Reserva completada",
    text: "Tu reserva fue registrada correctamente.",
    confirmButtonColor: "#2e6cf0"
  });
});

cancelBtn.addEventListener("click", () => {
  // Si ya existía una reserva confirmada, se liberan los asientos para cancelar completamente.
  if (lastReservation && Array.isArray(lastReservation.seats)) {
    lastReservation.seats.forEach((seatId) => occupiedSeats.delete(seatId));
    lastReservation = null;
  }

  selectedSeats.clear();
  reservationConfirmed = false;
  ticketQty.value = "1";
  cardName.value = "";
  cardNumber.value = "";
  cardExpiry.value = "";
  cardCvv.value = "";
  updateTotals();
  renderSeats();
  showMessage("Reserva en curso cancelada. Puedes iniciar otra.");
});

pdfBtn.addEventListener("click", () => {
  if (!reservationConfirmed || !lastReservation) {
    showAlert("info", "PDF no disponible", "Primero confirma una reserva para generar el boleto PDF.");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("Boleto de Cine - Cinema Reserva Pro", 20, 20);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text(`Película: ${lastReservation.movieTitle}`, 20, 35);
  doc.text(`Clasificación: ${lastReservation.rating}`, 20, 43);
  doc.text(`Horario: ${lastReservation.schedule}`, 20, 51);
  doc.text(`Asientos: ${lastReservation.seats.join(", ")}`, 20, 59);
  doc.text(`Boletos: ${lastReservation.qty}`, 20, 67);
  doc.text(`Precio unitario: ${formatGTQ.format(lastReservation.priceGTQ)} / ${formatUSD.format(lastReservation.priceUSD)}`, 20, 75);
  doc.text(`Total pagado: ${formatGTQ.format(lastReservation.totalGTQ)} / ${formatUSD.format(lastReservation.totalUSD)}`, 20, 83);
  doc.text(`Fecha de emisión: ${new Date().toLocaleString("es-GT")}`, 20, 91);

  doc.setDrawColor(70);
  doc.rect(15, 10, 182, 90);

  const fileName = `boleto_${lastReservation.movieTitle.replace(/\s+/g, "_")}.pdf`;
  doc.save(fileName);

  showMessage("Boleto PDF generado correctamente.");
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
  cardExpiry.value = digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
});

ticketQty.addEventListener("input", () => {
  reservationConfirmed = false;
  updateTotals();
});

function init() {
  loadTheme();
  const firstDayMovies = getMoviesByDay(selectedDay);
  selectedMovie = firstDayMovies[0] || null;
  renderWeekSchedule();
  renderMovies();
  updatePosterInfo();
  renderSeats();
  updateTotals();
}

init();
