YUI.add("exec-command",function(B){var A=function(){A.superclass.constructor.apply(this,arguments);};B.extend(A,B.Base,{_inst:null,command:function(E,D){var C=A.COMMANDS[E];if(C){return C.call(this,E,D);}else{return this._command(E,D);}},_command:function(E,D){var C=this.getInstance();try{C.config.doc.execCommand(E,false,D);}catch(F){}},getInstance:function(){if(!this._inst){this._inst=this.get("host").getInstance();}return this._inst;},initializer:function(){B.mix(this.get("host"),{execCommand:function(D,C){return this.exec.command(D,C);},_execCommand:function(D,C){return this.exec._command(D,C);}});}},{NAME:"execCommand",NS:"exec",ATTRS:{host:{value:false}},COMMANDS:{wrap:function(E,C){var D=this.getInstance();return(new D.Selection()).wrapContent(C);},inserthtml:function(E,C){var D=this.getInstance();return(new D.Selection()).insertContent(C);},insertimage:function(D,C){return this.command("inserthtml",'<img src="'+C+'">');},addclass:function(E,C){var D=this.getInstance();return(new D.Selection()).getSelected().addClass(C);},removeclass:function(E,C){var D=this.getInstance();return(new D.Selection()).getSelected().removeClass(C);},bidi:function(){var F=this.getInstance(),E=new F.Selection(),D,C,G="p,div,li,body";if(E.anchorNode){D=E.anchorNode;if(!E.anchorNode.test(G)){D=E.anchorNode.ancestor(G);}C=D.getAttribute("dir");if(C===""){C=F.one("html").getAttribute("dir");}if(C==="rtl"){C="ltr";}else{C="rtl";}D.setAttribute("dir",C);}return D;},backcolor:function(C,D){if(B.UA.gecko||B.UA.opera){C="hilitecolor";}if(!B.UA.ie){this._command("styleWithCSS","true");}this._command(C,D);if(!B.UA.ie){this._command("styleWithCSS",false);}},hilitecolor:function(){A.COMMANDS.backcolor.apply(this,arguments);}}});B.namespace("Plugin");B.Plugin.ExecCommand=A;},"@VERSION@",{requires:["frame"],skinnable:false});