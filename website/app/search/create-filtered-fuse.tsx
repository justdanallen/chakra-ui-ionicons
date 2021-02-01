import Fuse from 'fuse.js';

export function createFilteredFuse<T = unknown>(
  list: T[],
  options?: Fuse.IFuseOptions<T>
) {
  const fuse = new Fuse(list, options);

  const defaultList = list.map(
    (doc, idx) =>
      ({
        item: doc,
        score: 1,
        refIndex: idx,
      } as Fuse.FuseResult<T>)
  );

  const search = (query: string) => {
    const results = fuse.search<T>(query);
    return {
      isDefault: !!results.length,
      numFound: results.length,
      results: results.length ? results : defaultList,
    };
  };

  return search;
}
