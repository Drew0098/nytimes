var apiKey = 402071e04f184b93b3888403fd208067
var searchTerm = $("#search-term").val();
var numRecords = $("#num-records-select").val();
var startYear = $('#start-year').val();
var endYear = $('#end-year').val();
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=" + searchTerm + "&begin_date=" +
startYear + "0101&end_date=" + endYear + "1231";

$.ajax({
	url: url;
	method: "GET";
	})
	.done(function(response) {

	});