var i = 0;
    var musicas =   [
            {mp3:'som/All TikTok Mashup [ JVKE - Upside Down ] _ Buttercup x Hood Baby TikTok Remix.mp3', ogg:'the_godfather_main_title.ogg',
			 titulo:'Upside Down',
			  autor:'Remix TikTok'},

			{mp3:'som/Twenty_Carneyval Mashup_TikTok Mashup.mp3',
			 ogg:'the_godfather_main_title.ogg',
			 titulo:'Twenty_Carneyval',
			  autor:'TikTok'},

			{mp3:'som/30 deep grimeyy -Rockstar.mp3',
			 ogg:'the_godfather_main_title.ogg',
			  titulo:'30 deep grimeyy', 
			  autor:'Rockstar'},

			{mp3:'som/Xenial-Lost2.mp3',
			 ogg:'the_godfather_main_title.ogg',
			  titulo:'Lost', 
			  autor:'Xenial'},

			{mp3:'som/Ellit - Sad and Sober.mp3',
			 ogg:'the_godfather_main_title.ogg',
			  titulo:'Sad and Sober',
			   autor:'Ellit-Sad'},

			{mp3:'som/Capital Cities  Safe And Sound  TraduoLegendado.mp3',
			 ogg:'the_godfather_main_title.ogg',
			  titulo:'Capital Cities',
			   autor:'Safe And Sound'},

            {mp3:'som/Gabbie June - American Dream (Not Your Dope Remix).mp3',
			 ogg:'the_godfather_main_title.ogg',
			  titulo:'American Dream',
			   autor:'Gabbie June'},

            {mp3:'som/idkjack-In My Head.mp3',
             ogg:'the_godfather_main_title.ogg',
              titulo:'In My Head',
                autor:'idkjack'},

            {mp3:'som/akon - lonely.mp3',
            ogg:'the_godfather_main_title.ogg',
                titulo:'lonely',
                autor:'akon'},

            {mp3:'som/y2mate.com - Shadows in my room Feat. Vict molina.mp3',
            ogg:'the_godfather_main_title.ogg',
            titulo:'Feat. Vict molina',
                autor:'TikTok'}
            ]; 

    audio = document.getElementById('audio'); 

    audio.addEventListener('canplay', play_evento , false);
    audio.addEventListener('timeupdate', atualizar , false);
    audio.addEventListener('ended', proxima , false);

	function aumentar_volume(){
				if( audio.volume < 1)  audio.volume += 0.1;
			}

			function diminuir_volume(){
				if( audio.volume > 0)  audio.volume -= 0.1;
			}
			
			function mute(){
				if( audio.muted ){
					audio.muted = false;
				}else{
					audio.muted = true;
				}
			}
 
    function play(){
        proxima();
    }
 
    function pause(){
        audio.pause();
    }
 
    function stop(){
        audio.pause();
        audio.currentTime = 0;
    }
 
    function play_evento(){
        document.getElementById('tempo_atual').innerHTML = secToStr( audio.currentTime) ;
        document.getElementById('tempo_total').innerHTML = secToStr( audio.duration );
        document.getElementById('barra_progresso').max = audio.duration;
        document.getElementById('barra_progresso').value = audio.currentTime;
    }
 
    function atualizar(){
        document.getElementById('tempo_atual').innerHTML = secToStr( audio.currentTime);
        document.getElementById('barra_progresso').value = audio.currentTime;
    }
 
    function proxima(){
        if(audio.canPlayType("audio/mp3") != ''){
            audio.src = musicas[i].mp3;
        }else{
            audio.src = musicas[i].ogg;
        }
        document.getElementById('nome_musica').innerHTML = musicas[i].titulo;
		document.getElementById('nome_autor').innerHTML = musicas[i].autor;
        audio.play();
 
        i++;
        if( i >= musicas.length ) i = 0;
    }

	function voltar(){
        if(audio.canPlayType("audio/mp3") != ''){
            audio.src = musicas[i].mp3;
        }else{
            audio.src = musicas[i].ogg;
        }
        document.getElementById('nome_musica').innerHTML = musicas[i].titulo;
		document.getElementById('nome_autor').innerHTML = musicas[i].autor;
        audio.play();
        
        --i;

        if( i <= 0 ) i = 0;
        if( i <= musicas.length ) i = 0;
       
    }

 
    function secToStr( sec_num ) {
        sec_num = Math.floor( sec_num );
        var horas   = Math.floor(sec_num / 3600);
        var minutos = Math.floor((sec_num - (horas * 3600)) / 60);
        var segundos = sec_num - (horas * 3600) - (minutos * 60);
 
        if (horas   < 10) {horas   = "0"+horas;}
        if (minutos < 10) {minutos = "0"+minutos;}
        if (segundos < 10) {segundos = "0"+segundos;}
        var tempo    = horas+':'+minutos+':'+segundos;
        return tempo;
    }