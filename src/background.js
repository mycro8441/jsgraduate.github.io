const images = [

];

const chosenImage = images[Math.floor(Math.random() * images.length)];
console.log(chosenImage);

document.body.style.background = `url(${chosenImage})`;
