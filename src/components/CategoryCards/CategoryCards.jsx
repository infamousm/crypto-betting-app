import clsx from "clsx";
import { Link } from "react-router-dom";

const items = [
  {
    bg: "/assets/imgs/contest/contest-2.png",
    label: "ROULETTE",
    to: "/roulette",
  },
  {
    bg: "/assets/imgs/contest/contest-6.png",
    label: "COIN FLIP",
    to: "/coinflip",
  },
  {
    bg: "/assets/imgs/contest/contest-5.png",
    label: "DICE",
    to: "/dice",
  },
  {
    bg: "/assets/imgs/contest/contest-1.png",
    label: "ROCK PAPER SCRISSORS",
    to: "/rock-paper-scissor",
  },
  {
    bg: "/assets/imgs/contest/contest-4.png",
    label: "SLOTS",
    to: "/",
  },
  {
    bg: "/assets/imgs/contest/contest-7.png",
    label: "BACCARAT",
    to: "/",
  },
  {
    bg: "/assets/imgs/contest/contest-3.png",
    label: "HORSE RACING",
    to: "/",
  },
  {
    bg: "/assets/imgs/contest/contest-8.png",
    label: "PLINKO",
    to: "/",
  },
];

const CategoryCards = ({ className }) => {
  return (
    <div
      className={clsx(
        className,
        "grid grid-cols-gamesGrid 2x:grid-cols-6 gap-6"
      )}
    >
      {items.map((el, idx) => {
        return (
          <Link
            key={"category-card-item-" + idx}
            to={el.to}
            className="block rounded-2xl relative overflow-hidden h-[210px]"
          >
            <img
              className="absolute left-0 top-0 w-full h-full object-cover"
              src={el.bg}
              alt={el.label}
            />
            <div className="relative py-4 px-6">
              <div className="font-bison">
                {el.label}
                {el.to === '/' && (
                  <>
                  <br/><br/>
                  <h2 className="text-[#E7100E]">Coming soon</h2>
                  </>
                )}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryCards;
