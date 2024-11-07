import logo from '/public/logo.svg';
import linkedin from '/public/linkedin.svg';
import instagram from '/public/instagram.svg';

export const Footer = () => {
  return (
    <div className="bg-black text-white lg:pl-52 pl-24 lg:pr-36 pr-16 py-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-0">
          <img className="w-52" src={logo} alt="logo" />
          <h6 className="text-[16px]">Sharp Minds, Sparking Ideas</h6>
        </div>
        <div>
          <ul className="flex items-center gap-4">
            <li>O nás</li>
            <li>Naše služby</li>
            <li>Naši klienti</li>
            <li>Naše služby</li>
            <li>Kontakt</li>
          </ul>
        </div>
      </div>
      <div className="border-b border-b-[#EBCEB5] w-full py-2" />

      {/* social */}
      <div className="flex items-center justify-between pt-4">
        <div className="flex items-center gap-3">
          <span className=" p-1 rounded-full bg-[#232323]">
            <img src={linkedin} alt="" />
          </span>
          <span className=" p-1 rounded-full bg-[#232323]">
            <img src={instagram} alt="" />
          </span>
          <h6 className="flex items-center gap-1">
            Implement by
            <a href="#" className="underline">
              Bayzid
            </a>
          </h6>
        </div>
        <div>
          <h6>2024, BrandBrillé, Všechna práva vyhrazena</h6>
        </div>
        <div>
          <h6>Zásady ochrany osobních údajů</h6>
        </div>
      </div>
    </div>
  );
};
