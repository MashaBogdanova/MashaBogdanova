function elevator (call, left, right){
return((Math.abs(call - left) < Math.abs(call - right)) ? "left" : "right" );
}

alert(elevator(0, 1, 2));
