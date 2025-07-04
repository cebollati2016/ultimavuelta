const getByPath = (arr, path) => {
  return path.reduce((acc, i) => acc[i]?.sections || [], arr);
};

export const addSection = (oldSections, path, id) => {
  const newSection = {
    id,
    title: "Nueva Sección",
  };
  const newSections = JSON.parse(JSON.stringify(oldSections));
  if (path.length === 0) {
    newSections.push(newSection);
    return newSections;
  }
  const parent = getByPath(newSections, path.slice(0, -1));
  const index = path[path.length - 1];
  parent[index].sections = parent[index].sections || [];
  parent[index].sections.push(newSection);
  return newSections;
};

export const deleteSection = (oldSections, path) => {
  const newSections = JSON.parse(JSON.stringify(oldSections));
  if (path.length === 0) {
    newSections.splice(path[0], 1);
    return newSections;
  }
  const parentPath = path.slice(0, -1);
  const parent = getByPath(newSections, parentPath);
  parent.splice(path[path.length - 1], 1);
  let parentId;
  if (parent.length === 0) {
    const grandParent = getByPath(newSections, parentPath.slice(0, -1));
    const parentIndex = parentPath[parentPath.length - 1];
    if (parentIndex !== undefined) {
      parentId = grandParent[parentIndex].id;
      delete grandParent[parentIndex].sections;
    }
  }
  return newSections;
};

export const changeTitleSection = (oldSections, path, newTitle) => {
  const newSections = JSON.parse(JSON.stringify(oldSections));
  let node = newSections;
  for (let i = 0; i < path.length - 1; i++) {
    node = node[path[i]].sections;
  }
  node[path[path.length - 1]].title = newTitle;
  return newSections;
};
