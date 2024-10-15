export const DEMO_CONFIG = {
  network: "sepolia",
  wallet: {
    type: "ENCRYPTED_JSON",
    encryptedJson:
      '{"address":"b303ded953ddaa3a6f35b89710769eb2a9e4b05d","id":"42c1eb39-04bd-4326-8292-aff14e95f77a","version":3,"crypto":{"cipher":"aes-128-ctr","cipherparams":{"iv":"d3865796bcefd002d69e38f44e62eb1e"},"ciphertext":"81a26e75110fef1a039bd3252334aea6bb1fc1d93ef5468fd8b63f34c7799b08","kdf":"scrypt","kdfparams":{"salt":"c7b297f8293c00a15b55c30435ba309958f51a9a69ddacfc13ea9454985884bd","n":131072,"dklen":32,"p":1,"r":8},"mac":"e34cf0382016899df65fed5a0809969b7eeefb2c938d8cb0b817e8a93206a98a"}}',
  },
  forms: [
    {
      name: "TradeTrust Bill of Lading v2 (Carrier)",
      type: "TRANSFERABLE_RECORD",
      defaults: {
        $template: {
          type: "EMBEDDED_RENDERER",
          name: "BILL_OF_LADING_CARRIER",
          url: "https://generic-templates.tradetrust.io",
        },
        issuers: [
          {
            identityProof: {
              type: "DNS-TXT",
              location: "www.knowledgecatalyst.io",
            },
            name: "DEMO TOKEN REGISTRY",
            tokenRegistry: "0x46751B39CA61B875869815a5f1C5E3862C2049da",
            revocation: {
              type: "REVOCATION_STORE",
              location: "0x8cBec88A436B0ecF67037d43a395608B108cDa64",
            },
          },
        ],
        network: {
          chain: "FREE",
          chainId: "101010",
        },
      },
      schema: {
        type: "object",
        additionalProperties: false,
        required: ["blNumber", "scac"],
        properties: {
          blNumber: {
            type: "string",
            title: "BL Number",
          },
          scac: {
            type: "string",
            title: "Standard Carrier Alpha Code (SCAC)",
          },
          carrierName: {
            title: "Signed for the Carrier",
            type: "string",
          },
          logo: {
            type: "string",
            title: "Company Logo",
          },
          shipper: {
            type: "object",
            properties: {
              name: {
                type: "string",
              },
              address: {
                type: "object",
                properties: {
                  street: {
                    type: "string",
                  },
                  country: {
                    type: "string",
                  },
                },
              },
            },
          },
          onwardInlandRouting: {
            type: "string",
            title: "Onward Inland Routing",
          },
          consignee: {
            type: "object",
            properties: {
              toOrderOfText: {
                title: "is consigned to (e.g. TO ORDER OF, TO ORDER, etc..)",
                type: "string",
              },
              name: {
                type: "string",
              },
            },
          },
          notifyParty: {
            title: "Notify Party",
            type: "object",
            properties: {
              name: {
                type: "string",
              },
            },
          },
          vessel: {
            type: "string",
          },
          voyageNo: {
            title: "Voyage No.",
            type: "string",
          },
          portOfLoading: {
            title: "Port of Loading",
            type: "string",
          },
          portOfDischarge: {
            title: "Port of Discharge",
            type: "string",
          },
          placeOfReceipt: {
            title: "Place of Receipt",
            type: "string",
          },
          placeOfDelivery: {
            title: "Place of Delivery",
            type: "string",
          },
          packages: {
            type: "array",
            title: "Packages",
            items: {
              type: "object",
              properties: {
                description: {
                  type: "string",
                },
                measurement: {
                  type: "string",
                },
                weight: {
                  type: "string",
                },
              },
            },
          },
          carrierReceipt: {
            title: "Carrier's Receipt",
            type: "string",
          },
          placeOfIssueBL: {
            title: "Place of Issue of B/L",
            type: "string",
          },
          numberOfOriginalBL: {
            title: "Number of original B/L",
            type: "string",
          },
          dateOfIssueBL: {
            title: "Date of Issue of B/L",
            type: "string",
          },
          shippedOnBoardDate: {
            title: "Shipped on Board Date",
            type: "string",
          },
          signForTermsAndCondition: {
            title: "Signed for Terms and Conditions",
            type: "string",
          },
          signedForCarrierText: {
            title: "Text for signed for carrier",
            type: "string",
          },
          carrierSignature: {
            type: "string",
            title: "Carrier Signature",
          },
          termsOfCarriage: {
            type: "string",
            title: "Terms Of Carriage",
          },
        },
      },
      uiSchema: {
        logo: {
          "ui:widget": "file",
          "ui:options": {
            text: "Upload Company Logo",
            accept: ".png, .jpeg, .jpg",
          },
        },
        notifyParty: {
          name: {
            "ui:widget": "textarea",
          },
        },
        packages: {
          items: {
            description: {
              "ui:widget": "textarea",
            },
          },
        },
        carrierReceipt: {
          "ui:widget": "textarea",
        },
        placeOfIssueBL: {
          "ui:widget": "textarea",
        },
        numberOfOriginalBL: {
          "ui:widget": "textarea",
        },
        dateOfIssueBL: {
          "ui:widget": "date",
        },
        shippedOnBoardDate: {
          "ui:widget": "date",
        },
        signForTermsAndCondition: {
          "ui:widget": "textarea",
        },
        carrierSignature: {
          "ui:widget": "file",
          "ui:options": {
            text: "Upload Carrier Signature",
            accept: ".png, .jpeg, .jpg",
          },
        },
        termsOfCarriage: {
          "ui:widget": "textarea",
        },
      },
      attachments: {
        allow: true,
        accept: ".pdf, .json",
      },
      extension: "tt",
      fileName: "bill-<%= blNumber %>",
    },
    {
      name: "TradeTrust ChAFTA Certificate of Origin v2",
      type: "VERIFIABLE_DOCUMENT",
      defaults: {
        $template: {
          type: "EMBEDDED_RENDERER",
          name: "CHAFTA_COO",
          url: "https://generic-templates.tradetrust.io",
        },
        issuers: [
          {
            name: "Demo Issuer",
            documentStore: "0x8cBec88A436B0ecF67037d43a395608B108cDa64",
            identityProof: {
              type: "DNS-TXT",
              location: "www.knowledgecatalyst.io",
            },
          },
        ],
        network: {
          chain: "FREE",
          chainId: "101010",
        },
      },
      schema: {
        type: "object",
        additionalProperties: false,
        properties: {
          iD: {
            type: "string",
            title: "COO ID",
          },
          issueDateTime: {
            type: "string",
            title: "Issued Date & Time",
          },
          firstSignatoryAuthentication: {
            title: "Signatory Authentication",
            type: "object",
            properties: {
              signature: {
                type: "string",
                title: "First Signatory",
              },
            },
          },
          supplyChainConsignment: {
            title: "Supply Chain Consignment",
            type: "object",
            properties: {
              iD: {
                type: "string",
                title: "ID",
              },
              information: {
                type: "string",
                title: "Consignment Information",
              },
              exportCountry: {
                title: "Export Country",
                type: "object",
                properties: {
                  code: {
                    type: "string",
                    title: "Country Code",
                  },
                },
              },
              exporter: {
                title: "Exporter",
                type: "object",
                properties: {
                  iD: {
                    title: "ID",
                    type: "string",
                  },
                  name: {
                    title: "Name",
                    type: "string",
                  },
                  postalAddress: {
                    title: "",
                    type: "object",
                    properties: {
                      line1: {
                        type: "string",
                        title: "Address Line 1",
                      },
                      line2: {
                        type: "string",
                        title: "Address Line 2",
                      },
                      cityName: {
                        type: "string",
                        title: "City",
                      },
                      postcode: {
                        type: "string",
                        title: "Postal Code",
                      },
                      countrySubDivisionName: {
                        type: "string",
                        title: "Country Sub Division Name",
                      },
                      countryCode: {
                        type: "string",
                        title: "Country Code",
                      },
                    },
                  },
                },
              },
              importCountry: {
                type: "object",
                title: "Import Country",
                properties: {
                  code: {
                    type: "string",
                    title: "Country Code",
                  },
                },
              },
              importer: {
                title: "Importer's Details (if known)",
                type: "object",
                properties: {
                  iD: {
                    title: "Importer ID",
                    type: "string",
                  },
                  name: {
                    title: "Name",
                    type: "string",
                  },
                  postalAddress: {
                    title: "",
                    type: "object",
                    properties: {
                      line1: {
                        type: "string",
                        title: "Address Line 1",
                      },
                      line2: {
                        type: "string",
                        title: "Address Line 2",
                      },
                      cityName: {
                        type: "string",
                        title: "City",
                      },
                      postcode: {
                        type: "string",
                        title: "Postal Code",
                      },
                      countrySubDivisionName: {
                        type: "string",
                        title: "Country Sub Division Name",
                      },
                      countryCode: {
                        type: "string",
                        title: "Country Code",
                      },
                    },
                  },
                },
              },
              includedConsignmentItems: {
                type: "array",
                title: "Included Consignment Items",
                items: {
                  type: "object",
                  properties: {
                    iD: {
                      type: "string",
                      title: "ID",
                    },
                    information: {
                      type: "string",
                      title: "Information",
                    },
                    crossBorderRegulatoryProcedure: {
                      type: "object",
                      title: "",
                      properties: {
                        originCriteriaText: {
                          type: "string",
                          title: "Origin Criteria Text",
                        },
                      },
                    },
                    manufacturer: {
                      type: "object",
                      title: "Manufacturer",
                      properties: {
                        iD: {
                          type: "string",
                          title: "ID",
                        },
                        name: {
                          type: "string",
                          title: "Name",
                        },
                        postalAddress: {
                          title: "",
                          type: "object",
                          properties: {
                            line1: {
                              type: "string",
                              title: "Address Line 1",
                            },
                            line2: {
                              type: "string",
                              title: "Address Line 2",
                            },
                            cityName: {
                              type: "string",
                              title: "City",
                            },
                            postcode: {
                              type: "string",
                              title: "Postal Code",
                            },
                            countrySubDivisionName: {
                              type: "string",
                              title: "Country Sub Division Name",
                            },
                            countryCode: {
                              type: "string",
                              title: "Country Code",
                            },
                          },
                        },
                      },
                    },
                    tradeLineItems: {
                      type: "array",
                      title: "Trade line Items",
                      items: {
                        type: "object",
                        properties: {
                          sequenceNumber: {
                            type: "integer",
                            title: "Sequence Number",
                          },
                          invoiceReference: {
                            type: "object",
                            title: "Invoice Reference",
                            properties: {
                              iD: {
                                type: "string",
                                title: "ID",
                              },
                              formattedIssueDateTime: {
                                type: "string",
                                title: "Formatted Issue Date & Time",
                              },
                              attachedBinaryFile: {
                                type: "object",
                                title: "",
                                properties: {
                                  uRI: {
                                    type: "string",
                                    title: "Attached Binary File URI",
                                  },
                                },
                              },
                            },
                          },
                          tradeProduct: {
                            type: "object",
                            title: "Trade Product",
                            properties: {
                              iD: {
                                type: "string",
                                title: "ID",
                              },
                              description: {
                                type: "string",
                                title: "Description",
                              },
                              harmonisedTariffCode: {
                                type: "object",
                                title: "",
                                properties: {
                                  classCode: {
                                    type: "string",
                                    title: "Harmonised Tariff Class Code",
                                  },
                                  className: {
                                    type: "string",
                                    title: "Harmonised Tariff Class Name",
                                  },
                                },
                              },
                              originCountry: {
                                type: "object",
                                title: "Origin Country",
                                properties: {
                                  code: {
                                    type: "string",
                                    title: "Code",
                                  },
                                },
                              },
                            },
                          },
                          transportPackages: {
                            type: "array",
                            title: "Transport Packages",
                            items: {
                              type: "object",
                              properties: {
                                iD: {
                                  type: "string",
                                  title: "ID",
                                },
                                grossVolume: {
                                  type: "string",
                                  title: "Gross Volume",
                                },
                                grossWeight: {
                                  type: "string",
                                  title: "Gross Weight",
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              loadingBaseportLocation: {
                type: "object",
                title: "Loading Baseport Location",
                properties: {
                  iD: {
                    type: "string",
                    title: "ID",
                  },
                  name: {
                    type: "string",
                    title: "Name",
                  },
                },
              },
              mainCarriageTransportMovement: {
                title: "Main Carriage Transport Movement",
                type: "object",
                properties: {
                  iD: {
                    type: "string",
                    title: "ID",
                  },
                  information: {
                    type: "string",
                    title: "Information",
                  },
                  usedTransportMeans: {
                    title: "",
                    type: "object",
                    properties: {
                      name: {
                        type: "string",
                        title: "Used Transport",
                      },
                      iD: {
                        type: "string",
                        title: "Used Transport ID",
                      },
                    },
                  },
                  departureEvent: {
                    title: "",
                    type: "object",
                    properties: {
                      departureDateTime: {
                        type: "string",
                        title: "Departure Date and Time",
                      },
                    },
                  },
                },
              },
              unloadingBaseportLocation: {
                type: "object",
                title: "Unloading Baseport Location",
                properties: {
                  iD: {
                    type: "string",
                    title: "ID",
                  },
                  name: {
                    type: "string",
                    title: "Name",
                  },
                },
              },
            },
          },
        },
      },
      uiSchema: {
        issueDateTime: {
          "ui:widget": "datetime",
        },
        firstSignatoryAuthentication: {
          signature: {
            "ui:widget": "file",
            "ui:options": {
              text: "Upload Signature",
              accept: ".png, .jpeg, .jpg",
            },
          },
        },
        supplyChainConsignment: {
          includedConsignmentItems: {
            items: {
              tradeLineItems: {
                items: {
                  invoiceReference: {
                    formattedIssueDateTime: {
                      "ui:widget": "datetime",
                    },
                  },
                },
              },
            },
          },
          mainCarriageTransportMovement: {
            departureEvent: {
              departureDateTime: {
                "ui:widget": "datetime",
              },
            },
          },
        },
      },
      attachments: {
        allow: true,
        accept: ".pdf",
      },
      extension: "tt",
    },

    {
      name: "TradeTrust Invoice v2 (DNS-DID)",
      type: "VERIFIABLE_DOCUMENT",
      defaults: {
        $template: {
          type: "EMBEDDED_RENDERER",
          name: "INVOICE",
          url: "https://generic-templates.tradetrust.io",
        },
        issuers: [
          {
            identityProof: {
              type: "DNS-TXT",
              location: "www.knowledgecatalyst.io",
            },
            name: "DEMO TOKEN REGISTRY",
            tokenRegistry: "0x46751B39CA61B875869815a5f1C5E3862C2049da",
            revocation: {
              type: "REVOCATION_STORE",
              location: "0x8cBec88A436B0ecF67037d43a395608B108cDa64",
            },
          },
        ],
        network: {
          chain: "FREE",
          chainId: "101010",
        },
      },
      schema: {
        type: "object",
        additionalProperties: false,
        properties: {
          id: {
            type: "string",
            title: "Invoice ID",
          },
          date: {
            type: "string",
            title: "Date",
          },
          customerId: {
            type: "string",
            title: "Customer ID",
          },
          terms: {
            type: "string",
            title: "Terms",
          },
          billFrom: {
            type: "object",
            title: "Bill From",
            properties: {
              name: {
                type: "string",
                title: "Name",
              },
              streetAddress: {
                type: "string",
                title: "Street Address",
              },
              city: {
                type: "string",
                title: "City",
              },
              postalCode: {
                type: "string",
                title: "Postal Code",
              },
              phoneNumber: {
                type: "string",
                title: "Phone Number",
              },
            },
          },
          billTo: {
            type: "object",
            title: "Bill To",
            properties: {
              name: {
                type: "string",
                title: "Name",
              },
              email: {
                type: "string",
                title: "Email",
              },
              company: {
                type: "object",
                title: "Bill To Company",
                properties: {
                  name: {
                    type: "string",
                    title: "Name",
                  },
                  streetAddress: {
                    type: "string",
                    title: "Street Address",
                  },
                  city: {
                    type: "string",
                    title: "City",
                  },
                  postalCode: {
                    type: "string",
                    title: "Postal Code",
                  },
                  phoneNumber: {
                    type: "string",
                    title: "Phone Number",
                  },
                },
              },
            },
          },
          billableItems: {
            type: "array",
            title: "Billable Items",
            items: {
              type: "object",
              properties: {
                description: {
                  type: "string",
                  title: "Description",
                },
                quantity: {
                  type: "string",
                  title: "Quantity",
                },
                unitPrice: {
                  type: "string",
                  title: "Unit Price",
                },
                amount: {
                  type: "string",
                  title: "Amount",
                },
              },
            },
          },
          subtotal: {
            type: "string",
            title: "Subtotal",
          },
          tax: {
            type: "string",
            title: "Tax (%)",
          },
          taxTotal: {
            type: "string",
            title: "Tax Total",
          },
          total: {
            type: "string",
            title: "Total",
          },
        },
      },
      uiSchema: {
        date: {
          "ui:widget": "date",
        },
      },
      extension: "tt",
    },
  ],
};

export const DEMO_PASSWD = "";
