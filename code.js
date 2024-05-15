var fgimage;
var bgimage;
var outputimage;
var canvas1 = document.getElementById("canvas1");
var canvas2 = document.getElementById("canvas2");
function fgimageupload()
{
    var fgimageinput = document.getElementById("fgimageinput");
    fgimage = new SimpleImage(fgimageinput);
    fgimage.drawTo(canvas1);
}
function bgimageupload()
{
    var bgimageinput = document.getElementById("bgimageinput");
    bgimage = new SimpleImage(bgimageinput);
    bgimage.drawTo(canvas2);
}
function CompositeImage()
{  
    if(fgimage==null || !fgimage.complete())
        {
            alert("ForeGround images is Not Uploaded yet")
        }
    if( bgimage == null || !bgimage.complete())
        {
            alert("BackGround images is Not Uploaded yet")
        }
    ClearCanvas()
    outputimage = new SimpleImage(fgimage.getWidth(),fgimage.getHeight())
    for( var pixel of fgimage.values())
        {
            var x = pixel.getX();
            var y = pixel.getY();
            if(pixel.getGreen()>pixel.getRed()+pixel.getBlue())
                {
                    var bgpixel = bgimage.getPixel(x,y);
                    outputimage.setPixel(x,y,bgpixel);
                }
            else
                {
                    outputimage.setPixel(x,y,pixel);
                }
        }
    outputimage.drawTo(canvas2);
}
function ClearCanvas()
{
    var context1 = canvas1.getContext("2d");
     context1.clearRect(0, 0, canvas1.width, canvas1.height);
     var context2 = canvas2.getContext("2d");
     context2.clearRect(0, 0, canvas2.width, canvas2.height);
}