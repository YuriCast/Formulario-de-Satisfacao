let botao_enviar = document.querySelector('#btn-enviar')

botao_enviar.addEventListener('click', enviarResposta)

function enviarResposta(){
    let q1_1 = document.querySelector('#q1_1')
    let q1_2 = document.querySelector('#q1_2')
    let q1_3 = document.querySelector('#q1_3')
    let q1_4 = document.querySelector('#q1_4')
    let q1_5 = document.querySelector('#q1_5')
   
    if (q1_1.checked){
        alert('Muito obrigado pela boa avaliação')
    } else  if (q1_2.checked){
        alert('Obrigado pela boa avaliação')
    } else  if (q1_3.checked){
        alert('Obrigado')
    } else  if (q1_4.checked){
        alert('Tentaremos melhorar')
    } else  if (q1_5.checked){
        alert('Faremos o possível para melhorarmos')
    }
}
