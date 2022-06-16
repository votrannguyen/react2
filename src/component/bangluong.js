import { STAFFS, DEPARTMENTS } from '../staffs'
function BangLuong(){
    return(
        <div class="row">
           {
                STAFFS.map((item, index) => (
                    <div className=" col-sm-12 col-lg-4 col-md-6 " key={item}>

                        <div class="card">
                            <h1>{item.name}</h1>
                            <div class="soluongPhongBan">
                                <div>Mã nhân viên : {item.id}</div>
                                <div>Hệ số lương : {item.salaryScale}</div>
                                <div>Số ngày làm thêm : {item.overTime}</div>
                                <div>Số luong : {(item.salaryScale * 3000000 + item.overTime * 200000).toFixed()}</div>
                            </div>
                        </div>                        
                    </div>
                    
                ))

            }
        </div>
    )
}
export default BangLuong;