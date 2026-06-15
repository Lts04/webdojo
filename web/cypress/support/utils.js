export function obterDataHoje() {
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // Janeiro = 0
    const ano = hoje.getFullYear();

    return `${dia}/${mes}/${ano}`;
}