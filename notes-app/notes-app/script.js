
// ================== SELECT ELEMENTS ==================
const addBtn = document.getElementById("addBtn");
const overlay = document.getElementById("formOverlay");
const form = document.getElementById("noteForm");
const notesWrapper = document.querySelector(".notes-wrapper");

// ================== OPEN FORM ==================
addBtn.addEventListener("click", () => {
  overlay.style.display = "flex";
});

// ================== CLOSE FORM ON BACKGROUND CLICK ==================
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.style.display = "none";
  }
});

// ================== FORM SUBMIT ==================
form.addEventListener("submit", (e) => {
  e.preventDefault();   // stop page reload

  // get form values
  const name = document.getElementById("name").value.trim();
  const hometown = document.getElementById("hometown").value.trim();
  const bookings = document.getElementById("bookings").value.trim();
  const time = document.getElementById("time").value;
  const noteText = document.getElementById("noteText").value.trim();

  if (!name || !hometown) {
    alert("Name and Hometown are required");
    return;
  }

  // create new card
  const noteCard = document.createElement("div");
  noteCard.classList.add("note-card");

  noteCard.innerHTML = `
    <div class="float-left">
      <i class="fa-solid fa-plus"></i>
    </div>

    <div class="float-right">
      <i class="fa-solid fa-chevron-up"></i>
      <i class="fa-solid fa-chevron-down"></i>
    </div>

    

    <div class="card-body">
      <div class="avatar">
        <i class="fa-solid fa-user"></i>
      </div>

      <h3>${name}</h3>
      <p class="muted">${hometown}</p>

      <div class="meta flex justify-between mt-3 text-sm">
        <span>📘 ${bookings || 0} Bookings</span>
        <span>⏱ ${time || "--:--"}</span>
      </div>

      <p class="note-text mt-2 text-slate-300 text-sm">${noteText}</p>

      <div class="actions flex gap-2 mt-3">
        <button class="call flex-1 flex items-center justify-center gap-1">
          <i class="fa-solid fa-phone"></i> Call
        </button>
        <button class="msg flex-1 flex items-center justify-center gap-1">
          <i class="fa-solid fa-message"></i> Message
        </button>
      </div>

      <div class="color-tabs flex justify-center gap-2 mt-3">
        <span class="red"></span>
        <span class="blue"></span>
        <span class="green"></span>
        <span class="orange"></span>
      </div>
    </div>
  `;

  // add card to page
  notesWrapper.appendChild(noteCard);

  // reset form + close overlay
  form.reset();
  overlay.style.display = "none";
});
