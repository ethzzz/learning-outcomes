async function randomDelay(id) {
    // 延迟 0~1000 毫秒
    const delay = Math.random() * 10000;
    return new Promise((resolve) => setTimeout(() => {
        console.log(`${id} finished`);
        resolve(id);
    }, delay));
}

console.log(randomDelay(1))