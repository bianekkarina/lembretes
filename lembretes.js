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
				console.log('Até mais! :)')
				rl.close()
				break
			default:
				console.log('\nOpção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}

function adicionarLembrete() {
	rl.question('Digite o lembrete: ', (nome) => {
		rl.question('Digite a data de término: ', (data) => {
			
				lembretes.push({ nome: nome, data: data, concluido: false})
				console.log('\nLembrete adicionado com sucesso!')
				exibirMenu()
			
		})
			
	})
}


function editarLembrete(){
	if (lembretes.length == 0){
		console.log("\nNão há lembretes adicionados")
	} else if (listarLembrete.length == []) {
		console.log('Lista lembretes:')
		lembretes.forEach((lembrete, index) => {
			console.log(`${index + 1}. ${lembrete.nome}`)
		})
		rl.question('Digite o número do lembrete que deseja editar: ', (numero) =>{
			if(numero > 0 && numero <= lembretes.length){
				rl.question('Digite o novo lembrete: ', (nome) => {
					rl.question('Digite o novo prazo: ', (data) => {
							lembretes[numero - 1] = {
								nome,
								data
							}
							console.log('\nEditado com sucesso!')
							exibirMenu()
						})
					})
				}  else {
					console.log('\nNúmero inválido, tente novamente.')
					exibirMenu()
			}
		}
	)}
}

function listarLembrete() {
	if (lembretes.length === 0) {
		console.log('\nNenhum lembrete adicionado ainda!')
		exibirMenu()
	} else {
		console.log('\nLista de lembretes adicionados:')
		lembretes.forEach((lembrete, index) => {
            console.log(`
            ${index + 1}. Lembrete: ${lembrete.nome}
            Prazo do lembrete: ${lembrete.data}
            Status: ${lembrete.concluido}
            `)
        })
        exibirMenu()
    }
}

function marcarcomoConcluido() {
	if (lembretes.length === 0) {
		console.log('Nenhum lembrete adicionado!')
		exibirMenu()
	} else {
		console.log('Lista de lembretes: ')
		lembretes.forEach((lembrete, index) => {
			console.log(`${index + 1}. Lembrete ${lembrete.nome}`)
		})
		rl.question('Qual lembrete voçê quer marcar como concluido?: ', (numero) => {
			if (numero > 0 && numero <= lembretes.length) {
				lembretes[numero-1].concluido = true
			}
			console.log("Sucesso")
			exibirMenu()
		}
	)}
}

