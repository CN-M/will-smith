let willSmithImages = [
    "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed663d153104f0007d6f014%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D15%26cropX2%3D1047%26cropY1%3D48%26cropY2%3D1080",
    "https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/07/will-smith-foto.jpg",
    'https://www.cliccamaqua.com.br/images/noticias/img_57169_foto_1_a.jpg',
    'https://media1.popsugar-assets.com/files/thumbor/BrT6JuS0boRe5dXrvkKQ4rzGNME/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/02/10/215/n/1922283/ad358e065c60f5ad56e7e8.61160339_/i/Funny-Tweets-About-Smith-Genie-Aladdin-Trailer.jpg',
    'https://i0.wp.com/mixdeseries.com.br/wp-content/uploads/2018/07/will-smith-4-e1534947669898.jpg?fit=871%2C499&ssl=1',
    'https://conteudo.imguol.com.br/c/entretenimento/e3/2020/07/09/will-smith-1594320007897_v2_450x337.jpg',
    'https://exame.com/wp-content/uploads/2016/09/size_960_16_9_will_smith_ator3.jpg?quality=70&strip=info',
    'https://upload.wikimedia.org/wikipedia/commons/3/3f/TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg'
];

const imgs = document.getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++){
    const randomImg = Math.floor(Math.random() * willSmithImages.length);
    imgs[i].src = willSmithImages[randomImg];
}

const headers = document.getElementsByTagName("h2");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "I am beast";
}