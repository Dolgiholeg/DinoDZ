

/*let otvet = +prompt('какой день недели?')
switch (otvet) {
    case 1:{
        alert('понедельник')
        break
    }
    case 2:{
        alert('вторник')
        break
    }
    case 3:{
        alert('среда')
        break
    }
    case 4:{
        alert('четверг')
        break
    }
    case 5:{
        alert('пятница')
        break
    }
    case 6:{
        alert('суббота')
        break
    }
    case 7:{
        alert('воскресенье')
        break
    }
    default:{
       alert('нет такого')
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let otvet = prompt('задайте вопрос?')
switch (otvet) {
    case ('ПРИВЕТ'):{
        alert('ЗДРАВСТВУЙ')
        break
    }
    case ('ПОКА'):{
        alert('ДО СВИДАНИЯ')
        break
    }
    case ('ПОГОДА'):{
        alert('В ДЕРЕВНЕ ГАДЮКИНО ИДУТ ДОЖДИ')
        break
    }
    case ('АНЕКДОТ'):{
        alert('КОЛОБОК ПОВЕСИЛСЯ')
        break
    }
    case ('ИГРА'): {
        alert('Я ИГРАЮ В СТАЛКЕР')
        break
    }
    default:{
       alert('ЧТО ТЕБЕ НАДОБНО СТАРЧЕ')
    }
}*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).keydown(f1)

function f1() {
    if ($('#dino').classList !== 'jump') {
        $('#dino').addClass('jump')

    }
    setTimeout(
        function () {
            $('#dino').removeClass('jump')
        }, 1000)
}
function f2() {
    let kaktusleft = $('#kaktus').css('left')
    let dinotop = $('#dino').css('top')
    console.log(kaktusleft+'--'+dinotop)
    dinotop = +dinotop.slice(0,-2)
    kaktusleft = +kaktusleft.slice(0,-2)
    if (0<kaktusleft && kaktusleft<50 && dinotop > 330)
        {
        alert('попался на кактус')
        location.replace()

    }}

function f3() {
        let pticaleft = $('#ptica').css('left')
    let dinotop = $('#dino').css('top')
    console.log(pticaleft+'--'+dinotop)
    dinotop = +dinotop.slice(0,-2)
    pticaleft = +pticaleft.slice(0,-2)
    if (0<pticaleft && pticaleft<50 && dinotop < 260){
        alert('попался на птеродактеля')
        location.replace()

    }

}
setInterval(f2,10)
setInterval(f3,10)