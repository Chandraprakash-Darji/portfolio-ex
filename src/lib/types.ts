export type SocialNameType =
  | 'twitter'
  | 'github'
  | 'mail'
  | 'instagram'
  | 'linkedin';

// used for the icon to use
export type FileExtType = 'folder' | 'markdown';
export type Icon = null | FileExtType;
// Color that going to used for folder
export type FolderColorType = 'orange' | 'green' | 'purple';

// Base type for file and folder
export type BaseFileType = {
  name: string;
  icon: Icon;
};

// File type
export type FileType = BaseFileType & {
  href: string;
};

// Folder type
export type FolderType = BaseFileType & {
  color: FolderColorType;
  children: Array<FileType | FolderType>;
};

// Menu type
export type menuType = BaseFileType & {
  children: Array<FileType | FolderType>;
};
