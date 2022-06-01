// asyncをつけることで非同期関数の定義だと示す。
func = async () => {
    // awaitをつけることで,Promiseが帰ってくるまで次の関数が実行されない。
    await log(3);
    await log(2);
    await log(1);
}

log = (num) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(num);
            resolve();
        }, 1000);
    });
}

func();

