//your code here
const imagesClass = ['img1','img2','img3','img4','img5'];
let selectedImages = [];
const container = document.getElementById('img-container');
const resetBtn = document.getElementById('reset');
const verifyBtn = document.getElementById('verify');
const resultP = document.getElementById('para');

function start(){
	container.innerHTML = "";
	selectedImages = [];
	resetBtn.style.display = "none";
	verifyBtn.style.display = "none";
	resultP.innerText = "";

	const randomDuplicate = imagesClass[Math.floor(Math.random()*imagesClass.length)];
	const imagesToShow = [...imagesClass,randomDuplicate];

	shuffle(imagesToShow);
	imagesToShow.forEach((className,index)=>{
		const img = document.createElement('img');
		img.className = className;
		img.setAttribute('data-id',index);
		img.addEventListener('click',handleImageClick);
		container.appendChild(img);
	});
}
function shuffle(array) {
	for(let i=array.length-1;i>0;i--){
		const j = Math.floor(Math.random()*(i+1));
		[array[i], array[j]] = [array[j],array[i]];
	}
}
function handleImageClick(e) {
	const clickedImg = e.target;
	if(selectedImages.includes(clickedImg))return;
	if(selectedImages.length>=2)return;
	clickedImg.classList.add('selected');
	selectedImages.push(clickedImg);

	if(selectedImages.length ===1){
		resetBtn.style.display = "block";
	}
	if(selectedImages.length === 2){
		verifyBtn.style.display = "block";
	}
}
verifyBtn.addEventListener('click',()=>{
	verifyBtn.style.display = "none";
	const firstSelection = selectedImages[0];
	const secondSelection = selectedImages[1];
	if(firstSelection.className === secondSelection.className){
		resultP.innerText = "You are a human. Congratulations!";
		resultP.style.color = "green";
	}else{
		resultP.innerText = "We can't verify you as a human. You selected the non-identical tiles."
		resultP.style.color = "red";
	}
});
resetBtn.addEventListener('click',start);
window.onload = start;





