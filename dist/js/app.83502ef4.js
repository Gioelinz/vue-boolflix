(function(e){function i(i){for(var a,r,o=i[0],c=i[1],A=i[2],I=0,v=[];I<o.length;I++)r=o[I],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&v.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(i);while(v.length)v.shift()();return n.push.apply(n,A||[]),t()}function t(){for(var e,i=0;i<n.length;i++){for(var t=n[i],a=!0,o=1;o<t.length;o++){var c=t[o];0!==s[c]&&(a=!1)}a&&(n.splice(i--,1),e=r(r.s=t[0]))}return e}var a={},s={app:0},n=[];function r(i){if(a[i])return a[i].exports;var t=a[i]={i:i,l:!1,exports:{}};return e[i].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=a,r.d=function(e,i,t){r.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:t})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,i){if(1&i&&(e=r(e)),8&i)return e;if(4&i&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var a in e)r.d(t,a,function(i){return e[i]}.bind(null,a));return t},r.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(i,"a",i),i},r.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=i,o=o.slice();for(var A=0;A<o.length;A++)i(o[A]);var l=c;n.push([0,"chunk-vendors"]),t()})({0:function(e,i,t){e.exports=t("56d7")},"0e15":function(e,i,t){},"17b5":function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAnFBMVEXIEC7///8BIWnFABjrvcHx8/YAHmgGKnHICSvKKD0AAGAACmIAHGfHACWSnLjGACD88vPLGDegqMDyztPfhZCYobv55ejdf4ojOHbWXm0ABmEpPXn3+fzxy9DXYnD66uzFABQaMXL11drEAA3UUmMeNXXr7fLTTV8AEmYAGGgEJ24SLXCKlbTY3ObceYbhi5bRQlbOLETYa3jEAASI6syOAAAGxUlEQVR4nO3de1faTBAH4AVqSIOIQNHCi8ULVoHWXvz+3+1NtEoum2SSucVz5veXPaXu5HExS5LOuu1try7rxS4K+nwZnR3H+hy6ioSfj688GzGWFESPZyfvQ53/8hUzvvs9d+Pn3/WAvVnACNg5vmC1WxwHOr+8nvjwHua9XvLFc/KFImDH+OB4L3xgwD4TYKf4gtXpYv0+yMaPd/3mldNUAewQXx5vUIn3zgcG3K/oATvDF6yCNN6XOrwUXwK41QHsCF+w6jfEy/CpAXaCLxgB8Ab5d2j+BRDA9WxICtgBvnZ4Bb4XQMBCmhRQnS8Y7QF4vonlqRE4Aw9kgMp8ebwJGC/mCyfFgoVnoCofBi/m21yO/YByM1CRD4Q3KbdwyeJQGVCNLxgNIXhX5QDu5R/qAirx4fH+8ZUCXi8lAFX4gtUBjffOlwB6TyIwwBsUoAIfDV7Md7woiAFcYGagOF8Rz3PcALze2mWvMGBmYOurMcJ8dHizvQui9Kn74ouTBxTlI8Q7RIFLrutnAOVnoCBfEFHi9fvu9ZsOM4CoGXjaXb48nne10QDvH58yoBBfEN1Q4b2/y5z/J4P6HXjfEFCEL8FLrTJI8FJ8ioACfIR4mWNz2UEOqUHEANn5uPByfPmBUIBfwYDMfKfRPRNegU8FkJUPhreE4HmOp8CnAMjIx4vn5RMHZOPjxivhSwDvM4BTTkAmvjye99MUBO+k/BhK+AgBT2b/1QCy8J1GX9nxKvjyPz1GQAY+QrzK2iv4gIADNCA5Xxbvgg2vhk8IkJgPhDegwKvlKxbjPQvjAEn5BOptwidQECGfLB6Ij70oMj5pPCAfc2FEfPJ4YD7W4kj4NPAa8DEWSMCng9eIj61INJ8WXkM+pkKRfHp4jflYikXxaeK14GMoGMGni9eKj/wzZWs+oc/k1HzEgFE7vkgdrzUf6SWhw482fD/2UtcjOfgor+b+bMP3kwgPfkeQlq84A1vfS2jDl8ITuZ1Kz0d4M6Y1nyZezBcgsyvewS9kArkJ3YrvBa8Q+JMQ2KN3Q3T2j9m38J9pMS4EHFBjvvh3XugZbPoXdMJ43OOP3Z1Q5Ps6Vdm5Pxt6vvONfyjAOOvvJAfu6kcSTYtTh2aMDxXjQ8X4UDE+VIwPFeNDxfhQMT5U3KdO5WpazTe90q4wGzfoVir1Yj/t+nKprtZisVgsFovFYrFYLBaLxWKxWCwWi8VisVgsFovFYrF89Gg/o5TLR3vCSvsJuWw+3PN92s9n5vLRni7VLiAX40PF+FAxPlSMDxXjQ8X4UDE+VD4aH8l/6c/0MihLSYuDbOcBEr6SFgfpkah6GVB30ijL/K+v50U4vbyg55svQ+cZ7E9qLKpOGrR9XEoP6Ntg7OnvEubwyN688+XE208mNV7Sx2WH7uNC2UWoCq9IMXEFPMLffTFgcUyXA8R3EcLhgd62cDzSU0cJ4JgSkKyDGgIP3UENAajVQY1s5pH072sEGOYA5fv3EeIRdY/UASToXYrEI+tdqgGI7pyLxiPsnNsQMMQDIvs2E+CR9m2WBkR1DSfBI+4aXg7orQkJiOhZT1Yocc96ScDWOyYQFkm+Y4IcYMv9OkgLZNivQwqw1W4xxMWx7BYjA9hiryLywpj2KmpYZ9mJDcvH/lNl2ymrtNZmKwMMn8C6inGfNm7ARrsENsSDfixi3SWQF7DBHpVMeOx7VHICgndIZcMT2CGVDxC4Py8jnsj+vCjA5vvzIvCa308Q2R2aBxCwNzkzntje5AjAJnuTC+Mx8vEDFvjE8Vj5uAFzfAp4zHxQwNtv1/WA9/ljyvAF0YEKrzCQHh90UpQBPlUcl0sPcljUP+pDjifAxwfojgMo4YnwkQLeREGOL4iGGLzjRjrJN296w0WE7xWw/hhLAEM/oFPHE+ODvsNAgIdXQJd80z0dXlB3CJp89IBOHU+ULwZcUQK6U208YT5SwL1rvc4bpPEWh1VbPHE+MODSCzhOA9Y+WQ/Bm90g8BT46ABr+OZbAB5m5inxUQFW8ongKfHFgCPIcq0asIJPCE+NDw54VwpYyieGp8iXAEKWbV7AeOXxtCnhm28917/yeEMSPFU+JGDo5QPh0cy8JKp8OEAPn+jMS6LMhwIE4l2z4XWALwHsQwC3BcD8C2rxerM9KV4n+FoDZv/Ss8aJ8Z448TrClyykWwCq43WGLwEMmgI2wuu3vqpSlc7wJYCQK1C32+c3K++UlMTrFF9jwJc/PHjx7jJ4ARNex/gSwN2i1u8NUB2vc3xgwIcYcP7w7FtNu1/pi6E7RrwO8iX3RB7PALc1l/8DKhDhs8wFtDgAAAAASUVORK5CYII="},"19c2":function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAElBMVEUAAAD/zgDdAADnAADaAAD/2AAtsSEoAAAA+ElEQVR4nO3QMQGAMAAEsYeCf8tIuI0pkZANAAAAAAAAAAAAAAAAAAAAgB8dwm6CoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKewh7CbsIipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUofMGTNC8HkSxoAAAAASUVORK5CYII="},"1ed9":function(e,i,t){e.exports=t.p+"img/no-poster.fb9f549d.png"},2984:function(e,i,t){},"56d7":function(e,i,t){"use strict";t.r(i);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),s=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{attrs:{id:"app"}},[t("Header",{attrs:{id:"head",placeholder:"Cerca qui..."},on:{"get-term":e.fetchApiMovies}}),t("Main",{attrs:{"searched-movies":e.searchedMovies,searchedTV:e.searchedTV,"not-found":e.notFound}}),e._m(0)],1)},n=[function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("a",{staticClass:"btn btn-danger p-3",attrs:{href:"#head",id:"to-head"}},[t("i",{staticClass:"fa-solid fa-arrow-up fa-2xl"})])}],r=t("bc3a"),o=t.n(r),c=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("header",{staticClass:"d-flex align-items-center justify-content-between px-4"},[t("h1",{attrs:{role:"button"},on:{click:e.resetTerm}},[e._v("BOOLFLIX")]),t("div",{staticClass:"search d-flex align-content-center"},[t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.key,expression:"key",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.key},on:{keyup:function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"enter",13,i.key,"Enter")?null:e.sendTerm.apply(null,arguments)},input:function(i){i.target.composing||(e.key=i.target.value.trim())},blur:function(i){return e.$forceUpdate()}}}),t("button",{staticClass:"btn btn-danger btn-sm ms-2",on:{click:e.sendTerm}},[e._v(" Cerca ")])])])},A=[],l={name:"Header",props:["placeholder"],data:function(){return{key:""}},methods:{sendTerm:function(){this.$emit("get-term",this.key)},resetTerm:function(){this.$emit("get-term",""),this.key=""}}},I=l,v=(t("6b08"),t("2877")),d=Object(v["a"])(I,c,A,!1,null,"5adb745a",null),u=d.exports,p=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("main",[t("div",{staticClass:"container"},[t("h2",{directives:[{name:"show",rawName:"v-show",value:0!=e.searchedMovies||0!=e.searchedTV,expression:"searchedMovies != 0 || searchedTV != 0"}],staticClass:"text-center my-4"},[e._v(" Hai trovato "),t("span",{staticClass:"text-danger"},[e._v(e._s(e.searchedMovies.length)+" ")]),t("a",{staticClass:"text-ref",attrs:{href:"#movies"}},[e._v("Films")]),e._v(" e "),t("span",{staticClass:"text-danger"},[e._v(e._s(e.searchedTV.length)+" ")]),t("a",{staticClass:"text-ref",attrs:{href:"#series"}},[e._v("Serie Tv")])]),0!=e.searchedMovies?t("div",{staticClass:"cards-container my-4",attrs:{id:"movies"}},[t("h2",{staticClass:"px-3 my-4 titles"},[e._v("Films")]),t("div",{staticClass:"row gy-5"},e._l(e.searchedMovies,(function(e){return t("div",{key:e.id,staticClass:"col col-md-6 col-lg-4"},[t("Card",{attrs:{item:e,"movie-id":e.id}})],1)})),0)]):e._e(),0!=e.searchedTV?t("div",{staticClass:"cards-container my-4",attrs:{id:"series"}},[t("h2",{staticClass:"px-3 my-4 titles"},[e._v("Serie Tv")]),t("div",{staticClass:"row gy-5"},e._l(e.searchedTV,(function(e){return t("div",{key:e.id,staticClass:"col col-md-6 col-lg-4"},[t("Card",{attrs:{item:e,"tv-id":e.id}})],1)})),0)]):e.notFound?t("div",{staticClass:"search_alert"},[t("h2",{staticClass:"text-danger"},[e._v("NON E' STATO TROVATO NESSUN RISULTATO")])]):t("div",{staticClass:"search_alert"},[t("h2",[e._v("CERCA FILMS O SERIE TV⬈")])])])])},f=[],g=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"container-card"},[t("img",{staticClass:"poster",attrs:{src:e.assignImgPoster,alt:e.item.title||e.item.name}}),t("div",{staticClass:"hover-menu p-3"},[t("h5",[t("strong",[e._v("Titolo: ")]),e._v(e._s(e.item.title||e.item.name))]),t("h5",{staticClass:"mb-0"},[t("strong",[e._v("Titolo originale: ")]),e._v("("+e._s(e.item.original_title||e.item.original_name)+") ")]),t("img",{staticClass:"my-2",attrs:{src:e.assignImgLanguage(e.item.original_language),width:"40",height:"25",alt:e.item.original_language,title:e.item.original_language}}),t("div",{staticClass:"star-container"},[t("strong",[e._v("Voto: ")]),e._l(e.totalStars,(function(i,a){return t("i",{key:a,staticClass:"fa-star fa-lg",class:[e.averageFormat>a?"fa-solid":"fa-regular"]})}))],2),t("div",{staticClass:"cast-movie"},[t("p",{directives:[{name:"show",rawName:"v-show",value:e.castMovie.length,expression:"castMovie.length"}]},[t("strong",[e._v("Cast:")]),e._l(e.castMovie,(function(i,a){return t("em",{key:i.id},[a<5?t("span",[e._v(" "+e._s(i.name)+", ")]):e._e()])}))],2)]),t("div",{staticClass:"cast-tv"},[t("p",{directives:[{name:"show",rawName:"v-show",value:e.castTv.length,expression:"castTv.length"}]},[t("strong",[e._v("Cast:")]),e._l(e.castTv,(function(i,a){return t("em",{key:i.id},[a<5?t("span",[e._v(" "+e._s(i.name)+", ")]):e._e()])}))],2)]),t("p",[t("strong",[e._v("Trama: ")]),t("em",[e._v(" "+e._s(e.item.overview||"Non Disponibile"))])])])])},h=[],m={name:"Card",props:["item","movieId","tvId"],data:function(){return{totalStars:5,castMovie:[],castTv:[],apiCast:{api_key:"de777000efc1bf0e53d7f663907ef833",baseUriMovie:"https://api.themoviedb.org/3/movie/",baseUriTv:"https://api.themoviedb.org/3/tv/",endUri:"/credits"}}},methods:{assignImgLanguage:function(e){var i;switch(e){case"en":i=t("17b5");break;case"it":i=t("e33f");break;case"de":i=t("19c2");break;case"fr":i=t("6921");break;default:i=t("685a");break}return i},fetchApiCredits:function(){var e=this,i=this.apiCast,t=i.api_key,a=i.baseUriMovie,s=i.baseUriTv,n=i.endUri,r={params:{api_key:t,language:"it-IT"}},c=a+this.movieId+n,A=s+this.tvId+n;this.movieId?o.a.get(c,r).then((function(i){e.castMovie=i.data.cast})).catch((function(e){console.log(e)})):this.tvId&&o.a.get(A,r).then((function(i){e.castTv=i.data.cast})).catch((function(e){console.log(e)}))}},mounted:function(){this.fetchApiCredits()},computed:{assignImgPoster:function(){return this.item.poster_path?"https://image.tmdb.org/t/p/w342/".concat(this.item.poster_path):t("1ed9")},averageFormat:function(){var e;return e=this.item.vote_average,e/=2,e=Math.ceil(e),e}}},C=m,k=(t("95a8"),Object(v["a"])(C,g,h,!1,null,"e94ad9ac",null)),K=k.exports,O={name:"Main",props:["searchedMovies","searchedTV","notFound"],components:{Card:K}},x=O,T=(t("8d73"),Object(v["a"])(x,p,f,!1,null,"320419aa",null)),H=T.exports,b={name:"App",components:{Header:u,Main:H},data:function(){return{key:"",searchedMovies:[],searchedTV:[],notFound:!1,apiMovie:"https://api.themoviedb.org/3/search/movie",apiTv:"https://api.themoviedb.org/3/search/tv",api_key:"de777000efc1bf0e53d7f663907ef833"}},methods:{fetchApiMovies:function(e){var i=this;if(!e)return this.searchedMovies=[],this.searchedTV=[],void(this.notFound=!1);var t={params:{api_key:this.api_key,language:"it-IT",query:e}};o.a.all([o.a.get(this.apiMovie,t),o.a.get(this.apiTv,t)]).then(o.a.spread((function(e,t){i.searchedMovies=e.data.results,i.searchedTV=t.data.results,0==e.data.results.length&&0==t.data.results.length&&(i.notFound=!0)}))).catch((function(e){console.log(e)}))}}},M=b,w=(t("5c0b"),Object(v["a"])(M,s,n,!1,null,null,null)),y=w.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(y)}}).$mount("#app")},"5c0b":function(e,i,t){"use strict";t("9c0c")},"685a":function(e,i,t){e.exports=t.p+"img/global.abe1258c.jpg"},6921:function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAFVBMVEX///8AI5XtKTkAGJJfcLfzdH3tHzGd6CeVAAAA/klEQVR4nO3QSQ0AIAADsHH6l4yKPUhaCc2oWTs9586aOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHy4ckD5KrN4eD2boIAAAAASUVORK5CYII="},"6b08":function(e,i,t){"use strict";t("2984")},"8d73":function(e,i,t){"use strict";t("0e15")},"95a8":function(e,i,t){"use strict";t("d85b")},"9c0c":function(e,i,t){},d85b:function(e,i,t){},e33f:function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAELBAMAAAAFMM1/AAAAFVBMVEX///8AkkbOKzf10tWY07QAjT7NJTJXwIMQAAAA8UlEQVR42u3PwQAAAAgEsBRSCCKS/FmCuO9msOrYVWwnJiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIikniFNUdjvhgMbwAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=app.83502ef4.js.map