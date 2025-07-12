var $grid =$('.collection-list').isotope({
    // options
});

$('.filter-button-group').on('click','button',function(){
    var filterValue=$(this).attr('data-filter');   // note this is pointer =>button
    restFilterBtns();
    $(this).addClass('active-filter-btn');
    $grid.isotope({filter:filterValue});
})

// another solution with event
// var $grid =$('.collection-list').isotope({
//     // options
// });

// $('.filter-button-group').on('click','button',(e)=>{
//     var filterValue=$(e.currentTarget).attr('data-filter');  // event use
//     $grid.isotope({filter:filterValue});
// })

let filterButtons=$('.filter-button-group').find('button');

function restFilterBtns(){
    filterButtons.each(function(){
        $(this).removeClass('active-filter-btn');
    });
}

