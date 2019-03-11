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
        $('#modal-title').text('No Boyga Name');
        $('#modal-message').text('Please enter a name for the boyga!');
        $('#modal-box').modal();
    }
});

$('.devour-burger').on('click', function(event) {
    event.preventDefault();

    var name = $('#burger' + $(this).data('id')).val().trim();

    if (name == '') {
        $('#modal-title').text('No Customer Name');
        $('#modal-message').text('Please enter a customer name!');
        $('#modal-box').modal();
    } else {
        $.ajax('/api/burgers/' + $(this).data('id'), {
            type: 'PUT',
            data: { customer_name: name }
        }).then(function(response) {
            location.reload();
        });
    }
});