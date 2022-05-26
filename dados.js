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
  }, 
  'Tortura': {
    'formas': [
      {
        'nome': 'Obrigar a ouvir BTS',
        'conseqs': [
          {
            'texto': 'Voce pos DNA em uma caixa de som para torturar',
            'letal': false,
            'chancePolicia': 999,
            'relac': -10
          },
          {
            'texto': 'Voce pos headset com bts tocando e colou uma foto do Jimin no rosto do',
            'letal': false,
            'chancePolicia': 999,
            'relac': -10
          }
        ]
      },
    ],
    'idade': 15
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
  },
  {
    'nome': 'Hospital',
    'cargos': ['Faxineiro','Enfermeiro','Medico','Cirurgião'],
    'salarioBase': 4000
  },
  {
    'nome': 'Escola',
    'visivel': false
  }
];
let perguntasEmprego = [
  ['Se voce fosse um ar condicionado, onde voce ficaria?', ['Em cima', 'Em baixo'], 0],
  ['A noite a piscina fica mais...', ['Quente', 'Fria'],0],
  ['A formula de báskara serve para...',['Resolver equações biquadradas', 'Resolver equação de segundo grau'],1]
]
let nomes = {
  'Homem': [
    'Davi', 'Joao', 'Daniel', 'Igro', 'Nathan', 'Matheus', 'Rafael', 'Diogo', 'Felipe', 'Andre', 'Samuel'
  ],
  'Mulher': [
  'Gabriel','Sara','Ana','Mrana','Beatriz','Brenda','Giovanna', 'Maria', 'Barry'
  ]
}
let sobrenomes = [
  'Vieira', 'Bittecourt', 'Azzi', 'Giardini', 'Leite', 'Farinha', 'Correia', 'Vermeule', 'Abreu', 'Valim', 'Marques', 'Nunes', 'Eller', 'Lage', 'Gianluca'
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
  },
  {
    'nome': 'Beijar',
    'chances': [
      ['Voce completamete rejeitado por', [-1,-2]],
      ['Voce beijou', [4,3]],
      ['Voce foi xingado de fedorento mas conseguiu beijar', [-1,2,-1]]
    ],
    'idade': 7
  }
]
let acoesCadeia = [
  {
    'nome': 'Passar Tempo',
    'chances': [
      ['Voce jogou baralho durante o intervalo com',[1,3]],
      ['Voce jogou bola de meia com',[4,3]],
      ['Voce brincou de pega-pega com',[1,1]],
      ['Voce saiu no soco com',[-5,-7]],
    ],
    'idade': 0
  }
]