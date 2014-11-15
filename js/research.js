var research_results = document.getElementById('research_results');

for(i in research.results) {
  var result = '<tr class="'+research.results[i].klasa+'">';

  result += '<td>'+research.results[i].sygnatura_czasowa+'</td>' +
            '<td>'+research.results[i].wiek+'</td>' +
            '<td>'+research.results[i].inicjacja+'</td>' +
            '<td>'+research.results[i].wyksztalcenie+'</td>' +
            '<td>'+research.results[i].orientacja_seksualna+'</td>' +
            '<td>'+research.results[i].stan_cywilny+'</td>' +
            '<td>'+research.results[i].wczesniej_niz_chciala+'</td>' +
            '<td>'+research.results[i].niewielka_stymulacja+'</td>' +
            '<td>'+research.results[i].brak_kontroli+'</td>' +
            '<td>'+research.results[i].emocje+'</td>'+
            '<td>'+research.results[i].punkty+'</td>';
  result.innerHTML += '</tr>';

  research_results.innerHTML += result;
}
