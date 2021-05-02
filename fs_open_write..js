const fs = require('fs');

fs.open('./output.txt', 'w', (err, fd)=> { //w 플래그: 쓰기에 사용. 파일이 없으면 만들어지고 파일이 있은면 이전내용 모둣 삭제
    if(err) throw err;
    
    const buf = new Buffer.from('안녕!\n', 'utf8');
    fs.write(fd, buf, 0, buf.length, null, (err, written, buffer)=> {
        if (err) throw err;
        console.log(err,written,buffer);

        fs.close(fd,()=> {
            console.log('파일 열고 데이터 쓰고 파일 닫기 완료함');
        });
    });
});
