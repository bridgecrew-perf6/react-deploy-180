(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{83:function(t,e,n){},91:function(t,e,n){},92:function(t,e,n){},93:function(t,e,n){"use strict";n.r(e);var c=n(2),a=n(0),s=n.n(a),i=n(10),o=n.n(i),r=(n(83),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,147)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),s(t),i(t)}))}),l=n(13),j=n(14),d=n(16),u=n(15),b=n(25),h=n(9),p=n(38),O=function(t){var e=t.data,n=e.title,a=e.body,s=e.id;return Object(c.jsxs)("div",{className:"post",children:[Object(c.jsx)("div",{className:"images",children:Object(c.jsx)("img",{src:"https://placeimg.com/200/150/tech",alt:"My Images"})}),Object(c.jsx)("p",{className:"title",children:n}),Object(c.jsx)("p",{className:"desc",children:a}),Object(c.jsxs)("div",{className:"buttonGroup",children:[Object(c.jsx)("button",{className:"detail",onClick:function(){return t.Detail(s)},children:"detail"}),Object(c.jsx)("button",{className:"update",onClick:function(){return t.Update(t.data)},children:"update"}),Object(c.jsx)("button",{className:"remove",onClick:function(){return t.Delete(s)},children:"delete"})]})]})},m="http://localhost:3004",x="https://jsonplaceholder.typicode.com",f=function(t,e){return new Promise((function(n,c){fetch("".concat(e?x:m,"/").concat(t),{method:"DELETE"}).then((function(t){return t.json()})).then((function(t){return n(t)})).catch((function(t){return c(t)}))}))},g=function(t,e){return new Promise((function(n,c){fetch("".concat(e?x:m,"/").concat(t)).then((function(t){return t.json()})).then((function(t){return n(t)})).catch((function(t){return c(t)}))}))},v=function(t,e,n){return new Promise((function(c,a){fetch("".concat(e?x:m,"/").concat(t),{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(t){return c(t)})).catch((function(t){return a(t)}))}))},y=function(t,e,n){return new Promise((function(c,a){fetch("".concat(e?x:m,"/").concat(t),{method:"PUT",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(t){return c(t)})).catch((function(t){return a(t)}))}))},C={Blogpost:function(){return g("posts?_sort=id&_order=desc",!1)},Comments:function(){return g("comments",!0)},PostBlog:function(t){return v("posts",!1,t)},deleteBlog:function(t){return f("posts/".concat(t),!1)},updateBlog:function(t,e){return y("posts/".concat(e),!1,t)}},k=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={post:[],comments:[],formBlogPost:{userId:1,id:"",title:"",body:""},isUpdate:!1},t.getDataAPI=function(){C.Blogpost().then((function(e){t.setState({post:e})})),C.Comments().then((function(e){t.setState({comments:e})}))},t.deleteToAPI=function(e){C.deleteBlog(e).then((function(){return t.getDataAPI()}))},t.postDataToAPI=function(){C.PostBlog(t.state.formBlogPost).then((function(){t.getDataAPI(),t.setState({formBlogPost:{userId:1,id:"",title:"",body:""}})}))},t.putDataToAPI=function(){var e=t.state.formBlogPost;C.updateBlog(e,e.id).then((function(){t.getDataAPI(),t.setState({formBlogPost:{userId:1,id:"",title:"",body:""},isUpdate:!1})}))},t.handleChange=function(e){var n=Object(p.a)({},t.state.formBlogPost);t.state.isUpdate||(n.id=(new Date).getTime()),n[e.target.id]=e.target.value,t.setState({formBlogPost:n})},t.handleSubmit=function(){t.state.isUpdate?t.putDataToAPI():t.postDataToAPI()},t.handleUpdate=function(e){t.setState({formBlogPost:e,isUpdate:!0})},t.handleDetail=function(e){t.props.history.push("/Blogpost/Detail/".concat(e))},t}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getDataAPI()}},{key:"render",value:function(){var t=this.state,e=t.formBlogPost,n=t.post,s=t.isUpdate,i=t.comments,o=this.handleChange,r=this.handleSubmit,l=this.deleteToAPI,j=this.handleDetail,d=this.handleUpdate;return Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)("p",{className:"heading-p",children:"Halaman BlogPost"}),Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"container-blogpost",children:[Object(c.jsxs)("div",{className:"form-add",children:[Object(c.jsx)("label",{htmlFor:"title",children:"Title"}),Object(c.jsx)("input",{type:"text",id:"title",autoComplete:"off",onChange:o,autoFocus:!0,value:e.title}),Object(c.jsx)("label",{htmlFor:"body",children:"Body"}),Object(c.jsx)("textarea",{value:e.body,id:"body",cols:"30",rows:"10",onChange:o}),Object(c.jsx)("button",{onClick:r,children:s?"Update":"Tambah"})]}),i.map((function(t){return Object(c.jsxs)("p",{children:[t.name," : ",t.email]})})),n.map((function(t){return Object(c.jsx)(O,{data:t,Delete:l,Update:d,Detail:j},t.id)}))]})]})}}]),n}(a.Component),P=Object(h.f)(k),A=Object(a.createContext)(),D=A.Provider,N=A.Consumer,S=function(t){return function(e){Object(d.a)(a,e);var n=Object(u.a)(a);function a(){return Object(l.a)(this,a),n.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this;return Object(c.jsx)(N,{children:function(n){return Object(c.jsx)(t,Object(p.a)(Object(p.a)({},n),e.props))}})}}]),a}(a.Component)},B=S(function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var t=this;return Object(c.jsxs)("div",{className:"button-group",children:[Object(c.jsx)("button",{className:"minus",onClick:function(){return t.props.dispatch({type:"MINUS_ORDER"})},children:"-"}),Object(c.jsx)("input",{type:"text",value:this.props.state.totalOrder}),Object(c.jsx)("button",{className:"plus",onClick:function(){return t.props.dispatch({type:"ADD_ORDER"})},children:"+"})]})}}]),n}(a.Component)),w=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"product",children:[Object(c.jsx)("div",{className:"images",children:Object(c.jsx)("img",{src:"https://etanee-images.s3-ap-southeast-1.amazonaws.com/sayur/Cabai+Hijau+Besar.jpg",alt:"My product"})}),Object(c.jsx)("p",{className:"title",children:"Cabai Hijau Besar 100gr"}),Object(c.jsx)("p",{className:"price",children:"Rp 4.005 ,-"}),Object(c.jsx)(B,{})]})}}]),n}(a.Component),E=S(function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)("p",{className:"heading-p",children:"Halaman Product"}),Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("div",{className:"logo",children:Object(c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEX///9oyT709PRlyDpjyDWB0l+f2otdxitgxzFkyDdfxy+o35OM1HBcxir59vre89Wb2oP0+/H7/vrV78t3zlLm9uDs+Oe95q2D0WWU13zw+ez79vyx4Z/F6bni9Num3pHN7MFxzEqK1G2046Pd8tXB57K55Kl0zU2C0mLj797b7NXK5r/s8umt4Jl6z1iT13hUxBrR6Mr56WrHAAAMw0lEQVR4nO2cbXuiPBOGSSdKkhpFVHypKL633YLu//9zTyaAiqDbqvfqHs9cX9qmIXKSyWSSDDoOiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUhPJr89ifpjb1B7sBLvP8Hrreo10EpwCY8Wn98fr1NPuJDAnkOycWe83pQp/ix0qDsTRgP9VHjszoRh4j4ZHrsrYaerno/vjoS9gX5GvvsRLlz5aJQzug9h8C4eDXJWdyEMxYUOfLTt3oNwqi98AGz+Gku1bif05+pC+zALLv37L+hmwvaGX2pfR07jsT7oVsIRu3j/2Hz02E68kTCYXXYkvGd6+bG+5jbC9uyyBYoYaz3WTG8i9LuX7x2krbZ+6GR5E2HjopOxbgY1UUxy1700af6HuoUwvuhCQOisbf/j4+Pz83ffewjiDYQd93yzBm+w/vSzmi+o5tvHH7r8v9H1hKPza0EQs/VXs7mv+pKq+RCnej3h4JzNgXr/1WwaolPCt3+LsH9uEPJZZPlejipnhN1HIF5LODqzZgDtfTVToDLh+79EOKz2GiCjt5cSYE44t4RcSPEXUeXwKsBl9YIJ2GcOeJZQDCdB+BdXjfy6Pe9qe4PZR7MKMCccmKvAbkF3/l40zl+vAexUdiHAGcCcMDGEIrIlf8/p8PgawkHl/bmfe8BmsX5GiLbpLsstAFeKc/d4rxyksGXF0wEQrhAn4R+YSvxCSKhWVwAuK0Npd52NwebL5+p1GndGp4RgUHYdW1LTSqn0rkAl02jS602i6SYzXlBs2O+YsmXosb1PAzXot0xZf34INszku+iYstX2HKNeXkFYGWDKedaDb2EXHz93Wb0Qtr18STGNopS7FRnV8UkB6+wb9tfWy0oW+vuytpcNCZ7s77XVzbAl7C/uDaqXMKL3c8BR5dOSH5mFDvOtYeAyOAJ8+a0XJy2tzE25neOSjimBd79QK7a3zo/nNX9gEWWtfVQ4rEKETbGxb6lf1ZJYpDba9I7cJLDRgbD5SwcnLfmmzq5YFHOmOifVcAkN3eKVuLkAs1GhsCqQhPefA1ZOFcC+Mgy74pBa27GSTkYZ4bRE6JgquniXbZ07o4Na5pGqVs6W/sDdH7EqllX5B17/OeCoaqrg46wLrZNUXuC3EnyiInAO06F76tYitMmBQeyF43GUPz+3dVLN7wLU0l/rMzZPH4k0TzUli2es1suuLd2Yin5OuKoyUv2VeRPEl2kYgYYk+nvCLzMwx61OOnJ6rVarkw4w0HqnBee7sf2PxzPC1WbH++lHzs2V6T9d449T2KGUW/vLWgNIaWHjciwpiibyLVUZqRxmXfgLR6E7cfLPw4ji5fAv7u5nC9d18/sx05w2Sl3Ja05Y4wx2k4w664qdeRJ8ZztsLUTKn6DjTpstb1zC5ueAfpUndX+lU0XTeiGIlqi6IcDnnBF6Fqg844PGaS5YRqsiIVYRof21zt3UDOOxUdxOCVNqf2HL7BBvlQizvv+Ryq3gXWZG2kz31YQJSJSdgs3a5WVvpJWEwIqOpUCockJRclJ9UR5i5XvTk58TVu0NymGzQHj0DOt5F4bpp58SgmwX2/8u4ZiXCcPTe4PZzwGdbYWV8kWRkIu9Jnmkk0AlYR42jnKPUE2oTiOTAMpusp2cughxGmN8R6VW8DZ/54Spo130cwV5F+Y7cyVC24V+g7FNfIEwu8yb1lGe1zDWnS5T/Dgv25ZXnarU9X9Wu/KkIo/Y0i3G41AwX2zkDyYL0urCuH2zloCudfPo8fn2AmE2uTNt/KbQnGE8ka2L5mmZYOVEiWw++Zl6FY4GknzVhCEJTuK2Y3rTeewX+pZlEySei3fn47grIbGE4U5K92S2KBBmK/VgIDkMVm0nwqAtnRjbW8nl+zpwWqWHX4r/vqOq/QsYZOsmJzuGkWzreTWXS11Pzfdjb0D7TQUk8xMQqaNZDYepwz9DCCxzSKMgHbA4LeW2MgrSSzsnjiYPhH6mkrtCIO9AOLHjDcxjRSaY2WmkOT8s8mbHsf6q7PLjSkLGp8VqLbdshMGJE9SnbX9L44pNNp71lK3QP+5kPrB+9PXItMXxHByqkj+v5XEpxk7Z8MNgQYeFaja0cIuu8qQPT5Yj39VrFWF8vAW8UodojOHGxtuqYNludGjNTD1ycDwhjjyReZDA2oBd+/h2V0f1j2HS7nKPt5l6m+I41NeMwjOE68Imd+C5WpmoRrNX3B1+OzVsNc6YejaQ47N+Nhf6nbrds8CeC94tA8a1fhrvMTWIMgtvefmWjkrCrLHl60nC51WO9AyhWBeOKYw6URj++njB4rd+6YyK88Hr9HXIsq0VEHwzrHuNmcz3ogSb8WxMcZjJvU0o2d168w2ow03gxVtv2zU/ix8C8opVxUXCk3rN9PCi+VKvWk6auZAfP3Kz/JGFv49/L963LOXmVpWdGPWthHx8SpjPj2+ftQcdcctrdi/OE06bFZv42IGnY+PvSV9po2cI68eEe76vtXzIqS/q2GHfgVA23k7wmm8vn1P2uBwMddVhxXnCfMcuhWu+vX39fk3EAxO++S0ZJlWEbBaHvz8/vr6+Pj5//xp7G3gknrGpa3aBLxMyrly7maRdV/FHv2ohN+0/c/yU8JkkN1e70X+DUM5uA3x6Qp7cZKLPT6i2tziZf4BQX3Wk/e8QyitXhP8KIYj5rUPwuQk5uyYl4d8hBO3dOEk8N6F036/JuPhnCLka3MPDPCshKOHdr/+ejhCE7vbv4kCfkBAkV4CnFXfX1OWPFp4wQ207bt2791KF9UfrdbGKgntNDSQSiUT6/5I/+Q9mf6cTWl3MM+409mGxHy0W4XfSsPx4XdnUehHZWX6xLX/keMfuHwHEO2WlLzXNRDfbHAqVMuGI/sZm2FjvTnNMHWfJXLzcsPd2qny+O3T1FRndf1ACNr/LhYuEWVKQ09IAQnDQf16Lv/JyJswEL1eS6b75teIEO/CuPRK9oBrIdW6lo7XnLexI8EPPi5f5b+s9YZ3DPIrimTTVV2tT1l4gxmhV9+qRrdGJPW8c5IRBjP/2F/38wyBZhQ0OM7+nYRAP04taeA3eQNpaYFrzVjfvKB4I9xm4LS44V7KD6XMYm9s8EMzHEntCj2fvyxiU3W6N3zaxazuhxARYzJ71B3ih4J2M8N3FpFJjsDbNpCeAIXyiu05P43sAXI8dJ8KcWoE9XtcqcDr45VvSvelk5oRw0jYyWCz9Yi3Xd+YcJJOY6tHXjDMJOWEsGJ8vJvhHpDDHwuM6wHwTDpy5sTPa4Yk8YPaTJZxLfNndLHHtcwlVmlvtG18zsYSASeQdl3W7gEk5nhQ9m1okJRM3HB+eEDI8cTL9ESpIekENVNg299gZ1TmfOg3J1+3JnjBggkmhcUvsiHAoeX+0EtB1Rhpqvd47uGFKGAp4N90F3F7dF4esKDMku8tJAth1ozZmTxlj8CTvOVPO49GYX/UKwhlCzINQc2dhk677QqzaWs6N33ONL6gBHqbvrdQZTbVWwPSiSCjM/GG63xBiL62EWGeehoEOxjxLES0SoqeZcsxzXL5603f8oIzQXDji1yW0VRLCfLvdeiMkXFnCviEcZoQJ4DRyIMR7C43/FWVC86T8kb0yFAYpJYy5MNXTBFS0UvuqZBAHx4T9nXA1Z3rfh8amR/KOhLmn6St8wuaWVm2F6WQGwTPGg6+B7AmjQYQ/BFPm39hdnswJfQ7MSQkX3FhDStg2LnP/+mCPAxjH429c9KV7QtP6JJhDgTC4K2EWKU3MEKtPzbNc+jOQjXgDaoHTw+a1kY/DtpLuYLzeSpD4LQvg1RmzhNBYNKQxbTMOZ3HMwNx3Nh+aukzlMdBAwmaxTqRp7kDYxpek/Maxld6VMAE3jwW3ClN+xRxzE0EadzprO4GS6PJ41oeJAsBvG9wZe064dZu7kSFkmKmpQ3wXB9vgST7EMJPz8J5ysMPLzTUhWmkD51fjr+dCzoy/Rk/DrS91DSGH5E6E9V13H83UmXKZ9ecrJrTEV32cScK1Yo3sKfieDbvs8UK7Jl0Xuit89YXhlYv0bSOpec1cGWn7ipTP4Ci2CWpCCTWL8JUPfL8m1AbJH0htPKspXO/MQ412Zg71a7u7fd/l8W5Xe7nM/vIny7xre/tCW8VE6q3M7QTLtJKZLToTWwnHYbBMY8t0nWDMvJAi2gvDZfZZh0p5Q85ylJf55aD2gUp9KSr1NEca62tTRJ9KW5G/1jLaiSLhhusrXq17Oi1re4p6Ulw7dub/wWqBRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQS6bz+B77C+P6jIbeeAAAAAElFTkSuQmCC",alt:"My logo"})}),Object(c.jsxs)("div",{className:"troley",children:[Object(c.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0_R04Sr0PJ7q3UJHeYRm-Lzz6t9aOhKCsPw&usqp=CAU",alt:"My troley"}),Object(c.jsx)("div",{className:"count",children:this.props.state.totalOrder})]})]}),Object(c.jsx)(w,{})]})}}]),n}(a.Component)),T=S(function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(t){var c;return Object(l.a)(this,n),console.log("constructor"),(c=e.call(this,t)).handleChange=function(){c.setState({count:c.state.count+1})},c.state={count:1},c}return Object(j.a)(n,[{key:"componentDidMount",value:function(){console.log("componentDidMount")}},{key:"shouldComponentUpdate",value:function(t,e){return console.log("shouldComponentUpdate"),!(e.count>=4)}},{key:"getSnapshotBeforeUpdate",value:function(t,e){return console.log("getSnapshotBeforeUpdate"),null}},{key:"componentDidUpdate",value:function(t,e,n){console.log("componentDidUpdate")}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount")}},{key:"render",value:function(){return console.log("render"),Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)("p",{className:"heading-p",children:"Halaman LifeCycleComp"}),Object(c.jsx)("hr",{}),Object(c.jsxs)("button",{className:"btn",onClick:this.handleChange,children:["Component Button ",this.state.count]}),Object(c.jsxs)("p",{className:"heading-p",children:["TotalOrder: ",this.props.state.totalOrder," "]})]})}}],[{key:"getDerivedStateFromProps",value:function(t,e){return console.log("getDerivedStateFromProps"),null}}]),n}(a.Component)),U=function(t){return Object(c.jsxs)("div",{className:"youtube",children:[Object(c.jsxs)("div",{className:"images",children:[Object(c.jsx)("img",{src:"https://i.ytimg.com/vi/2CQhh_6xU3s/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLD8hujJKKTdthKBFwoiKJhlUu0uHw",alt:"My Images"}),Object(c.jsx)("p",{className:"time",children:t.time})]}),Object(c.jsx)("p",{className:"title",children:t.title}),Object(c.jsx)("p",{className:"desc",children:t.desc})]})};U.defaultProps={time:"00.00",title:"My title",desc:"My desc"};var W=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)("p",{className:"heading-p",children:"Halaman YoutubeComponent"}),Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(U,{time:"19.12",title:"Javascript Dasar",desc:"59rb x di tonton."}),Object(c.jsx)(U,{time:"11.20",title:"Javascript Lanjutan",desc:"59rb x di tonton."}),Object(c.jsx)(U,{time:"08.15",title:"Javascript DOM",desc:"59rb x di tonton."}),Object(c.jsx)(U,{time:"20.50",title:"Javascript Lanjutan Object",desc:"59rb x di tonton."}),Object(c.jsx)(U,{time:"20.50",title:"Javascript Lanjutan Object",desc:"59rb x di tonton."}),Object(c.jsx)(U,{time:"17.22",title:"Javascript Arrow Function",desc:"59rb x di tonton."}),Object(c.jsx)(U,{time:"50.30",title:"Javascript Prototype",desc:"59rb x di tonton."}),Object(c.jsx)(U,{}),Object(c.jsx)(U,{}),Object(c.jsx)(U,{})]})]})}}]),n}(a.Component),z=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={post:{title:"",body:""}},t}return Object(j.a)(n,[{key:"render",value:function(){var t=this.state,e=t.title,n=t.body;return Object(c.jsxs)("div",{className:"detailPost",children:[Object(c.jsx)("p",{children:e}),Object(c.jsx)("p",{children:n})]})}}]),n}(a.Component),I=function(t){var e=1;return Object(c.jsx)("ul",{children:t.dataItems.map((function(t){return Object(c.jsxs)("li",{children:[e++,". ",t.text]},t.id)}))})},J=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={items:[],text:""},t.handleChange=function(e){t.setState({text:e.target.value})},t.handleSubmit=function(){var e={id:Date.now(),text:t.state.text};0!==t.state.text.length&&t.setState({items:t.state.items.concat(e),text:""})},t}return Object(j.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"contentTodo",children:[Object(c.jsx)("p",{className:"headingTodo",children:"Todo App"}),Object(c.jsx)(I,{dataItems:this.state.items}),Object(c.jsxs)("div",{className:"form",children:[Object(c.jsx)("input",{type:"text",placeholder:"Add items",autoComplete:"off",autoFocus:!0,onChange:this.handleChange,value:this.state.text}),Object(c.jsxs)("button",{onClick:this.handleSubmit,children:["Add items ",this.state.items.length+1]})]})]})}}]),n}(a.Component),X=n(49),L=n(144),H=n(95),Y=n(66),K=n.n(Y),M=n(62),R=n.n(M),F=n(63),G=n.n(F),Q=n(67),V=n.n(Q),q=n(146),Z=n(137),_=n(145),$=n(143),tt=n(65),et=n.n(tt),nt=n(96),ct=n(140),at=n(97),st=n(141),it=n(142),ot=n(138),rt=n(64),lt=n.n(rt),jt=n(133),dt=n(68),ut=n(139),bt=(n(89),Object(jt.a)((function(t){return{root:{display:"flex",flexDirection:"column",flexWrap:"wrap",alignItems:"center","& > *":{}},button:{background:"linear-gradient(45deg, black, rgba(0, 0, 0, .3))",padding:"8px 15px",borderRadius:"20px",color:"white"},title:{flexGrow:1},menuButton:{marginRight:t.spacing(2)}}}))),ht=Object(dt.a)({typography:{subtitle1:{marginBottom:"20px"}}});function pt(){var t=bt();return Object(c.jsx)(H.a,{className:t.button,children:"Hello World"})}function Ot(){var t=s.a.useState(!0),e=Object(X.a)(t,2),n=e[0],a=e[1];return Object(c.jsx)(Z.a,{control:Object(c.jsx)(q.a,{checked:n,onChange:function(t){return a(t.target.checked)},icon:Object(c.jsx)(R.a,{}),checkedIcon:Object(c.jsx)(G.a,{})}),label:"Check Me!"})}var mt,xt=function(){var t=bt();return Object(c.jsx)(ut.a,{theme:ht,children:Object(c.jsx)(ct.a,{maxWidth:"sm",children:Object(c.jsxs)("div",{className:t.root,children:[Object(c.jsx)(st.a,{color:"primary",children:Object(c.jsxs)(it.a,{children:[Object(c.jsx)(ot.a,{className:t.menuButton,children:Object(c.jsx)(lt.a,{})}),Object(c.jsx)(nt.a,{variant:"h6",className:t.title,children:"News"}),Object(c.jsx)(H.a,{color:"inherit",children:"Login"})]})}),Object(c.jsx)(nt.a,{variant:"h4",component:"div",children:"Welcome to MUI"}),Object(c.jsx)(nt.a,{variant:"subtitle1",children:"Learn How to use Material UI"}),Object(c.jsxs)($.a,{container:!0,spacing:1,justify:"center",style:{marginBottom:20},children:[Object(c.jsx)($.a,{item:!0,xs:12,sm:"12",lg:"12",children:Object(c.jsx)(at.a,{style:{width:"100%",height:75,background:"black"}})}),Object(c.jsx)($.a,{item:!0,xs:12,sm:!0,lg:!0,children:Object(c.jsx)(at.a,{style:{width:"100%",height:75,background:"black"}})}),Object(c.jsx)($.a,{item:!0,xs:6,children:Object(c.jsx)(at.a,{style:{width:"100%",height:75,background:"black"}})})]}),Object(c.jsx)(pt,{}),Object(c.jsx)("form",{autoComplete:"off",children:Object(c.jsxs)($.a,{container:!0,spacing:1,alignItems:"flex-end",children:[Object(c.jsx)($.a,{item:!0,children:Object(c.jsx)(et.a,{})}),Object(c.jsx)($.a,{item:!0,children:Object(c.jsx)(_.a,{id:"input-with-icon-grid",label:"With a grid",placeholder:"Enter Your Name",color:"secondary"})})]})}),Object(c.jsx)(Ot,{}),Object(c.jsxs)(L.a,{variant:"contained",size:"large",color:"primary",children:[Object(c.jsx)(H.a,{startIcon:Object(c.jsx)(K.a,{}),children:"Add"}),Object(c.jsx)(H.a,{endIcon:Object(c.jsx)(V.a,{}),children:"Delete"})]})]})})})},ft=(n(91),function(){var t=Object(a.useState)(0),e=Object(X.a)(t,2),n=e[0],s=e[1];return Object(a.useEffect)((function(){return document.title="Title Change ".concat(n),function(){document.title="React App"}})),Object(c.jsxs)("div",{className:"contentHooks",children:[Object(c.jsxs)("p",{children:["You clicked me ",n," times."]}),Object(c.jsx)("button",{onClick:function(){return s(n+1)},children:"Click me!"})]})}),gt=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(c.jsxs)(b.a,{children:[Object(c.jsxs)("nav",{children:[Object(c.jsx)("h1",{children:"Router"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:"/",children:"Youtube"})}),Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:"/Product",children:"Product"})}),Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:"/Blogpost",children:"Blogpost"})}),Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:"/Lifecycle",children:"LifeCycle"})}),Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:"/Hooks",children:"Hooks"})}),Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:"/TodoApp",children:"TodoApp"})}),Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:"/MaterialUI",children:"MaterialUI"})})]})]}),Object(c.jsx)("section",{className:"main",children:Object(c.jsxs)(h.c,{children:[Object(c.jsx)(h.a,{path:"/",exact:!0,children:Object(c.jsx)(W,{})}),Object(c.jsx)(h.a,{path:"/Product",children:Object(c.jsx)(E,{})}),Object(c.jsx)(h.a,{path:"/Blogpost/Detail/:id",children:Object(c.jsx)(z,{})}),Object(c.jsx)(h.a,{path:"/Blogpost",children:Object(c.jsx)(P,{})}),Object(c.jsx)(h.a,{path:"/Lifecycle",children:Object(c.jsx)(T,{})}),Object(c.jsx)(h.a,{path:"/Hooks",children:Object(c.jsx)(ft,{})}),Object(c.jsx)(h.a,{path:"/TodoApp",children:Object(c.jsx)(J,{})}),Object(c.jsx)(h.a,{path:"/MaterialUI",children:Object(c.jsx)(xt,{})})]})})]})}}]),n}(a.Component),vt=(mt=gt,function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={totalOrder:0},t.dispatch=function(e){switch(e.type){case"ADD_ORDER":return t.setState({totalOrder:t.state.totalOrder+1});case"MINUS_ORDER":if(t.state.totalOrder>0)return t.setState({totalOrder:t.state.totalOrder-1});break;default:return t.state}},t}return Object(j.a)(n,[{key:"render",value:function(){return Object(c.jsx)(D,{value:{state:this.state,dispatch:this.dispatch},children:Object(c.jsx)(mt,Object(p.a)({},this.props))})}}]),n}(a.Component));n.p,n(92);o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(vt,{})}),document.getElementById("root")),r()}},[[93,1,2]]]);
//# sourceMappingURL=main.cba8a5b1.chunk.js.map