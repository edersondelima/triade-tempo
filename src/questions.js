export let questions = () => {
  return [
    { order: 1,  group: 'A', description: "Costumo ir a eventos, festas ou cursos, mesmo sem ter muita vontade, para agradar meu chefe, meus amigos ou família." },
    { order: 2,  group: 'C', description: "Não consigo realizar tudo que me propus fazer no dia e preciso fazer hora extra e levar trabalho para casa." },
    { order: 3,  group: 'A', description: "Quando recebo um novo e-mail, costumo dar uma olhada para checar o conteúdo." },
    { order: 4,  group: 'B', description: "Costumo visitar com regularidade pessoas relevantes em minha vida como amigos parentes, filhos." },
    { order: 5,  group: 'C', description: "É comum aparecerem problemas inesperados no meu dia a dia." },
    { order: 6,  group: 'A', description: "Assumo compromissos com outras pessoas ou aceito novas posições na empresa, mesmo que não goste muito da nova atividade, se for para aumentar meus rendimentos ou obter uma promoção." },
    { order: 7,  group: 'B', description: "Tenho um tempo definido para dedicar a mim mesmo e nele, posso fazer o que quiser." },
    { order: 8,  group: 'C', description: "Costumo deixar para fazer relatórios, imposto de renda, compras de Natal, estudar para provas e outras tarefas perto do prazo de entrega." },
    { order: 9,  group: 'A', description: "Nos dias de descanso, costumo passar boa parte do dia assistindo à televisão, jogando ou acessando a internet." },
    { order: 10, group: 'B', description: "Faço um planejamento por escrito de tudo que preciso fazer durante minha semana." },
    { order: 11, group: 'B', description: "Posso afirmar que estou conseguindo realizar tudo que gostaria em minha vida e que o tempo está passando na realidade correta." },
    { order: 12, group: 'A', description: "Costumo participar de reuniões sem saber direito o conteúdo, o porquê devo participar ou a que resultado aquele encontro pode levar." },
    { order: 13, group: 'C', description: "Consigo melhores resultados e me sinto mais produtivo quando estou sob pressão ou com o prazo curto." },
    { order: 14, group: 'B', description: "Quando quero alguma coisa, defino esse objetivo por escrito, estabeleço prazos em minha agenda, monitoro os resultados obtidos e os comparo com os esperados." },
    { order: 15, group: 'A', description: "Leio muitos e-mails desnecessários, com piadas, correntes propagandas, apresentações, produtos e etc." },
    { order: 16, group: 'C', description: "Estive atrasado com minhas tarefas ou reuniões nas últimas semanas." },
    { order: 17, group: 'B', description: "Faço esporte com regularidade, me alimento da forma adequada e tenho o lazer que gostaria." },
    { order: 18, group: 'C', description: "É comum reduzir meu horário de almoço ou até mesmo comer enquanto trabalho para concluir um projeto ou tarefa." }
  ];
}

export let responseOptions= () => {
  return [
    { score: 1, text: "Nunca" },
    { score: 2, text: "Raramente" },
    { score: 3, text: "Às vezes" },
    { score: 4, text: "Quase sempre" },
    { score: 5, text: "Sempre" }
  ]
}
