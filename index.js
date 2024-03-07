$('.arrow-image').on('click', function() {
    //$('body').css("color", "red");
    var birthDate = parseFloat($('#input-day').val());
    var birthDate2 = parseFloat($('#input-month').val());
    var birthDate3 = parseFloat($('#input-year').val());

    const today = new Date();
    const yearPresent = today.getFullYear();

    const isValidYear = /^\d{4}$/.test(birthDate3);

    var birthCalc = birthDate3 + "-" + birthDate2 + "-" + birthDate;
    console.log(birthCalc);    

    if (birthDate > 0 && birthDate <= 31 && birthDate2 <= 12 && birthDate3 <= yearPresent && isValidYear ) {
       
        const currentDate = new Date();
        const birthDateObj = new Date(birthCalc);

        //Difference between the current date and birth date
        const ageMillisec = currentDate - birthDateObj;

        //Milliseconds to years, months and days
        const millisecDay = 1000 * 60 * 60 * 24;
        let years = Math.floor(ageMillisec / (millisecDay * 365));
        let remDays = ageMillisec % (millisecDay * 365);
        let months = Math.floor(remDays / (millisecDay  * 30));
        let days = currentDate.getDate() - birthDateObj.getDate();

        if (days < 0){
            months--;
            days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        } 

        if (months < 0) {
            years--;
            months += 12;
        }

        $('.out-1').text(years);
        $('.out-2').text(months);
        $('.out-3').text(days);
        
    } 
    else {
        $('input').css("color", "red");
        $('input').css("border-color", "red");
        $(".invalid").show();

        setTimeout(function() {
            $('input').val("");
            $('input').css("color", "black");
            $('input').css("border-color", "hsl(0, 0%, 86%)");
            $(".invalid").hide();

        }, 2000);
        
        //$('body').css("color", "red");
    }
    
});