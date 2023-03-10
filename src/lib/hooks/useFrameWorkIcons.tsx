import { ReactElement } from 'react';
import { BsFiletypeScss } from 'react-icons/bs';
import { DiCss3Full, DiReact } from 'react-icons/di';
import {
  TbBrandFirebase,
  TbBrandFlutter,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandTypescript,
  TbBrandVite,
} from 'react-icons/tb';
import { TfiHtml5 } from 'react-icons/tfi';

import { FrameworkType } from '@/lib/types';
const useFrameWorkIcons = (): Record<FrameworkType, ReactElement> => {
  return {
    react: <DiReact />,
    next: <TbBrandNextjs />,
    flutter: <TbBrandFlutter />,
    tailwind: <TbBrandTailwind />,
    typescript: <TbBrandTypescript />,
    scss: <BsFiletypeScss />,
    css: <DiCss3Full />,
    html: <TfiHtml5 />,
    javascript: <TbBrandJavascript />,
    firebase: <TbBrandFirebase />,
    vite: <TbBrandVite />,
  };
};

export default useFrameWorkIcons;
