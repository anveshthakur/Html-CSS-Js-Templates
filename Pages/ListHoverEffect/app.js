const cursor = document.querySelector('.cursor');
documen.addEventListener('mousemove', (e) =>{
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
})
