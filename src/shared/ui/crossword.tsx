import { CSSProperties, FC } from "react";
import { calcGridSize } from "../utils/calcGridSize";

type CrosswordProps = {
  data: Problem.Questions;
};

export const Crossword: FC<CrosswordProps> = ({ data }) => {
  const gridSize = calcGridSize(data);

  const style = {
    gridTemplateColumns: `repeat(${gridSize.x},fit-content(64px))`,
    gridTemplateRows: `repeat(${gridSize.y},fit-content(64px))`,
  } satisfies CSSProperties;

  const tileMap = new Map<
    string,
    {
      char: string;
      rowLabel?: number;
      columnLabel?: number;
    }
  >();

  for (let i = 0; i < data.row.length; i++) {
    const question = data.row[i]
    const { x, y } = question.position;
    for (let j = 0; j < question.charactersCount; j++) {
      const key = `${x + j}-${y}`;
      if (!tileMap.get(key)?.rowLabel) {
        tileMap.set(key, {
          char: question.answer?.[j] || "",
          rowLabel: j === 0 ? i + 1 : undefined,
        });
      }
    }
  }

  for (let i = 0; i < data.column.length; i++) {
    const question = data.column[i]
    const { x, y } = question.position;
    for (let j = 0; j < question.charactersCount; j++) {
      const key = `${x}-${y + j}`;
      if (!tileMap.get(key)?.columnLabel) {
        tileMap.set(key, {
          char: question.answer?.[j] || "",
          columnLabel: j === 0 ? i + 1 : undefined,
        });
      }
    }
  }

  return (
    <div className="w-full p-16 flex items-center justify-center bg-our-light-blue rounded-3xl">
      <div style={style} className="grid">
        {[...tileMap.entries()].map(([strPos, { char, rowLabel, columnLabel }]) => {
          const unprocessedPos = strPos.split("-");
          const x = Number(unprocessedPos[0]);
          const y = Number(unprocessedPos[1]);
          return (
            <div
              key={strPos}
              className="aspect-square relative border border-our-gray bg-our-white -m-[0.5px]"
              style={{
                gridColumnStart: x + 1,
                gridColumnEnd: x + 1,
                gridRow: y + 1,
                gridRowEnd: y + 1,
              }}
            >
              {rowLabel && (
                <svg
                  className="absolute w-8 h-5 top-1/2 -left-8 -translate-y-1/2"
                  viewBox="0 0 20 20"
                >
                  <text
                    className="uppercase font-bold text-[18px] fill-our-blue"
                    textAnchor="middle"
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                  >
                    {rowLabel}
                  </text>
                </svg>
              )}
              {columnLabel && (
                <svg
                  className="absolute w-5 h-5 -top-5 left-1/2 -translate-x-1/2"
                  viewBox="0 0 20 20"
                >
                  <text
                    className="uppercase font-bold text-[18px] fill-our-blue"
                    textAnchor="middle"
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                  >
                    {columnLabel}
                  </text>
                </svg>
              )}
              <svg className="w-full h-full" viewBox="0 0 48 48">
                <text
                  className="uppercase font-bold text-[18px]"
                  textAnchor="middle"
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                >
                  {char}
                </text>
              </svg>
            </div>
          );
        })}
      </div>
    </div>
  );
};
