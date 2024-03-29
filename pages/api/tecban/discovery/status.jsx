export default (req, res) => {
    res.status(200).json( 
{
    "data": {
      "status": [
        {
          "code": "SCHEDULED_OUTAGE",
          "explanation": "Manutenção Planejada",
          "detectionTime": "2020-01-01T01:00:00Z",
          "expectedResolutionTime": "2020-01-01T01:00:00Z",
          "updateTime": "2020-01-02T01:00:00Z",
          "unavailableEndpoints": [
            "https://api.banco.com.br/open-banking/channels/v1/branches"
          ]
        },
        {
          "code": "PARTIAL_FAILURE",
          "explanation": "Falha na execução do serviço",
          "detectionTime": "2020-01-01T01:00:00Z",
          "expectedResolutionTime": "2020-01-01T01:00:00Z",
          "updateTime": "2020-01-02T01:00:00Z",
          "unavailableEndpoints": [
            "https://api.banco.com.br/open-banking/channels/v1/electronic-channels"
          ]
        }
      ],
      "links": {
        "self": "https://api.banco.com.br/open-banking/discovery/v1/status"
      },
      "meta": {
        "totalRecords": 1,
        "totalPages": 1
      }
    }
  }

  )}