export const isParent = (pages, index) => {
  if (!isChild(pages[index]) && isChild(pages[index + 1])) {
    return true
  }
  return false
}

export const isChild = (page) => {
  if (page && page.link.split('/').length > 2) {
    return true
  }
  return false
}