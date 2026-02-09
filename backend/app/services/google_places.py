import os
import requests
from typing import List, Dict, Optional
from dotenv import load_dotenv

load_dotenv()

class GooglePlacesService:
    """Serviço para interagir com a Google Places API"""
    
    def __init__(self):
        self.api_key = os.getenv("GOOGLE_API_KEY")
        if not self.api_key:
            raise ValueError("GOOGLE_API_KEY não configurada no arquivo .env")
        
        self.base_url = "https://maps.googleapis.com/maps/api/place"
    
    def search_places(self, query: str) -> List[Dict]:
        """
        Busca lugares usando Text Search da Places API
        """
        try:
            url = f"{self.base_url}/textsearch/json"
            params = {
                "query": query,
                "key": self.api_key,
                "language": "pt-BR"
            }
            
            response = requests.get(url, params=params)
            response.raise_for_status()
            data = response.json()
            
            if data.get("status") != "OK":
                print(f"API retornou status: {data.get('status')}")
                return []
            
            return data.get("results", [])
        
        except requests.exceptions.RequestException as e:
            print(f"Erro na requisição: {e}")
            return []
    
    def get_place_details(self, place_id: str) -> Optional[Dict]:
        """
        Obtém detalhes completos de um lugar específico
        """
        try:
            url = f"{self.base_url}/details/json"
            params = {
                "place_id": place_id,
                "fields": "name,formatted_phone_number,formatted_address,website,rating,url",
                "key": self.api_key,
                "language": "pt-BR"
            }
            
            response = requests.get(url, params=params)
            response.raise_for_status()
            data = response.json()
            
            if data.get("status") != "OK":
                return None
            
            return data.get("result", {})
        
        except requests.exceptions.RequestException as e:
            print(f"Erro ao buscar detalhes: {e}")
            return None
    
    def search_and_get_details(self, query: str) -> List[Dict]:
        """
        Busca lugares e retorna com detalhes completos
        """
        places = self.search_places(query)
        detailed_results = []
        
        for place in places:
            place_id = place.get("place_id")
            if not place_id:
                continue
            
            details = self.get_place_details(place_id)
            if details:
                detailed_results.append({
                    "name": details.get("name", ""),
                    "phone": details.get("formatted_phone_number"),
                    "address": details.get("formatted_address"),
                    "website": details.get("website"),
                    "rating": details.get("rating"),
                    "maps_url": details.get("url"),
                    "place_id": place_id
                })
        
        return detailed_results
