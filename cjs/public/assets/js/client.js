!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="/Users/jonathanperry/Documents/GitHub/Instance/public/assets/js",__webpack_require__(0)}([function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)},function(module,exports,__webpack_require__){"use strict";!function(){function Peace(parameters){var spark,verbs;return this instanceof Peace?(parameters=(parameters||!1).constructor===Object?parameters:{},spark=peace.spark(parameters.Spark,parameters.spark),verbs=peace.merge(peace.merge(peace.verbs),parameters.verbs),this.channel=function(){function Peace(channel,parameters){var spark,verbs;return this instanceof Peace?(parameters=(parameters||!1).constructor===Object?parameters:{},spark=peace.channel(channel).spark(parameters.Spark,parameters.spark),verbs=peace.merge(peace.merge(peace.verbs),parameters.verbs),this.channel=function(s){return"string"==typeof s?channel=s:channel},this.spark=function(v){return(v||!1)instanceof parameters.Spark?spark=v:spark},void(this.verbs=function(v){return(v||!1).constructor===Object?verbs=v:verbs})):new Peace(channel,parameters)}return Peace.prototype.fetch=function(resource,query){var spark=this.spark(),verbs=this.verbs(),message=peace.generateMessage(resource,query);return new Promise(function(success,failure){try{spark.send(verbs.fetch,message,success)}catch(exception){failure(exception)}})},Peace.prototype.store=function(resource,query){var spark=this.spark(),verbs=this.verbs(),message=peace.generateMessage(resource,query);return new Promise(function(success,failure){try{spark.send(verbs.store,message,success)}catch(exception){failure(exception)}})},Peace.prototype.query=function(resource,query){var spark=this.spark(),verbs=this.verbs(),message=peace.generateMessage(resource,query);return new Promise(function(success,failure){try{spark.send(verbs.query,message,success)}catch(exception){failure(exception)}})},Peace.prototype.create=function(resource,query){var spark=this.spark(),verbs=this.verbs(),message=peace.generateMessage(resource,query);return new Promise(function(success,failure){try{spark.send(verbs.create,message,success)}catch(exception){failure(exception)}})},Peace.prototype.remove=function(resource,query){var spark=this.spark(),verbs=this.verbs(),message=peace.generateMessage(resource,query);return new Promise(function(success,failure){try{spark.send(verbs.remove,message,success)}catch(exception){failure(exception)}})},Peace.prototype.report=function(event,parameters){var spark=this.spark();return(event||!1).constructor===String?new Promise(function(success,failure){try{spark.send(event,parameters,success)}catch(exception){failure(exception)}}):void 0},Peace.prototype.listen=function(){var ListenerFor=peace.listenerManagerFactory();return function(event){return new ListenerFor(event,this.spark())}}(),function(channel){return new Peace(channel,parameters)}}(),this.spark=function(v){return(v||!1)instanceof parameters.Spark?spark=v:spark},void(this.verbs=function(v){return(v||!1).constructor===Object?verbs=peace.merge(verbs,v):verbs})):new Peace(parameters)}var peace=__webpack_require__(2);Peace.prototype.fetch=function(resource,query){var spark=this.spark(),verbs=this.verbs(),message=peace.generateMessage(resource,query);return new Promise(function(success,failure){try{spark.send(verbs.fetch,message,success)}catch(exception){failure(exception)}})},Peace.prototype.store=function(resource,query){var spark=this.spark(),verbs=this.verbs(),message=peace.generateMessage(resource,query);return new Promise(function(success,failure){try{spark.send(verbs.store,message,success)}catch(exception){failure(exception)}})},Peace.prototype.query=function(resource,query){var spark=this.spark(),verbs=this.verbs(),message=peace.generateMessage(resource,query);return new Promise(function(success,failure){try{spark.send(verbs.query,message,success)}catch(exception){failure(exception)}})},Peace.prototype.create=function(resource,query){var spark=this.spark(),verbs=this.verbs(),message=peace.generateMessage(resource,query);return new Promise(function(success,failure){try{spark.send(verbs.create,message,success)}catch(exception){failure(exception)}})},Peace.prototype.remove=function(resource,query){var spark=this.spark(),verbs=this.verbs(),message=peace.generateMessage(resource,query);return new Promise(function(success,failure){try{spark.send(verbs.remove,message,success)}catch(exception){failure(exception)}})},Peace.prototype.report=function(event,parameters){var spark;return(event||!1).constructor===String?(spark=this.spark(),new Promise(function(success,failure){try{spark.send(event,parameters,success)}catch(exception){failure(exception)}})):void 0},Peace.prototype.listen=function(){var ListenerFor=peace.listenerManagerFactory();return function(event){return new ListenerFor(event,this.spark())}}(),module.exports=Peace}()},function(module,exports,__webpack_require__){"use strict";!function(){var Hash=(__webpack_require__(3),__webpack_require__(4)),peace={state:new Hash,channel:function(_channel){return{spark:function(Spark,_spark2){var state;return(state=peace.state.fetch(_channel))?state:(peace.state.store(_channel,state=peace.spark(Spark,_spark2).channel(_channel)),state)}}},spark:function(Spark,_spark){var state;return(state=peace.state.fetch("spark"))?state:(Spark=(Spark||!1).constructor===Function?Spark:function(){},_spark=(_spark||!1).constructor===Object?_spark:{},peace.state.store("spark",state=function(Spark,spark){var url=spark.url||window.location.href,options=spark.options||{};return new Spark(url,options)}(Spark,_spark)),state)},verbs:__webpack_require__(5),merge:function(){var has=Object.prototype.hasOwnProperty;return function(alpha,omega){var key,verbs={};alpha=(alpha||!1).constructor===Object?alpha:{},omega=(omega||!1).constructor===Object?omega:{};for(key in alpha)has.call(alpha,key)===!0&&(verbs[key]=has.call(omega,key)===!0?omega[key]:alpha[key]);return verbs}}(),generateMessage:function(one,two){return(one||!1).constructor===String?(two||!1).constructor===Object?{resource:one?one:"/",query:two}:{resource:one?one:"/"}:(one||!1).constructor===Object?{resource:"/",query:one}:{resource:"/"}},listenerManagerFactory:function(){var listeners={},broadcast={};return function(event,spark){var self=this;(event||!1).constructor===String&&(self.then=function(handle){var l;return(handle||!1).constructor===Function?((l=listeners[event]||(listeners[event]=[])).push(handle),1===l.length&&spark.on(event,broadcast[event]=function(m){var i=0,j=l.length;for(j;j>i;i+=1)l[i](m)}),self.stop=function(){for(var i=0,j=l.length;j>i;)l[i]===handle?l.splice(i,1):i+=1;return 0===l.length&&(spark.off(event,broadcast[event]),delete listeners[event],delete broadcast[event]),self},self):void 0})}}};module.exports=peace}()},function(module,exports){"use strict";!function(){function List(){var all={};this.has=function(key){return(all[key]||[]).length>0},this.all=function(){return all}}List.prototype.fetch=function(key){return this.all()[key]},List.prototype.store=function(key,value){(this.all()[key]||(this.all()[key]=[])).push(value)},List.prototype.purge=function(key,value){var list,n;if(list=this.all()[key]){for(n=0;n<list.length;)list[n]!==value?n+=1:list.splice(n,1);if(this.has(key))return!0;delete this.all()[key]}return!0},module.exports=List}()},function(module,exports){"use strict";!function(){function Hash(){var all={};this.has=function(key){for(key in all)return!0;return!1},this.all=function(){return all}}Hash.prototype.fetch=function(key){return this.all()[key]},Hash.prototype.store=function(key,value){this.all()[key]=value},Hash.prototype.purge=function(key){delete this.all()[key]},module.exports=Hash}()},function(module,exports){"use strict";!function(){module.exports={fetch:"GET",store:"PUT",query:"OPTIONS",create:"POST",remove:"DELETE"}}()}]);
//# sourceMappingURL=client.js.map