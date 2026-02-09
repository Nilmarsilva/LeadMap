# 📦 Guia de Instalação Rápida - LeadMap

## Passo 1: Obter Google API Key

1. Acesse https://console.cloud.google.com/
2. Crie um novo projeto
3. Ative as APIs:
   - Places API
   - Places API (New)
4. Vá em "Credenciais" → "Criar credenciais" → "Chave de API"
5. Copie a chave gerada

## Passo 2: Configurar Projeto

```bash
# Navegue até a pasta do projeto
cd leadmap

# Copie o arquivo de exemplo
cp .env.example .env

# Edite o arquivo .env (use notepad, vim, ou nano)
# Substitua 'sua_chave_api_aqui' pela sua chave real
notepad .env
```

## Passo 3: Iniciar Sistema

```bash
# Execute o docker-compose
docker-compose up --build
```

Aguarde a mensagem:
```
leadmap-frontend  | ➜  Local:   http://localhost:3000/
leadmap-backend   | INFO:     Uvicorn running on http://0.0.0.0:8000
```

## Passo 4: Acessar

Abra seu navegador em: **http://localhost:3000**

## Solução de Problemas

### Porta 3000 ou 8000 já em uso
```bash
# Ver o que está usando a porta
netstat -ano | findstr :3000
netstat -ano | findstr :8000

# Matar o processo (substitua PID pelo número encontrado)
taskkill /PID <número_do_pid> /F
```

### Docker não encontrado
1. Instale o Docker Desktop: https://www.docker.com/products/docker-desktop
2. Reinicie o computador após instalação
3. Verifique: `docker --version`

### Erro "GOOGLE_API_KEY não configurada"
- Verifique se o arquivo `.env` existe na raiz do projeto
- Confirme que a chave está no formato correto: `GOOGLE_API_KEY=AIzaSy...`
- Reinicie o docker-compose após editar: `docker-compose restart`

### Container não inicia
```bash
# Ver logs detalhados
docker-compose logs backend
docker-compose logs frontend

# Reconstruir do zero
docker-compose down
docker-compose up --build
```

## Pronto!

Agora você pode:
1. Fazer buscas por empresas
2. Filtrar empresas sem site
3. Exportar resultados para CSV

Para parar o sistema: `Ctrl + C` ou `docker-compose down`
