const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let lembretes = []
exibirMenu()

function exibirMenu() {
	console.log(`
	Menu:
	1. Adicionar lembrete
	2. Listar lembretes
	3. Editar lembretes
	4. Marcar lembrete como concluído
	5. Sair
	`)

rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				adicionarLembrete()
				break
			case '2':
				listarLembrete()
				break
			case '3':
				editarLembrete()
				break
			case '4':
				marcarcomoConcluido()
				break
			case '5':
				rl.close()
				break
			default:
				console.log('Opção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}

function adicionarLembrete() {
	rl.question('Digite o lembrete: ', (nome) => {
		rl.question('Digite a data de término: ', (data) => {
				lembretes.push({ nome: nome, data: data})
				console.log('lembrete adicionado com sucesso!')
				exibirMenu()
			})
		})
}


function editarLembrete(){
	if (lembretes.length == 0){
		console.log("Não há lembretes adicionados")
	} else {
		console.log('Lista lembretes:')
		lembretes.forEach((lembrete, index) => {
			console.log(`${index + 1}, ${lembrete.nome}`)
		})
		rl.question('Digite o número do lembrete que deseja editar:', (numero) =>{
			if(numero > 0 && numero <= lembretes.length){
				rl.question('Digite o novo lembrete:', (nome) => {
					rl.question('Digite o novo prazo:', (data) => {
						rl.question('Concluido:', (concluido) => {
							lembretes[numero - 1] = {
								nome,
								data,
								concluido
							}
							console.log('Editado com sucesso!')
							exibirMenu()
						})
					})
				})
			} else {
				console.log('Número inválido, tente novamente.')
				exibirMenu()
			}
		})
	}
}
