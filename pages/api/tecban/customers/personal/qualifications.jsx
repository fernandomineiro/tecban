export default (req, res) => {
    res.status(200).json( 



{
    "data": {
      "updateDateTime": "2021-05-21T08:30:00Z",
      "companyCnpj": "50685362000135",
      "occupationCode": "RECEITA_FEDERAL",
      "occupationDescription": "01",
      "informedIncome": {
        "frequency": "DIARIA",
        "amount": 100000.04,
        "currency": "BRL",
        "date": "2021-05-21"
      },
      "informedPatrimony": {
        "amount": 100000.04,
        "currency": "BRL",
        "year": 2010
      }
    },
    "links": {
      "self": "https://api.banco.com.br/open-banking/api/v1/resource",
      "first": "https://api.banco.com.br/open-banking/api/v1/resource",
      "prev": "https://api.banco.com.br/open-banking/api/v1/resource",
      "next": "https://api.banco.com.br/open-banking/api/v1/resource",
      "last": "https://api.banco.com.br/open-banking/api/v1/resource"
    },
    "meta": {
      "totalRecords": 1,
      "totalPages": 1,
      "requestDateTime": "2021-05-21T08:30:00Z"
    }
  }

  )}