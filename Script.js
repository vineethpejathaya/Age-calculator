let btn_calc = document.querySelector('.button-calc');
let inputDate = document.querySelector('.input-field');
let yearOld, monthOld, dayOld;
let birthDay, birthMonth, birthYear;
let months =[31,28,31,30,31,30,31,31,30,30,30,31];

let year = document.querySelector('.Year-container');
let month = document.querySelector('.month-container');
let day = document.querySelector('.day-container');

btn_calc.addEventListener("click",function(e) {
            
             let currentDate= new Date();
             let inputDateValue = new Date(inputDate.value);
             
             

             birthYear = inputDateValue.getFullYear();
             birthMonth= inputDateValue.getMonth()+1;
             birthDay= inputDateValue.getDate();

             currentYear = currentDate.getFullYear();
             currentMonth = currentDate.getMonth()+1;
             currentDay = currentDate.getDate();
             console.log(currentDay);

             leapYear(currentYear)  ;   

             if ( birthYear > currentYear || currentYear == birthYear && birthMonth > currentMonth 
                || currentYear == birthYear && birthMonth == currentMonth && birthDay > currentDay)
            
            {

                alert("Not Born yet");
            }
            
            
            yearOld = currentYear - birthYear;

            if( currentMonth >= birthMonth)
            {
                monthOld = currentMonth - birthMonth;
            }
            else
            {
                yearOld--;
                monthOld = 12 - (birthMonth - currentMonth) ; 
            }

            if(currentDay >= birthDay)
            {
                dayOld = currentDay - birthDay;
            }
            else
            {
                monthOld--;
                dayOld = (months[currentMonth-1] - birthDay ) + currentDay ;
            }
            
            year.innerHTML = yearOld;
            month.innerHTML = monthOld;
            day.innerHTML = dayOld;
})


function leapYear(currentYear)
            {
                if(currentYear % 4 ==0|| currentYear %100 == 0 && currentYear % 400 == 0)
                {
                    months[1]=29;
                }
            };
