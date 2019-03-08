$('#add-burger').on('click', function(event) {
    event.preventDefault();

    if ($('#bn').val().trim() != "") {
        $.ajax('/api/burgers', {
            type: 'POST',
            data: { burger_name: $('#bn').val().trim() }
        }).then(function(response) {
            location.reload();
        });
    } else {
        $('#modal-box').modal();
    }
});

$('.devour-burger').on('click', function(event) {
    event.preventDefault();

    $.ajax('/api/burgers/' + $(this).data('id'), {
        type: 'PUT'
    }).then(function(response) {
        location.reload();
    });
});