let pessoas = {
  'Parentes': [
  ],
  'Animais': [
  ],
  'Colegas': [
  ],
  'Amigos': [
  ]
}
let crimes = {
  'Assasinato': {
    'formas': [
      {
        'nome': 'Estrangulamento',
        'conseqs': [
          {
            'texto': 'Voce estrangulou',
            'letal': true,
            'chancePolicia': 2,
            'relac': 0
          },
          {
            'texto': 'Voce estrangulou',
            'letal': true,
            'chancePolicia': 3,
            'relac': 0
          },
                    {
            'texto': 'Voce falhou ao estrangular',
            'letal': false,
            'chancePolicia': 2,
            'relac': -1
          }
        ]
      }
    ],
    'idade': 9
  }
}
let empregos = [
  {
    'nome': 'Garagem',
    'cargos': ['Caminhoneiro','Mecanico','Vendedor de peças','Contador'],
    'salarioBase': 3000
  },
  {
    'nome': 'Prostibulo',
    'cargos': ['Striper','Striper de luxo','Garçon','Contador'],
    'salarioBase': 7500
  },
  {
    'nome': 'Seção de TI',
    'cargos': ['Programador Junior','Programador Pleno','Programador Senior','Programacourt'],
    'salarioBase': 500
  },
  {
    'nome': 'Padaria',
    'cargos': ['Faxineiro','Caixa','Padeiro','Doceiro'],
    'salarioBase': 4000
  }
];
let nomes = {
  'Homem': [
    'Davi', 'Joao', 'Daniel', 'Igro', 'Nathan', 'Matheus', 'Rafael', 'Diogo', 'Felipe', 'Andre', 'Samuel'
  ],
  'Mulher': [
  'Gabriel','Sara','Ana','Mrana','Beatriz','Brenda','Giovanna', 'Maria', 'Barry'
  ]
}
let sobrenomes = [
  'Vieira', 'Bittecourt', 'Azzi', 'Giardini', 'Leite', 'Farinha', 'Correia', 'Vermeule', 'Abreu', 'Valim', 'Marques'
]
let acoes = [
  {
    'nome': 'Passar Tempo',
    'chances': [
      ['Voce foi ao cinema com', [3,2]],
      ['Voce foi ao parque com', [4,2,3,3]],
      ['Voce foi assistir um racha e saiu no soco com', [-1,0,-1]]
    ],
    'idade': 0
  }
]