var hash = {'32' : '\u3000'}; 
// 鍗婅杞叏瑙� 
function sbc2dbc(str) { 
    var ret = [], i = 0, len = str.length, code, chr; 
    for (; i < len; ++i) { 
        code = str.charCodeAt(i); 
        chr = hash[code]; 
        if (!chr && code > 31 && code < 127) { 
            chr = hash[code] = String.fromCharCode(code + 65248); 
        } 
        ret[i] = chr ? chr : str.charAt(i); 
    } 
    return ret.join(''); 
} 
var hostname;
var hostname2;
var hostnametxt;
var lf=window.location.host.toLowerCase().split(".");
hostname2=sbc2dbc(window.location.host.toUpperCase());
if (lf.length>1){
	hostname=lf[lf.length-2] + "." + lf[lf.length-1]
	hostnametxt="www." + hostname.substring(0,3) + hostname.substring(3,hostname.length);
	document.title=document.title+hostname2;
	if (document.getElementById("WebUrl")){
		document.getElementById("WebUrl").innerHTML=hostname2;
	}
	if (document.getElementById("logo")){
		document.getElementById("logo").innerHTML=hostnametxt;
	}
}
window.status=hostname2;

function StayPosition(speed){
	this.objs = [];
	this.speed = speed || 0.1;
	this.timer = this.round = this.obj = this.end = null;
	if(StayPosition.initialize !== true){
		function correct(func, obj){
			return function(){
				func.call(obj);
			}
		}
		StayPosition.prototype.start = function(){
			this.timer = setInterval(correct(this.run, this), 33);
		}
		StayPosition.prototype.stop = function(){
			clearInterval(this.timer);
		}
		StayPosition.prototype.capitalize = function(prop){return prop.replace(/^[a-z]/, function(a){return a.toUpperCase();})}
		StayPosition.prototype.add = function(dom, prop){
			var offset = prop ? "offset" + this.capitalize(prop) : "offsetTop";
			var scroll = prop ? "scroll" + this.capitalize(prop) : "scrollTop";
			prop = prop ? prop : this.offset.slice(6).toLowerCase();
			this.objs.push({"dom": dom, "prop": {"size": dom[offset], "name": prop, "offset": offset, "scroll": scroll}});
		}
		StayPosition.prototype.run = function(){
			for(var i = 0, l = this.objs.length; i < l; i++){
				this.obj = this.objs[i];
				this.end = (document.documentElement[this.obj.prop.scroll] || document.body[this.obj.prop.scroll]) + this.obj.prop.size;
				if(this.end != this.obj.dom[this.obj.prop.offset]){
					this.round = this.end - this.obj.dom[this.obj.prop.offset] > 0 ? Math.ceil : Math.floor;
					this.obj.dom.style[this.obj.prop.name] = this.obj.dom[this.obj.prop.offset] + this.round((this.end - this.obj.dom[this.obj.prop.offset]) * this.speed) + "px";
				}
			}
		}
	}
	StayPosition.initialize = true;
}
