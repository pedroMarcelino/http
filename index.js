$(function () {
    //Altera dinamicamente por classes no html o conteudo do site
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

    //lista Usuarios
    $('#listUsers').on('click', function () {
        clearFields();
        clearReturn();

        //requisição para trazer usuarios
        $.ajax({
            url: 'https://reqres.in/api/users',
            type: 'GET',
            data: '',
            beforeSend: function () {
                $('#img-loading').attr('class', '');
            },
            success: function (data, textStatus, code) {
                $('#img-loading').attr('class', 'hidden');

                swal("" + code.status, "Status Code");
                dados = data.data;
                $('#res-Search').attr('class', 'form-control wSearch mt-5 hidden');
                $('#inp-Search').attr('class', 'form-control wSearch mt-5')

                //exibe no front 
                dados.forEach(inf => {
                    var ret = document.getElementById('return');

                    var col = document.createElement('div');
                    col.classList.add('col-md-3', 'mb-5');

                    var colcard = document.createElement('div');
                    colcard.classList.add('card', 'cardhover');

                    var colbody = document.createElement('div');
                    colcard.classList.add('card-body');

                    var h4 = document.createElement('h4');
                    h4.classList.add('card-title');
                    h4.innerHTML = inf.id + ", " + inf.first_name + " " + inf.last_name;

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
                    code.status = 0;

                });
            },
            error: function (e) {
                $('#img-loading').attr('class', 'hidden');
                console.log(e.status)
                clearReturn();

                swal('' + e.status, "Usuário não encontrado!");
            }
        });
    });

    // faz uma requisição toda vez que digita;
    $("#inp-Search").keyup(function () {
        clearFields();
        clearReturn();

        var valueInp = $(this).val();
        var url = 'https://reqres.in/api/users/' + valueInp;

        if (valueInp == "") {
            $.ajax({
                url: 'https://reqres.in/api/users',
                type: 'GET',
                data: '',
                beforeSend: function () {
                    $('#img-loading').attr('class', '');
                },
                success: function (data, textStatus, code) {
                    $('#img-loading').attr('class', 'hidden');

                    dados = data.data;

                    $('#inp-Search').attr('class', 'form-control wSearch mt-5')

                    //exibe no front 
                    dados.forEach(inf => {
                        var ret = document.getElementById('return');

                        var col = document.createElement('div');
                        col.classList.add('col-md-3', 'mb-5');

                        var colcard = document.createElement('div');
                        colcard.classList.add('card', 'cardhover');

                        var colbody = document.createElement('div');
                        colcard.classList.add('card-body');

                        var h4 = document.createElement('h4');
                        h4.classList.add('card-title');
                        h4.innerHTML = inf.id + ", " + inf.first_name + " " + inf.last_name;

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
                        code.status = 0;

                    });
                },
                error: function (e) {
                    $('#img-loading').attr('class', 'hidden');
                    console.log(e.status)
                    clearReturn();

                    swal('' + e.status, "Usuário não encontrado!");
                }
            });
        } else {
            $.ajax({
                url: url,
                type: 'GET',
                data: '',
                beforeSend: function () {
                    $('#img-loading').attr('class', '');
                },
                success: function (data, textStatus, code) {
                    $('#img-loading').attr('class', 'hidden');
                    dados = data.data;

                    console.log(dados.id)

                    $('#inp-Search').attr('class', 'form-control wSearch mt-5')

                    //exibe no front 
                    var ret = document.getElementById('return');

                    var col = document.createElement('div');
                    col.classList.add('col-md-3', 'mb-5');

                    var colcard = document.createElement('div');
                    colcard.classList.add('card', 'cardhover');

                    var colbody = document.createElement('div');
                    colcard.classList.add('card-body');

                    var h4 = document.createElement('h4');
                    h4.classList.add('card-title');
                    h4.innerHTML = dados.id + ", " + dados.first_name + " " + dados.last_name;

                    var p = document.createElement('p');
                    p.classList.add('card-text');
                    p.innerHTML = dados.email;

                    var img = document.createElement('img');
                    img.classList.add('card-img-top');
                    img.setAttribute('src', dados.avatar);

                    ret.appendChild(col);
                    col.appendChild(colcard);
                    colcard.appendChild(colbody);
                    colbody.appendChild(h4);
                    colbody.appendChild(img);
                    colbody.appendChild(p);
                    code.status = 0;

                },

                error: function (e) {
                    $('#img-loading').attr('class', 'hidden');
                    console.log(e.status)
                    clearReturn();

                    swal('' + e.status, "Usuário não encontrado!");
                }
            });
        }

    });

    //lista os resoucer
    $('#listResource').on('click', function () {
        clearFields();
        clearReturn();
        $('#inp-Search').attr('class', 'form-control wSearch mt-5 hidden');
        $('#res-Search').attr('class', 'form-control wSearch mt-5 ');

        $.ajax({
            url: 'https://reqres.in/api/unknown',
            type: 'GET',
            data: '',
            beforeSend: function () {
                $('#img-loading').attr('class', '');
            },
            success: function (data, textStatus, code) {
                $('#img-loading').attr('class', 'hidden');

                dados = data.data;

                swal('' + code.status, 'Satus Code');

                dados.forEach(inf => {
                    var ret = document.getElementById('return');

                    var col = document.createElement('div');
                    col.classList.add('col-md-3', 'mb-5');

                    var colcard = document.createElement('div');
                    colcard.classList.add('card', 'cardhover');

                    var colbody = document.createElement('div');
                    colcard.classList.add('card-body');

                    var h4 = document.createElement('h6');
                    h4.classList.add('card-title');
                    h4.innerHTML = inf.id + ", " + inf.name + " / " + inf.year;

                    var p = document.createElement('p');
                    p.classList.add('card-text');
                    p.innerHTML = inf.color + ' / ' + inf.pantone_value;

                    var divColor = document.createElement('div');
                    divColor.classList.add('div-color');
                    divColor.setAttribute('style', 'background:' + inf.color);

                    ret.appendChild(col);
                    col.appendChild(colcard);
                    colcard.appendChild(colbody);
                    colbody.appendChild(h4);
                    colbody.appendChild(divColor);
                    colbody.appendChild(p);
                    code.status = 0;
                });
            },
        });
    });

    $("#res-Search").keyup(function () {
        clearFields();
        clearReturn();

        var valueInp = $(this).val();
        var url = 'https://reqres.in/api/unknown/' + valueInp;

        if (valueInp == "") {
            $.ajax({
                url: 'https://reqres.in/api/unknown',
                type: 'GET',
                data: '',
                beforeSend: function () {
                    $('#img-loading').attr('class', '');
                },
                success: function (data, textStatus, code) {
                    $('#img-loading').attr('class', 'hidden');

                    dados = data.data;

                    swal('' + code.status, 'Satus Code');

                    dados.forEach(inf => {
                        var ret = document.getElementById('return');

                        var col = document.createElement('div');
                        col.classList.add('col-md-3', 'mb-5');

                        var colcard = document.createElement('div');
                        colcard.classList.add('card', 'cardhover');

                        var colbody = document.createElement('div');
                        colcard.classList.add('card-body');

                        var h4 = document.createElement('h6');
                        h4.classList.add('card-title');
                        h4.innerHTML = inf.id + ", " + inf.name + " / " + inf.year;

                        var p = document.createElement('p');
                        p.classList.add('card-text');
                        p.innerHTML = inf.color + ' / ' + inf.pantone_value;

                        var divColor = document.createElement('div');
                        divColor.classList.add('div-color');
                        divColor.setAttribute('style', 'background:' + inf.color);

                        ret.appendChild(col);
                        col.appendChild(colcard);
                        colcard.appendChild(colbody);
                        colbody.appendChild(h4);
                        colbody.appendChild(divColor);
                        colbody.appendChild(p);
                        code.status = 0;
                    });
                },
            });
        } else {
            $.ajax({
                url: url,
                type: 'GET',
                data: '',
                beforeSend: function () {
                    $('#img-loading').attr('class', '');
                },
                success: function (data, textStatus, code) {
                    clearReturn();
                    $('#img-loading').attr('class', 'hidden');

                    dados = data.data;

                    console.log(dados)

                    var ret = document.getElementById('return');

                    var col = document.createElement('div');
                    col.classList.add('col-md-3', 'mb-5');

                    var colcard = document.createElement('div');
                    colcard.classList.add('card', 'cardhover');

                    var colbody = document.createElement('div');
                    colcard.classList.add('card-body');

                    var h4 = document.createElement('h6');
                    h4.classList.add('card-title');
                    h4.innerHTML = dados.id + ", " + dados.name + " / " + dados.year;

                    var p = document.createElement('p');
                    p.classList.add('card-text');
                    p.innerHTML = dados.color + ' / ' + dados.pantone_value;

                    var divColor = document.createElement('div');
                    divColor.classList.add('div-color');
                    divColor.setAttribute('style', 'background:' + dados.color);

                    ret.appendChild(col);
                    col.appendChild(colcard);
                    colcard.appendChild(colbody);
                    colbody.appendChild(h4);
                    colbody.appendChild(divColor);
                    colbody.appendChild(p);

                },

                error: function (e) {
                    $('#img-loading').attr('class', 'hidden');
                    console.log(e.status)
                    clearReturn();

                    swal('' + e.status, "Usuário não encontrado!");
                }
            });
        }

    });

    //limpa tudo que tem da div return antes de inserir dnv
    function clearReturn() {
        var ret = document.getElementById('return');

        if (ret.children.length > 0) {
            var prim = ret.firstElementChild;
            while (prim) {
                prim.remove();
                prim = ret.firstElementChild;
            }
        }
    }

    function clearFields() {
        $('#res-Search').attr('class', 'form-control wSearch mt-5 hidden');
        $('#inp-Search').attr('class', 'form-control wSearch mt-5 hidden')
        $('#createPOST').attr('class', 'row hidden');
        $('#updatePOST').attr('class', 'row hidden');
        $('#patchPOST').attr('class', 'row hidden');
    }

    //exibi a parte do post
    $('#btn-create').on('click', function () {
        clearReturn();
        $('#createPOST').attr('class', 'row hidden');
        $('#updatePOST').attr('class', 'row hidden');
        $('#patchPOST').attr('class', 'row hidden');
        $('#createPOST').attr('class', 'row');
    });

    //exibi a parte do update
    $('#btn-update').on('click', function () {
        clearReturn();
        $('#createPOST').attr('class', 'row hidden');
        $('#updatePOST').attr('class', 'row hidden');
        $('#patchPOST').attr('class', 'row hidden');
        $('#updatePOST').attr('class', 'row');

    });

    //exibi a parte do patch
    $('#btn-patch').on('click', function () {
        clearReturn();
        $('#createPOST').attr('class', 'row hidden');
        $('#updatePOST').attr('class', 'row hidden');
        $('#patchPOST').attr('class', 'row hidden');
        $('#patchPOST').attr('class', 'row');
    });

    //req POST
    $('#sendPOST').on('click', function () {
        var name = $('#inp-name').val();
        var job = $('#inp-job').val();

        dados = {
            'name': name,
            'job': job
        }

        $.ajax({
            url: 'https://reqres.in/api/users',
            type: 'POST',
            data: dados,
            dataType: 'JSON',
            success: function (data) {
                console.log(data);
                var id = document.getElementById('id');
                var job = document.getElementById('job');
                var name = document.getElementById('name');
                var create = document.getElementById('create');

                id.innerHTML = 'ID: ' + data.id;
                job.innerHTML = 'Emprego: ' + data.job;
                name.innerHTML = 'Name: ' + data.name;
                create.innerHTML = 'Data de Criação : ' + data.createAt;
            },
            error: function (e) {
                swal('' + e.status, "Status Code");
            }
        });
    });

    //req Update
    $('#btn-updatePOST').on('click', function () {
        var name = $('#inp-name2').val();
        var job = $('#inp-job2').val();

        dados = {
            'name': name,
            'job': job
        }

        $.ajax({
            url: 'https://reqres.in/api/users/2',
            type: 'PUT',
            data: dados,
            dataType: 'JSON',
            success: function (data) {
                console.log(data);
                var job = document.getElementById('job2');
                var name = document.getElementById('name2');
                var create = document.getElementById('create2');

                job.innerHTML = 'Emprego: ' + data.job;
                name.innerHTML = 'Name: ' + data.name;
                create.innerHTML = 'Data de Criação : ' + data.updatedAt;
            },
            error: function (e) {
                swal('' + e.status, "Status Code");
            }
        });
    });

    //req Patch
    $('#btn-patchPOST').on('click', function () {
        var name = $('#inp-name3').val();
        var job = $('#inp-job3').val();

        dados = {
            'name': name,
            'job': job
        }

        $.ajax({
            url: 'https://reqres.in/api/users/2',
            type: 'PATCH',
            data: dados,
            dataType: 'JSON',
            success: function (data) {
                console.log(data);
                var job = document.getElementById('job3');
                var name = document.getElementById('name3');
                var create = document.getElementById('create3');

                job.innerHTML = 'Emprego: ' + data.job;
                name.innerHTML = 'Name: ' + data.name;
                create.innerHTML = 'Data de Criação : ' + data.updatedAt;
            },
            error: function (e) {
                clearReturn();
                swal('' + e.status, "Status Code");
            }
        });
    });

    //req delete
    $('#btn-delete').on('click', function () {
        $.ajax({
            url: 'https://reqres.in/api/users/2',
            type: 'DELETE',
            data: '',
            success: function (data, textStatus, code) {
                console.log(code);
                swal('' + code.status, "Status Code");
            },
            error: function (e) {
                clearReturn();
                swal('' + e.status, "Status Code");
            }

        });
    });


});