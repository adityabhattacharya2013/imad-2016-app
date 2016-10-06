console.log('Loaded!');
var img=document.getElementById("image");
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
    if(marginLeft>=100)
    {
        for(marginLeft=100;marginLeft>0;marginLeft--)
        {
            img.style.marginLeft=marginLeft+'px';
        }
    }
}
img.onclick=function()
{
    var interval=setInterval(moveRight,50); 
};