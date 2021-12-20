export interface metaTags {
  title: string;
  description: string;
}

export const metaData: Record<string, metaTags> = {
  default: {
    title: 'Home — Angular Boilerplate',
    description: 'lorem ipsum',
  },
  test: {
    title: 'Test — Angular Boilerplate',
    description: 'lorem ipsum',
  },
};
