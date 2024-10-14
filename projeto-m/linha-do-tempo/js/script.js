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
  
	// Adiciona a classe de destaque com base na fase da vida
	switch (faseDaVida) {
	  case 'Infância':
		eventoDiv.classList.add('evento-infancia');
		break;
	  case 'Adolescência':
		eventoDiv.classList.add('evento-adolescencia');
		break;
	  case 'Adulto':
		eventoDiv.classList.add('evento-adulto');
		break;
	}
  
	const faseSpan = document.createElement('span');
	faseSpan.classList.add('fase');
	faseSpan.textContent = faseDaVida;
  
	const descricaoP = document.createElement('p');
	descricaoP.textContent = evento;
  
	const excluirBtn = document.createElement('button');
	excluirBtn.textContent = 'Excluir';
	excluirBtn.classList.add('excluir');
	excluirBtn.onclick = function() {
	  timeline.removeChild(eventoDiv);
	};
  
	eventoDiv.appendChild(faseSpan);
	eventoDiv.appendChild(descricaoP);
	eventoDiv.appendChild(excluirBtn); // Adiciona o botão de excluir
	timeline.appendChild(eventoDiv);
  
	document.getElementById('evento').value = '';
	document.getElementById('fase-da-vida').value = '';
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
  
	// Cria um quadro de destaque para a fase da vida
	const faseDiv = document.createElement('div');
	faseDiv.classList.add('quadro-destaque'); // Adiciona a classe para o quadro de destaque
	faseDiv.textContent = faseDaVida; // Adiciona o texto da fase da vida
  
	const descricaoP = document.createElement('p');
	descricaoP.textContent = evento;
  
	const excluirBtn = document.createElement('button');
	excluirBtn.textContent = 'Excluir';
	excluirBtn.classList.add('excluir');
	excluirBtn.onclick = function() {
	  timeline.removeChild(eventoDiv);
	};
  
	eventoDiv.appendChild(faseDiv); // Adiciona o quadro de destaque
	eventoDiv.appendChild(descricaoP);
	eventoDiv.appendChild(excluirBtn); // Adiciona o botão de excluir
	timeline.appendChild(eventoDiv);
  
	document.getElementById('evento').value = '';
	document.getElementById('fase-da-vida').value = '';
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
  
	const faseDiv = document.createElement('div');
	faseDiv.classList.add('quadro-destaque'); // Adiciona a classe para o quadro de destaque
	faseDiv.textContent = faseDaVida; // Adiciona o texto da fase da vida
  
	const descricaoP = document.createElement('p');
	descricaoP.textContent = evento;
  
	const excluirBtn = document.createElement('button');
	excluirBtn.textContent = 'Excluir';
	excluirBtn.classList.add('delete-btn');
	excluirBtn.onclick = function() {
	  timeline.removeChild(eventoDiv);
	};
  
	eventoDiv.appendChild(faseDiv); // Adiciona o quadro de destaque
	eventoDiv.appendChild(descricaoP);
	eventoDiv.appendChild(excluirBtn); // Adiciona o botão de excluir
	timeline.appendChild(eventoDiv);
  
	document.getElementById('evento').value = '';
	document.getElementById('fase-da-vida').value = '';
  }