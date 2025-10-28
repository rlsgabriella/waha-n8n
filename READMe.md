# WAHA-n8n

Projeto mínimo do WAHA criado para integração com o **n8n**.  
Ele disponibiliza rotas HTTP que podem ser chamadas pelo n8n como webhooks ou triggers, tornando o WAHA acessível via **URL pública** após o deploy.

---

## 📝 Funcionalidade

- Servidor Node.js/Express simples.
- Rota `/dashboard` para teste de funcionamento.
- Rota `/trigger` para receber chamadas do n8n e executar ações de automação.
- Pode ser deployado no Render ou outro serviço de hospedagem que suporte Node.js.
- Não possui front-end (HTML/CSS), apenas endpoints para automação.

---

## ⚡ Rotas

| Método | Rota       | Descrição                                      |
|--------|-----------|------------------------------------------------|
| GET    | /dashboard | Retorna mensagem simples de teste             |
| GET    | /trigger   | Trigger que pode ser chamado pelo n8n         |

> Exemplo de acesso local:  
> `http://localhost:3000/dashboard`  
> `http://localhost:3000/trigger`  


## 💻 Rodando localmente

1. Clone o repositório:

git clone https://github.com/rlsgabriella/waha-n8n.git
cd waha-n8n

2. Instale as dependências: 

npm install

3. Rode o servidor:

npm start