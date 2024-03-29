export default (req, res) => {
    res.status(200).json( 

        {
            "data": {
              "requestTime": "string",
              "availability": {
                  "uptime" : {
                      "generalUptimeRate" : "",
                      "endpoints" : [
                          {
                              "url" : "",
                              "uptimeRate" : ""
                          }
                      ]
                  },
                  "downtime" : {
                      "generalDowntime" : 0,
                      "scheduledOutage" : 0,
                      "endpoints" : [
                          {
                              "url" : "",
                              "partialDowntime" : 0
                          }
                      ]
                  }
              },
              "invocations": {
                "unauthenticated": {
                  "currentDay": 0,
                  "previousDays": [
                    0
                  ]
                },
                "highPriority": {
                  "currentDay": 0,
                  "previousDays": [
                    0
                  ]
                },
                "mediumPriority": {
                  "currentDay": 0,
                  "previousDays": [
                    0
                  ]
                },
                "unattended": {
                  "currentDay": 0,
                  "previousDays": [
                    0
                  ]
                },
              },
              "averageResponse": {
                "unauthenticated": {
                  "currentDay": 0,
                  "previousDays": [
                    0
                  ]
                },
                "highPriority": {
                  "currentDay": 0,
                  "previousDays": [
                    0
                  ]
                },
                "mediumPriority": {
                  "currentDay": 0,
                  "previousDays": [
                    0
                  ]
                },
                "unattended": {
                  "currentDay": 0,
                  "previousDays": [
                    0
                  ]
                },
              },
              "averageTps": {
                "currentDay": 0,
                "previousDays": [
                  0
                ]
              },
              "peakTps": {
                "currentDay": 0,
                "previousDays": [
                  0
                ]
              },
              "errors": {
                "currentDay": 0,
                "previousDays": [
                  0
                ]
              },
              "rejections": {
                "currentDay": 0,
                "previousDays": [
                  0
                ]
              }
            },
            "links": {
              "self": "string"
            },
            "meta": {}
          }

    )}