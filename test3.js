// 1, 2, 3が順に実行されるが、処理が増えるほどネストも増える
setTimeout(() => {
    console.log(1);
    setTimeout(() => {
        console.log(2);
        setTimeout(() => {
            console.log(3);
        }, 1000);
    }, 1000);
}, 1000);
