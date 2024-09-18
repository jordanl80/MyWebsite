var radius = 300;
var angleSteps = 360 / $('#circle-list li').length;
var baseAngle = 0;

function updateListPositions()
{
    $('#circle-list li').each(function(index, element)
       {
           var angle = baseAngle + (index * angleSteps);
           var center = 150;
           var distance = 100;
           var x = distance * Math.cos(angle * (Math.PI / 180));
         var y = distance * Math.sin(angle * (Math.PI / 180));
           $(element).css({left:center+x, top:center+y});
       });
}

var stepInterval = setInterval(stepAngle, 25);

function stepAngle()
{
    baseAngle++;
    updateListPositions();
}
