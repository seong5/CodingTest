function solution(priorities, location) {
  const queue = priorities.map((priority, index) => [priority, index]);

  let order = 0; 

  while (queue.length) {
    const [priority, index] = queue.shift(); 

   
    if (queue.some(([p]) => p > priority)) {
      queue.push([priority, index]); 
    } else {
      order++; 
      if (index === location) return order; 
    }
  }
}