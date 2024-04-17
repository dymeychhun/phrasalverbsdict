$(document).ready(function () {
  $("#search").focus();
  // get data
  $.get(
    "db/dictdb.json",
    function (data) {
      // console.log(data);
      data.forEach((item) => {
        $("#app").append(
          `<li class="list-group-item list-group-item-action selected" data-def="${item.definitions}">${item.words}</li>`
        );
      });
    },
    "json"
  );

  // select word
  $(document).on("click", ".selected", function () {
    let word = $(this).text();
    let def = $(this).data("def");
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    // console.log(def);
    $("#def").html(
      "<h3 class='text-danger subWord'>" +
        word +
        "</h3>" +
        "<h4 class='text-primary'>" +
        def +
        "</h4>"
    );
  });

  // filter word
  $("#search").on("keyup", function () {
    let value = $(this).val().toLowerCase();
    $("ul li").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
