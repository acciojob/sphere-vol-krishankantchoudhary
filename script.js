function volume_sphere() {
    //Write your code here
	let radiusInput=document.getElementById("radius").value;  

	let radius=parseFloat(radiusInput);

	let volume;
	if(!NaN(radius) && radius >=0){
		 volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
		volume=volume.toFixed(4);
	}
	else{
		volume="NaN";
	}

	document.getElementById("volume").value=volume;

	return false;
} 


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
