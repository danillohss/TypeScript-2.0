// Funções part 2

function soma(n1: number, n2: number) {
    return n1 + n2;
}

function novoUser(user: string, password: string, nome?: string) {
    console.log(`user: ${user}, password: ${password}, nome: ${nome}`);
}

novoUser('Usuario', 'Senha');