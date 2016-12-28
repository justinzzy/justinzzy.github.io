(function() {
	setItems($('.grid'), 30);
	$('.grid-item-img').on('load', function() { layout(); });

	$(window).resize(function() {
		delay_till_last('resize', layout, 500);
	});
})();

function setItems(elem, number) {
	while(number-->0) {
		var gridItem = $('<div class="grid-item"></div>');
		var gridItemImg = $('<img src="/img/waterfall01.jpg" class="grid-item-img"/>');

		switch(number%3) {
			case 1:
				gridItemImg = $('<img src="/img/waterfall02.jpg" class="grid-item-img"/>');
				break;
			case 2:
				gridItemImg = $('<img src="/img/waterfall03.png" class="grid-item-img"/>');
				break;
			defalut:
				gridItemImg = $('<img src="/img/waterfall01.jpg" class="grid-item-img"/>');
		}

		gridItem.append(gridItemImg);
		elem.append(gridItem);
	}
}

function layout() {
	var items = $('.grid-item');
	var contentWidth = $(window).width();
	var itemWidth = 200;
	var itemMargin = 20;

	var columnCount = Math.floor((contentWidth + itemMargin) / (itemWidth + itemMargin));
	var realItemWidth = (contentWidth - itemMargin * (columnCount-1)) / columnCount;

	var columns = [];
	for (var i = 0; i < columnCount; i++) {
		columns[i] = 0;
	}

	$.each(items, function() {
		var $this = $(this),
			thisHeight = $this.outerHeight(),
			colMinHeight = Math.min.apply(Math, columns),
			colMinHeightIndex = columns.indexOf(colMinHeight);

		$this.css({
			"top": colMinHeight + 480,
			"left": colMinHeightIndex * (realItemWidth + itemMargin)
		});

		columns[colMinHeightIndex] += parseInt(thisHeight) + itemMargin;
		$this = null;
	});

	var colMaxHeight = Math.max.apply(Math, columns);
	$('.grid').height(colMaxHeight);
}

var timer = {};

function delay_till_last(id, fn, wait) {
	if(timer[id]) {
		window.clearTimeout(timer[id]);
		delete timer[id];
	}

	return timer[id] = window.setTimeout(function() {
		fn();
		delete timer[id];
	}, wait);
}
