/* @flow */

export type HeaderLinkType = {
  title: string,
  path: string,
};

export type TeamMemberFaceImageCollectionType = {
  center: string,
  top: string,
  topLeft: string,
  topRight: string,
  bottomLeft: string,
  bottomRight: string,
  bottom: string,
  left: string,
  right: string,
};

export type TeamMemberType = {
  image?: string,
  faceImageCollection: TeamMemberFaceImageCollectionType,
  firstName: string,
  lastName: string,
  position: string,
  text: string,
};

export type CardType = {
  link: string,
  image: string,
  title: string,
  text: string,
};

export type StartupCardType = {
  image: string,
  text: string,
  title: string,
};
