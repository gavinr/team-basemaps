// COPYRIGHT © 2016 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

//  copyright

/**
       * The copyright text as defined by the map service.
       *
       * @type {string}
       */

// We expose "copyrightText" as "copyright" in the SDK.

define(["require","dojo/_base/lang","dojo/io-query","../Graphic","../PopupTemplate","../core/lang","../core/jsonDictionary","../core/MultiOriginJSONSupport","../core/sniff","../core/Collection","../core/Error","../core/HandleRegistry","../core/promiseUtils","../core/requireUtils","../core/urlUtils","../geometry/Extent","../geometry/SpatialReference","../symbols/SimpleMarkerSymbol","../symbols/SimpleLineSymbol","../symbols/SimpleFillSymbol","../symbols/support/jsonUtils","../renderers/SimpleRenderer","../renderers/UniqueValueRenderer","../renderers/support/jsonUtils","../tasks/support/Query","./Layer","./mixins/PortalLayer","./graphics/sources/MemorySource","./support/Field","./support/FeatureType","./support/LabelClass","./support/arcgisLayerURL"],function(e,r,t,i,n,o,s,a,l,u,c,d,h,f,p,y,m,b,g,v,F,I,S,O,w,_,j,x,P,E,M,L){var T=s({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",absoluteHeight:"absolute-height"}),q=s({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"}),C="FeatureLayer",A=_.createSubclass([j,a],{declaredClass:"esri.layers.FeatureLayer",viewModulePaths:{"2d":"../views/2d/layers/GraphicsLayerView2D","3d":"../views/3d/layers/FeatureLayerView3D"},constructor:function(){this._handles=new d},normalizeCtorArgs:function(e,t){return"string"==typeof e?r.mixin({},{url:e},t):e},load:function(){var e=this.loadFromPortal(function(){return this.url?this.createGraphicsSource().then(this._initLayerProperties.bind(this)):void 0}.bind(this),!this._hasMemorySource()).then(function(){return this.url?void 0:this.createGraphicsSource().then(this._initLayerProperties.bind(this))}.bind(this));this.addResolvingPromise(e)},_handles:null,_rndProps:["field","field2","field3","rotationInfo.field","proportionalSymbolInfo.field","proportionalSymbolInfo.normalizationField","colorInfo.field","colorInfo.normalizationField"],_visVariableProps:["field","normalizationField"],controllerModulePaths:{0:"./graphics/controllers/SnapshotController",1:{"2d":"./graphics/controllers/OnDemandController","3d":"./graphics/controllers/OnDemandController"},2:"./graphics/controllers/SelectionController",6:"./graphics/controllers/AutoController"},properties:{advancedQueryCapabilities:null,allowGeometryUpdates:{json:{read:function(e){return null==e?!0:e}}},allRenderers:{readOnly:!0,dependsOn:["loaded","renderer","fields"],get:function(){return this._getAllRenderers(this.renderer)}},capabilities:{json:{read:function(e){return e&&e.split(",").map(function(e){return e.trim()})}}},copyright:{value:null,json:{readFrom:["copyrightText"],read:function(e,r){return r.copyrightText}}},definitionExpression:{value:null,json:{ignore:!0}},defaultSymbol:{json:{read:F.fromJSON}},editable:{value:!1,get:function(){return this.userIsAdmin||this._hasMemorySource()||this._get("editable")},json:{readFrom:["capabilities"],read:function(e,r){return r.capabilities&&(e=-1!==r.capabilities.toLowerCase().indexOf("editing")),!!e}}},elevationInfo:{value:null,json:{read:function(e){return e=o.clone(e),e.mode=T.fromJSON(e.mode),e}}},fields:{value:null,type:[P]},fullExtent:{value:null,type:y,json:{readFrom:["extent"],read:function(e,r){return r.extent&&y.fromJSON(r.extent)}}},generalizeForScale:4e3,geometryType:{json:{read:q.fromJSON}},hasAttachments:{value:!1,readOnly:!0,get:function(){return!this._hasMemorySource()&&this._get("hasAttachments")}},hasM:!1,hasZ:!1,id:{json:{ignore:!0}},isTable:{value:!1,readOnly:!0,json:{readFrom:["type"],read:function(e,r){return"Table"===r.type}}},labelsVisible:{value:!1,json:{readFrom:["showLabels"],read:function(e,r){return r.showLabels}}},labelingInfo:{value:null,json:{readFrom:["drawingInfo.labelingInfo"],read:function(e,r){if(e=r.drawingInfo&&r.drawingInfo.labelingInfo,!e)return null;var t,i=/\[([^\[\]]+)\]/gi,n=function(e,t){var i=this.getField(t,r.fields);return"["+(i&&i.name||t)+"]"}.bind(this);return e.map(function(e){var r=M.fromJSON(e);return t=r.labelExpression,t&&(r.labelExpression=t.replace(i,n)),r})}}},layerId:{json:{readFrom:["id"],read:function(e,r){return r.id}}},legendEnabled:{value:!0,json:{readFrom:["showLegend"],read:function(e,r){return null!=r.showLegend?r.showLegend:!0}}},maxPointCountForAuto:4e3,maxRecordCountForAuto:2e3,maxRecordCount:null,maxVertexCountForAuto:25e4,minScale:{value:0,json:{readFrom:["minScale","effectiveMinScale"],read:function(e,r){return r.effectiveMinScale||e}}},maxScale:{value:0,json:{readFrom:["maxScale","effectiveMaxScale"],read:function(e,r){return r.effectiveMaxScale||e}}},mode:{dependsOn:["source"],get:function(){var e=this._get("mode");if(null==e){var r=this.source.isInstanceOf(u);e=r?A.MODE_SNAPSHOT:A.MODE_SNAPSHOT}return e}},objectIdField:{json:{readFrom:["fields"],read:function(e,r){return e||r.fields.some(function(r){return"esriFieldTypeOID"===r.type&&(e=r.name),!!e}),e}}},opacity:{value:1,json:{readFrom:["drawingInfo.transparency"],read:function(e,r){var t=r.drawingInfo.transparency;return 1-t/100}}},outFields:{value:null,dependsOn:["requiredFields"],get:function(){var e=this._get("outFields"),r=this.requiredFields;return e?-1===e.indexOf("*")&&r.forEach(function(r){-1===e.indexOf(r)&&e.push(r)}):e=r,this.loaded&&(e=e.filter(function(e){return"*"===e||!!this.getField(e)},this),e=e.map(function(e){return"*"===e?e:this.getField(e).name},this)),e},set:function(e){var r=this.requiredFields;e?-1===e.indexOf("*")&&r.forEach(function(r){-1===e.indexOf(r)&&e.push(r)}):e=r,this.loaded&&(e=e.filter(function(e){return"*"===e||!!this.getField(e)},this),e=e.map(function(e){return"*"===e?e:this.getField(e).name},this)),this._set("outFields",e)}},parsedUrl:{dependsOn:["layerId"],get:function(){var e=this.url?p.urlToObject(this.url):null;return null!=this.layerId&&null!=e&&(e.path=p.join(e.path,this.layerId.toString())),e}},popupEnabled:{value:!0,json:{readFrom:["disablePopup"],read:function(e,r){return null!=r.disablePopup?!r.disablePopup:!0}}},popupTemplate:{value:null,type:n,json:{readFrom:["popupInfo"],read:function(e,r){return r.popupInfo?n.fromJSON(r.popupInfo):null}}},portalLoaderModule:{dependsOn:["source"],get:function(){return this._hasMemorySource()?"portal/loaders/FeatureCollectionLoader":"portal/loaders/FeatureLayerLoader"}},relationships:null,renderer:{set:function(e){var r=this._getAllRenderers(e);this._fixRendererFields(r),this._set("renderer",e)},json:{readFrom:["drawingInfo.renderer","defaultSymbol","type"],read:function(e,r){var t;if(e=r.drawingInfo&&r.drawingInfo.renderer)e=O.fromJSON(e);else if(r.defaultSymbol)F.fromJSON(r.defaultSymbol),r.types&&r.types.length?(e=new S({defaultSymbol:t,field:r.typeIdField}),r.types.forEach(function(r){e.addUniqueValueInfo(r.id,F.fromJSON(r.symbol))})):e=new I({symbol:t});else if("Table"!==r.type){switch(r.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":t=new b;break;case"esriGeometryPolyline":t=new g;break;case"esriGeometryPolygon":t=new v}e=t&&new I({symbol:t})}return e}}},requiredFields:{dependsOn:["allRenderers"],get:function(){var e=this.timeInfo,t=[this.objectIdField,this.typeIdField,this.editFieldsInfo&&this.editFieldsInfo.creatorField,e&&e.startTimeField,e&&e.endTimeField,this.trackIdField],i=this._rndProps;return this.allRenderers.forEach(function(e){i.forEach(function(i){t.push(r.getObject(i,!1,e))}),e.visualVariables&&e.visualVariables.forEach(function(e){this._visVariableProps.forEach(function(r){t.push(e[r])})},this)},this),t=t.concat(this.dataAttributes),t.filter(function(e,r,t){return!!e&&t.indexOf(e)===r&&"function"!=typeof e})}},returnM:!1,returnZ:!1,source:{cast:function(e){return e&&(Array.isArray(e)||e.isInstanceOf&&e.isInstanceOf(u))?new x({layer:this,items:e}):e},set:function(e){var r=this._get("source");r!==e&&(r&&r.isInstanceOf&&r.isInstanceOf(x)&&this._resetMemorySource(r),e&&e.isInstanceOf&&e.isInstanceOf(x)&&this._initMemorySource(e),this._set("source",e))}},supportsCoordinatesQuantization:!1,serviceDefinitionExpression:{json:{readFrom:["definitionExpression"],read:function(e,r){return r.definitionExpression}}},spatialReference:{json:{readFrom:["extent"],read:function(e,r){return e=r.extent&&r.extent.spatialReference,e&&m.fromJSON(e)}}},title:{get:function(){if(this.url){var e=L.parse(this.url);if(e&&e.title)return e.title}return""},json:{readFrom:["name"],read:function(e,r){if(null!=e)return e;var t=[];if(this.titleIncludesUrl&&this.url){var i=L.parse(this.url);i&&i.title&&t.push(i.title)}if(r.name){var n=L.cleanTitle(r.name);(0===t.length||-1===t[0].toLowerCase().indexOf(n.toLowerCase()))&&t.push(n)}return t.join(" - ")}}},titleIncludesUrl:!0,trackIdField:{json:{readFrom:["timeInfo.trackIdField"],read:function(e,r){return r.timeInfo.trackIdField}}},typeIdField:{json:{read:function(e,r){if(e){var t=this.getField(e,r.fields);t&&(e=t.name)}return e}}},types:{json:{read:function(e,r){var t=r.editFieldsInfo,i=t&&t.creatorField,n=t&&t.editorField;return e&&e.map(function(e){return e=new E(e),this._fixTemplates(e.templates,i),this._fixTemplates(e.templates,n),e},this)}}},url:{set:function(e){var r=p.urlToObject(e),i=L.parse(r.path);if(i&&null!=i.sublayer){null==this.layerId&&(this.layerId=i.sublayer);var n=t.objectToQuery(r.query);e=i.url.path,n&&(e=e+"?"+n)}this._set("url",p.normalize(e))}},userIsAdmin:!1,version:{json:{readFrom:["currentVersion","capabilities","drawingInfo","hasAttachments","htmlPopupType","relationships","timeInfo","typeIdField","types"],read:function(e,r){return e=r.currentVersion,e||(e=r.hasOwnProperty("capabilities")||r.hasOwnProperty("drawingInfo")||r.hasOwnProperty("hasAttachments")||r.hasOwnProperty("htmlPopupType")||r.hasOwnProperty("relationships")||r.hasOwnProperty("timeInfo")||r.hasOwnProperty("typeIdField")||r.hasOwnProperty("types")?10:9.3),e}}}},createGraphicsSource:function(){if(this._hasMemorySource())return this.emit("graphics-source-create",{graphicsSource:this.source}),h.resolve(this.source);var r="FeatureLayerSource";return f.when(e,"./graphics/sources/"+r).then(function(e){return new e({layer:this})}.bind(this)).then(function(e){return this.emit("graphics-source-create",{graphicsSource:e}),e}.bind(this))},createGraphicsController:function(t){var n=this.controllerModulePaths[this.mode],o=t.layerView,s=u.ofType(i),a=this.source,l=a&&a.isInstanceOf&&a.isInstanceOf(u),d=r.mixin(t.options||{},{layer:this,layerView:o,graphics:l?a:new s});return l?h.resolve(d):("object"==typeof n&&(n=n[o.view.type]),n?f.when(e,n).then(function(e){return new e(d)}.bind(this)).then(function(e){return this.emit("graphics-controller-create",{graphicsController:e}),e}.bind(this)):h.reject(new c("Layer mode",'Module path not found for controller type: "'+this.mode+'"')))},createQueryParameters:function(){var e=new w;return e.returnGeometry=!0,e.returnZ=this.hasZ&&this.returnZ||null,e.returnM=this.hasM&&this.returnM||null,e.outFields=this.outFields,e.where=this.definitionExpression||"1=1",e.multipatchOption="multipatch"===this.geometryType?"xyFootprint":null,e},getField:function(e,r){var t;return r=r||this.fields,r&&(e=e.toLowerCase(),r.some(function(r){return r&&r.name.toLowerCase()===e&&(t=r),!!t})),t},graphicChanged:function(e){this.emit("graphic-update",e)},queryFeatures:function(e){if(e=e||this.createQueryParameters(),!this.source.queryFeatures)return h.reject(new c(C,"Layer source does not support queryFeatures capability"));var r=this.popupTemplate;return this.source.queryFeatures(e).then(function(e){return e&&e.features&&e.features.forEach(function(e){e.popupTemplate=r}),e})},queryObjectIds:function(e){return e=e||this.createQueryParameters(),this.source.queryObjectIds?this.source.queryObjectIds(e):h.reject(new c(C,"Layer source does not support queryObjectIds capability"))},queryFeatureCount:function(e){return e=e||this.createQueryParameters(),this.source.queryFeatureCount?this.source.queryFeatureCount(e):h.reject(new c(C,"Layer source does not support queryFeatureCount capability"))},queryExtent:function(e){return e=e||this.createQueryParameters(),this.source.queryExtent?this.source.queryExtent(e):h.reject(new c(C,"Layer source does not support queryExtent capability"))},_initLayerProperties:function(e){this.source||(this.source=e),e.url&&(this.url=e.url,this.elevationInfo&&(this.elevationInfo=this.properties.elevationInfo.json.read(this.elevationInfo))),e.layerDefinition&&this.read(e.layerDefinition),this._verifySource(),this._verifyFields(),this._fixSymbolUrls(),this.useQueryTimestamp=(l("ie")||l("safari"))&&this.editable&&this.version<10.02,this.watch("token",function(){this._fixSymbolUrls()}.bind(this))},_fixSymbolUrls:function(){var e=this.renderer;if(!this._hasMemorySource()){var r=this.token,t=[e.symbol,e.defaultSymbol],i=e.classBreakInfos||e.uniqueValueInfos;i&&i.forEach(function(e){t.push(e.symbol)}),t.forEach(function(e){var t=e&&e.url;t&&r&&-1!==t.search(/https?\:/i)&&-1===t.indexOf("?token=")&&(e.url+="?token="+r)})}},_getAllRenderers:function(e){var r=[];if(e){var t=[e,e.trackRenderer,e.observationRenderer,e.latestObservationRenderer];t.forEach(function(e){e&&(r.push(e),e.rendererInfos&&e.rendererInfos.forEach(function(e){e.renderer&&r.push(e.renderer)}))})}return r},_fixRendererFields:function(e){var r=this.fields;e&&r&&e.forEach(function(e){this._fixFieldName(this._rndProps,e),e.visualVariables&&e.visualVariables.forEach(function(e){this._fixFieldName(this._visVariableProps,e)},this)},this)},_fixFieldName:function(e,t){e&&e.forEach(function(e){var i=r.getObject(e,!1,t),n=i&&"function"!=typeof i&&this.getField(i);n&&r.setObject(e,n.name,t)},this)},_verifyFields:function(){var e=this.parsedUrl&&this.parsedUrl.path||"undefined";this.objectIdField||console.log("FeatureLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||this._hasMemorySource()||-1!==e.search(/\/FeatureServer\//i)||this.fields&&this.fields.some(function(e){return"geometry"===e.type})||console.log("FeatureLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")},_fixTemplates:function(e,r){e&&e.forEach(function(e){var t=e.prototype&&e.prototype.attributes;t&&r&&delete t[r]})},_verifySource:function(){if(this._hasMemorySource()){if(this.url)throw new c("feature-layer:mixed-source-and-url","FeatureLayer cannot be created with both an in-memory source and a url");var e=["geometryType","fields","objectIdField"],r=e.every(function(e){return this.hasOwnProperty(e)},this);if(!r)throw new c("feature-layer:missing-property","FeatureLayer created as feature collection requires properties: "+e.join(),{requiredProperties:e})}else if(!this.url)throw new c("feature-layer:source-or-url-required","FeatureLayer requires either a url, a valid portal item or a source")},_initMemorySource:function(e){e.forEach(function(e){e.layer=this}.bind(this)),this._handles.add([e.on("after-add",function(e){e.item.layer=this}.bind(this)),e.on("after-remove",function(e){e.item.layer=null}.bind(this))],"fl-source")},_resetMemorySource:function(e){e.forEach(function(e){e.layer=null}.bind(this)),this._handles.remove("fl-source")},_hasMemorySource:function(){return!this.url&&this.source}});return r.mixin(A,{MODE_SNAPSHOT:0,MODE_ONDEMAND:1,MODE_SELECTION:2,MODE_AUTO:6}),A});