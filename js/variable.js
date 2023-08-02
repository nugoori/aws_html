window.onload = () => {
    main();
}

function main() {
    var a = 10;
    let b = 20; // 변수
    const c = 30; // 상수

    console.log(a);
    console.log(b);
    console.log(c);
    
    var a = 40;
    console.log(a);
    // let b = 50;
    b = 50;
    console.log(b);
    // const c = 60;
    // c = 60;
    // console.log(c);

    let name = "김준일";
    let age  = 30;
    let score = 80.5;
    let status = true;

    console.log("이름: " + name + " - type(" + typeof(name) + ")");
    console.log("나이: " +  age + " - type(" + typeof(age) + ")");
    console.log("점수: " + score + " - type(" + typeof(score) + ")");
    console.log("상태: " + status + " - type(" + typeof(status) + ")");

    console.log("10" == 10);    // 값만 비교
    console.log("10" === 10);   // 값 + 자료형 비교
    console.log("10" != 10); 
    console.log("10" !== 10);   // 다른 비교연산자는 java와 동일

    let count; // 변수가 선언은 되었지만 !초기화가 되지 않아! 자료형이 결정되지 않으면 undefined
    console.log(count);
    
    let count2 = null;  // 선언 하고 !초기화까지 했지만! 값이 null인 경우
    console.log(count2);

    if(count === undefined || count === null || count === 0 || count === "") {
        console.log(true);
    }

    count = 1;

    // 자바스크립트는 조건에서 값이 undefined, null, 0, "" 이면 false를 반환한다!
    // 조건자리의 !연산으로 boolean타입으로 값이 변화
    if(!count) {
        console.log("값이 없음");
    }
    if(!!count) {
        console.log("값이 있음");
    }
    

}





