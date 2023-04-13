/* eslint-disable no-console */
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import Seo from '@/components/Seo';

type Colors = 'white' | 'black' | null;
type Position = {
  color: Colors;
  i: number;
  j: number;
};

type PlayerPlayingType = 'white' | 'black';

type PositionState = Array<Array<Position>>;

export default function CheckersPage() {
  const [coinPosition, setCoinPosition] = React.useState<PositionState>(
    Array.from({ length: 9 }, (_, i) =>
      Array.from({ length: 9 }, (_, j) => {
        let color: Colors = null;
        if (i < 2) color = 'white';
        else if (i >= 7) color = 'black';
        return {
          color,
          i,
          j,
        };
      })
    )
  );

  const [playerPlaying, setPlayerPlaying] =
    React.useState<PlayerPlayingType>('white');

  const [selectedPos, setSelectedPos] = React.useState<Position | null>(null);

  const secondClick = ({ i, j, color }: Position) => {
    // console.log({ i, j, color });
    if (!selectedPos) return;
    if (color) return;
    if (selectedPos.i === i || selectedPos.j === j) {
      setCoinPosition((p) =>
        p.map((row) =>
          row.map((box) => {
            if (selectedPos.i === box.i) {
              console.log(Math.abs(selectedPos.i - i));
            }
            if (box.i === i && box.j === j) box.color = playerPlaying;
            if (box.i === selectedPos.i && box.j === selectedPos.j)
              box.color = null;
            return box;
          })
        )
      );
      setSelectedPos(null);
      setPlayerPlaying((p) => (p === 'white' ? 'black' : 'white'));
    } else {
      console.log(
        '---------------------\nYou can go vertical and horizonta only\n---------------------'
      );
    }
  };

  const firstClick = ({ i, j, color }: Position) => {
    if (selectedPos && selectedPos.color) {
      secondClick({ i, j, color });
      return;
    } else if (selectedPos == null && !(color !== null)) {
      console.log(
        '---------------------\nSelect Valid Coin\n---------------------'
      );
    }
    if (color === playerPlaying) setSelectedPos({ i, j, color });
    else if (color !== null)
      console.log(
        '###################\nIt is not your chance\n###################'
      );
  };

  const onCLickPosition = ({ i, j, color }: Position) => {
    firstClick({ i, j, color });
  };

  const reset = () => {
    setCoinPosition(
      Array.from({ length: 9 }, (_, i) =>
        Array.from({ length: 9 }, (_, j) => {
          let color: Colors = null;
          if (i < 2) color = 'white';
          else if (i >= 7) color = 'black';
          return {
            color,
            i,
            j,
          };
        })
      )
    );
    setSelectedPos({
      i: 1,
      j: 4,
      color: 'white',
    });
    setPlayerPlaying('white');
  };
  return (
    <>
      <Seo templateTitle='Checkers' />

      <section className='flex min-h-[20rem] select-none flex-col items-center justify-center gap-10 py-24'>
        <div className='grid grid-cols-[repeat(9,5rem)] gap-1'>
          {coinPosition.map((row, i) =>
            row.map((box, j) => (
              <div
                className={clsxm(
                  'relative flex aspect-square w-full items-center justify-center rounded-md bg-white/10',
                  selectedPos?.i === i &&
                    selectedPos?.j === j &&
                    'bg-violet-400 text-black'
                )}
                key={`${i}${j}`}
                onClick={() => onCLickPosition(box)}
              >
                <span className='absolute top-0 left-0'>
                  {i},{j}
                </span>
                <div
                  className={clsxm(
                    'h-10 w-10 rounded-full',
                    box.color === 'white'
                      ? 'bg-white'
                      : box.color === 'black'
                      ? 'bg-black'
                      : 'bg-transparent'
                  )}
                />
              </div>
            ))
          )}
        </div>
        <div>
          <button onClick={reset}>reset</button> {playerPlaying}
        </div>
      </section>
    </>
  );
}
