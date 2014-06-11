	// Prevent multiple clicks on start
	var isSet=false;
	
	// Time at start (Returns present time wrt 1970)
	
	var timeatStart=timeatStop=0;
	function timeNow(){
		return (new Date()).getTime();
	}
	
	// Declaring variables
	var seconds=minutes=hours=milliseconds=newTime=0;
	
	// Function to execute when start button is clicked
	function startClick(){
		if(!isSet){
			isSet=true;
			timeatStart=(new Date()).getTime();
			$int=setInterval(function(){timerUpdate(timeatStart)},1);
		}
	}
	
	// Function to execute when stop button is clicked
	function stopClick(){
		isSet=false;
		clearInterval($int);
		timeatStop+=(new Date()).getTime()-timeatStart;
	}
	
	// Function to execute when reset button is clicked
	function resetClick(){
		clearInterval($int);
		isSet=false;
		timeatStart=timeatStop=0;
		seconds=minutes=hours=milliseconds=0;
		displayTime(hours,minutes,seconds,milliseconds);
	}
	
	// Calculate time
	function timerUpdate(timeatStart){
		newTime = (new Date()).getTime();
		timeEllapsed = newTime+timeatStop-timeatStart;
		hours = Math.floor(timeEllapsed/(3600000));
		timeEllapsed=timeEllapsed%(3600000);
		minutes = Math.floor(timeEllapsed/(60000));
		timeEllapsed=timeEllapsed%(60000);
		seconds = Math.floor((timeEllapsed/1000));
		milliseconds = timeEllapsed%1000;
		displayTime(hours,minutes,seconds,milliseconds);
	}
	
	// Zero padding
	function padZero(number, digits) {
		return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
	}
	
	// Display time on the timerboard
	function displayTime(hours,miutes,seconds,milliseconds){
		document.getElementById("timerBoard").innerHTML = padZero(hours,2)+":"+padZero(minutes,2)+":"+padZero(seconds,2)+":"+padZero(milliseconds,3);
	}
