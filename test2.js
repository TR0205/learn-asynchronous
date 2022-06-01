// 1, 2, 3が順に実行されるかと思いきや同時に出力される。
setTimeout(() => console.log(1), 1000);
setTimeout(() => console.log(2), 1000);
setTimeout(() => console.log(3), 1000);