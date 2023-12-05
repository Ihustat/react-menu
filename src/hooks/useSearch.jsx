export function useSearch(
  setFilteredCatalog,
  catalog,
  navigate,
  pathname,
  search
) {
  function handleSearch(str) {
    setFilteredCatalog(
      catalog.filter((cat) =>
        cat.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );

    navigate({
      pathname,
      search: `?search=${str}`,
    });
  }

  function createFilteredCatalog() {
    const filteredCatalog = search
      ? catalog.filter((cat) =>
          cat.strCategory
            .toLowerCase()
            .includes(search.split('=')[1].toLowerCase())
        )
      : catalog;

    return filteredCatalog;
  }

  return { handleSearch, createFilteredCatalog };
}
