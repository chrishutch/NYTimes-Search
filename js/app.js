$(document).ready(function(){
	$('#searchButton').on('click',function(){
	event.preventDefault();

	var wordSubmit = $('#searchTerm').val();
	console.log($('#searchTerm').val());
	var articleNumber = $('#inputState').val();
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
			  for (var i = 0; i < result.response.docs.length; i++){
			  	var well = $('<div>');
			  	var html = $('<a>');
			  	well.addClass('well well-lg');
			  	html.attr('href',result.response.docs[i].web_url);
			  	html.text(result.response.docs[i].headline.main);
			  	well.append(html);
			  	$('#articles').append(well.append(html));
			  	console.log(html);
			  	console.log(result.response.docs[i].web_url);
			  	console.log(result.response.docs[i].headline.main);
			  	console.log(result.response.docs[i].pub_date);
			  }
			  
			})
			});
});