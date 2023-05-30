function pillars(num_pill, dist, width) {
if (num_pill > 1){
    return ( ((num_pill - 1) * ((dist * 100) + width)) - width );
}
return 0;
}
