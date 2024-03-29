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
            "electronicChannels": [
              {
                "identification": {
                  "type": "INTERNET_BANKING",
                  "urls": [
                    "https://empresaa1.com/internet-banking"
                  ]
                },
                "services": [
                  {
                    "name": "ABERTURA_CONTAS_DEPOSITOS_OU_PAGAMENTO_PRE_PAGA",
                    "code": "ABRE_CONTA_DEPOSITO_OU_PRE_PAGA"
                  },
                  {
                    "name": "CARTAO_CREDITO",
                    "code": "CARTAO_CREDITO"
                  }
                ]
              },
              {
                "identification": {
                  "type": "MOBILE_BANKING",
                  "urls": [
                    "https://empresaa1.com/mobile-zeta",
                    "https://empresaa1.com/mobile-aaa",
                    "https://empresaa1.com/mobile-bbb"
                  ]
                },
                "services": [
                  {
                    "name": "CARTAO_CREDITO",
                    "code": "CARTAO_CREDITO"
                  },
                  {
                    "name": "OPERACOES_ARRENDAMENTO_MERCANTIL",
                    "code": "OPERA_ARRENDAMENTO_MERCANTIL"
                  },
                  {
                    "name": "OUTROS_PRODUTOS_SERVICOS",
                    "code": "OUTROS_PRODUTOS_SERVICOS",
                    "additionalInfo": "Atendimento em outros idiomas"
                  }
  
                ]
              },
              {
                "identification": {
                  "type": "CHAT",
                  "urls": [
                    "https://empresaa1.com/channels-chat1",
                    "https://empresaa1.com/channels-chat2"
                  ]
                },
                "services": [
                  {
                    "name": "SEGUROS",
                    "code": "SEGUROS"
                  },
                  {
                    "name": "APLICACOES_RESGATES_INVESTIMENTOS",
                    "code": "APLICA_RESGATA_INVESTIMENTOS"
                  },
                  {
                    "name": "EXECUCAO_ATIVA_PASSIVA_ORDENS_PAGAMENTO_SOLICITACAO_CLIENTES_USUARIOS",
                    "code": "EXECUCAO_ATIVA_PASSIVA_ORDENS_PAGTO"
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    "links": {
      "self": "https://api.banco.com.br/open-banking/channels/v1/electronic-channels",
      "first": "https://api.banco.com.br/open-banking/channels/v1/electronic-channels",
      "prev": "null",
      "next": "null",
      "last": "https://api.banco.com.br/open-banking/channels/v1/electronic-channels"
    },
    "meta": {
      "totalRecords": 1,
      "totalPages": 1
    }
  }

    )}