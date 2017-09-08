$(() => {
    const newHomes = [
        { address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500" },
        { address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000" },
        { address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900" },
        { address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000" }
    ];
    $("#addHome").removeClass("btn-danger").addClass("btn-success");
    $('h1').addClass('text-center');
    const $newLink = $('<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com<a>');
    $newLink.appendTo('body');
    $('#zillowLink').attr("target", "_blank");

    //add Home
    $('#addHome').on('click', ($event) => {
        //store last home element from newHomes array into newHome and remove from array
        let newHome = newHomes.shift();
        //create new row
        let newRow = $("<tr></tr>");
        //append new row with home data
        $.each(newHome, function(key, value) {
            newRow.append(`<td>${value}</td>`);
        });

        newRow.append('<td><button class="btn btn-xs btn-danger">Remove</button></td>');

        //newRow.append(`<td>${newHome.address}</td><td>${newHome.sf}</td><td>${newHome.bedrooms}</td><td>${newHome.baths}</td><td>${newHome.price}</td><td><button class="btn btn-xs btn-danger">Remove</button></td>`);

        //append new row to end of tbody
        $('tbody').append(newRow);
        //look for array to equal zero remove button
        if (newHomes.length === 0) {
            console.log('end of home array')
            $('#addHome').prop('disabled', true);
        }
    });

    const $removeHome = ($event) => {
        $($event.currentTarget).fadeOut(500, function() {
            $($event.currentTarget).remove();
        });
    };
    $('#homes tbody').on('click', 'tr', $removeHome);

    var cells = $('#homes thead tr').children();
    cells.eq(0).css('color', 'blue');
    cells.eq(4).css('color', 'green');
});