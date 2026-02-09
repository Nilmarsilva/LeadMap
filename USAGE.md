# 📖 Guia de Uso - LeadMap

## Como Fazer Buscas Eficientes

### Formato da Busca

O formato ideal é: **"[tipo de negócio] em [cidade]"**

### Exemplos de Buscas Eficientes

✅ **Boas buscas:**
- "advogado em São Paulo"
- "clínica odontológica em Recife"
- "pizzaria em Belo Horizonte"
- "consultório médico em Curitiba"
- "salão de beleza em Brasília"
- "academia em Porto Alegre"
- "restaurante japonês em Campinas"

❌ **Buscas ruins:**
- "advogado" (sem localização)
- "empresa" (muito genérico)
- "negócio em SP" (muito vago)

## Interpretando os Resultados

### Colunas da Tabela

1. **Nome**: Nome da empresa no Google
2. **Telefone**: Contato (pode estar vazio)
3. **Endereço**: Localização completa
4. **Website**: 
   - Link (se tiver site)
   - "Sem site" (🎯 sua oportunidade!)
5. **Avaliação**: Nota de 0 a 5 estrelas
6. **Google Maps**: Link direto para a página no Maps

### Badge "Sem site"

Empresas com este badge são suas **oportunidades de prospecção**!

## Usando o Filtro

### Mostrar apenas sem website ✅
Ative este filtro para ver apenas empresas sem site - seus leads qualificados.

### Mostrar todos
Desative para ver todas as empresas encontradas.

## Exportando Dados

### CSV Filtrado
Se o filtro "sem website" estiver ativo, o CSV conterá apenas empresas sem site.

### CSV Completo
Desative o filtro antes de exportar para ter todos os resultados.

### Estrutura do CSV

O arquivo exportado contém:
- Nome
- Telefone
- Endereço
- Website
- Avaliação
- Link Google Maps

Pode ser aberto no Excel, Google Sheets, ou qualquer editor de planilhas.

## Dicas de Prospecção

### 1. Segmente por Região
Faça buscas específicas por bairro ou região:
- "pizzaria no Centro de São Paulo"
- "clínica na Zona Sul do Rio"

### 2. Seja Específico no Nicho
Quanto mais específico, melhor:
- "clínica de estética" vs "clínica"
- "advogado trabalhista" vs "advogado"

### 3. Teste Variações
Teste diferentes termos para o mesmo tipo de negócio:
- "pizzaria" / "pizza" / "rodízio de pizza"
- "academia" / "espaço fitness" / "personal trainer"

### 4. Faça Buscas Regulares
Novos negócios aparecem constantemente. Repita buscas semanalmente.

### 5. Priorize por Avaliação
Empresas com boa avaliação (4+ estrelas) mas sem site são oportunidades valiosas.

## Mensagens de Prospecção

### Template para WhatsApp/Telefone

```
Olá [Nome da Empresa]! 

Vi no Google Maps que vocês têm ótimas avaliações ([X] estrelas)! 👏

Notei que vocês ainda não têm um site próprio. Em 2025, ter presença digital faz toda diferença para atrair novos clientes.

Posso criar um site moderno e profissional para vocês. Interesse?

[Seu Nome]
[Seu Contato]
```

### Template para E-mail (se disponível)

```
Assunto: Proposta de Site para [Nome da Empresa]

Olá [Nome da Empresa],

Encontrei vocês no Google Maps e fiquei impressionado com suas avaliações positivas!

Percebi que vocês ainda não possuem um website próprio. No mercado atual, ter um site profissional:

✅ Aumenta a credibilidade
✅ Atrai mais clientes
✅ Facilita o contato
✅ Destaca você da concorrência

Trabalho com criação de sites modernos e responsivos. Posso criar uma solução personalizada para vocês.

Podemos conversar?

Atenciosamente,
[Seu Nome]
[Seus Contatos]
```

## Limites e Cuidados

### Limites da API Google
- **Free Tier**: $200 de crédito gratuito por mês
- Cada busca consome créditos
- Monitore seu uso no Google Cloud Console

### Boas Práticas
- Não faça dezenas de buscas seguidas
- Salve os resultados importantes
- Use o CSV para não precisar refazer buscas

### Custo Estimado por Busca
- Text Search: ~$0.032
- Place Details (20 resultados): ~$0.34
- **Total por busca: ~$0.37**

Com $200 grátis/mês = ~540 buscas gratuitas

## Perguntas Frequentes

### "Não encontrou resultados"
- Verifique a ortografia
- Tente termos mais genéricos
- Teste outra cidade/região

### "Erro ao buscar"
- Verifique sua conexão com internet
- Confirme se a API Key está configurada
- Veja os logs do Docker

### "Como saber quantas buscas fiz?"
- Acesse o Google Cloud Console
- Vá em "APIs & Services" → "Dashboard"
- Veja o gráfico de uso das APIs

### "Posso automatizar as buscas?"
- Tecnicamente sim, via API
- Cuidado com os limites de custo
- Considere implementar rate limiting

## Próximos Passos

1. 📊 **Organize seus leads** - Use planilhas para gerenciar contatos
2. 📞 **Entre em contato** - Use os templates de mensagem
3. 💼 **Feche negócios** - Ofereça seus serviços
4. 🔄 **Repita o processo** - Busque novos leads regularmente

---

**Boa prospecção! 🚀**
