let fontOptions = document.querySelector("#fontf"),
  colorOptions = document.querySelector("#color"),
  fontSizeOptions = document.querySelector("#font-size");

document.body.style.fontFamily = "Open Sans";
document.body.style.color = "red";
document.body.style.fontSize = "16px";

/* ====================== Font Family =================== */

if (window.localStorage.getItem("fontFamily")) {
  document.body.style.fontFamily = window.localStorage.getItem("fontFamily");

  fontOptions.value = window.localStorage.getItem("fontFamily");
}

fontOptions.addEventListener("input", function () {
  document.body.style.fontFamily = fontOptions.value;
  window.localStorage.setItem("fontFamily", fontOptions.value);
});

/* ====================== Color ========================= */

if (window.localStorage.getItem("color")) {
  document.body.style.color = window.localStorage.getItem("color");
  colorOptions.value = window.localStorage.getItem("color");
}

colorOptions.addEventListener("input", function () {
  document.body.style.color = colorOptions.value;
  window.localStorage.setItem("color", colorOptions.value);
});

/* ====================== Font Size =================== */

if (window.localStorage.getItem("font-size")) {
  document.body.style.fontSize = window.localStorage.getItem("font-size");
  fontSizeOptions.value = window.localStorage.getItem("font-size");
}

fontSizeOptions.addEventListener("input", function () {
  document.body.style.fontSize = fontSizeOptions.value;
  window.localStorage.setItem("font-size", fontSizeOptions.value);
});
