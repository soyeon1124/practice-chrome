//createElement()와 appendChild() 를 통해 이미지를 삽입하기
const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${(chosenImage)}`;

document.body.appendChild(bgImage);



//가지고 있는 이미지파일과 동일한 이름의 요소들의 배열인 변수 만들어준다.
//배열 요소들이 랜덤하게 반환되는 chosenImage 라는 변수를 만든다.
//createElement() 를 통해 img태그 모습을 가진 코드의 bgImage 라는 변수를 만든다.
//HTML에서 img태그를 작성하듯이 모습을 똑같이 만들어준다.
//appendChild()를 통해 부모요소인 body 안에 bgImage를 삽입해준다.