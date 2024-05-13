var fgimage;
var bgimage;

function fgimageupload()
{
    var fgimageinput = document.getElementById("fgimageinput");
    fgimage = new SimpleImage(fgimageinput);
    var canvas1 = document.getElementById("canvas1");
    fgimage.drawTo(canvas1);
}
function bgimageupload()
{
    var bgimageinput = document.getElementById("bgimageinput");
    bgimage = new SimpleImage(bgimageinput);
    var canvas2 = document.getElementById("canvas2");
    bgimage.drawTo(canvas2);
}
function CompositeImage()
{
    
}
function ClearCanvas()
{
    
}