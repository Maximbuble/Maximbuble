var name = prompt('Введите ваше имя');
alert('Привет ' + name);

$('#text').html('Хочешь попутешествовать?');

$('#first_ans').html('А у меня есть варианты?');
$('#second_ans').hide(); // свойсвто скрыть блок по id
$('#third_ans').hide();

 var position = 0;
$( "#first_ans" ).click(function() {
        switch(position){
                case 0:// попросить меню

                        $('#text').html('Конечно нет. Ну так что куда держим путь?');

                        $('#first_ans').html('Отправиться на остров');
                        $('#second_ans').html('Отправиться в город');

                        $('#second_ans').show();
                         position = 1;
                        break;
                case 1:

                        $('#text').html('Что будем делать?');

                        $('#first_ans').html('Исследовать остров');
                        $('#second_ans').html('Отправиться в какую-то пещеру');

                        position = 2;

                        break;
                case 2:// Кофе

                        $('#text').html('Ты отправился исследовать остров');

                        $('#first_ans').html('Дальше...');
                        $('#second_ans').hide();
                        $('#third_ans').hide();

                        position = 3;

                        break;
                case 3:

                        $('#text').html('Ты наткнулся на каких-то людей');

                        $('#first_ans').html('Дальше...');
                        $('#second_ans').hide();
                        $('#third_ans').hide();

                        
                        position = 4;

                        break;
                case 4:

                        $('#text').html('О нет... Это оказались пираты. ' + name + ' что будем делать???');

                        $('#first_ans').html('Бежать');
                        $('#second_ans').html('Защищаться');
                        $('#third_ans').hide();

                        $('#second_ans').show();
                        position = 5;

                        break;
                case 5:
                        $('#text').html('Ты бежишь очень быстро, но так ты не скроишься от них');

                        $('#first_ans').html('Спрятаться за валун');
                        $('#second_ans').html('Бежать дальше');
                        $('#third_ans').hide();

                        position = 24;

                        break;
                
              
                case 10:

                        $('#text').html('Ты поставил блок, и вмазал бомжу прямо в лицо');

                        $('#first_ans').html('Дальше...');
                        $('#second_ans').hide();
                        $('#third_ans').hide();

                        position = 11;

                        break;
                case 11:

                        $('#text').html('Он почувствовал эту боль и понял, что  один не справиться');

                        $('#first_ans').html('Дальше...');
                        $('#second_ans').hide();
                        $('#third_ans').hide();

                        position = 12;

                        break;
                case 8:

                        $('#text').html('Ты встретил бомжа');

                        $('#first_ans').html('Дальше...');
                        $('#second_ans').hide();
                        $('#third_ans').hide();

                        position = 9;

                        break;
                case 9:

                        $('#text').html('Он был пьян, и напал на тебя');

                        $('#first_ans').html('защищяться');
                        $('#second_ans').html('бежать');
                        $('#third_ans').hide();

                        $('#second_ans').show();
                        position = 10;

                        break;
                case 12:

                        $('#text').html('Он позвал своих друзей и они вместе тебя побили');

                        $('#first_ans').hide();
                        $('#second_ans').hide();
                        $('#third_ans').hide();

                        position = 567;

                        break;
                case 7:

                        $('#text').html('Ты пришел в бар');

                        $('#first_ans').html('Заказать водки');
                        $('#second_ans').html('Заказать воды');
                        $('#third_ans').hide();

                        position = 13;

                        break;
                case 13:

                        $('#text').html('Бармен дал вам 100 грамм');

                        $('#first_ans').html('выпить');
                        $('#second_ans').html('не пить');
                        $('#third_ans').hide();

                        $('#second_ans').show();
                        position = 14;

                        break;
                case 14:

                        $('#text').html('Ты выпил ');

                        $('#first_ans').hide();
                        $('#second_ans').hide();
                        $('#third_ans').hide();

                        position = 7;

                        break;
                case 16:

                        $('#text').html('Тебя встретили его друзья и остановили тебя, бомж подбежал и они все вместе тебя отлупили...');

                        $('#first_ans').hide();
                        $('#second_ans').hide();
                        $('#third_ans').hide();

                        position = 987;

                        break;    
                case 17:

                        $('#text').html('Ты увидел гробницу с сокровищем');

                        $('#first_ans').html('Взять багатство');
                        $('#second_ans').html('Не брать');
                        $('#third_ans').hide();

                        $('#second_ans').show();
                        position = 18;

                        break;   
                case 19:

                        $('#text').html('Ты пошел глубже в пещеру');

                        $('#first_ans').html('Дальше...');
                        $('#second_ans').hide();
                        $('#third_ans').hide();

                        position = 20;

                        break;
                case 20:

                        $('#text').html('Тихо... Тут людоеды');

                        $('#first_ans').html('Окуратно пройти через них');
                        $('#second_ans').html('Просто пройти');
                        $('#third_ans').hide();

                        position = 21;

                        break;
                case 18:

                        $('#text').html('Ты розбагател!!! Удачное путешествие!');

                        $('#first_ans').hide();
                        $('#second_ans').hide();
                        $('#third_ans').hide();

                        position = 2342;

                        break;
                case 21:

                        $('#text').html('Ты прошел... Ура тебя не заметили');

                        $('#first_ans').html('Идти дальше');
                        $('#second_ans').hide();
                        $('#third_ans').hide();

                        position = 22;

                        break;
                case 22:

                        $('#text').html('Увииииииииииии... Ты упал в пропасть');

                        $('#first_ans').hide();
                        $('#second_ans').hide();
                        $('#third_ans').hide();

                        position = 2153;

                        break;
                case 24:

                        $('#text').html('Ты спрятался за валун');

                        $('#first_ans').html('Пройти дальше в полуприсяде');
                        $('#second_ans').html('Восстановить силы и бежать со всей силы');
                        $('#third_ans').hide();

                        position = 25;

                        break;
                case 25:

                        $('#text').html('Ты прошел и скрылся от них. Повезло, ты принял решение больше не рисковать');

                        $('#first_ans').hide();
                        $('#second_ans').hide();
                        $('#third_ans').hide();

                        position = 6876;

                        break;
                case 26:

                        $('#text').html('Один взмах и ты без головы...');

                        $('#first_ans').hide();
                        $('#second_ans').hide();
                        $('#third_ans').hide();

                        position = 21;

                        break;
                case 29:

                        $('#text').html('Ты выпил еще. А потом еще. И еще и еще и еще и еще... БУУУУМ... Ты лопнул');

                        $('#first_ans').hide();
                        $('#second_ans').hide();
                        $('#third_ans').hide();

                        position = 1923;

                        break;
        }
});

$( "#second_ans" ).click(function() {
         switch(position){
                case 1:

                        $('#text').html('Окей, мы приехали в город. Что будем делать?');

                        $('#first_ans').html('Отправиться в местный бар');
                        $('#second_ans').html('Погулять по улицам');
                        $('#third_ans').hide();

                        position = 7;

                        break;
                case 2:

                        $('#text').html('Ты пошел в пещеру');

                        $('#first_ans').html('Дальше...');
                        $('#second_ans').hide();
                        $('#third_ans').hide();

                        position = 17;

                        break;
                case 5:

                        $('#text').html('Пираты достали сабли');

                        $('#first_ans').html('0_0');
                        $('#second_ans').hide();
                        $('#third_ans').hide();

                        position = 26;

                        break;
                case 7:

                        $('#text').html('Решили, пойдем гулять');

                        $('#first_ans').html('Дальше...');
                        $('#second_ans').hide();
                        $('#third_ans').hide();

                        position = 8;

                        break;
                case 10:

                        $('#text').html('Ты бежишь со всей силы');

                        $('#first_ans').html('Дальше...');
                        $('#second_ans').hide();
                        $('#third_ans').hide();

                        position = 16;

                        break;
                case 14:

                        $('#text').html('Ты не выпил, а дал какому-то другому человеку. Его понесло и он отключился');

                        $('#first_ans').hide();
                        $('#second_ans').hide();
                        $('#third_ans').hide();

                        position = 15;

                        break;
                case 18:

                        $('#text').html('Ты решил не брать багатство');

                        $('#first_ans').html('Отправиться глубже в пещеру');
                        $('#second_ans').html('Выйти из пещеры');
                        $('#third_ans').hide();

                        position = 19;

                        break;
                case 21:

                        $('#text').html('Они услышали тебя и скоро ты отправишься на шашлык');

                        $('#first_ans').hide();
                        $('#second_ans').hide();
                        $('#third_ans').hide();

                        position = 17432;

                        break;
                case 19:

                        $('#text').html('');

                        $('#first_ans').html('Выйти');
                        $('#second_ans').hide();
                        $('#third_ans').hide();

                        position = 1;

                        break;
                case 24:

                        $('#text').html('Ты устал и был пойман пиратами');

                        $('#first_ans').hide();
                        $('#second_ans').hide();
                        $('#third_ans').hide();

                        position = 21;

                        break;
                        case 20:

                        $('#text').html('Тихо... Тут людоеды');

                        $('#first_ans').html('Окуратно пройти через них');
                        $('#second_ans').hide('Просто пройти');
                        $('#third_ans').hide();

                        position = 21;

                        break;
                case 25:

                        $('#text').html('Просто гениально... Ты бежал, но был пойман из-за своей невыносливости');

                        $('#first_ans').hide();
                        $('#second_ans').hide();
                        $('#third_ans').hide();

                        position = 2134;

                        break;
                case 13:

                        $('#text').html('Вода ис очень вкусная');

                        $('#first_ans').html('Попросить еще');
                        $('#second_ans').html('Хватит, иначе лопну');
                        $('#third_ans').hide();

                        position = 29;

                        break;
                case 29:

                        $('#text').html('Ты угадал, ведь если бы ты выпил БОЛЬШЕ, ты бы лопнул');

                        $('#first_ans').hide();
                        $('#second_ans').hide();
                        $('#third_ans').hide();

                        position = 19324;

                        break;
        }

});
$( "#third_ans" ).click(function() {
        switch(position){
                case 0:





                        break;
        }
});