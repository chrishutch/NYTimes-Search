$(document).ready(function(){
	$('#searchButton').on('click',function(){
	event.preventDefault();
	$('#searchHeading').text('Search Results:');
	var wordSubmit = $('#searchTerm').val();
	console.log($('#searchTerm').val());
	var articleNumber = $('#inputState').val();
	console.log($('#inputState').val());
	var beginDate = $('#startYear').val();
	var endDate = $('#endYear').val();
	
      var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
			url += '?' + $.param({
			  'api-key': "b7d02bc603134c68bc2d1b24e8849da3",
			  'q': wordSubmit,
			  'fq': articleNumber,
			  'begin_date': beginDate+'0101',
  			  'end_date': endDate+'0101'
			});

			$.ajax({
			  url: url,
			  method: 'GET'
			}).then(function(result) {
			  console.log(result);
			  for (var i = 0; i < articleNumber; i++){
			  	var well = $('<div>');
			  	var html = $('<a>');
			  	var summary = $('<h3>');
			  	well.addClass('well well-lg');
			  	summary.addClass('summaryText');
			  	html.attr('href',result.response.docs[i].web_url);
			  	html.text(result.response.docs[i].headline.main);
			  	summary.text(result.response.docs[i].snippet);
			  	well.append(html).append(summary);
			  	$('#articles').append(well.append(html).append(summary));
			  	console.log(html);
			  	console.log(result.response.docs[i].web_url);
			  	console.log(result.response.docs[i].headline.main);
			  	console.log(result.response.docs[i].pub_date);
			   	console.log(result.response.docs[i].snippet);

			  }
			  
			})
			});
});