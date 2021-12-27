export default (req, res) => {
    res.status(200).json( 
{
  "data": {
    "outages": [
      {
        "outageTime": "2020-07-21T08:30:00Z",
        "duration": "PT2H30M",
        "isPartial": false,
        "explanation": "Atualização do API Gateway",
        "unavailableEndpoints": [
          "https://api.banco.com.br/open-banking/discovery/v1/outages"
        ]
      }
    ]
  },
  "links": {
    "self": "https://api.banco.com.br/open-banking/discovery/v1/outages"
  },
  "meta": {
    "totalRecords": 1,
    "totalPages": 1
  }
}
)}