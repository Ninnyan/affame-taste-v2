(()=>{"use strict";var n,A={386:(n,A,r)=>{r.d(A,{A:()=>l});var e=r(354),i=r.n(e),o=r(314),a=r.n(o),t=r(417),d=r.n(t),C=new URL(r(864),r.b),p=a()(i()),c=d()(C);p.push([n.id,`*,html{box-sizing:border-box}:root{--star-size: 20px;--star-color: #fff;--star-background: #fc0}body{background:#fff;display:flex;flex-direction:column}body .skip-main{z-index:99999999;position:absolute;width:100px;height:70px;display:flex;justify-content:center;align-items:center;text-decoration:none;color:#fff;background-color:#254b3c;transform:translate(0, -250px);transition:transform .3s ease-in-out}body .skip-main:focus{transform:translate(0, 0)}body header{z-index:9999999;position:fixed}body header .navbar-container{background-color:#254b3c;width:170px;height:687px;padding-top:10px;transform:translate(-250px, 0);transition:transform .3s ease-in-out;z-index:2000}body header .navbar-container h2{width:170px;color:#fff;padding-left:20px;padding-bottom:12px;font-size:20px;margin-top:20px;border-bottom:1px solid #254b3c}body header .navbar-container ul{display:grid;gap:20px;padding:20px}body header .navbar-container ul li{width:100px;height:44px;list-style-type:none}body header .navbar-container ul li a{display:flex;align-items:center;width:100px;height:44px;font-size:20px;color:#fff;text-decoration:none}body header .navbar-container ul li a:hover{color:#254b3c}body header .container-header{width:100%;position:fixed;top:0;transition:top .3s;background-color:#254b3c;display:grid;grid-template-columns:repeat(2, auto);gap:90px;align-items:center}body header .container-header .logo-restaurant h1{color:#fff;padding-left:20px;font-size:25px}body header .container-header .bars-navbar button{width:44px;height:44px;background-color:#254b3c;border:none}body header .container-header .bars-navbar button:hover{color:#254b3c}body header .container-header .bars-navbar i{font-size:20px;color:#fff}body header .container-header .big-navbar-container{display:none}body header .bars-navbar:hover{color:#fff}body header .bars-navbar:active{color:#fff}body main{margin-top:60px;min-height:100vh}body main .hero{margin:auto;margin-bottom:20px;margin-top:20px;padding-left:15px;border-top:15px solid #254b3c;max-width:100%;height:250px;display:grid;grid-template-rows:repeat(2, 1fr 1fr);align-items:center;font-size:49px;background-size:cover;background-image:url(${c})}body main .hero .judul-hero{color:#254b3c;z-index:1000;font-weight:bolder;margin-top:10px}body main .hero .judul2-hero{margin-top:-40px;margin-left:18px;font-size:32px;color:#fff;z-index:1000;font-weight:bolder}body main .main-title{margin-bottom:20px;display:flex;height:50px;justify-content:center;align-items:center;background-color:#254b3c;color:#fff;border-radius:20px}body main .main-title h1{font-size:30px}body main .container-main-content{margin:auto;display:flex;flex-direction:column;background-color:#254b3c;border-radius:30px;padding-block:20px;padding-inline:20px;margin-bottom:20px;align-items:center;justify-items:center}body main #unarchive{display:grid;grid-template-columns:repeat(auto-fill, minmax(250px, 2fr));gap:10px;max-width:100%;margin:auto;justify-items:center;text-align:center}body main .main-favorite{margin-top:20px}body main ul{max-width:100%;display:grid;grid-template-columns:repeat(auto-fill, minmax(250px, 2fr));gap:20px}body main .reviewer{width:200px;margin-left:10px;display:flex;gap:1rem;padding:10px 10px 0 10px;align-items:baseline;border-bottom:1px solid #a6a6c6}body main .review-customer{background-color:#c1f1db}body main .review-container{width:80%;padding:10px 10px}body main .reviewer .date-review{font-size:13px;color:gray;font-weight:200}body main .review{text-indent:30px;text-align:justify;padding:0 20px;font-size:15px}body main .form-review{display:grid;grid-template-rows:1fr 2fr 1fr;border-bottom:1px solid gray;padding-bottom:10px}body main .judul-review{border-bottom:1px solid gray}body main .input-review{margin:5px 20px;font-weight:bold}body main #name-reviewer,body main #review-reviewer{padding:10px 10px}body main #name-reviewer{font-weight:none}body main input.name{height:44px}body main #review-reviewer{max-width:100%;height:110px;text-align:justify;text-indent:20px;resize:none}body main .add-review{justify-self:self-end;align-self:self-end;width:100px;height:47px;background-color:#196b46;color:#c1f1db;border:none;border-radius:40px;cursor:pointer}body main .add-review:hover{background-color:#fff;color:#196b46}body footer .container-footer{width:100%;height:50px;background-color:#254b3c;text-align:center;display:grid;color:#fff}.fles{display:flex}.navbar-container.open{transform:translate(0, 0)}.grey-color{background-color:gray;color:gray}body main .container-main-content .container-content{border:2px solid #fff;width:280px;margin:auto;padding-bottom:18px;border-radius:10px;background-color:#254b3c}body main .container-main-content .container-content a{text-decoration:none;display:grid}body main .container-main-content .container-content a:hover{opacity:.7}body main .container-main-content .container-content .hero-content{border-radius:14px 14px 0 0;margin:auto;display:grid;height:200px;width:100%;background-size:cover}body main .container-main-content .container-content .hero-content span{font-size:20px;display:flex;justify-content:center;align-items:center;margin:auto;background-color:#254b3c;color:#fff;height:30px;width:220px;margin-top:18px;border-radius:5000px;z-index:111}body main .container-main-content .container-content .container-bawah{max-width:80%;margin:auto;display:grid;grid-template-rows:repeat(2, auto);gap:5px;font-size:20px}body main .container-main-content .container-content .container-bawah .rating{margin-top:10px;--percent: calc(var(--rating) / 5 * 100%);color:#fff;display:inline-block;font-size:var(--star-size);font-family:Times;line-height:1}body main .container-main-content .container-content .container-bawah .rating::before{content:"★★★★★";letter-spacing:3px;background:linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));-webkit-background-clip:text;-webkit-text-fill-color:rgba(0,0,0,0)}body main .container-main-content .container-content .container-bawah .judul-content{align-self:center;justify-self:center;color:#fff}.main-detail{margin:auto;background-color:#54a370;border-radius:200px;text-align:center;margin-block:10px}.detail-container{margin:auto;width:100%}.detail-container .image-restaurant{width:100%;height:300px;background-size:cover;background-position:center;margin-bottom:20px;display:flex;justify-content:flex-end;align-items:self-end}.container-main-review{padding-top:10px;display:flex;flex-direction:column;align-items:center;justify-items:center;display-items:center}.detail-restaurant{margin:auto;display:flex;text-align:center;justify-content:center;alighn-item:center;max-width:100%;margin-block:10px}.detail-restaurant tbody{width:100%}.detail-restaurant tr{display:flex;margin:20px;width:100%;margin:auto}th,td{padding:7px;width:100%;margin:auto}th{background-color:#54a370;padding:10px}td{background-color:#a3cdbe;padding:10px}.foods,.deskripsi{text-indent:30px;text-align:justify;letter-spacing:1px}.deskripsi td{padding-inline:35px}.review-button{border:2px dashed #196b46;width:100%;height:50px;background-color:#e3fbed;font-weight:bold;margin-block:20px;cursor:pointer}.review-button:hover{border:2px dashed #fff;background-color:#000;color:#fff}i.star{font-size:30px;margin-right:10px;margin-bottom:5px;border-radius:50%;display:grid;justify-content:center;align-items:center;color:#fffffc;background-color:gold;width:50px;height:50px;cursor:pointer}i.star:hover{color:#ff0;background-color:#fff}.skeleton{position:relative}.skeleton::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;background:linear-gradient(90deg, #eee, #f9f9f9, #eee);background-size:200%;animation:skeleton 1s linear infinite}@keyframes skeleton{0%{background-position:-100%,0}100%{background-position:100%,0}}`,"",{version:3,sources:["webpack://./src/scss/main.scss"],names:[],mappings:"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",sourcesContent:["\n\n$red: #fff;\n$grid: grid;\n\n*, html {\n  box-sizing: border-box;\n}\n\n:root {\n  --star-size: 20px;\n  --star-color: #fff;\n  --star-background: #fc0;\n}\n\nbody {\n  background: $red;\n  display: flex;\n  flex-direction: column;\n  .skip-main {\n    z-index: 99999999;\n    position: absolute;\n    width: 100px;\n    height: 70px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-decoration: none;\n    color: #ffffff;\n    background-color: #254B3C;\n    transform: translate(0, -250px);\n    transition: transform 0.3s ease-in-out;\n  }\n\n  .skip-main:focus {\n    transform: translate(0, 0);\n  }\n\n  header {\n    z-index: 9999999;\n    position: fixed;\n    .navbar-container {\n      background-color: #254B3C;\n      width: 170px;\n      height: 687px;\n      padding-top: 10px;\n      \n      transform: translate(-250px, 0);\n      transition: transform 0.3s ease-in-out;\n      z-index: 2000;\n      \n      h2 {\n        width: 170px;\n        color: #ffffff;\n        padding-left: 20px;\n        padding-bottom: 12px;\n        font-size: 20px;\n        margin-top: 20px;\n        border-bottom: 1px solid #254B3C;\n      }\n      \n      ul {\n        display: $grid;\n        gap: 20px;\n        padding: 20px;\n        li {\n          width: 100px;\n          height: 44px;\n          list-style-type: none;\n          a {\n            display: flex;\n            align-items: center;\n            width: 100px;\n            height: 44px;\n            font-size: 20px;\n            color: #ffffff;\n            text-decoration: none;\n          }\n          a:hover {\n            color: #254B3C;\n          }\n        }\n\n       \n      }\n    }\n    .container-header {\n      width: 100%;\n      position: fixed;\n      top: 0;\n      transition: top 0.3s;\n      background-color: #254B3C;\n    \n      display: $grid;\n      grid-template-columns: repeat(2, auto);\n      gap: 90px;\n      align-items: center;\n    \n      .logo-restaurant {\n        h1 {\n          color: #ffffff;\n          padding-left: 20px;\n          font-size: 25px\n        }\n      }\n\n      .bars-navbar {\n\n        button {\n          width: 44px;\n          height: 44px;\n          background-color: #254B3C;\n          border: none;\n        }\n\n        button:hover {\n          color: #254B3C;\n        }\n\n        i {\n          font-size: 20px;\n          color: #ffffff;\n        }\n      }\n      \n      .big-navbar-container {\n        display: none;\n      }\n     \n    }\n\n\n\n    .bars-navbar:hover {\n      color: white;\n    }\n\n    .bars-navbar:active {\n      color: white;\n    }\n  }\n  \n  main {\n    margin-top: 60px;\n    min-height: 100vh;\n    .hero {\n\n      margin: auto;\n      margin-bottom: 20px;\n      margin-top: 20px;\n      padding-left: 15px;\n      border-top: 15px solid  #254B3C;\n      max-width: 100%;\n      height: 250px;\n      display: grid;\n      grid-template-rows: repeat(2, 1fr 1fr);\n      // justify-items: center;\n      align-items: center;\n      font-size: 49px;\n      background-size: cover;\n      background-image: url(/src/public/images/heros/hero-image_3.jpg);\n      .judul-hero {\n        color: #254B3C;\n        z-index: 1000;\n        font-weight: bolder;\n        margin-top: 10px;\n      }\n      .judul2-hero {\n        margin-top: -40px;\n        margin-left: 18px;\n        font-size: 32px;\n        color: #fff;\n        z-index: 1000;\n        font-weight: bolder;\n      }\n      \n    }\n\n    .main-title {\n      margin-bottom: 20px;\n      display: flex;\n      height: 50px;\n      justify-content: center;\n      align-items: center;\n      background-color: #254B3C;\n      color: #ffffff;\n      border-radius: 20px;\n      h1 {\n        font-size: 30px;\n      }\n    }\n\n    .container-main-content {\n      margin: auto;\n      display: flex;\n      flex-direction: column;\n      background-color: #254B3C;\n      border-radius: 30px;\n      padding-block: 20px;\n      padding-inline: 20px;\n      margin-bottom: 20px;\n      align-items: center;\n      justify-items: center;\n    }\n    \n    #unarchive {\n      display: grid;\n      grid-template-columns: repeat(auto-fill, minmax(250px, 2fr));\n      gap: 10px;\n      max-width: 100%;\n      margin: auto;\n      justify-items: center;\n      text-align: center;\n    }\n\n    .main-favorite{\n      margin-top: 20px;\n    }\n\n  \n      ul {\n        max-width: 100%;\n        display: grid;\n        grid-template-columns: repeat(auto-fill, minmax(250px, 2fr));  \n        gap: 20px;\n      }\n    \n\n  .reviewer {\n      width: 200px;\n      margin-left: 10px;\n      display: flex;\n      gap: 1rem;\n      padding: 10px 10px 0 10px;\n      align-items: baseline;\n      border-bottom: 1px solid rgb(166, 166, 198);\n  }\n  \n  .review-customer {\n      background-color: rgb(193, 241, 219);\n  }\n  \n  .review-container {\n    width: 80%;\n      padding: 10px 10px;\n  }\n  \n  .reviewer .date-review {\n      font-size: 13px;\n      color: grey;\n      font-weight: 200;\n  }\n  \n  // review-item {\n  //   width: 100%;\n  // }\n\n  .review {\n      text-indent: 30px;\n      text-align: justify;\n      padding: 0 20px;\n      font-size: 15px;\n  }\n  \n  .form-review {\n    display: grid;\n    grid-template-rows: 1fr 2fr 1fr;\n    border-bottom: 1px solid grey;\n    padding-bottom: 10px;\n}\n\n.judul-review {\n    border-bottom: 1px solid grey;\n}\n\n.input-review {\n    margin: 5px 20px;\n    font-weight: bold;\n}\n\n#name-reviewer, #review-reviewer {\n    padding: 10px 10px;\n}\n\n#name-reviewer {\n    font-weight: none;\n}\n\ninput.name {\n    height: 44px;\n}\n\n#review-reviewer {\n    max-width: 100%;\n    height: 110px;\n    text-align: justify;\n    text-indent: 20px;\n    resize: none;\n}\n\n.add-review {\n    justify-self: self-end;\n    align-self: self-end;\n    width: 100px;\n    height: 47px;\n    background-color: rgb(25, 107, 70);\n    color: rgb(193, 241, 219);\n    border: none;\n    border-radius: 40px;\n    cursor: pointer;\n}\n\n.add-review:hover {\n    background-color:rgb(255, 255, 255);\n    color: rgb(25, 107, 70);\n}\n\n    \n  }\n\n  footer {\n    .container-footer {\n      width: 100%;\n      height: 50px;\n      background-color: #254B3C;\n      text-align: center;\n      display: grid;\n      color: #fff;\n    }\n  }\n\n}\n\n.fles {\n  display: flex;\n}\n\n.navbar-container.open {\n  transform: translate(0,0)\n}\n\n.grey-color {\n  background-color: gray;\n  color: gray;\n}\n\nbody {\n  main {\n    .container-main-content {\n      .container-content {\n        border: 2px solid #fff;\n        width: 280px;\n        margin: auto;\n        padding-bottom: 18px;\n        border-radius: 10px;\n        background-color: #254B3C;\n        \n        a {\n          text-decoration: none;\n          display: grid;\n        }\n\n        a:hover {\n          opacity: 0.7;\n        }\n\n        .hero-content {\n          border-radius: 14px 14px 0 0;\n          margin: auto;\n          display: grid;\n          height: 200px;\n          width: 100%;\n          background-size: cover;\n          \n          span {\n            font-size: 20px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            margin: auto;\n            background-color: #254B3C ;\n            color: #fff;\n            height: 30px;\n            width: 220px;\n            margin-top: 18px;\n            border-radius: 5000px;\n            z-index: 111;\n          }\n        }\n  \n        .container-bawah {\n          max-width: 80%;\n          \n          margin: auto;\n          display: grid;\n          grid-template-rows: repeat(2, auto);\n          gap: 5px;\n          font-size: 20px;\n          .rating {\n            margin-top: 10px;\n            --percent: calc(var(--rating) / 5 * 100%);\n            color: #fff;\n            display: inline-block;\n            font-size: var(--star-size);\n            font-family: Times; // make sure ★ appears correctly\n            line-height: 1;\n            \n            &::before {\n              content: '★★★★★';\n              letter-spacing: 3px;\n              background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));\n              -webkit-background-clip: text;\n              -webkit-text-fill-color: transparent;\n            }\n          } \n    \n          .judul-content {\n            align-self: center;\n            justify-self: center;\n            color: #fff;\n          }\n        }\n      }\n    }\n  }\n}\n\n.main-detail {\n  margin: auto;\n  background-color: rgb(84, 163, 112);\n  border-radius: 200px;\n  text-align: center;\n  margin-block: 10px;\n}\n\n.detail-container {\n  margin: auto;\n  width: 100%;\n}\n\n.detail-container .image-restaurant {\n  width: 100%;\n  height: 300px;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: self-end;\n}\n\n.container-main-review {\n  padding-top: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-items: center;\n  display-items: center;\n}\n\n.detail-restaurant {\n  margin: auto;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  alighn-item: center;\n  max-width: 100%;\n  margin-block: 10px;\n  tbody {\n      width: 100%;\n  }\n  tr {\n    display: flex;\n    margin: 20px;\n    width: 100%;\n    margin: auto;\n  }    \n}\n\nth, td {\n  padding: 7px;\n  width: 100%;\n  margin: auto;\n}\n\nth {\n  background-color: rgb(84, 163, 112);\n  padding: 10px;\n}\n\ntd {\n  background-color: rgb(163, 205, 190);\n  padding: 10px;\n}\n\n.foods, .deskripsi {\n  text-indent: 30px;\n  text-align: justify;\n  letter-spacing: 1px;\n}\n\n.deskripsi td {\n  padding-inline: 35px;\n}\n\n.review-button {\n  border: 2px dashed rgb(25, 107, 70);\n  width: 100%;\n  height: 50px;\n  background-color: rgb(227, 251, 237);\n  font-weight: bold;\n  margin-block: 20px;\n  cursor: pointer;\n}\n\n.review-button:hover {\n  border: 2px dashed rgb(255, 255, 255);\n  background-color: black;\n  color: white;\n}\n\ni.star {\n  font-size: 30px;\n  margin-right: 10px;\n  margin-bottom: 5px;\n  border-radius: 50%;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  color: rgb(255, 255, 252);\n  background-color: gold;\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n}\n\ni.star:hover {\n  color: rgb(255, 255, 0);\n  background-color: rgb(255, 255, 255);\n\n}\n\n\n\n\n\n\n.skeleton {\n  position: relative;\n}\n\n.skeleton::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n  background: linear-gradient(90deg, #eee, #f9f9f9, #eee);\n  background-size: 200%;\n  animation: skeleton 1s linear infinite;\n}\n\n@keyframes skeleton {\n  0% {\n    background-position: -100%, 0;\n  }\n  100% {\n    background-position: 100%, 0;\n  }\n}"],sourceRoot:""}]);const l=p},745:(n,A,r)=>{r.d(A,{A:()=>t});var e=r(354),i=r.n(e),o=r(314),a=r.n(o)()(i());a.push([n.id,"@media screen and (min-width: 321px){body main .hero{padding-left:30px}}@media screen and (min-width: 375px){body main .hero{height:300px}body main .hero .judul-hero{font-size:49px;margin-top:10px}body main .hero .judul2-hero{margin-top:-40px;font-size:32px}}@media screen and (min-width: 425px){body main .hero{height:300px}}@media screen and (min-width: 485px){body header .navbar-container{width:250px}body header .navbar-container h2{width:250px}}@media screen and (min-width: 530px){body header .container-header .bars-navbar{display:none}body header .container-header .logo-restaurant h1{padding-left:30px;font-size:27px}body header .container-header .big-navbar-container{display:block}body header .container-header .big-navbar-container ul{display:grid;grid-template-columns:repeat(3, auto);gap:20px;padding:10px}body header .container-header .big-navbar-container ul li{list-style-type:none}body header .container-header .big-navbar-container ul li a{display:flex;align-items:center;width:100px;height:44px;font-size:18px;color:#def5e5;text-decoration:none}body header .container-header .big-navbar-container ul li a:hover{color:#6a8773}body header .navbar-container{display:none}body main{margin-top:100px}body main .hero{border-top:17px solid #6e9184;height:320px}}@media screen and (min-width: 649px){body main .detail-container .image-restaurant{height:350px}}@media screen and (min-width: 768px){body header .navbar-container{display:none}body header .navbar-container .container-header .bars-navbar{display:none}body header .navbar-container .container-header .logo-restaurant h1{padding-left:60px;font-size:37px}body header .navbar-container .container-header .big-navbar-container{display:block}body header .navbar-container .container-header .big-navbar-container ul{display:grid;grid-template-columns:repeat(3, auto);gap:20px;padding:20px}body header .navbar-container .container-header .big-navbar-container ul li{list-style-type:none}body header .navbar-container .container-header .big-navbar-container ul li a{font-size:20px;color:#e4f1e8;text-decoration:none}body header .navbar-container .container-header .big-navbar-container ul li a:hover{color:#6a8773}body main .hero{border-top:20px solid #6e9184;height:400px;background-position:0 -49px}body main .hero .judul-hero{font-size:80px;margin-top:10px}body main .hero .judul2-hero{margin-top:-40px;font-size:32px}body main .main-title{font-size:35px;height:70px}body main .detail-container .image-restaurant{height:450px}body main i.star{font-size:44px;width:70px;height:70px;margin-right:20px;margin-bottom:20px}}@media screen and (min-width: 1024px){body header .container-header .big-navbar-container{display:block}body header .container-header .big-navbar-container ul{gap:0;padding-inline:0}}@media screen and (min-width: 1100px){body main .hero{border-top:24px solid #6e9184;height:450px}}@media screen and (min-width: 1200px){body main{margin:auto;margin-top:100px;width:1200px}body main .hero{width:1000px;height:500px;border-radius:20px}body main .main-detail{width:1000px}body main .detail-container{width:1000px}}","",{version:3,sources:["webpack://./src/scss/responsive.scss"],names:[],mappings:"AAAA,qCAGM,gBACE,iBAAA,CAAA,CAMR,qCAGM,gBACE,YAAA,CACA,4BACE,cAAA,CACA,eAAA,CAGF,6BACE,gBAAA,CACA,cAAA,CAAA,CAOV,qCAGM,gBAEE,YAAA,CAAA,CAMR,qCAGM,8BACE,WAAA,CACA,iCACE,WAAA,CAAA,CAOV,qCAIY,2CACI,YAAA,CAIF,kDACE,iBAAA,CACA,cAAA,CAIJ,oDACE,aAAA,CAEE,uDACI,YAAA,CACA,qCAAA,CACA,QAAA,CACA,YAAA,CACA,0DACE,oBAAA,CACA,4DACE,YAAA,CACA,kBAAA,CACA,WAAA,CACA,WAAA,CACA,cAAA,CACA,aAAA,CACA,oBAAA,CAEF,kEACE,aAAA,CAQhB,8BACI,YAAA,CAGR,UACE,gBAAA,CACA,gBACE,6BAAA,CACA,YAAA,CAAA,CAMR,qCAIQ,8CACI,YAAA,CAAA,CAQZ,qCAGQ,8BACI,YAAA,CAEA,6DACI,YAAA,CAIF,oEACE,iBAAA,CACA,cAAA,CAIJ,sEACE,aAAA,CAEE,yEACI,YAAA,CACA,qCAAA,CACA,QAAA,CACA,YAAA,CACA,4EACE,oBAAA,CACA,8EACE,cAAA,CACA,aAAA,CACA,oBAAA,CAEF,oFACE,aAAA,CAYlB,gBACE,6BAAA,CACA,YAAA,CACA,2BAAA,CACA,4BACE,cAAA,CACA,eAAA,CAGF,6BACE,gBAAA,CACA,cAAA,CAIJ,sBACE,cAAA,CACA,WAAA,CAIA,8CACE,YAAA,CAIJ,iBACE,cAAA,CACA,UAAA,CACA,WAAA,CAEA,iBAAA,CACA,kBAAA,CAAA,CAWR,sCAIQ,oDACE,aAAA,CACE,uDACI,KAAA,CACA,gBAAA,CAAA,CAQhB,sCAGM,gBACE,6BAAA,CACA,YAAA,CAAA,CAOR,sCAEI,UACE,WAAA,CACA,gBAAA,CACA,YAAA,CACA,gBACE,YAAA,CACA,YAAA,CACA,kBAAA,CAEF,uBACE,YAAA,CAEF,4BACE,YAAA,CAAA",sourcesContent:["@media screen and (min-width: 321px) {\r\n  body {\r\n    main {\r\n      .hero {\r\n        padding-left: 30px;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 375px) {\r\n  body {\r\n    main {\r\n      .hero {\r\n        height: 300px;\r\n        .judul-hero {\r\n          font-size: 49px;\r\n          margin-top: 10px;\r\n        }\r\n\r\n        .judul2-hero {\r\n          margin-top: -40px;\r\n          font-size: 32px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 425px) {\r\n  body {\r\n    main {\r\n      .hero {\r\n\r\n        height: 300px;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 485px) {\r\n  body {\r\n    header {\r\n      .navbar-container {\r\n        width: 250px;\r\n        h2 {\r\n          width: 250px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media screen and (min-width:530px){\r\n  body {\r\n    header {\r\n        .container-header {\r\n            .bars-navbar {\r\n                display: none;\r\n            }\r\n\r\n            .logo-restaurant {\r\n              h1 {\r\n                padding-left: 30px;\r\n                font-size: 27px;\r\n              }\r\n            }\r\n\r\n            .big-navbar-container {\r\n              display: block;\r\n                // visibility: collapse;\r\n                ul {\r\n                    display: grid;\r\n                    grid-template-columns: repeat(3, auto);\r\n                    gap: 20px;\r\n                    padding: 10px;\r\n                    li {\r\n                      list-style-type: none;\r\n                      a {\r\n                        display: flex;\r\n                        align-items: center;\r\n                        width: 100px;\r\n                        height: 44px;\r\n                        font-size: 18px;\r\n                        color: #DEF5E5;\r\n                        text-decoration: none;\r\n                      }\r\n                      a:hover {\r\n                        color: #6a8773;\r\n                      }\r\n                    }\r\n                   \r\n                  }\r\n            }\r\n        }\r\n\r\n        .navbar-container {\r\n            display: none;\r\n        }\r\n    }\r\n    main {\r\n      margin-top: 100px;\r\n      .hero {\r\n        border-top: 17px solid  #6e9184;\r\n        height: 320px;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 649px) {\r\n  body {\r\n    main {\r\n      .detail-container {\r\n        .image-restaurant {\r\n            height: 350px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  \r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  body {\r\n    header {\r\n        .navbar-container {\r\n            display: none;\r\n        .container-header {\r\n            .bars-navbar {\r\n                display: none;\r\n            }\r\n\r\n            .logo-restaurant {\r\n              h1 {\r\n                padding-left: 60px;\r\n                font-size: 37px\r\n              }\r\n            }\r\n\r\n            .big-navbar-container {\r\n              display: block;\r\n                // visibility: collapse;\r\n                ul {\r\n                    display: grid;\r\n                    grid-template-columns: repeat(3, auto);\r\n                    gap: 20px;\r\n                    padding: 20px;\r\n                    li {\r\n                      list-style-type: none;\r\n                      a {\r\n                        font-size: 20px;\r\n                        color: #e4f1e8;\r\n                        text-decoration: none;\r\n                      }\r\n                      a:hover {\r\n                        color: #6a8773;\r\n                      }\r\n                    }\r\n                   \r\n                  }\r\n            }\r\n        }\r\n\r\n        \r\n    }\r\n    }\r\n    main {\r\n      .hero {\r\n        border-top: 20px solid  #6e9184;\r\n        height: 400px;\r\n        background-position: 0 -49px;\r\n        .judul-hero {\r\n          font-size: 80px;\r\n          margin-top: 10px;\r\n        }\r\n\r\n        .judul2-hero {\r\n          margin-top: -40px;\r\n          font-size: 32px;\r\n        }\r\n      }\r\n\r\n      .main-title {\r\n        font-size: 35px;\r\n        height: 70px;\r\n      }\r\n\r\n      .detail-container {\r\n        .image-restaurant {\r\n          height: 450px;\r\n        } \r\n      }\r\n      \r\n      i.star {\r\n        font-size: 44px;\r\n        width: 70px;\r\n        height: 70px;\r\n\r\n        margin-right: 20px;\r\n        margin-bottom: 20px;\r\n      }\r\n\r\n    }\r\n  }\r\n\r\n  \r\n \r\n    \r\n}\r\n\r\n@media screen and (min-width: 1024px) {\r\n  body {\r\n    header {\r\n      .container-header {\r\n        .big-navbar-container {\r\n          display: block;\r\n            ul {\r\n                gap: 0;\r\n                padding-inline: 0;\r\n            }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1100px) {\r\n  body {\r\n    main {\r\n      .hero {\r\n        border-top: 24px solid  #6e9184;\r\n        height: 450px;\r\n      }\r\n      \r\n    }\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1200px){\r\n  body {\r\n    main {\r\n      margin: auto;\r\n      margin-top: 100px;\r\n      width: 1200px;\r\n      .hero {\r\n        width: 1000px;\r\n        height: 500px;\r\n        border-radius: 20px;\r\n      }\r\n      .main-detail {\r\n        width: 1000px;\r\n      }\r\n      .detail-container{    \r\n        width: 1000px;\r\n      }\r\n    }\r\n  }\r\n\r\n  \r\n}\r\n\r\n"],sourceRoot:""}]);const t=a},149:(n,A,r)=>{var e=r(72),i=r.n(e),o=r(825),a=r.n(o),t=r(659),d=r.n(t),C=r(56),p=r.n(C),c=r(540),l=r.n(c),s=r(113),g=r.n(s),x=r(386),b={};b.styleTagTransform=g(),b.setAttributes=p(),b.insert=d().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=l(),i()(x.A,b),x.A&&x.A.locals&&x.A.locals},670:(n,A,r)=>{var e=r(72),i=r.n(e),o=r(825),a=r.n(o),t=r(659),d=r.n(t),C=r(56),p=r.n(C),c=r(540),l=r.n(c),s=r(113),g=r.n(s),x=r(745),b={};b.styleTagTransform=g(),b.setAttributes=p(),b.insert=d().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=l(),i()(x.A,b),x.A&&x.A.locals&&x.A.locals}},r={};function e(n){var i=r[n];if(void 0!==i)return i.exports;var o=r[n]={id:n,exports:{}};return A[n](o,o.exports,e),o.exports}e.m=A,n=[],e.O=(A,r,i,o)=>{if(!r){var a=1/0;for(p=0;p<n.length;p++){for(var[r,i,o]=n[p],t=!0,d=0;d<r.length;d++)(!1&o||a>=o)&&Object.keys(e.O).every((n=>e.O[n](r[d])))?r.splice(d--,1):(t=!1,o<a&&(a=o));if(t){n.splice(p--,1);var C=i();void 0!==C&&(A=C)}}return A}o=o||0;for(var p=n.length;p>0&&n[p-1][2]>o;p--)n[p]=n[p-1];n[p]=[r,i,o]},e.n=n=>{var A=n&&n.__esModule?()=>n.default:()=>n;return e.d(A,{a:A}),A},e.d=(n,A)=>{for(var r in A)e.o(A,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:A[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,A)=>Object.prototype.hasOwnProperty.call(n,A),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var A=e.g.document;if(!n&&A&&(A.currentScript&&(n=A.currentScript.src),!n)){var r=A.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&(!n||!/^http(s?):/.test(n));)n=r[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),(()=>{e.b=document.baseURI||self.location.href;var n={90:0};e.O.j=A=>0===n[A];var A=(A,r)=>{var i,o,[a,t,d]=r,C=0;if(a.some((A=>0!==n[A]))){for(i in t)e.o(t,i)&&(e.m[i]=t[i]);if(d)var p=d(e)}for(A&&A(r);C<a.length;C++)o=a[C],e.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return e.O(p)},r=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];r.forEach(A.bind(null,0)),r.push=A.bind(null,r.push.bind(r))})(),e.nc=void 0;var i=e.O(void 0,[960,145,608,71,74,545,19,720,177],(()=>e(956)));i=e.O(i)})();
//# sourceMappingURL=app~fa139a9b.bundle.js.map