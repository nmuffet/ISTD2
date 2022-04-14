$(document).ready(function () {

  // set classes
  var color = new Array('orange', 'darkblue', 'teal', 'green');

  var shape = new Array
    ('square', 'tri', 'circle');

  var tri = new Array('tri-up-right', 'tri-up-left', 'tri-down-left');


  // calculate length once, as this will never change
  var colorlength = color.length;
  var shapelength = shape.length;
  var trilength = tri.length;

  function randomShape(target) {



    // select all random classes
    var links = $(target);

    //clear previously added shape classes

    $.each(links, function (key, value) {
      for (var i = 0; i < colorlength; ++i) {
        links.removeClass(color[i]);
      }
    });
      $.each(links, function (key, value) {
        for (var i = 0; i < colorlength; ++i) {
          links.removeClass(shape[i]);
        }
        });

      
          // loop through all a-tags and apply color randomly

          $.each(links, function (key, value) {
            // get random value/class-name from array and add it using the addClass function
            $(value).addClass(shape[Math.floor(Math.random() * shapelength)]);
            $(value).addClass(color[Math.floor(Math.random() * colorlength)]);

          });



          // select all tri classes
          var tris = $('.tri'&&target);

          $.each(links, function (key, value) {
            for (var i = 0; i < trilength; ++i) {
              links.removeClass(tri[i]);
            }
            });

          $.each(tris, function (key, value) {
            // get random value/class-name from array and add it using the addClass function
            // $(value).removeClass('tri');
            $(value).addClass(tri[Math.floor(Math.random() * trilength)]);
          });
        }
              

  randomShape('.random');

        function cycleShape(target) {
          setInterval(() => { randomShape(target) }, 1000);
        }

  cycleShape('.cycle-shape');
      });
