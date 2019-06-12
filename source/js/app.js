window.onload = () => {
  var clock = new Clock();
  clock.init();
  document.querySelector('[data-type^="time"]').click();
}