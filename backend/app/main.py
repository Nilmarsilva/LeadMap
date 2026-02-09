from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import search

# Criar aplicação FastAPI
app = FastAPI(
    title="LeadMap API",
    description="API para busca de leads no Google Maps",
    version="1.0.0"
)

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Em produção, especificar domínios permitidos
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluir rotas
app.include_router(search.router, prefix="/api", tags=["search"])

@app.get("/")
async def root():
    """Endpoint raiz"""
    return {
        "message": "LeadMap API",
        "version": "1.0.0",
        "status": "online"
    }

@app.get("/health")
async def health():
    """Health check"""
    return {"status": "healthy"}
