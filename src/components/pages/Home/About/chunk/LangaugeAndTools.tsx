import { FC } from 'react';
import { ToolIcon } from '..';
import AppIcons from '../../../../../lib/data/AppIcons';
import Heading3 from '../../../../widget/Headings/Heading3';

const LangaugeAndTools: FC = () => {
  return (
    <div className="flex-1 select-none p-3 ">
      <Heading3>
        {' '}
        Langauge and
        <span className="text-primary"> Tools</span>{' '}
      </Heading3>

      <div className="mt-5 p-3 pl-0">
        <ul className="flex flex-wrap justify-center gap-12 md:gap-7">
          {AppIcons.map(({ key, path, name }) => (
            <ToolIcon key={key} path={path} name={name} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default LangaugeAndTools;
