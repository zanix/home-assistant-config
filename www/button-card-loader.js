const ORIGINAL_URL = "/hacsfiles/button-card/button-card.js?hacstag=146194325411";
// wait until HA frontend is loaded and components are registered
customElements.whenDefined("hui-error-card").then(() => {
  // then import the original button-card.js
  return import(ORIGINAL_URL);
})
.catch(e => console.error("Failed to load button-card:", e));
