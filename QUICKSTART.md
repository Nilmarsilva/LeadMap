# ⚡ Quick Start - LeadMap

## 3 Passos para Começar

### 1️⃣ Obter API Key (5 minutos)
```
https://console.cloud.google.com/
→ Criar projeto
→ Ativar "Places API"
→ Credenciais → Criar chave
→ Copiar chave
```

### 2️⃣ Configurar (1 minuto)
```bash
cd leadmap
cp .env.example .env
# Edite .env e cole sua chave
```

### 3️⃣ Rodar (2 minutos)
```bash
docker-compose up --build
```

## Pronto! 🎉

Acesse: **http://localhost:3000**

---

## Primeira Busca

1. Digite: `"pizzaria em São Paulo"`
2. Clique em **Buscar Empresas**
3. Veja os resultados
4. Marque: ☑️ **Mostrar apenas empresas sem website**
5. Clique em **Exportar CSV**

## Precisa de Ajuda?

- 📖 [README completo](README.md)
- 📦 [Guia de Instalação](INSTALL.md)
- 📖 [Guia de Uso](USAGE.md)

## Problemas Comuns

**Porta em uso?**
```bash
docker-compose down
# Feche outros apps na porta 3000/8000
docker-compose up
```

**API não funciona?**
- Verifique se o arquivo `.env` existe
- Confirme que a API Key está correta
- Reinicie: `docker-compose restart`

**Erro no Docker?**
```bash
docker-compose down
docker-compose up --build --force-recreate
```

---

**Boa prospecção! 🚀**
