var optionsTrigger = document.querySelector(".options-trigger");
var options = document.querySelector(".options");
var toggleOptions = function () {
  options.classList.toggle("is-visible");
};
optionsTrigger.addEventListener("change", toggleOptions);
