export default function Loading() {
  const m: number = 0.5122866232566;

  function buildWave(w: number, h: number): string {
    const a = h / 4;
    const y = h / 2;

    const pathData = [
      "M",
      w * 0,
      y + a / 2,
      "c",
      a * m,
      0,
      -(1 - a) * m,
      -a,
      a,
      -a,
      "s",
      -(1 - a) * m,
      a,
      a,
      a,
      "s",
      -(1 - a) * m,
      -a,
      a,
      -a,
      "s",
      -(1 - a) * m,
      a,
      a,
      a,
      "s",
      -(1 - a) * m,
      -a,
      a,
      -a,

      "s",
      -(1 - a) * m,
      a,
      a,
      a,
      "s",
      -(1 - a) * m,
      -a,
      a,
      -a,
      "s",
      -(1 - a) * m,
      a,
      a,
      a,
      "s",
      -(1 - a) * m,
      -a,
      a,
      -a,
      "s",
      -(1 - a) * m,
      a,
      a,
      a,
      "s",
      -(1 - a) * m,
      -a,
      a,
      -a,
      "s",
      -(1 - a) * m,
      a,
      a,
      a,
      "s",
      -(1 - a) * m,
      -a,
      a,
      -a,
      "s",
      -(1 - a) * m,
      a,
      a,
      a,
      "s",
      -(1 - a) * m,
      -a,
      a,
      -a,
    ].join(" ");

    return pathData;
  }

  return (
    <div className="w-full h-full flex">
      <div className="flex items-center border-4 border-zinc-950 h-28 w-28 m-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80px"
          height="60px"
          viewBox="5 0 80 60"
          className="m-auto overflow-hidden"
        >
          <path
            id="wave"
            fill="none"
            stroke="#262626"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="0 16 101 16"
            d={buildWave(90, 60)}
          ></path>
        </svg>
      </div>
    </div>
  );
}
