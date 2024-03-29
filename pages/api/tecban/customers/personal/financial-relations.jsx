export default (req, res) => {
    res.status(200).json( 
        {
            "data": {
              "updateDateTime": "2021-05-21T08:30:00Z",
              "startDate": "2021-05-21T08:30:00Z",
              "productsServicesType": [
                "SEGURO"
              ],
              "productsServicesTypeAdditionalInfo": "Informações adicionais do tipo de serviço.",
              "procurators": [
                {
                  "type": "PROCURADOR",
                  "cpfNumber": "73677831148",
                  "civilName": "Elza Milena Stefany Teixeira",
                  "socialName": "Carlos"
                }
              ],
              "accounts": [
                {
                  "compeCode": "001",
                  "branchCode": "6272",
                  "number": "24550245",
                  "checkDigit": "4",
                  "type": "CONTA_DEPOSITO_A_VISTA",
                  "subtype": "INDIVIDUAL"
                }
              ]
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