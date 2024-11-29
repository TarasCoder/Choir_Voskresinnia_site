// Adding "active" class to navigation element
const currentPage = window.location.pathname.split("/").pop().toLowerCase();

document.querySelectorAll(".nav-link").forEach((link) => {
  const linkPage = link.getAttribute("href").replace("./", "").toLowerCase();
  if (linkPage === currentPage) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

// Dynamically changing year in footer
let year = document.getElementById("year");
const currentYear = new Date().getFullYear();
year.innerText = currentYear;

// Logic of copying IBAN's to clipboard
let privatAccount = document.getElementById("privatAccount");
let copyPrivat = document.getElementById("copyPrivat");
let monoAccount = document.getElementById("monoAccount");
let copyMono = document.getElementById("copyMono");

if (window.location.pathname.endsWith("/pages/support.html")) {
  copyPrivat.addEventListener("click", () => {
    copyToClipboard(privatAccount);
  });
  copyMono.addEventListener("click", () => {
    copyToClipboard(monoAccount);
  });
  privatAccount.addEventListener("click", () => {
    copyToClipboard(privatAccount);
  });
  monoAccount.addEventListener("click", () => {
    copyToClipboard(monoAccount);
  });
}
function copyToClipboard(bank) {
  navigator.clipboard
    .writeText(bank.innerText)
    .then(() => {
      // Показати тост повідомлення після копіювання
      let copyToast = new bootstrap.Toast(document.getElementById("copyToast"));
      copyToast.show();
    })
    .catch((err) => {
      console.error("Помилка при копіюванні:", err);
    });
}
