import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

export default function Navbar() {
  return (
    // sticky top-0 giúp menu đứng im khi kéo xuống
    <nav className="sticky top-0 z-50 bg-white shadow-md px-10 py-4 flex items-center justify-between">
      {/* 1. Logo */}
      <div className="font-bold text-2xl">
        <Link to="/">HPT STORE</Link>
      </div>

      {/* 2. Menu chính (Mega Menu) */}
      <ul className="flex space-x-8 font-medium">
        <li className="hover:text-blue-600 cursor-pointer">HÀNG MỚI</li>

        {/* Mục Sản phẩm có menu con */}
        <li className="group relative py-2">
          <Link to="/products" className="hover:text-blue-600">
            SẢN PHẨM
          </Link>
          {/* Menu sổ xuống khi hover */}
          <div className="absolute hidden group-hover:block bg-white shadow-lg p-4 w-48 top-full">
            <p className="hover:bg-gray-100 p-2">Áo Nam</p>
            <p className="hover:bg-gray-100 p-2">Quần Nam</p>
          </div>
        </li>

        <li className="hover:text-blue-600">BẢN TIN</li>
      </ul>

      {/* 3. Search & Icons */}
      <div className="flex items-center space-x-5">
        <div className="relative">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="border rounded-full px-4 py-1 focus:outline-none"
          />
          <SearchIcon className="absolute right-2 top-1 text-gray-500" />
        </div>
        <div className="flex gap-4">
          <Link to="../login"><PersonIcon />Đăng nhập</Link>
          <Link to="../register">Đăng ký</Link>
        </div>
        <div className="relative">
          <ShoppingCartIcon />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1.5">
            0
          </span>
        </div>
      </div>
    </nav>
  );
}
