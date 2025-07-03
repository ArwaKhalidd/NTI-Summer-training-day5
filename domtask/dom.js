
window.onload = function () {
    
    const navList = document.getElementById('nav');
    navList.style.listStyleType = 'square';
    navList.style.display = 'inline-block';
   
    navList.style.marginLeft = '40px';
    navList.style.textAlign = 'center';

   
    const originalImage = document.querySelector('#header img');

    
    const topRight = originalImage.cloneNode(true);
    topRight.style.position = 'absolute';
    topRight.style.top = '20px';
    topRight.style.right = '20px';
    topRight.style.width = '100px';
    topRight.style.opacity = '0.5';
    document.body.appendChild(topRight);

    
    const bottomLeft = originalImage.cloneNode(true);
    bottomLeft.style.position = 'absolute';
    bottomLeft.style.bottom = '20px';
    bottomLeft.style.left = '20px';
    bottomLeft.style.width = '100px';
    bottomLeft.style.opacity = '0.5';
    document.body.appendChild(bottomLeft);
};