from fastapi import APIRouter, HTTPException
from fastapi.responses import StreamingResponse
from app.models.lead import SearchRequest, ExportRequest, Lead
from app.services.google_places import GooglePlacesService
from app.utils.export_csv import export_to_csv
from io import BytesIO
import time

router = APIRouter()

@router.post("/search")
async def search_leads(request: SearchRequest):
    """
    Endpoint para buscar empresas/leads
    """
    try:
        start_time = time.time()
        
        # Validar query
        if not request.query or len(request.query.strip()) < 3:
            raise HTTPException(
                status_code=400, 
                detail="Query de busca deve ter pelo menos 3 caracteres"
            )
        
        # Buscar lugares
        service = GooglePlacesService()
        results = service.search_and_get_details(request.query)
        
        # Calcular estatísticas
        total = len(results)
        without_website = len([r for r in results if not r.get("website")])
        execution_time = round(time.time() - start_time, 2)
        
        return {
            "success": True,
            "data": results,
            "stats": {
                "total": total,
                "without_website": without_website,
                "execution_time": execution_time
            }
        }
    
    except ValueError as e:
        raise HTTPException(status_code=500, detail=str(e))
    except Exception as e:
        raise HTTPException(
            status_code=500, 
            detail=f"Erro ao buscar leads: {str(e)}"
        )

@router.post("/export")
async def export_leads(request: ExportRequest):
    """
    Endpoint para exportar leads para CSV
    """
    try:
        if not request.leads:
            raise HTTPException(
                status_code=400,
                detail="Nenhum lead fornecido para exportação"
            )
        
        # Converter leads para dict
        leads_dict = [lead.dict() for lead in request.leads]
        
        # Gerar CSV
        csv_content = export_to_csv(leads_dict)
        
        if not csv_content:
            raise HTTPException(
                status_code=500,
                detail="Erro ao gerar arquivo CSV"
            )
        
        # Retornar arquivo
        return StreamingResponse(
            BytesIO(csv_content.encode('utf-8-sig')),
            media_type="text/csv",
            headers={
                "Content-Disposition": "attachment; filename=leadmap_export.csv"
            }
        )
    
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Erro ao exportar CSV: {str(e)}"
        )
