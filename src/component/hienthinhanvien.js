import React from 'react';
import { STAFFS, DEPARTMENTS } from '../staffs'
import {useParams} from 'react-router-dom';
import dateFormat from 'dateformat';

function HienThiNhanVien(prop){
    const params = useParams();
    React.useEffect(()=>{
        console.log("Params",params)
    },[params])
    function isNhanVien(item){
        return item.id == params.nhanvienId;
    }
    const nhanvien = STAFFS.find(isNhanVien);
    console.log(nhanvien);
    return(
        <div>
            <p>Nhân viên / {nhanvien.name}</p>
            <div class="row">
            
            <div className="col-sm-12 col-lg-3 col-md-4 imgNhanvien" key={nhanvien}>
            
            </div>
            <div className=" col-sm-12 col-lg-9 col-md-8 textNhanvien" key={nhanvien}>
            <p><b>Họ và tên :</b>{nhanvien.name}</p>
            <p>Ngày sinh :{ dateFormat(nhanvien.doB, "dd/mm/yyyy")}</p>
            <p>Ngày vào công ty: { dateFormat(nhanvien.startDate, "dd/mm/yyyy")}</p>
            <p>Phòng ban :{nhanvien.department.name}</p>
            <p>Số ngày nghỉ còn lại: {nhanvien.annualLeave}</p>
            <p>Số ngày đã làm thêm :{nhanvien.overTime}</p>
            </div>
            
        </div>
        </div>
        
    )
}
export default HienThiNhanVien;