import Image from "next/image";
import { MdOutlineWhatsapp } from "react-icons/md";
import { CiCalculator1 } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";



const Navbar = () => {
  return (
    <div className="flex items-stretch justify-between gap-5 max-md:flex-wrap">
      <div className="flex items-stretch justify-between gap-5 px-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/39c9315d2ddfd11a5e99fd03426a9617453374977ca692294566539b801904fa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/39c9315d2ddfd11a5e99fd03426a9617453374977ca692294566539b801904fa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/39c9315d2ddfd11a5e99fd03426a9617453374977ca692294566539b801904fa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/39c9315d2ddfd11a5e99fd03426a9617453374977ca692294566539b801904fa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/39c9315d2ddfd11a5e99fd03426a9617453374977ca692294566539b801904fa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/39c9315d2ddfd11a5e99fd03426a9617453374977ca692294566539b801904fa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/39c9315d2ddfd11a5e99fd03426a9617453374977ca692294566539b801904fa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/39c9315d2ddfd11a5e99fd03426a9617453374977ca692294566539b801904fa?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&"
          className="aspect-[1.04] object-contain object-center w-[55px] overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-zinc-50 text-3xl font-extrabold leading-10 grow shrink basis-auto my-auto">
          Hulk Cars
        </div>
      </div>
      <div className="flex justify-between gap-5 self-start items-start max-md:max-w-full max-md:flex-wrap">
        <div className="items-stretch flex justify-between gap-5 px-5">
          <div className="text-zinc-50 text-base font-semibold leading-6 whitespace-nowrap justify-center items-stretch border border-[color:var(--Dark-Stroke,#424242)] px-6 py-3 rounded-[51px] border-solid max-md:px-5">
            Mint NFT
          </div>
          <div className="text-zinc-500 text-base font-semibold leading-6 my-auto">
            Dashboard
          </div>
        </div>
        <div className="justify-end items-stretch flex gap-3 max-md:max-w-full max-md:flex-wrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3cb1aebb1de66a1ab60ce5d64cbd6e89da861ed1822ce0d975c09b884925440?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&"
            className="aspect-[2.04] object-contain object-center w-[85px] overflow-hidden shrink-0 max-w-full my-auto"
          />
          <div className="justify-end items-center flex gap-1.5 px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3304ccba81d19370183f78a23442ea6be02f520d30ba1ce2dd7598941b95cf86?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&"
              className="aspect-square object-contain object-center w-11 overflow-hidden self-stretch shrink-0 max-w-full my-auto"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ac508b25fb9e98a12ab37b37daf72a0695b4d7590548f786316e59d9fcdd823?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&"
              className="aspect-square object-contain object-center w-11 overflow-hidden self-stretch shrink-0 max-w-full my-auto"
            />
            <div className="justify-between items-stretch bg-zinc-50 self-stretch flex gap-2 px-6 py-3 rounded-[51px] max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1550055fbae609e16280a87fd2fbd1f6cb68ac608377c54f7130fc7da0b651f?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-neutral-900 text-base font-medium leading-6 grow whitespace-nowrap self-start">
                Connect Wallet
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3e8dd4c15a002b04d48698f43f15bf907ed7f5cba7628003beb1283e321f8f8?apiKey=386f6655ee2e4fd59eb38f1897c7f7b2&"
              className="aspect-square object-contain object-center w-11 overflow-hidden self-stretch shrink-0 max-w-full my-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
