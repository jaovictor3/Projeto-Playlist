var main = ` <div class="sidebarmenu">
<h1>Jv Song's </h1>
<br>

<ul>

    <li><a href="https://github.com/jaovictor3" target="_blank">Github</a></li>
    <li><a href="https://www.instagram.com/jao_victor___/" target="_blank">instagram</a></li>
    <li><a href="https://www.linkedin.com/in/joaovictor-dev/" target="_blank">LinkedIn</a></li>
</ul>

</div>


<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
        aria-label="Slide 4"></button>
</div>
<div class="carousel-inner">
    <div class="carousel-item active">
        <img src="imagens/drakealbumcapa.jpg" class="d-block w-100 imagem-carousel" alt="...">
        <div class="carousel-caption d-none d-md-block">
            <h5>Drake - Don't matter to me </h5>
            <p></p>
        </div>
    </div>
    <div class="carousel-item">
        <img src="imagens/aka rasta fases capa.jpg" class="d-block w-100 imagem-carousel" alt="...">
        <div class="carousel-caption d-none d-md-block">
            <h5>Aka Rasta - Fases/The box remix</h5>
            <p></p>
        </div>
    </div>
    <div class="carousel-item">
        <img src="imagens/leozincapaalbum.jpg" class="d-block w-100 imagem-carousel" alt="...">
        <div class="carousel-caption d-none d-md-block">
            <h5> Leozin - Low & Lost </h5>
            <p></p>
        </div>
    </div>
    <div class="carousel-item">
        <img src="imagens/lilskies.png" class="d-block w-100 imagem-carousel" alt="...">
        <div class="carousel-caption d-none d-md-block">
            <h5>Magic - Lil Skies</h5>
            <p></p>
        </div>
    </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
</button>
</div>




<div class="musicas">
<div class="nacionais">
    <h3>Nacionais</h3>
    <br>

<a onclick="carregarmusica1(musica1)">
    <p>Familía  <br>
        Leozin,Tut,JayKay.
    </p>
</a>


<a onclick="carregarmusica2()">
        <p> Low & Lost  <br>
        Leozin,Kouth,Nagalli.
    </p>
</a>

<a onclick="carregarmusica3()">
    <p> Fases/The box remix <br>
        Aka Rasta.
    </p>
</a>

<a onclick="carregarmusica4()"> 
    <p> Freio da Blazer <br>
        L7NNON,Ajax.
    </p>
</a>

<a onclick="carregarmusica5()"><p> Relicário <br>
        Menestrel.
    </p>
</a>
</div>

<div class="internacionais">
    <h3>Internacionais</h3>

    <br>

<a onclick="carregarmusica6()">
    <p>Magic <br>
        Lil Skies.
    </p>
</a>

<a onclick="carregarmusica7()"> 
    <p>Don't Matter To Me <br>
        Drake,Michael Jackson.
    </p>
</a> 

<a onclick="carregarmusica8()">    
    <p> DÁKITI <br>
        Bad Bunny,Jhay Cortez.
    </p>
</a>

<a onclick="carregarmusica9()">    
    <p> Set Fire to the Rain <br>
        Adele.
    </p>
</a>

<a onclick="carregarmusica10()">    
    <p> Sorry, Blame It On Me <br>
        Akon.
    </p>
</a>
        

</div>
</div> 

`;


var musica1 = `
<div class="imagensdemusicas">
    <img src='imagens/leozin.jpg'>

</div>
<span class="nomesmusicas">
<p> Leozin - Familía Ft. Tut</p>
</span>

<div class="letras">
E é lá do alto, minha vó me assiste
Torce pelo melhor da minha família
E mesmo lá de cima, minha vó me inspira
Meu pai me ensinou a ser um homem na vida
<br>
E é lá do alto, minha vó me assiste
Torce pelo melhor da minha família
E mesmo lá de cima, minha vó me inspira
Meu pai me ensinou a ser um homem na vida
<br>
Bro, esse cash não é mais que sua família
Não brinco em serviço
Mano, isso é a minha vida
E quanto mais passa, mais caro nóis pisa
Mãe, prepara as mala que hoje nóis vai pra Ibiza
<br>
Não passo mal, eu passo no visa
Quantos vão 'tá quando se precisa?
São poucos querendo sua melhoria, mano
É dia de jogo, eu vou pra vila
<br>
Já pensei em desistir, confesso
Mano, eu juro, nada dando certo
E mesmo na pior, dei o meu melhor
Fiquei na minha, fiquei quieto
<br>
E é lá do alto, minha vó me assiste
Torce pelo melhor da minha família
E mesmo lá de cima, minha vó me inspira
Meu pai me ensinou a ser um homem na vida
<br>
E é lá do alto, minha vó me assiste
Torce pelo melhor da minha família
E mesmo lá de cima, minha vó me inspira
Meu pai me ensinou a ser um homem na vida
<br>
eu vi meu irmão sendo preso por nada
Eu vi minha mãe chorar desesperada
Eu vi o meu pai desempregado
E minha responsa cada vez mais alta
<br>
Com 18 anos não sei o que eu faço
É sério, 'cês acham que isso é piada?
Eu tenho orgulho da minha caminhada
Desde os 14 isso é minha vida (Leozin)
<br>
Ano passado meu corre foi tenso
Bom que esse tempo não volta
Porque eu choro toda vez que penso
Era embaçado que eu não tinha escolha
E o lado errado foi bom senso
Minha mãe desesperada
E só chegando conta
Eu só foquei no corre
Com risco de não voltar, ya
<br>
E hoje eu dou risada que tudo passou
Todo nosso problema foi por causa dessa grana
Que eu vi que não vale nada
Mãe, só espera 2 anos que eu te compro casa com a rua mais bonita
E um jardim cheio de flores
Que eu nunca esqueço cê ficando cega
Falando do medo de não enxergar as cores
<br>
Foi ela que me ensinou a virar homem
E quando deixou de comer só pra eu não passar fome
Ela que me inspirou cês saberem meu nome
Mãe, por você que eu faço esse corre
E é lá do alto minha vó me assiste
Torce pelo melhor da minha família
E mesmo lá de cima, minha vó me inspira
Meu pai me ensinou a ser um homem na vida
<br>
E é lá do alto minha vó me assiste
Torce pelo melhor da minha família
E mesmo lá de cima, minha vó me inspira
Meu pai me ensinou a ser um homem na vida
</div> 
`;


var elemento = document.getElementById("playerdemusica");

function telaprincipal(any){
    elemento.innerHTML = any ;
}
telaprincipal(main);





function carregarmusicas(any){
    elemento.innerHTML = any;
}
carregarmusicas(musica1)

