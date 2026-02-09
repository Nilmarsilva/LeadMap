import pandas as pd
from typing import List
from io import StringIO

def export_to_csv(leads: List[dict]) -> str:
    """
    Exporta lista de leads para CSV
    Retorna o conteúdo do CSV como string
    """
    if not leads:
        return ""
    
    # Criar DataFrame do pandas
    df = pd.DataFrame(leads)
    
    # Renomear colunas para português
    column_mapping = {
        "name": "Nome",
        "phone": "Telefone",
        "address": "Endereço",
        "website": "Website",
        "rating": "Avaliação",
        "maps_url": "Link Google Maps",
        "place_id": "Place ID"
    }
    
    df = df.rename(columns=column_mapping)
    
    # Reordenar colunas
    columns_order = ["Nome", "Telefone", "Endereço", "Website", "Avaliação", "Link Google Maps"]
    existing_columns = [col for col in columns_order if col in df.columns]
    df = df[existing_columns]
    
    # Converter para CSV
    csv_buffer = StringIO()
    df.to_csv(csv_buffer, index=False, encoding='utf-8-sig')
    
    return csv_buffer.getvalue()
