YUI.add("io-upload-iframe",function(B){var H=B.config.win;function D(K,N){var M=[],L,J;for(L in N){if(N.hasOwnProperty(N,L)){M[J]=document.createElement("input");M[J].type="hidden";M[J].name=L;M[J].value=N[L].f.appendChild(M[J]);}}return M;}function E(L,M){var K,J;if(M&&M.length>0){for(K=0,J=M.length;K<J;K++){L.removeChild(M[K]);}}}function I(L,M){var K=B.Node.create('<iframe id="ioupload'+L.id+'" name="ioupload'+L.id+'" />'),J={position:"absolute",top:"-1000",left:"-1000"};K.setStyles(J);B.get("body").appendChild(K);B.on("load",function(){A(L,M);},"#ioupload"+L.id);}function A(L,M){var K,J=B.get("#ioupload"+L.id).get("contentWindow.document.body");if(M.timeout){G(L.id);}K=J.query("pre:first-child");L.c.responseText=(K)?K.get("innerHTML"):J.get("innerHTML");B.io.complete(L,M);setTimeout(function(){F(L.id);},0);}function C(J,K){B.io._timeout[J.id]=H.setTimeout(function(){B.io.abort(J,K);},K.timeout);}function G(J){H.clearTimeout(B.io._timeout[J]);delete B.io._timeout[J];}function F(J){B.Event.purgeElement("#ioupload"+J,false);B.get("body").removeChild(B.get("#ioupload"+J));}B.mix(B.io,{_upload:function(K,L,R){var O=(typeof R.form.id==="string")?document.getElementById(R.form.id):R.form.id,Q,N,M,J,P;I(K,R);P={action:O.getAttribute("action"),target:O.getAttribute("target")};O.setAttribute("action",L);O.setAttribute("method","POST");O.setAttribute("target","ioupload"+K.id);O.setAttribute((B.UA.ie&&!document.documentMode)?"encoding":"enctype","multipart/form-data");if(R.data){N=D(O,R.data);}if(R.timeout){C(K,R);}O.submit();B.io.start(K.id,R);if(R.data){E(O,N);}for(J in P){if(P.hasOwnProperty(P,J)){if(P[J]){O.setAttribute(J,O[prop]);}else{O.removeAttribute(J);}}}}});},"@VERSION@",{requires:["io-base"]});