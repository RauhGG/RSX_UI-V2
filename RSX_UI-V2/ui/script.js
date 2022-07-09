$(() =>{
        $('#hunger').fadeOut(400)
        $('#thirst').fadeOut(400)
        $('#energy').fadeOut(400)
        $('#shield').fadeOut(400)
        $('#vels').fadeOut(400)
    let iv = false;
    addEventListener('message', (event) => {
        let v = event.data;

        let he = Math.round(v.health)
        let h = Math.round(v.food)
        let t = Math.round(v.water)
        let s = v.stamina
        let e = v.shield
        $('#vida').text(he)
        $('#hambre').text(h)
        $('#sed').text(t)
        $('#stamina').text(s)
        $('#escudo').text(e)
        $('.calles').text(v.calles);

        if (h < 50) {
            $('#hunger').fadeIn(400)
        } else {
            $('#hunger').fadeOut(400)
        }
        if (t < 50) { 
            $('#thirst').fadeIn(400)
        } else {
            $('#thirst').fadeOut(400)
        }
        if (s < 0) {
            $('#energy').fadeIn(400)
        } else {
            $('#energy').fadeOut(400)
        }
        if (e > 0) {
            $('#shield').fadeIn(400)
        } else {
            $('#shield').fadeOut(400)
        }

        inveh(v.inveh)

        if (v.inveh) {
            $('#vels').fadeIn(400)
            $('.kmh').text(Math.round(v.speed))
        } else {
            $('#vels').fadeOut(400)
        }

        if (v.temp < 50) {
            $('.temp').css('color', 'yellow')
        }
         if (v.temp < 30) {
            $('.temp').css('color', 'orange')
        }
        if (v.temp < 10) {
            $('.temp').css('color', 'red')
        }
        if (v.temp > 50) {
            $('.temp').css('color', 'white')
        }

        $('.gas-lvl').text(' ' + Math.round(v.gas) + ' L')

        if (v.sbl) {
            $('.sbelt').css('border-bottom', 'rgb(0, 255, 42) solid .2vw')
        } else {
            $('.sbelt').css('border-bottom', 'rgb(0, 0, 0) solid .2vw')
        }
    });

    function inveh(bool) {
        if (bool) {
            if (!iv) {
                $('#container').animate({left : '+=15vw'}, 400)
                iv = true;
            }
        } else {
            if (iv) {
                $('#container').animate({left : '-=15vw'}, 400)
                iv = false;
            }
        }
    }
})