// Interfaces
interface curso {
    titulo: string,
    des: string,
    aula: number,
    maxAlunos?: number,
    iniciarCurso?(teste: string): void;
}

interface cursoProgramacao extends curso {
    aulas: number,
    maxAlunos?: number
}

interface cursoArtes extends curso {
    aulas: number,
    maxAlunos?: number
}

let curso1: curso
let curso2: curso

curso1 = {
    titulo: "TypeScript",
    des: 'Curso de TypeScript',
    aula: 75,
    maxAlunos: 50
}

curso2 = {
    titulo: "JavaScript",
    des: 'Curso de TypeScript',
    aula: 75,
    maxAlunos: 50
}