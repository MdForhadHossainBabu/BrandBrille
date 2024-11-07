/* eslint-disable no-irregular-whitespace */
import sun from '/public/sun.svg';
import Button from './Button';

export const Kdme = () => {
  return (
    <div className="flex flex-col lg:m-6 lg:px-12">
      <div className="bg-[#EBCEB5] hover:bg-[#000] duration-700 rounded-lg hover:text-white/70 lg:px-6 py-16 space-y-4">
        <div className="flex items-center gap-2">
          <span>
            <img
              className="w-12"
              src={sun}
              alt=""
              style={{
                transition: 'filter 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'brightness(0) invert(1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'none';
              }}
            />
          </span>
          <h1 className="uppercase text-6xl">/Kdo jsme??</h1>
        </div>
        <p className="tracking-wide">
          Jsme <strong>komorní komunikační agentura</strong> zaměřující se
          zejména na <strong>brand strategy</strong> a{' '}
          <strong>content marketing</strong>. Při naší práci propojujeme reálné
          prožité profesní zkušenosti, které jsme nabyli na klientské i
          agenturní straně, v mezinárodních renomovaných firmách i progresivních
          start-upech, s neustálou touhou naslouchat novým marketingovým
          trendům. Právě to nám pomáhá vytvářet chytrý, jiskrný a unikátní hlas
          vaší značky.
        </p>
        <div className="flex items-center justify-end">
          <Button />
        </div>
      </div>
    </div>
  );
};
