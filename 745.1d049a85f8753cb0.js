"use strict";(self.webpackChunkheroesMarvel=self.webpackChunkheroesMarvel||[]).push([[745],{2745:(L,l,i)=>{i.r(l),i.d(l,{GalleryModule:()=>Y});var a=i(6895),f=i(4006),m=i(6851),c=i(3060);const d=[{routeLink:"comics",label:"Comics"},{routeLink:"characters",label:"Characters"},{routeLink:"series",label:"Series"},{routeLink:"stories",label:"Stories"}];var e=i(4650),u=i(7392),g=i(3267),p=i(3683);const h=function(n){return[n]};function C(n,o){if(1&n&&(e.TgZ(0,"li")(1,"a",5)(2,"span"),e._uU(3),e.qZA()()()),2&n){const t=o.$implicit;e.xp6(1),e.Q6J("routerLink",e.VKq(2,h,t.routeLink)),e.xp6(2),e.Oqu(t.label)}}let O=(()=>{class n{constructor(t){this.router=t,this.navData=d,this.closeSession=()=>{this.router.navigate(["/"])}}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(c.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-header-nav"]],decls:13,vars:1,consts:[[1,"title"],[1,"navigation"],[4,"ngFor","ngForOf"],[3,"click"],[1,"container-content"],[3,"routerLink"]],template:function(t,r){1&t&&(e.TgZ(0,"mat-toolbar")(1,"mat-toolbar-row")(2,"h1",0),e._uU(3,"MARVEL COLLECTION"),e.qZA()(),e.TgZ(4,"mat-toolbar-row",1)(5,"nav")(6,"ul"),e.YNc(7,C,4,4,"li",2),e.qZA()(),e.TgZ(8,"mat-icon",3),e.NdJ("click",function(){return r.closeSession()}),e._uU(9,"power_settings_new"),e.qZA()()(),e.TgZ(10,"mat-sidenav-container",4)(11,"mat-sidenav-content"),e._UZ(12,"router-outlet"),e.qZA()()),2&t&&(e.xp6(7),e.Q6J("ngForOf",r.navData))},dependencies:[a.sg,u.Hw,g.TM,g.Rh,p.Ye,p.rD,c.lC,c.yS],styles:[".title[_ngcontent-%COMP%]{color:#e60808ef;margin:0;font-family:Alfa Slab One;font-size:20px}mat-toolbar-row[_ngcontent-%COMP%]{background-color:#000;display:flex;justify-content:center;align-items:center}.navigation[_ngcontent-%COMP%]{margin:0;padding:0;border:0;background-color:#fff;font-family:Alfa Slab One}.navigation[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:0;border:0}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#000;color:#fff;border-radius:5px;font-size:small;padding:10px}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000;font-size:small;padding:10px}.container-content[_ngcontent-%COMP%]{background:url(fondo.0c55fdcdf5b4779d.jpg) no-repeat center center;height:100%;width:100%;background-size:cover;display:flex}.mat-sidenav-content[_ngcontent-%COMP%]{font-size:small}@media (min-width:1000px){.title[_ngcontent-%COMP%]{font-size:25px}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:17px}.mat-sidenav-content[_ngcontent-%COMP%]{font-size:17px}}"]}),n})();var v=i(2340),_=i(529);let s=(()=>{class n{constructor(t){this.http=t,this.host=v.N.urlApi,this.credential="?ts=1&apikey=21e282639e755b9f3402ef822aa694c4&hash=ffc4a5ce7ac4f2311c95fd4f6eb1b2d5"}getById(t,r){return this.http.get(`${this.host}${r}${t}${this.credential}`)}getAll(t){return this.http.get(`${this.host}${t}${this.credential}`)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(_.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function y(n,o){if(1&n&&(e.TgZ(0,"div")(1,"a",5),e._uU(2),e.qZA()()),2&n){const t=o.$implicit;e.xp6(1),e.s9C("href",t.url,e.LSH),e.xp6(1),e.Oqu(t.type)}}function x(n,o){if(1&n&&(e.TgZ(0,"section",2)(1,"p"),e._uU(2),e.qZA(),e._UZ(3,"img",3),e.YNc(4,y,3,2,"div",4),e.qZA()),2&n){const t=o.$implicit,r=e.oxw();e.xp6(2),e.Oqu(t.name),e.xp6(1),e.hYB("src","",t.thumbnail.path,".jpg",r.credential,"",e.LSH),e.xp6(1),e.Q6J("ngForOf",t.urls)}}function b(n,o){if(1&n&&(e.TgZ(0,"div")(1,"a",5),e._uU(2),e.qZA()()),2&n){const t=o.$implicit;e.xp6(1),e.s9C("href",t.url,e.LSH),e.xp6(1),e.Oqu(t.type)}}function M(n,o){if(1&n&&(e.TgZ(0,"section",2)(1,"p"),e._uU(2),e.qZA(),e._UZ(3,"img",3),e.YNc(4,b,3,2,"div",4),e.qZA()),2&n){const t=o.$implicit,r=e.oxw();e.xp6(2),e.Oqu(t.title),e.xp6(1),e.hYB("src","",t.thumbnail.path,".jpg",r.credential,"",e.LSH),e.xp6(1),e.Q6J("ngForOf",t.urls)}}function P(n,o){if(1&n&&(e.TgZ(0,"div")(1,"a",5),e._uU(2),e.qZA()()),2&n){const t=o.$implicit;e.xp6(1),e.s9C("href",t.url,e.LSH),e.xp6(1),e.Oqu(t.type)}}function Z(n,o){if(1&n&&(e.TgZ(0,"section",2)(1,"p"),e._uU(2),e.qZA(),e._UZ(3,"img",3),e.YNc(4,P,3,2,"div",4),e.qZA()),2&n){const t=o.$implicit,r=e.oxw();e.xp6(2),e.Oqu(t.title),e.xp6(1),e.hYB("src","",t.thumbnail.path,".jpg",r.credential,"",e.LSH),e.xp6(1),e.Q6J("ngForOf",t.urls)}}function F(n,o){if(1&n&&(e.TgZ(0,"div")(1,"a",4),e._uU(2),e.qZA()()),2&n){const t=o.$implicit;e.xp6(1),e.s9C("href",t.url,e.LSH),e.xp6(1),e.Oqu(t.type)}}function T(n,o){if(1&n&&(e.TgZ(0,"section",2)(1,"h4"),e._uU(2),e.qZA(),e.TgZ(3,"p"),e._uU(4),e.qZA(),e.YNc(5,F,3,2,"div",3),e.qZA()),2&n){const t=o.$implicit;e.xp6(2),e.Oqu(t.originalIssue.name),e.xp6(2),e.Oqu(t.title),e.xp6(1),e.Q6J("ngForOf",t.urls)}}const k=[{path:"",component:O,children:[{path:"characters",component:(()=>{class n{constructor(t){this.RestService=t,this.arrayCharacters=[],this.credential="?ts=1&apikey=21e282639e755b9f3402ef822aa694c4&hash=ffc4a5ce7ac4f2311c95fd4f6eb1b2d5"}ngOnInit(){this.getAll("characters")}getAll(t){this.RestService.getAll(t).subscribe({next:r=>{this.arrayCharacters=r.data.results},error:r=>{console.error(r)}})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(s))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-characters"]],decls:2,vars:1,consts:[[1,"containerAllCharacters"],["class","containerCharacters",4,"ngFor","ngForOf"],[1,"containerCharacters"],[1,"imageCharacter",3,"src"],[4,"ngFor","ngForOf"],[1,"urls",3,"href"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e.YNc(1,x,5,4,"section",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngForOf",r.arrayCharacters))},dependencies:[a.sg],styles:[".containerAllCharacters[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.containerCharacters[_ngcontent-%COMP%]{background-color:#ffffffeb;width:40%;margin:3%;font-family:Alfa Slab One;text-align:center}.containerCharacters[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80%}.urls[_ngcontent-%COMP%]{text-decoration:none;color:#616161}@media (min-width:1000px){.containerCharacters[_ngcontent-%COMP%]{background-color:#ffffffeb;width:25%;margin:3%;font-family:Alfa Slab One;text-align:center}}"]}),n})()},{path:"comics",component:(()=>{class n{constructor(t){this.RestService=t,this.credential="?ts=1&apikey=21e282639e755b9f3402ef822aa694c4&hash=ffc4a5ce7ac4f2311c95fd4f6eb1b2d5",this.arrayComics=[]}ngOnInit(){this.getAll("comics")}getAll(t){this.RestService.getAll(t).subscribe({next:r=>{this.arrayComics=r.data.results},error:r=>{console.error(r)}})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(s))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-comics"]],decls:2,vars:1,consts:[[1,"containerAllComics"],["class","containerComic",4,"ngFor","ngForOf"],[1,"containerComic"],[1,"imageCharacter",3,"src"],[4,"ngFor","ngForOf"],[1,"urls",3,"href"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e.YNc(1,M,5,4,"section",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngForOf",r.arrayComics))},dependencies:[a.sg],styles:[".containerAllComics[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.containerComic[_ngcontent-%COMP%]{background-color:#ffffffeb;width:40%;margin:3%;font-family:Alfa Slab One;text-align:center}.urls[_ngcontent-%COMP%]{text-decoration:none;color:#616161}.containerComic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80%}@media (min-width:1000px){.containerComic[_ngcontent-%COMP%]{background-color:#ffffffeb;width:25%;margin:3%;font-family:Alfa Slab One;text-align:center}}"]}),n})()},{path:"series",component:(()=>{class n{constructor(t){this.RestService=t,this.arraySeries=[],this.credential="?ts=1&apikey=21e282639e755b9f3402ef822aa694c4&hash=ffc4a5ce7ac4f2311c95fd4f6eb1b2d5"}ngOnInit(){this.getAll("series")}getAll(t){this.RestService.getAll(t).subscribe({next:r=>{this.arraySeries=r.data.results},error:r=>{console.error(r)}})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(s))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-series"]],decls:2,vars:1,consts:[[1,"containerAllSeries"],["class","containerSerie",4,"ngFor","ngForOf"],[1,"containerSerie"],[1,"imageCharacter",3,"src"],[4,"ngFor","ngForOf"],[1,"urls",3,"href"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e.YNc(1,Z,5,4,"section",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngForOf",r.arraySeries))},dependencies:[a.sg],styles:[".containerAllSeries[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.containerSerie[_ngcontent-%COMP%]{background-color:#ffffffeb;width:40%;margin:3%;font-family:Alfa Slab One;text-align:center}.urls[_ngcontent-%COMP%]{text-decoration:none;color:#616161}.containerSerie[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80%}@media (min-width:1000px){.containerSerie[_ngcontent-%COMP%]{background-color:#ffffffeb;width:25%;margin:3%;font-family:Alfa Slab One;text-align:center}}"]}),n})()},{path:"stories",component:(()=>{class n{constructor(t){this.RestService=t,this.arrayStories=[],this.credential="?ts=1&apikey=21e282639e755b9f3402ef822aa694c4&hash=ffc4a5ce7ac4f2311c95fd4f6eb1b2d5"}ngOnInit(){this.getAll("stories")}getAll(t){this.RestService.getAll(t).subscribe({next:r=>{console.log("data get all"),console.log(r.data.results),this.arrayStories=r.data.results},error:r=>{console.log(r)}})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(s))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-stories"]],decls:2,vars:1,consts:[[1,"containerAllStories"],["class","containerStories",4,"ngFor","ngForOf"],[1,"containerStories"],[4,"ngFor","ngForOf"],[1,"urls",3,"href"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e.YNc(1,T,6,3,"section",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngForOf",r.arrayStories))},dependencies:[a.sg],styles:[".containerAllStories[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.containerStories[_ngcontent-%COMP%]{background-color:#ffffffeb;width:40%;margin:3%;font-family:Alfa Slab One;text-align:center;padding:2%}.urls[_ngcontent-%COMP%]{text-decoration:none;color:#616161}.containerStories[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80%}@media (min-width:1000px){.containerStories[_ngcontent-%COMP%]{background-color:#ffffffeb;width:22%;margin:3%;font-family:Alfa Slab One;text-align:center}}"]}),n})()}]}];let q=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.Bz.forChild(k),c.Bz]}),n})();var N=i(8613);let Y=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[s,N.K],imports:[q,a.ez,f.u5,f.UX,m.h]}),n})()}}]);