/* eslint-disable */
// 复杂的自定义覆盖物
function ComplexCustomOverlay(point, text, mouseoverText, overlayData ,map) {
	this._point = point;
	this._text = text;
	this._overText = mouseoverText;
	this._overlayData = overlayData;
	this._mp = map;
}

ComplexCustomOverlay.prototype = new BMap.Overlay();
ComplexCustomOverlay.prototype.initialize = function (map) {
	this._map = map;
	var div = this._div = document.createElement("div");
	div.style.position = "absolute";
	div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
	var htmlTxt = `
	<div class="addr-model">
	<img src="${this._overlayData.url}" alt="company">
		<div class="right-msg">
			<p>${this._overlayData.tel}</p>
			<p>${this._overlayData.addrTxt}</p>
		</div>
	</div>
	`;
	// var span = this._span = document.createElement("span");
	// div.appendChild(span);
	// span.appendChild(document.createTextNode(this._text));

	div.innerHTML = htmlTxt;
	// var that = this;

	var arrow = this._arrow = document.createElement("div");
	arrow.style.background = "url(http://map.baidu.com/fwmap/upload/r/map/fwmap/static/house/images/label.png) no-repeat";
	arrow.style.position = "absolute";
	arrow.style.width = "11px";
	arrow.style.height = "10px";
	arrow.style.top = "22px";
	arrow.style.left = "10px";
	arrow.style.overflow = "hidden";
	// div.appendChild(arrow);

	this._mp.getPanes().labelPane.appendChild(div);

	return div;
}

ComplexCustomOverlay.prototype.draw = function () {
	var map = this._map;
	var pixel = map.pointToOverlayPixel(this._point);
	// this._div.style.left = pixel.x - parseInt(this._arrow.style.left) + "px";
	this._div.style.left = pixel.x - 200 + "px";
	this._div.style.top = pixel.y + 40 + "px";
}
module.exports = ComplexCustomOverlay;