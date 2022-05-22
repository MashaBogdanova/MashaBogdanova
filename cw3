function warnTheSheep(queue) {

    let position = queue[queue.length-1];
    if (position==="wolf") {
        return( 'Pls go away and stop eating my sheep' );
    } else {
        let newQueue = queue.reverse();
        for (let i = 1; i < newQueue.length; i++) {
            if ( newQueue[i] === "wolf" ){
                return ( `Oi! Sheep number ${i}! You are about to be eaten by a wolf!` )
            }
        }
    }
}
