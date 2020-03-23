Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {

    switch (operator) {
        case '==':
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '===':
            return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '!=':
            return (v1 != v2) ? options.fn(this) : options.inverse(this);
        case '!==':
            return (v1 !== v2) ? options.fn(this) : options.inverse(this);
        case '<':
            return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
            return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this);
        default:
            return options.inverse(this);
    }
});
$(document).ready(function () {
	if (
		location.protocol !== "https:" &&
		location.hostname !== "localhost" &&
		location.hostname !== "127.0.0.1" &&
		location.hostname !== "0.0.0.0"
	) {
		location.replace(
			`https:${location.href.substring(location.protocol.length)}`
		);
	}
	var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1TvDQjbYOaIBCXUpN8g0Fa6rU3YCxBiBDQM5EtD9Tlv8/edit#gid=0';
	var HRTemplate = Handlebars.compile($('#hr-template').html());

	// Load top five HR leaders.
	$('#hr').sheetrock({
	url: mySpreadsheet,
	query: "select A,B,C,D,E,F,G,H,I,J,K,L,M,N,O",
	rowTemplate: HRTemplate
	});
});



function sendWhatsapp(){
	let link = "https://www.praatbox.be/"+generatePraatboxURL(getParameterByName("wrd_a"), getParameterByName("wrd_b"), getParameterByName("wrd_c"));
	window.open("https://api.whatsapp.com/send?text="+escape(link), '_blank');
}
