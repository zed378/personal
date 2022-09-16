import logo from "../../assets/img/logo.svg";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  let navigate = useNavigate();

  return (
    <div className="w-full h-[4rem] px-10 flex justify-between bg-[#2C3639] items-center">
      <div
        className="cursor-pointer flex gap-3 items-center text-white hover:underline"
        onClick={() => navigate("/")}
      >
        <img src={logo} alt={logo} className="w-[2rem]" />
        <h1 className="text-xl font-black">Muhammad Zawawi</h1>
      </div>
      <div className="flex gap-5 items-center">
        <h1
          className="text-white cursor-pointer font-black hover:text-cyan-400"
          onClick={() => navigate("/")}
        >
          Home
        </h1>
        <h1
          className="text-white cursor-pointer font-black hover:text-cyan-400"
          onClick={() => navigate("/")}
        >
          Portofolio
        </h1>
        <h1
          className="text-white cursor-pointer font-black hover:text-cyan-400"
          onClick={() => navigate("/")}
        >
          Contact
        </h1>
      </div>
    </div>
  );
}
