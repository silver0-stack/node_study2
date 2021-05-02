//버퍼 객체를 크기만 지정하여 만든 후 문자열을 씁니다
const output='안녕1';
const buffer1=new Buffer.alloc(10);  //선 버퍼 크기 할당
const len=buffer1.write(output,'utf8');//후 문자열 write
console.log('첫번째 버퍼의 문자열:%s', buffer1.toString()); // %s - string 문자열 반환

//버퍼객체를 문자열을 이용해 만듭니다.
const buffer2=new Buffer.from('안녕2','utf8');
console.log('두번째 버퍼의 문자열 :%s',buffer2.toString());

//타입 확인
console.log('버퍼 객체의 타입: %s',Buffer.isBuffer(buffer1)); //변수에 들어있는 것이 버퍼객체인지 아닌지 확인할 떄 isBuffer()사용

//버퍼객체에 들어있는 문자열 데이터를 문자열 변수로
const byteLen=Buffer.byteLength(output);
const str1=buffer1.toString('utf8',0,byteLen);
const str2=buffer2.toString('utf8');

//첫번째 버퍼 객체의 문자열을 두번째 버퍼 객체로 복사
buffer1.copy(buffer2,0,0,len);
console.log('두번째 버퍼에 복사한 후의 문자열:%s',buffer2.toString('utf8'));

//두개의 버퍼를 붙여준다
const buffer3=Buffer.concat([buffer1,buffer2]); //concatenation '연결'
console.log('두개의 버퍼를 붙인후의 문자열:%s',buffer3.toString('utf8'));