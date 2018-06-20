var topics = ["George Washington", "Andrew Jackson", "Theodore Roosevelt", "John F. Kennedy", "George H. W. Bush",
  "George W. Bush", "Barack Obama", "Donald J. Trump"
];

function addButton(president) {

  $("#buttons").append($('<button data-person=' + "\"" + president + "\"" + '>' + president + '</button>'));
}
addButton(topics[0]);
addButton(topics[1]);
addButton(topics[2]);
addButton(topics[3]);
addButton(topics[4]);
addButton(topics[5]);
addButton(topics[6]);
addButton(topics[7]);







//when submit button is pressed
$("#addPres").on("click", function (event) {
  event.preventDefault();
  var pressname = $("#pres-input").val().trim();
  addButton(pressname)
  console.log(pressname)

});







// when President button is pressed
$(document).on("click", 'button', function () {


  var person = $(this).attr("data-person");



  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person +
    "&api_key=m1AzYVRlJpMnQJKy1J3V12VNRnSjRojX&limit=5";


  $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function (response) {
      console.log(response);
      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div class='item'>");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var personImage = $("<img>");
        personImage.attr("src", results[i].images.fixed_height.url);
        var animate = results[i].images.fixed_height.url;

        gifDiv.prepend(p);
        gifDiv.prepend(personImage);

        $("#gifs-appear-here").prepend(gifDiv);


        // Pausing GIPHS
        var defaultAnimatedSrc = results[i].images.fixed_height.url;
        var static = results[i].images.fixed_height_still.url;


        personImage.attr("src", static);
        personImage.addClass("_Giphy");
        personImage.attr("data-animate", defaultAnimatedSrc);

        personImage.attr("data-state", "still");
        personImage.attr("data-still", static);

      }

      

      // Pause gifs when clicked

      $("img").on("click", function () {
        var state = $(this).attr("data-state");

        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");

        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }

      })


    });

});