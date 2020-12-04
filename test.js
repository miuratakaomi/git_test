var num1 = 777;
var num2 = 999;
var string_a = "おみちゃん";
var string_b = "ぷりちゃん";
var array = [["まき","たかおみ"],["あい","まさや"]];

// コメントはCと同じ

// まずは出力
console.log("Good Morning");
console.log("Good Eveing");
console.log("Good Night");

// 関数を変数に入れられる。
var hello = function sayhallo()
{ 
    // 数値
    console.log(num1);
    console.log(num2);

    // 文字列
    if(string_a != "")
    {
        console.log(string_a);
    }
    if(string_b != "")
    {
        console.log(string_b);
    }

    // 配列
    for(var i=0; i<2; i++)
    {
        console.log(array[i][0]);
    }
}

// 変数にカッコをつけて 関数呼び出し
hello();