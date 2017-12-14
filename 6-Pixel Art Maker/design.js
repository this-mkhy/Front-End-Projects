// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  // Your code goes here!
    var height,width,table;

    //the value of height and width
    var height=$("#input_height").val();
    var width=$("#input_width").val();

    var table=$("#pixel_canvas");


    //to create new table, we must delete the prev
    table.children().remove();

    //to create rows and columns
    for (var i=0; i<height ;++i) 
    {
        table.append("<tr></tr>");
        for (var j=0; j<width ;++j) 
        {
            table.children().last().append("<td></td>");
        }
    }

    //make event listener when we click on any cell, color it
    table.on("click","td",function() {
        var color=$("input[type='color']").val();
        $(this).attr("bgcolor",color);
    });
}

//make event listener to make the table makeGrid()
$("input[type='submit']").click(function(e) {
  e.preventDefault(); 
  makeGrid();
});


