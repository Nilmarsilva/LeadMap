# 🗺️ LeadMap

**LeadMap** é uma ferramenta de prospecção automática que permite encontrar empresas sem site a partir de buscas no Google Maps. Perfeito para identificar oportunidades de negócio e conquistar novos clientes.

![LeadMap](https://img.shields.io/badge/Status-Pronto-success)
![Python](https://img.shields.io/badge/Python-3.11-blue)
![React](https://img.shields.io/badge/React-18.2-61dafb)
![FastAPI](https://img.shields.io/badge/FastAPI-0.104-009688)

## 🎯 Funcionalidades

- ✅ Busca empresas no Google Maps por termo (ex: "advogado em São Paulo")
- ✅ Identifica automaticamente empresas sem website
- ✅ Exibe dados completos: nome, telefone, endereço, avaliação
- ✅ Filtro para mostrar apenas empresas sem site
- ✅ Exportação para CSV com um clique
- ✅ Interface moderna e dark mode
- ✅ Estatísticas em tempo real
- ✅ Totalmente dockerizado

## 🚀 Como Usar

### Pré-requisitos

- Docker e Docker Compose instalados
- Google Places API Key (veja abaixo como obter)

### 1. Obter a Google API Key

1. Acesse o [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um novo projeto (ou selecione um existente)
3. Ative a **Places API** e a **Places API (New)**
4. Vá em **Credenciais** e crie uma API Key
5. Copie a chave gerada

### 2. Configurar o Projeto

```bash
# Clone ou extraia o projeto
cd leadmap

# Crie o arquivo .env a partir do exemplo
cp .env.example .env

# Edite o .env e adicione sua API Key
# GOOGLE_API_KEY=sua_chave_aqui
```

### 3. Iniciar a Aplicação

```bash
# Inicie todos os serviços com um único comando
docker-compose up --build
```

Aguarde alguns segundos e acesse:

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **Documentação da API**: http://localhost:8000/docs

### 4. Fazer Buscas

1. Digite um termo de busca (ex: "pizzaria em São Paulo")
2. Clique em **Buscar Empresas**
3. Visualize os resultados na tabela
4. Use o filtro para mostrar apenas empresas sem website
5. Clique em **Exportar CSV** para baixar os dados

## 📦 Estrutura do Projeto

```
leadmap/
├── backend/                 # API em FastAPI
│   ├── app/
│   │   ├── main.py         # Aplicação principal
│   │   ├── routes/         # Endpoints da API
│   │   ├── services/       # Integração com Google Places
│   │   ├── utils/          # Utilitários (export CSV)
│   │   └── models/         # Modelos de dados
│   ├── Dockerfile
│   └── requirements.txt
│
├── frontend/               # Interface em React
│   ├── src/
│   │   ├── App.jsx        # Componente principal
│   │   ├── components/    # Componentes React
│   │   └── index.css      # Estilos globais
│   ├── Dockerfile
│   └── package.json
│
├── docker-compose.yml      # Orquestração dos serviços
├── .env.example           # Exemplo de variáveis de ambiente
└── README.md              # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

### Backend
- **Python 3.11**
- **FastAPI** - Framework web moderno e rápido
- **Requests** - Chamadas HTTP à Google Places API
- **Pandas** - Manipulação e exportação de dados
- **Uvicorn** - Servidor ASGI

### Frontend
- **React 18** - Biblioteca UI
- **Vite** - Build tool ultra-rápida
- **TailwindCSS** - Framework CSS utility-first
- **Axios** - Cliente HTTP
- **Lucide React** - Ícones modernos

### Infraestrutura
- **Docker & Docker Compose** - Containerização

## 🔧 Comandos Úteis

```bash
# Iniciar serviços
docker-compose up

# Iniciar em background
docker-compose up -d

# Parar serviços
docker-compose down

# Ver logs
docker-compose logs -f

# Reconstruir containers
docker-compose up --build

# Acessar container do backend
docker exec -it leadmap-backend bash

# Acessar container do frontend
docker exec -it leadmap-frontend sh
```

## 🎨 Personalização

### Alterar cores do frontend

Edite `frontend/tailwind.config.js` para customizar as cores:

```js
colors: {
  primary: {
    500: '#sua-cor-aqui',
    // ...
  }
}
```

### Alterar logo e nome

1. Edite `frontend/src/components/Header.jsx`
2. Substitua o ícone `<Map />` pelo seu logo
3. Altere o texto "LeadMap"

### Ajustar limite de resultados

No Google Places API, o limite padrão é 20 resultados por busca. Para obter mais:

1. Edite `backend/app/services/google_places.py`
2. Implemente paginação usando o parâmetro `pagetoken`

## 📊 API Endpoints

### POST /api/search
Busca empresas no Google Maps

**Request:**
```json
{
  "query": "advogado em São Paulo"
}
```

**Response:**
```json
{
  "success": true,
  "data": [...],
  "stats": {
    "total": 20,
    "without_website": 12,
    "execution_time": 3.5
  }
}
```

### POST /api/export
Exporta leads para CSV

**Request:**
```json
{
  "leads": [...]
}
```

**Response:** Arquivo CSV para download

## ⚠️ Observações Importantes

### Limites da API
- A Google Places API tem **limites de uso gratuito**
- Após o limite, será cobrado por requisição
- Configure alertas no Google Cloud Console

### Custos
- **Text Search**: ~$32 por 1000 requisições
- **Place Details**: ~$17 por 1000 requisições
- Cada busca no LeadMap faz 1 Text Search + N Place Details (N = número de resultados)

### Recomendações
- Use com moderação para não exceder o free tier
- Configure alertas de billing
- Considere implementar cache para buscas repetidas
- Em produção, adicione rate limiting

## 🚢 Deploy em Produção

Para deploy em produção:

1. Configure domínios próprios
2. Adicione HTTPS (certbot/Let's Encrypt)
3. Configure CORS no backend para aceitar apenas seu domínio
4. Use variáveis de ambiente seguras
5. Configure backup dos dados exportados
6. Implemente rate limiting
7. Adicione autenticação se necessário

## 💰 Licenciamento

Este projeto foi desenvolvido para venda como **script standalone**.

### Uso comercial:
- ✅ Pode ser vendido como produto
- ✅ Pode ser customizado para clientes
- ✅ Pode ser redistribuído
- ⚠️ Mantenha os créditos originais
- ⚠️ Não se responsabilize por custos da API do cliente

## 🤝 Suporte

Para dúvidas ou problemas:

1. Verifique se o Docker está rodando
2. Confirme que a API Key está configurada corretamente
3. Cheque os logs: `docker-compose logs -f`
4. Verifique se as portas 3000 e 8000 estão livres

## 📝 Changelog

### v1.0.0 (2025)
- ✅ Versão inicial completa
- ✅ Busca no Google Places API
- ✅ Filtro por empresas sem website
- ✅ Exportação CSV
- ✅ Interface dark mode
- ✅ Docker ready

## 📄 Licença

Copyright © 2025 LeadMap. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para prospecção inteligente**
