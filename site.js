// Enter the confirmed WhatsApp number with country code, digits only.
const whatsappNumber = "";

if (/^[1-9]\d{7,14}$/.test(whatsappNumber)) {
  const placeholder = document.querySelector("#whatsapp");
  const link = document.createElement("a");
  const message = "Hola, Mayra. Me gustaría consultar por una tarta personalizada.";
  link.className = placeholder.className;
  link.href = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);
  link.append(...placeholder.childNodes);
  placeholder.replaceWith(link);
  document.querySelector("#contact-note").remove();
}

const lightbox = document.querySelector(".lightbox");
const enlarged = lightbox.querySelector("img");

for (const photo of document.querySelectorAll(".gallery-photo")) {
  photo.addEventListener("click", (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    if (typeof lightbox.showModal !== "function") return;
    event.preventDefault();
    enlarged.src = photo.href;
    enlarged.alt = photo.querySelector("img").alt;
    lightbox.showModal();
  });
}

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});
