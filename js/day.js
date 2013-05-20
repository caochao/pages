function getRemainDays(targetDate)
{
	var now = new Date();
	var remains = calcDays(now,targetDate);
	return remains;
}

function calcDays(start,end)
{
	var days;
	var diffDay = end.getDay() - start.getDay();
	var diffMonth = end.getMonth() - start.getMonth();
	for(var i = 0; i < diffMonth; i++)
	{
		days += getDaysInMonth(start.fullYear,start.getMonth()+i+1)
	}
	return days;
}

function getDaysInMonth(year,month)
{
	//获取5月有多少天，则用6月的第0天所表示的日期数，month在Date对象中从0开始
	return new Date(year,month,0).getDate();
}

console.log(getRemainDays(new Date(2013,8,13)));