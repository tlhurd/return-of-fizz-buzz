'use strict';
// your code here


function main(){
    $('#number-chooser').on('submit', function(event){
        event.preventDefault();
        $('.js-results').empty();
        //Get number input
        let number = $('#number-choice').val();
        console.log(number);
        const results = [];

        for (let i = 1; i <= number; i++){
            //if divisible by 3 & 5 fizzbuzz
            if(i % 15 === 0){
                results.push('<div class = 'fizzbuzz-buzz-item fizzbuzz'><span>fizzbuzz</span></div>');
            }
            //if divisible by 5 buzz
            else if(i % 5 === 0){
                results.push('<div class = 'fizzbuzz-buzz-item buzz'><span>buzz</span></div>');
            }
            //if divisible by 3 fizz
            else if(i % 3 === 0){
                results.push('<div class = 'fizzbuzz-buzz-item fizz'><span>fizz</span></div>');
            }
            //show number
            else {
                results.push('<div class = 'fizzbuzz-buzz-item'><span>`${i}`</span></div>');
            }
        }
        console.log(results);
        $('.js-results').append(results);

    }
};