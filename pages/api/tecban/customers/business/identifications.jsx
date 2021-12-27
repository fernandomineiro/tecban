export default (req, res) => {
    res.status(200).json( 

      {
        "data": [
          {
            "updateDateTime": "2021-05-21T08:30:00Z",
            "businessId": "578-psd-71md6971kjh-2d414",
            "brandName": "Organização A",
            "companyName": "Luiza e Benjamin Assessoria Jurídica Ltda",
            "tradeName": "Mundo da Eletronica",
            "incorporationDate": "2021-05-21T08:30:00Z",
            "cnpjNumber": "50685362006773",
            "companyCnpjNumber": [
              "50685362000135",
              "50685362006555"
            ],
            "otherDocuments": [
              {
                "type": "EIN",
                "number": "128328453",
                "country": "CAN",
                "expirationDate": "2021-05-21"
              }
            ],
            "parties": [
              {
                "personType": "PESSOA_NATURAL",
                "type": "SOCIO",
                "civilName": "Juan Kaique Cláudio Fernandes",
                "socialName": "Karina",
                "companyName": "Luiza e Benjamin Assessoria Jurídica Ltda",
                "tradeName": "Mundo da Eletronica",
                "startDate": "2021-05-21T08:30:00Z",
                "shareholding": "0.51",
                "documentType": "CPF",
                "documentNumber": "73677831148",
                "documentAdditionalInfo": "CNH",
                "documentCountry": "CAN",
                "documentExpirationDate": "2021-05-21",
                "documentIssueDate": "2021-05-21"
              }
            ],
            "contacts": {
              "postalAddresses": [
                {
                  "isMain": true,
                  "address": "Av Naburo Ykesaki, 1270",
                  "additionalInfo": "Fundos",
                  "districtName": "Centro",
                  "townName": "Marília",
                  "ibgeTownCode": "3550308",
                  "countrySubDivision": "SP",
                  "postCode": "17500001",
                  "country": "Brasil",
                  "countryCode": "BRA",
                  "geographicCoordinates": {
                    "latitude": "-90.8365180",
                    "longitude": "-180.836519"
                  }
                }
              ],
              "phones": [
                {
                  "isMain": true,
                  "type": "FIXO",
                  "additionalInfo": "Informações adicionais.",
                  "countryCallingCode": "55",
                  "areaCode": "19",
                  "number": "29875132",
                  "phoneExtension": "932"
                }
              ],
              "emails": [
                {
                  "isMain": true,
                  "email": "karinafernandes-81@br.inter.net"
                }
              ]
            }
          }
        ],
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