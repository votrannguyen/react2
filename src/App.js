import logo from './logo.svg';
import './App.css';
import Nav from './view/nav';
import NhanVien from './component/nhanvien';
import BangLuong from './component/bangluong';
import PhongBan from './component/phongban';
import HienThiNhanVien from './component/hienthinhanvien';
import {BrowserRouter,Switch,Route,Link,Routes} from 'react-router-dom'
import Footer from './view/footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
        <Route exact path="/" element={<NhanVien />} />
          <Route exact path="/nhanvien" element={<NhanVien />} />
          <Route path="/bangluong" element={<BangLuong />} />
          <Route path="/phongban" element={<PhongBan />} />
          <Route path="/nhanvien/:nhanvienId" element={<HienThiNhanVien />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
