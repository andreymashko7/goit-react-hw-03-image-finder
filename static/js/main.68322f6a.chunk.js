(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={loader:"Loader_loader__jGlx1"}},18:function(e,t,a){},19:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),o=a.n(r),c=a(7),s=a.n(c),i=(a(18),a(3)),l=a(4),u=a(6),m=a(5),h=(a(19),a(8)),d=a(10);var j={fetchImages:function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=19012296-41da2131aa4097137b6521ff0&image_type=all&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.rejected(new Error("No response from server"))}))}},p=document.querySelector("#modal-root"),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt;return Object(c.createPortal)(Object(n.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(n.jsx)("div",{className:"Modal",children:Object(n.jsx)("img",{src:t,alt:a})})}),p)}}]),a}(r.Component),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.alt,a=e.src,r=e.largeImageUrl,o=this.state.showModal;return Object(n.jsxs)("li",{className:"ImageGalleryItem",children:[Object(n.jsx)("img",{src:a,alt:t,onClick:this.toggleModal,className:"ImageGalleryItem-image"}),o&&Object(n.jsx)(b,{onClose:this.toggleModal,src:r,alt:t})]})}}]),a}(r.Component);var f=function(e){var t=e.images;return Object(n.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(n.jsx)(g,{src:e.webformatURL,alt:e.tags,largeImageUrl:e.largeImageURL},e.id)}))})},O=a(11),v=a.n(O),y=(a(41),a(12)),x=a.n(y),w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:x.a.loader,children:Object(n.jsx)(v.a,{type:"TailSpin",color:"#00BFFF",height:120,width:120})})}}]),a}(r.Component),N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).scroll=function(){e.props.onclick()},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("button",{type:"button",className:"Button",onClick:this.scroll,children:"Load more"})}}]),a}(r.Component),k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],error:null,page:1,status:"idle"},e.onClickLoadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=e.imageName,r=this.props.imageName,o=t.page,c=this.state.page;n!==r&&this.setState({images:[]}),n===r&&o===c||(this.setState({status:"pending"}),j.fetchImages(r,c).then((function(e){if(0===e.total)return Promise.reject(new Error('\n                Could not find pictures for the request : "'.concat(r,'"')));a.setState((function(t){return{images:[].concat(Object(d.a)(t.images),Object(d.a)(e.hits)),status:"resolved"}}))})).catch((function(e){return a.setState({error:e,status:"rejected"})}))),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.status;return"idle"===a?Object(n.jsx)("p",{className:"InfoText",children:"Please enter some search keyword"}):"pending"===a?Object(n.jsx)(w,{}):"rejected"===a?Object(n.jsx)("p",{className:"ErrorText",children:t.message}):"resolved"===a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(f,{images:this.state.images}),Object(n.jsx)(N,{onclick:this.onClickLoadMore,page:this.state.page})]}):void 0}}]),a}(r.Component),S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imageName:""},e.handleNameChange=function(t){e.setState({imageName:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.imageName.trim())return h.b.info("Please enter something");e.props.onSubmit(e.state.imageName),e.setState({imageName:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{className:"Searchbar",children:Object(n.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(n.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(n.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(n.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.imageName,onChange:this.handleNameChange})]})})}}]),a}(r.Component),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imageName:""},e.handleFormSubmit=function(t){e.setState({imageName:t})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(S,{onSubmit:this.handleFormSubmit}),Object(n.jsx)(k,{imageName:this.state.imageName,page:this.state.page}),Object(n.jsx)(h.a,{autoClose:3e3})]})}}]),a}(r.Component);a(42);s.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(C,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.68322f6a.chunk.js.map