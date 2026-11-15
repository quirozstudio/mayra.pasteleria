const whatsappNumber = "34651025279";
const contactButton = document.querySelector("#whatsapp");

if (contactButton) {
  const contactLink = document.createElement("a");
  const headerLink = document.querySelector(".header-contact");
  const flavor = document.querySelector("#cake-flavor");
  const filling = document.querySelector("#cake-filling");

  function updateWhatsAppLink() {
    const message = ["Hola, Mayra. Me gustaría consultar por una tarta personalizada."];
    if (flavor?.value) message.push("Sabor: " + flavor.value + ".");
    if (filling?.value) message.push("Relleno: " + filling.value + ".");
    const href = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message.join("\n"));
    contactLink.href = href;
    if (headerLink) headerLink.href = href;
  }

  contactLink.className = contactButton.className;
  contactLink.id = contactButton.id;
  contactLink.append(...contactButton.childNodes);
  contactButton.replaceWith(contactLink);
  document.querySelector("#contact-note")?.remove();
  flavor?.addEventListener("change", updateWhatsAppLink);
  filling?.addEventListener("change", updateWhatsAppLink);
  window.addEventListener("pageshow", updateWhatsAppLink);
  updateWhatsAppLink();
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
