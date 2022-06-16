import { STAFFS, DEPARTMENTS } from '../staffs'
function PhongBan(){
    
    function tinhSoLuong (ten){
        let soluongNhanVien = 0;
        STAFFS.map((item, index) => (
            (item.department.name) == ten ? ++soluongNhanVien : console.log(item.department.name - ten)
            
        ))
        return soluongNhanVien;
    }
    return(
        <div class="row">
           {
                DEPARTMENTS.map((item, index) => (
                    <div className=" col-sm-12 col-lg-4 col-md-6 " key={item}>

                        <div class="card">
                            <h1>{item.name}</h1>
                            <div class="soluongPhongBan">
                                <p>Số lượng {tinhSoLuong (item.name)}</p>
                            </div>
                        </div>                        
                    </div>
                    
                ))

            }
        </div>
    )
}
export default PhongBan;