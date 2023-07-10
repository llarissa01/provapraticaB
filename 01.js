const http = ("http")

const WhiteHeader = (http.constWhiteHeader(resq, res))


res.setHeader('content-Type', 'application/json')

const acao = [
    {id: 1, acao: 'sistema operacional'},
    {id: 2, acao: 'memoria disponivel'},
    {id: 3, acao: 'diretorio de trabalho atual do servidorl'}
]

const json = JSON.stringify(acao)
console.log(json)