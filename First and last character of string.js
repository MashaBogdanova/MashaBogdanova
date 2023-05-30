function feast(beast, dish) {
   beast.split('')[0] === dish.split('')[0] && beast.split('')[beast.length -1] === dish.split('')[dish.length -1] ){
        return true;
    }
    return false;
}
