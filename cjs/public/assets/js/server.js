!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="/Users/jonathanperry/Documents/GitHub/Instance/public/assets/js",__webpack_require__(0)}([function(module,exports,__webpack_require__){module.exports=__webpack_require__(6)},,,function(module,exports){"use strict";!function(){function List(){var all={};this.has=function(key){return(all[key]||[]).length>0},this.all=function(){return all}}List.prototype.fetch=function(key){return this.all()[key]},List.prototype.store=function(key,value){(this.all()[key]||(this.all()[key]=[])).push(value)},List.prototype.purge=function(key,value){var list,n;if(list=this.all()[key]){for(n=0;n<list.length;)list[n]!==value?n+=1:list.splice(n,1);if(this.has(key))return!0;delete this.all()[key]}return!0},module.exports=List}()},function(module,exports){"use strict";!function(){function Hash(){var all={};this.has=function(key){for(key in all)return!0;return!1},this.all=function(){return all}}Hash.prototype.fetch=function(key){return this.all()[key]},Hash.prototype.store=function(key,value){this.all()[key]=value},Hash.prototype.purge=function(key){delete this.all()[key]},module.exports=Hash}()},function(module,exports){"use strict";!function(){module.exports={fetch:"GET",store:"PUT",query:"OPTIONS",create:"POST",remove:"DELETE"}}()},function(module,exports,__webpack_require__){"use strict";!function(){function Peace(parameters){var spark,verbs,self=this;return this instanceof Peace?(parameters=(parameters||!1).constructor===Object?parameters:{},spark=peace.spark(parameters.Spark,parameters.server,parameters.spark),verbs=peace.merge(peace.merge(peace.verbs),parameters.verbs),spark.on("connection",function(prime){var id=uuid.v4();peace.state.store(prime.id,id),peace.state.store(id,prime.id),peace.sparkList.store(id,prime),peace.attachAllListeners(verbs,spark,self,id),self.listen.emitter().emit("BEGIN",{id:id}),prime.on("subscribe",function(channel,spark){peace.channelList.fetch(id).store(channel.name,spark),peace.attachAllListeners(verbs,spark,self.channel(channel),id),self.channel(channel.name).listen.emitter().emit("BEGIN",{id:id})}),prime.on("unsubscribe",function(channel,spark){spark.removeAllListeners(),peace.channelList.fetch(id).purge(channel.name,spark),self.channel(channel.name).listen.emitter().emit("CEASE",{id:id})}),prime.on("end",function(){prime.removeAllListeners()})}),spark.on("disconnection",function(prime){var id=peace.state.fetch(prime.id);self.listen.emitter().emit("CEASE",{id:peace.state.fetch(prime.id)}),prime.removeAllListeners(),peace.state.purge(id),peace.state.purge(prime.id),peace.sparkList.purge(id,prime)}),this.channel=function(){function Peace(channel,parameters){var spark,verbs;return this instanceof Peace?(parameters=(parameters||!1).constructor===Object?parameters:{},spark=peace.channel(channel).spark(parameters.Spark,parameters.server,parameters.spark),verbs=peace.merge(peace.merge(peace.verbs),parameters.verbs),this.channel=function(s){return"string"==typeof s?channel=s:channel},this.spark=function(v){return(v||!1)instanceof parameters.Spark?spark=v:spark},this.verbs=function(v){return(v||!1).constructor===Object?verbs=peace.merge(verbs,v):verbs},this.emitter=function(e){var c,emitter;return(c=peace.emitterList.fetch(channel)).store("emitter",emitter=(e||!1)instanceof Emitter?e:c.fetch("emitter")||new Emitter),emitter},this.report=function(event,parameters){var id,message,sparks;(event||!1).constructor===String&&(parameters||!1).constructor===Object&&(id=parameters.id,message=parameters.message,(sparks=peace.channelList.fetch(id).fetch(channel))&&sparks.forEach(function(spark){spark.send(event,message)}))},void(this.listen=function(){return{begin:function(handler){var c,emitter;return(c=peace.emitterList.fetch(channel)).store("EMITTER",emitter=c.fetch("EMITTER")||new Emitter),emitter.on("BEGIN",handler)},cease:function(handler){var c,emitter;return(c=peace.emitterList.fetch(channel)).store("EMITTER",emitter=c.fetch("EMITTER")||new Emitter),emitter.on("BEGIN",handler)},emitter:function emitter(e){var c,emitter;return(c=peace.emitterList.fetch(channel)).store("EMITTER",emitter=(e||!1)instanceof Emitter?e:c.fetch("EMITTER")||new Emitter),emitter}}}())):new Peace(channel,parameters)}return Peace.prototype.fetch=function(handler){var emitter=this.emitter(),verbs=this.verbs();return emitter.on(verbs.fetch,handler)},Peace.prototype.store=function(handler){var emitter=this.emitter(),verbs=this.verbs();return emitter.on(verbs.store,handler)},Peace.prototype.query=function(handler){var emitter=this.emitter(),verbs=this.verbs();return emitter.on(verbs.query,handler)},Peace.prototype.create=function(handler){var emitter=this.emitter(),verbs=this.verbs();return emitter.on(verbs.create,handler)},Peace.prototype.remove=function(handler){var emitter=this.emitter(),verbs=this.verbs();return emitter.on(verbs.remove,handler)},function(channel){return new Peace(channel,parameters)}}(),this.emitter=function(){var emitter=new Emitter;return function(e){return(e||!1)instanceof Emitter?emitter=e:emitter}}(),this.spark=function(v){return(v||!1)instanceof parameters.Spark?spark=v:spark},this.verbs=function(v){return(v||!1).constructor===Object?verbs=peace.merge(verbs,v):verbs},void(this.listen=function(){var _emitter=new Emitter;return{begin:function(handler){return _emitter.on("BEGIN",handler)},cease:function(handler){return _emitter.on("CEASE",handler)},emitter:function(e){return(e||!1)instanceof Emitter?_emitter=e:_emitter}}}())):new Peace(parameters)}var Emitter=__webpack_require__(7),uuid=__webpack_require__(8),peace=__webpack_require__(9);Peace.prototype.fetch=function(handler){var emitter=this.emitter(),verbs=this.verbs();return emitter.on(verbs.fetch,handler)},Peace.prototype.store=function(handler){var emitter=this.emitter(),verbs=this.verbs();return emitter.on(verbs.store,handler)},Peace.prototype.query=function(handler){var emitter=this.emitter(),verbs=this.verbs();return emitter.on(verbs.query,handler)},Peace.prototype.create=function(handler){var emitter=this.emitter(),verbs=this.verbs();return emitter.on(verbs.create,handler)},Peace.prototype.remove=function(handler){var emitter=this.emitter(),verbs=this.verbs();return emitter.on(verbs.remove,handler)},Peace.prototype.report=function(event,parameters){var id,message,sparks;(event||!1).constructor===String&&(parameters||!1).constructor===Object&&(id=parameters.id,message=parameters.message,(sparks=peace.sparkList.fetch(id))&&sparks.forEach(function(spark){spark.send(event,message)}))},module.exports=Peace}()},function(module,exports,__webpack_require__){"use strict";function EE(fn,context,once){this.fn=fn,this.context=context,this.once=once||!1}function EventEmitter(){}var prefix="function"!=typeof Object.create?"~":!1;EventEmitter.prototype._events=void 0,EventEmitter.prototype.listeners=function(event,exists){var evt=prefix?prefix+event:event,available=this._events&&this._events[evt];if(exists)return!!available;if(!available)return[];if(available.fn)return[available.fn];for(var i=0,l=available.length,ee=new Array(l);l>i;i++)ee[i]=available[i].fn;return ee},EventEmitter.prototype.emit=function(event,a1,a2,a3,a4,a5){var evt=prefix?prefix+event:event;if(!this._events||!this._events[evt])return!1;var args,i,listeners=this._events[evt],len=arguments.length;if("function"==typeof listeners.fn){switch(listeners.once&&this.removeListener(event,listeners.fn,void 0,!0),len){case 1:return listeners.fn.call(listeners.context),!0;case 2:return listeners.fn.call(listeners.context,a1),!0;case 3:return listeners.fn.call(listeners.context,a1,a2),!0;case 4:return listeners.fn.call(listeners.context,a1,a2,a3),!0;case 5:return listeners.fn.call(listeners.context,a1,a2,a3,a4),!0;case 6:return listeners.fn.call(listeners.context,a1,a2,a3,a4,a5),!0}for(i=1,args=new Array(len-1);len>i;i++)args[i-1]=arguments[i];listeners.fn.apply(listeners.context,args)}else{var j,length=listeners.length;for(i=0;length>i;i++)switch(listeners[i].once&&this.removeListener(event,listeners[i].fn,void 0,!0),len){case 1:listeners[i].fn.call(listeners[i].context);break;case 2:listeners[i].fn.call(listeners[i].context,a1);break;case 3:listeners[i].fn.call(listeners[i].context,a1,a2);break;default:if(!args)for(j=1,args=new Array(len-1);len>j;j++)args[j-1]=arguments[j];listeners[i].fn.apply(listeners[i].context,args)}}return!0},EventEmitter.prototype.on=function(event,fn,context){var listener=new EE(fn,context||this),evt=prefix?prefix+event:event;return this._events||(this._events=prefix?{}:Object.create(null)),this._events[evt]?this._events[evt].fn?this._events[evt]=[this._events[evt],listener]:this._events[evt].push(listener):this._events[evt]=listener,this},EventEmitter.prototype.once=function(event,fn,context){var listener=new EE(fn,context||this,!0),evt=prefix?prefix+event:event;return this._events||(this._events=prefix?{}:Object.create(null)),this._events[evt]?this._events[evt].fn?this._events[evt]=[this._events[evt],listener]:this._events[evt].push(listener):this._events[evt]=listener,this},EventEmitter.prototype.removeListener=function(event,fn,context,once){var evt=prefix?prefix+event:event;if(!this._events||!this._events[evt])return this;var listeners=this._events[evt],events=[];if(fn)if(listeners.fn)(listeners.fn!==fn||once&&!listeners.once||context&&listeners.context!==context)&&events.push(listeners);else for(var i=0,length=listeners.length;length>i;i++)(listeners[i].fn!==fn||once&&!listeners[i].once||context&&listeners[i].context!==context)&&events.push(listeners[i]);return events.length?this._events[evt]=1===events.length?events[0]:events:delete this._events[evt],this},EventEmitter.prototype.removeAllListeners=function(event){return this._events?(event?delete this._events[prefix?prefix+event:event]:this._events=prefix?{}:Object.create(null),this):this},EventEmitter.prototype.off=EventEmitter.prototype.removeListener,EventEmitter.prototype.addListener=EventEmitter.prototype.on,EventEmitter.prototype.setMaxListeners=function(){return this},EventEmitter.prefixed=prefix,module.exports=EventEmitter},function(module,exports,__webpack_require__){(function(){function parse(s,buf,offset){var i=buf&&offset||0,ii=0;for(buf=buf||[],s.toLowerCase().replace(/[0-9a-f]{2}/g,function(oct){16>ii&&(buf[i+ii++]=_hexToByte[oct])});16>ii;)buf[i+ii++]=0;return buf}function unparse(buf,offset){var i=offset||0,bth=_byteToHex;return bth[buf[i++]]+bth[buf[i++]]+bth[buf[i++]]+bth[buf[i++]]+"-"+bth[buf[i++]]+bth[buf[i++]]+"-"+bth[buf[i++]]+bth[buf[i++]]+"-"+bth[buf[i++]]+bth[buf[i++]]+"-"+bth[buf[i++]]+bth[buf[i++]]+bth[buf[i++]]+bth[buf[i++]]+bth[buf[i++]]+bth[buf[i++]]}function v1(options,buf,offset){var i=buf&&offset||0,b=buf||[];options=options||{};var clockseq=null!=options.clockseq?options.clockseq:_clockseq,msecs=null!=options.msecs?options.msecs:(new Date).getTime(),nsecs=null!=options.nsecs?options.nsecs:_lastNSecs+1,dt=msecs-_lastMSecs+(nsecs-_lastNSecs)/1e4;if(0>dt&&null==options.clockseq&&(clockseq=clockseq+1&16383),(0>dt||msecs>_lastMSecs)&&null==options.nsecs&&(nsecs=0),nsecs>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");_lastMSecs=msecs,_lastNSecs=nsecs,_clockseq=clockseq,msecs+=122192928e5;var tl=(1e4*(268435455&msecs)+nsecs)%4294967296;b[i++]=tl>>>24&255,b[i++]=tl>>>16&255,b[i++]=tl>>>8&255,b[i++]=255&tl;var tmh=msecs/4294967296*1e4&268435455;b[i++]=tmh>>>8&255,b[i++]=255&tmh,b[i++]=tmh>>>24&15|16,b[i++]=tmh>>>16&255,b[i++]=clockseq>>>8|128,b[i++]=255&clockseq;for(var node=options.node||_nodeId,n=0;6>n;n++)b[i+n]=node[n];return buf?buf:unparse(b)}function v4(options,buf,offset){var i=buf&&offset||0;"string"==typeof options&&(buf="binary"==options?new BufferClass(16):null,options=null),options=options||{};var rnds=options.random||(options.rng||_rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf)for(var ii=0;16>ii;ii++)buf[i+ii]=rnds[ii];return buf||unparse(rnds)}var _rng,_global=this;if("function"==typeof _global.require)try{var _rb=_global.require("crypto").randomBytes;_rng=_rb&&function(){return _rb(16)}}catch(e){}if(!_rng&&_global.crypto&&crypto.getRandomValues){var _rnds8=new Uint8Array(16);_rng=function(){return crypto.getRandomValues(_rnds8),_rnds8}}if(!_rng){var _rnds=new Array(16);_rng=function(){for(var r,i=0;16>i;i++)0===(3&i)&&(r=4294967296*Math.random()),_rnds[i]=r>>>((3&i)<<3)&255;return _rnds}}for(var BufferClass="function"==typeof _global.Buffer?_global.Buffer:Array,_byteToHex=[],_hexToByte={},i=0;256>i;i++)_byteToHex[i]=(i+256).toString(16).substr(1),_hexToByte[_byteToHex[i]]=i;var _seedBytes=_rng(),_nodeId=[1|_seedBytes[0],_seedBytes[1],_seedBytes[2],_seedBytes[3],_seedBytes[4],_seedBytes[5]],_clockseq=16383&(_seedBytes[6]<<8|_seedBytes[7]),_lastMSecs=0,_lastNSecs=0,uuid=v4;uuid.v1=v1,uuid.v4=v4,uuid.parse=parse,uuid.unparse=unparse,uuid.BufferClass=BufferClass;module.exports=uuid}).call(this)},function(module,exports,__webpack_require__){"use strict";!function(){var List=__webpack_require__(3),Hash=__webpack_require__(4),peace={state:new Hash,verbs:__webpack_require__(5),channel:function(_channel){return{spark:function(Spark,server,_spark2){var state;return(state=peace.state.fetch(_channel))?state:(peace.state.store(_channel,state=peace.spark(Spark,server,_spark2).channel(_channel)),state)}}},spark:function(Spark,server,_spark){var state;return(state=peace.state.fetch("spark"))?state:(Spark=(Spark||!1).constructor===Function?Spark:function(){},_spark=(_spark||!1).constructor===Object?_spark:{},peace.state.store("spark",state=new Spark(server,_spark)),state)},merge:function(){var has=Object.prototype.hasOwnProperty;return function(alpha,omega){var key,verbs={};alpha=(alpha||!1).constructor===Object?alpha:{},omega=(omega||!1).constructor===Object?omega:{};for(key in alpha)has.call(alpha,key)===!0&&(verbs[key]=has.call(omega,key)===!0?omega[key]:alpha[key]);return verbs}}(),sparkList:new List,channelList:function(){var cache=new Hash;return{store:function(key){var state;return cache.store(key,state=new List),state},fetch:function(key){var state;return(state=cache.fetch(key))||cache.store(key,state=new List),state},purge:function(key){var state;return(state=cache.fetch(key))&&cache.purge(key),state}}}(),emitterList:function(){var cache=new Hash;return{store:function(key){var state;return cache.store(key,state=new Hash),state},fetch:function(key){var state;return(state=cache.fetch(key))||cache.store(key,state=new Hash),state},purge:function(key){var state;return(state=cache.fetch(key))&&cache.purge(key),state}}}(),attachAllListeners:function(verbs,spark,peace,id){var verb;for(verb in verbs)verbs.hasOwnProperty(verb)&&this.attachListener(verbs[verb],spark,peace,id)},attachListener:function(verb,spark,peace,id){(verb||!1).constructor===String&&spark.on(verb,this.listenerFactory(verb,peace,id))},listenerFactory:function(verb,peace,id){return function(message,callback){console.log("(primus)",verb),peace.emitter().emit(verb,{id:id,message:message},callback)}}};module.exports=peace}()}]);
//# sourceMappingURL=server.js.map