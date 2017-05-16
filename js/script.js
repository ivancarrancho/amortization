jQuery(document).ready(function($){
    $('.cash, .nominal, .interest, .amount').priceFormat({
      prefix: '',
      centsSeparator: ',',
      thousandsSeparator: '.',
    });

    function calculate(period) {
        if(period) {
            years_period = $( ".years_period" ).val();
            console.log(years_period)
        }
    }
    
    $( ".send" ).click(function() {
        name = $( ".name" ).val();
        identifier = $( ".identifier" ).val();
        term = $( ".term" ).val();
        amount = $( ".amount" ).val();
        cash = $( ".cash" ).val();
        nominal = $( ".nominal" ).val();
        interest = $( ".interest" ).val();
        periodicity = $( ".periodicity" ).val();
        period = $( ".period" ).is(':checked');
        calculate(period)
    });

    $( ".period" ).click(function() {
        $('.years_period').fadeToggle();
    });
});