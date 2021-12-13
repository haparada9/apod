function getApod(){
    var date = $("#date").val()
    $.ajax({
        type: "GET",
        url: `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`,
        
        success: function (response) {

            var divExplanation = $('<img src="'+response.url+'">, <p>"'+response.explanation+'"</p>')
            

            $("#info-apod").html(divExplanation);

        }
    });
}

