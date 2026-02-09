from pydantic import BaseModel
from typing import Optional

class Lead(BaseModel):
    """Modelo de dados para uma empresa/lead"""
    name: str
    phone: Optional[str] = None
    address: Optional[str] = None
    website: Optional[str] = None
    rating: Optional[float] = None
    maps_url: Optional[str] = None
    place_id: str

class SearchRequest(BaseModel):
    """Modelo para requisição de busca"""
    query: str

class ExportRequest(BaseModel):
    """Modelo para requisição de exportação"""
    leads: list[Lead]
