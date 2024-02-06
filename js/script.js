const BtnFechar = document.querySelector('.btn__fechar')
const MsgErro = document.querySelector('.modal__msg_erro')
const MsgSucesso = document.querySelector('.modal__msg_sucesso')
const ModalEnviar = document.querySelector('.modal__enviar')
const BtnEnviar = document.querySelector('.btn__enviar')

// validar dados
    const validarDados = ({ nome, email }) => {
        const nomeValido = nome && nome.length >= 3
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/
        const emailValido = email && emailRegex.test(email)
        
        return {
            nomeValido,
            emailValido
        }
    }

    //Pegar dados
const PegarDados = () => {

    const dados = {
        nome: document.querySelector('.input__nome').value,
        email: document.querySelector('.input__email').value
    }
    const { nomeValido, emailValido } = validarDados(dados)
    const resultado = nomeValido && emailValido ? 'sucesso' : 'erro'
    document.querySelector('form').reset()
    return resultado
}

const formatarModal = (statusRegister) => {
    if (statusRegister === 'sucesso') {
        MsgErro.style.display = 'none'
        MsgSucesso.style.display = 'block'
        BtnFechar.classList.add('bg__sucesso')
        BtnFechar.classList.remove('bg__erro')

    }
    if (statusRegister === 'erro') {
        MsgSucesso.style.display = 'none'
        MsgErro.style.display = 'block'
        BtnFechar.classList.add('bg__erro')
        BtnFechar.classList.remove('bg__sucesso')
    }
}
const MostrarModal = (statusRegister) => {
    formatarModal(statusRegister)
    ModalEnviar.showModal()
}

BtnEnviar.addEventListener('click', (e) => {
    e.preventDefault()
    MostrarModal(PegarDados())
})

BtnFechar.addEventListener('click', () => {
    ModalEnviar.close()
})

