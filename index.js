$(function () {
    $('.item-nav').on('click', function () {
        var newId = "#";
        newId += $(this).attr('id');
        newId += 'Title';

        $('.title').attr('class', 'hidden');
        $(newId).attr('class', 'display-1 title animated bounceIn');

        $('.content').attr('class', 'hidden');

        var newClass = '#';
        newClass += $(this).attr('id');
        newClass += 'Container';

        $(newClass).attr('class', 'container content animated fadeInLeft');

    });

    $('#reqres').on('click', function(){

        var ret = document.getElementById('return');
        
        if(ret.children.length > 0){
            var prim = ret.firstElementChild;
            while(prim){
                prim.remove();
                prim = ret.firstElementChild;
            }
        }

        $.ajax({
            url: 'https://reqres.in/api/users',
            type: 'GET',
            data: '',
            success: function (data){
                // // console.log(data.data[1].email);
                // console.log(data.data.length )

                dados = data.data;
                
                dados.forEach(inf => {
                    var ret = document.getElementById('return');
                    
                    var col = document.createElement('div');
                    col.classList.add('col-md-4', 'mb-5');

                    var colcard = document.createElement('div');
                    colcard.classList.add('card');

                    var colbody = document.createElement('div');
                    colcard.classList.add('card-body');

                    var h4 = document.createElement('h4');
                    h4.classList.add('card-title');
                    h4.innerHTML = inf.first_name + " " + inf.last_name;

                    var p = document.createElement('p');
                    p.classList.add('card-text');
                    p.innerHTML = inf.email;

                    var img = document.createElement('img');
                    img.classList.add('card-img-top');
                    img.setAttribute('src', inf.avatar);

                    ret.appendChild(col);
                    col.appendChild(colcard);
                    colcard.appendChild(colbody);
                    colbody.appendChild(h4);
                    colbody.appendChild(img);
                    colbody.appendChild(p);



                });

            },
        });
    });

});