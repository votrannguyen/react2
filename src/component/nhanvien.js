import { STAFFS, DEPARTMENTS } from '../staffs'
import HienThiNhanVien from './hienthinhanvien';
import dateFormat from 'dateformat';
import { NavLink } from 'react-router-dom'
function NhanVien() {
    return (
        <div class="row">
            {
                STAFFS.map((item, index) => (
                    <div className=" col-sm-6 col-lg-2 col-md-4 " key={item}>

                        <NavLink to={`/nhanvien/${item.id}`}>
                        <div class="card"  >
                            <p className='img'></p>
                            <p className='text'>{item.name}</p>
                        </div>
                        </NavLink>
                        
                    </div>
                    
                ))

            }
        </div>
        
    )
}
export default NhanVien;