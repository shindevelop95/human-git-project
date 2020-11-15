window.addEventListener('load', () => {    
    const item1 = sessionStorage.getItem('ITEM1');
    const item2 = sessionStorage.getItem('ITEM2');
	const item3 = sessionStorage.getItem('ITEM3');
    
    document.getElementById('img1').src = item1;
    document.getElementById('img2').src = item2;
	document.getElementById('img3').src = item3;
})
