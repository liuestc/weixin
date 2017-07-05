$('#login').click(function(evt){
        evt.preventDefault();

        $.ajax({
            url: '/login',
            type: 'POST',
            data: {
                name: $('#name').val(),
                password: $('#password').val()
            },
            success: function(data){
                if(data.ret_code === 0){
                    location.reload();
                }   
            }
        });
    });