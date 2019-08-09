// Represents window's on load function
window.onload = () => {

  // Creating new clock object
  var clock = new Clock();
  // Initializing clock object
  clock.init();

  // Clicking time nav link on window's load event
  document.querySelector('[data-type^="time"]').click();
}