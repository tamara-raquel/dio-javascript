//Para fazer a requisição:
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

//Selecionando elementos do DOM
//Botão
const catBtn = document.getElementById('change-cat');
//Imagem
const catImg = document.getElementById('cat');
//Função para carregar as imagens de gatos
const getCats = async () => {
    try{
        //Receber os dados:
        const data = await fetch(BASE_URL);
        //Converter dados para .json:
        const json = await data.json();

        return json.webpurl;
    }
    catch(e){
        console.log(e.message);
    }
};

const loadImg = async () => {
    //Espera o resultado de getCats (url) e retorna no src da imagem
    catImg.src = await getCats();
}

//Listener no botão
catBtn.addEventListener('click', loadImg);

loadImg;

//Mesmo código, sem try catch:
/*
const getCats = async () => {
    const data = await fetch(BASE_URL)
       .then((res) => res.json())
       .catch((e) => console.log(e));
    
    return data.webpurl;
};
*/