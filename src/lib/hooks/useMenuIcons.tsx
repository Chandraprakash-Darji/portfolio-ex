import { ReactElement } from 'react';

import { FileExtType } from '@/lib/types';

import { MarkdownIcon } from '@/Icons/sidebar/menu';
import FolderIcon from '@/Icons/sidebar/menu/FolderIcon';

const useMenuIcons = (): Record<FileExtType, ReactElement> => {
  return {
    folder: <FolderIcon />,
    markdown: <MarkdownIcon />,
  };
};

export default useMenuIcons;
