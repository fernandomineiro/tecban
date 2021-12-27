export default (req, res) => {
    res.status(200).json( 

        {
            "data": {
              "brand": {
                "name": "Organização A",
                "companies": [
                  {
                    "name": "Empresa A1",
                    "cnpjNumber": "45086338000178",
                    "urlComplementaryList": "https://empresaa1.com/branches-banking",
                    "branches": [
                      {
                        "identification": {
                          "type": "AGENCIA",
                          "code": "0001",
                          "checkDigit": "9",
                          "name": "Marília",
                          "relatedBranch": "0001",
                          "openingDate": "2010-01-02"
                        },
                        "postalAddress": {
                          "address": "Av Naburo Ykesaki, 1270",
                          "additionalInfo": "Loja B",
                          "districtName": "Centro",
                          "townName": "Marília",
                          "ibgeCode": "3515890",
                          "countrySubDivision": "SP",
                          "postCode": "17500001",
                          "country": "Brasil",
                          "countryCode": "BRA",
                          "geograficCoordinates": {
                            "latitude": "-90.009876543",
                            "longitude": "-180.00986543"
                          }
                        },
                        "availability": {
                          "standards": [
                            {
                              "weekday": "SEGUNDA_FEIRA",
                              "openingTime": "10:00:57Z",
                              "closingTime": "16:00:57Z"
                            },
                            {
                              "weekday": "TERCA_FEIRA",
                              "openingTime": "10:00:57Z",
                              "closingTime": "16:00:57Z"
                            },
                            {
                              "weekday": "QUARTA_FEIRA",
                              "openingTime": "10:00:57Z",
                              "closingTime": "16:00:57Z"
                            },
                            {
                              "weekday": "QUINTA_FEIRA",
                              "openingTime": "10:00:57Z",
                              "closingTime": "16:00:57Z"
                            },
                            {
                              "weekday": "SEXTA_FEIRA",
                              "openingTime": "10:00:57Z",
                              "closingTime": "16:00:57Z"
                            }
                          ],
                          "exception": "Exceto feriados municipais, estaduais e nacionais",
                          "isPublicAccessAllowed": true
                        },
                        "phones": [
                          {
                            "type": "FIXO",
                            "countryCallingCode": "55",
                            "areaCode": "14",
                            "number": "35721199"
                          },
                          {
                            "type": "MOVEL",
                            "countryCallingCode": "55",
                            "areaCode": "14",
                            "number": "997865532"
                          }
                        ],
                        "services": [
                          {
                            "name": "RECEBIMENTOS_PAGAMENTOS_QUALQUER_NATUREZA",
                            "code": "RECEBE_PAGA_QUALQUER_NATUREZA"
                          },
                          {
                            "name": "OUTROS_PRODUTOS_SERVICOS",
                            "code": "OUTROS_PRODUTOS_SERVICOS",
                            "additionalInfo": "Renegociação"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            },
            "links": {
              "self": "https://api.banco.com.br/open-banking/channels/v1/branches",
              "first": "https://api.banco.com.br/open-banking/channels/v1/branches",
              "prev": "null",
              "next": "null",
              "last": "https://api.banco.com.br/open-banking/channels/v1/branches"
            },
            "meta": {
              "totalRecords": 1,
              "totalPages": 1
            }
          }


    )}