import { NavLink } from 'react-router-dom'
function Nav() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to="/" activeClassName="active" className={"navbar-brand"} exact={true}>
                Navbar
            </NavLink>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <NavLink to="/nhanvien" activeClassName="active" className={"nav-link"} exact={true}>
                            Nhân Viên
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/bangluong" activeClassName="active" className={"nav-link"}>
                            Bảng Lương
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/phongban" activeClassName="active" className={"nav-link"}>
                            Phòng Ban
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>

    )
}
export default Nav;