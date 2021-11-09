//El usuario hace click en nav/link
$("nav a").on("click", function (e) {
  //Detiene la carga del nuevo enlace
  e.preventDefault();
  //Obtiene el valor de href
  var url = this.href;

  //Borra el indicador current actual
  $("nav a.current").removeClass("current");
  //Añade nuevo indicador current
  $(this).addClass("current");

  //Borra el contenido antiguo
  $("#contenido").remove();

  //Añade el contenido nuevo

  $("#content")
    .load(url + " #contenido")
    .hide()
    .fadeIn("slow");
});
