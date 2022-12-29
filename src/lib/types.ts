export type SocialNameType =
  | 'twitter'
  | 'github'
  | 'mail'
  | 'instagram'
  | 'linkedin';

// used for the icon to use
export type FileExtType = 'folder' | 'markdown';
export type IconType = null | FileExtType;
// Color that going to used for folder
export type FolderColorType = 'orange' | 'green' | 'purple';

// Base type for file and folder
export type BaseFileType = {
  name: string;
  icon: IconType;
};

// File type
export type FileType = BaseFileType & {
  href: string;
  color?: never;
  children?: never;
};

// Folder type
export type FolderType = BaseFileType & {
  href?: never;
  color: FolderColorType;
  children: Array<FileType | FolderType>;
};

// Menu type
export type menuType = BaseFileType & {
  href?: never;
  color?: never;
  children: Array<FileType | FolderType>;
};

// Presonal Info files
export type personalInfoFile =
  | 'basic.md'
  | 'contact.md'
  | 'interset.md'
  | 'education.md';
