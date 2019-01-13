$(document).ready(() => {

    const train_num = $('#train_num');
    const button = $('#submit');
    

    button.on('click', () => {
        const num = train_num.val();
        fetch(`https://indianrailapi.com/api/v2/PNRCheck/apikey/5717d08eb844cec1ba1cc732511fc24e/PNRNumber/${num}/Route/1/`)
        .then(res => res.json())
        .then(data =>{
            updateData(data);
        });
    })
    
    
    const updateData = (data) => {
        console.log(data)

            $(".train_name").text(data.TrainName)
            $(".train_num").text(data.TrainNumber)

            $(".from").text(data.From)
            $(".to").text(data.To)
            $(".date").text(data.JourneyDate)
            $(".class").text(data.JourneyClass)

            //$(".passengers").text(data.Passangers.forEach(val => val.Passenger))
    }    
})
