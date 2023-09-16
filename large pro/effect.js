const btn1 = document.querySelector(".btn")

btn1.addEventListener("mouseover",(event)=>{
     //It listens for the "mouseover" event, which triggers when the mouse cursor enters the element.
     const x=(event.pageX-btn1.offsetLeft)
     //This calculates the horizontal position of the mouse cursor relative to the button's left edge. event.pageX provides the X-coordinate of
     // the mouse cursor on the entire page, and btn1.offsetLeft gives the horizontal offset of the button relative to the page.
     const y=(event.pageY-btn1.offsetTop) 
     //this calculates the vertical position of the mouse cursor relative to the button's top edge.
     btn1.style.setProperty("--xPos",x + "px")
     //The value of "--xPos" is set to the calculated x position in pixels.
     btn1.style.setProperty("--yPos",y + "px")
    // CSS custom property named "--yPos" on the btn1 element with the calculated y position in pixels.
}) 