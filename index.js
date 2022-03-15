// (((a +b) /m *n )+ 8 ) *k
// phép tính cộng: mất 3s
// phép tinh nhân: mất 2s
// phép tính chia: mất 4s
ketqua(1,1,1,1,1)
function ketqua(a,b,m,n,k) {
    cong(a,b, (dtTong) => {
        chia(dtTong, m, (dtChia) => {
            nhan(dtChia, n, (dtNhan) => {
                cong(dtNhan, 8, (dtCong) => {
                    nhan(dtCong, k, (final) => {
                        console.log("final result", final);
                    })
                })
            })
        })
    })
}

function cong(a,b, cb) {
    console.log("bắt đầu cộng");
    setTimeout(() => {
        let tong = a+b
        console.log("kq cong: ", tong);
        cb(tong)
    }, 3000);
}
function nhan(a,b, cb) {
    console.log("bắt đầu nhân");
    setTimeout(() => {
        let nhan = a*b
        console.log("kq nhan: ", nhan);
        cb(nhan)
    }, 2000);
}
function chia(a,b, cb) {
    console.log("bắt đầu chia");
    setTimeout(() => {
        let chia = a/b
        console.log("kq chia: ", chia);
        cb(chia)
    }, 4000);
}


