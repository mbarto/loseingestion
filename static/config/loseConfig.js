﻿{
   "composerUrl":"",
   "socialUrl":"",
   "start":0,
   "limit":20,
   "geoStoreBase": "http://localhost:8082/geostore/rest/",
   "adminUrl": "http://localhost:8082/admin/",
   "msmTimeout":30000,
   "twitter":{
      "via":"geosolutions_it",
      "hashtags":""
   },
   "mediaContent":"./externals/mapmanager/theme/media",
   "ASSET":{
        "delete_icon": "./externals/mapmanager/theme/img/user_delete.png",
        "edit_icon": "./externals/mapmanager/theme/img/user_edit.png"
   },
   "locales":[
      [
         "en",
         "English"
      ],
      [
         "it",
         "Italiano"
      ],
      [
         "fr",
         "Français"
      ],
      [
         "de",
         "Deutsch"
      ],
      [
         "es",
         "Español"
      ]
   ],
   "tools":[{
        "ptype": "mxp_categoryinitializer",
		"neededCategories": ["ARCHIVEDRUNS", "ARCHIVEDLOGS"]
    },{
        "ptype": "mxp_login",
        "pluginId": "loginTool",
        "actionTarget":{
          "target": "north.tbar",
          "index": 3
        },
		"forceLogin": true
    },{
        "ptype": "mxp_languageselector",
        "actionTarget":{
          "target": "north.tbar",
          "index": 7
        }
    }],
   "adminTools":[{
		"ptype": "mxp_filebrowser",
        "actionTarget":{
          "target": "north.tbar",
          "index": 1
        }
   },{
         "ptype": "mxp_geobatch_flows",
         "geoBatchRestURL":"http://localhost:9000/geobatch/rest/",
         "geoStoreRestURL":"http://localhost:8082/geostore/rest/",
		 "skipFlowsNotInRunConfigs": true,
		 "showConsumersDetails": true,
         "forceOrder": true,
		 "consumersPlugins": [
			{
				"ptype": "importmetadata",
				"wfsURL": "http://localhost:8080/geoserver/ows", 
                "metadataFeature": "import_metadata", 
                "metadataErrorsFeature": "import_metadata_errors", 
                "metadataNS": "lose",
				"wfsVersion": "1.1.0"
			}
		 ],
		 "autoOpen": true,
         "runConfigs": {
            "targetrunner":{
                "xtype": "geobatch_run_local_form",
                "baseDir": "j:\\Develop\\destination\\lose_ingestion_temp",
                "fileRegex": "\\.zip$",
                "path":"/bersagli",
                "order": 1
            },
			"pterrunner":{
                "xtype": "geobatch_run_local_form",
                "baseDir": "j:\\Develop\\destination\\lose_ingestion_temp",
                "fileRegex": "\\.zip$",
                "path":"/pter",
                "order": 2
            },
            "originalroadrunner":{
                "xtype": "geobatch_run_local_form",
                "baseDir": "j:\\Develop\\destination\\lose_ingestion_temp",
                "fileRegex": "\\.zip$",
                "path":"/archi",
                "order": 3
            },
			"roadcalculator":{
                "xtype": "geobatch_run_roads_processing",
				"wfsURL": "http://localhost:8080/geoserver/ows", 
                "partnerFeature": "siig_d_partner", 
                "partnerNS": "lose",
				"metadataFeature": "import_metadata", 
                "metadataNS": "lose",
				"wfsVersion": "1.1.0",
				"height": 100,
                "order": 4
            },
			"migration":{
                "xtype": "geobatch_run_migration",
				"wfsURL": "http://localhost:8080/geoserver/ows", 
                "partnerFeature": "siig_d_partner", 
                "partnerNS": "lose",
				"metadataFeature": "import_metadata", 
                "metadataNS": "lose",
				"wfsVersion": "1.1.0",
				"height": 100,
                "order": 5
            }

           
         },
         "actionTarget":{
           "target": "north.tbar",
           "index": 2
         }
    },{
        "ptype": "mxp_login",
        "pluginId": "loginTool",
        "actionTarget":{
          "target": "north.tbar",
          "index": 10
        }
    },{
        "ptype": "mxp_languageselector",
        "actionTarget":{
          "target": "north.tbar",
          "index": 20
        }
    }],
   "embedLink": {
		"embeddedTemplateName": "viewer",
		"showDirectURL": true,
        "showQRCode":true,
        "qrCodeSize":128,
        "appDownloadUrl":"http://demo.geo-solutions.it/share/mapstoremobile/MapStoreMobile.apk"

	}
}