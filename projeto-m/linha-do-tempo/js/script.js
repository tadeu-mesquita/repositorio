// Função para adicionar o evento à linha do tempo
function adicionarEvento() {
	const evento = document.getElementById('evento').value;
	const faseDaVida = document.getElementById('fase-da-vida').value;
  
	// Verifica se ambos os campos estão preenchidos
	if (!evento || !faseDaVida) {
	  alert('Por favor, preencha ambos os campos!');
	  return;
	}
  
	// Define o limite de caracteres para a quebra de linha
	const limiteCaracteres = 120;
  
	// Verifica se o evento tem mais de 120 caracteres e quebra a linha
	let textoParaAdicionar = evento;
	if (evento.length > limiteCaracteres) {
	  const partes = evento.match(new RegExp(`.{1,${limiteCaracteres}}`, 'g')); // Divide o texto a cada 120 caracteres
	  textoParaAdicionar = partes.join('<br>'); // Junta as partes com quebras de linha
	}
  
	// Cria o item da linha do tempo
	const timeline = document.getElementById('timeline');
	const item = document.createElement('div');
	item.classList.add('timeline-item');
	item.setAttribute('data-date', capitalizarTexto(faseDaVida));
	item.innerHTML = textoParaAdicionar;
  
	// Ajusta a altura e largura da caixa com base no conteúdo
	ajustarAlturaCaixa(item, textoParaAdicionar);
  
	// Adiciona o item à linha do tempo
	timeline.appendChild(item);
  
	// Limpa os campos de entrada após adicionar o evento
	document.getElementById('evento').value = '';
	document.getElementById('fase-da-vida').value = '';
  }
  
  // Função para ajustar a altura e largura da caixa com base no conteúdo
  function ajustarAlturaCaixa(item, texto) {
	item.style.whiteSpace = 'pre-wrap'; // Preserva as quebras de linha
	item.style.overflowWrap = 'break-word'; // Garante que palavras longas sejam quebradas
	item.style.padding = '10px';
	item.style.margin = '10px 0';
	item.style.backgroundColor = '#f4f4f4'; // Cor de fundo para a caixa
	item.style.border = '1px solid #ddd'; // Borda
	item.style.width = 'auto'; // A largura se ajusta ao conteúdo
	item.style.maxWidth = '100%'; // Não ultrapassa os limites da página
  }
  
  // Função para capitalizar corretamente o texto da fase da vida
  function capitalizarTexto(texto) {
	return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
  }
  
  // Função para baixar a imagem de todo o site
  function baixarImagem() {
	html2canvas(document.body).then(canvas => {
	  const link = document.createElement('a');
	  link.href = canvas.toDataURL();
	  link.download = 'linha_do_tempo.png'; // Nome do arquivo a ser baixado
	  link.click();
	});
  }
  
  // Função para detectar a tecla "Enter" e adicionar o evento
  document.getElementById('evento').addEventListener('keydown', function(event) {
	if (event.key === 'Enter') {
	  adicionarEvento();
	}
  });

  // Função para mostrar a fase da vida selecionada
function mostrarFaseSelecionada() {
	const faseDaVida = document.getElementById('fase-da-vida').value;
	const faseSelecionadaDiv = document.getElementById('faseSelecionada');
  
	if (faseDaVida) {
	  faseSelecionadaDiv.textContent = `Fase da vida selecionada: ${faseDaVida}`;
	} else {
	  faseSelecionadaDiv.textContent = ''; // Limpa o conteúdo se nenhuma fase for selecionada
	}
  }
  
  function adicionarEvento() {
	const evento = document.getElementById('evento').value;
	const faseDaVida = document.getElementById('fase-da-vida').value;
  
	if (evento === '' || faseDaVida === '') {
	  alert('Por favor, preencha todos os campos.');
	  return;
	}
  
	const timeline = document.getElementById('timeline');
	const eventoDiv = document.createElement('div');
	eventoDiv.classList.add('event');
  
	const faseSpan = document.createElement('span');
	faseSpan.classList.add('fase');
	faseSpan.textContent = faseDaVida;
  
	const descricaoP = document.createElement('p');
	descricaoP.textContent = evento;
  
	eventoDiv.appendChild(faseSpan);
	eventoDiv.appendChild(descricaoP);
	timeline.appendChild(eventoDiv);
  
	document.getElementById('evento').value = '';
	document.getElementById('fase-da-vida').value = '';
	document.getElementById('faseSelecionada').textContent = ''; // Limpa a fase selecionada após adicionar o evento
  }
  
  function baixarImagem() {
	const timelineElement = document.getElementById('timeline');
  
	html2canvas(timelineElement).then(function(canvas) {
	  const link = document.createElement('a');
	  link.download = 'linha-do-tempo.png';
	  link.href = canvas.toDataURL();
	  link.click();
	});
  }
  
  