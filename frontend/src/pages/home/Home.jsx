import Navbar from "../../components/Navbar";
import ChatBot from "../../components/ChatBot";

export default function Home() {
  return (
    <>
      <Navbar />
      <ChatBot />   {/* 👈 CHATBOT CHỈ Ở USER */}

      <div className="p-6">
        <h1 className="text-2xl font-bold">160 STORE</h1>
        <p>Trang bán hàng cho khách</p>
      </div>
    </>
  );
}
