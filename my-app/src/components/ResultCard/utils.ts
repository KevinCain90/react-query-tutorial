export const getByTextWithMarkup = (text: string, getByMatcher: any) => {
  getByMatcher((_: unknown, node: Element) => {
    const hasText = (nodeElement: Element) =>
      nodeElement.textContent?.includes(text) as boolean;
    const childrenDontHaveText = Array.from(node.children).every(
      (child) => !hasText(child as HTMLElement)
    );

    return hasText(node as HTMLElement) && childrenDontHaveText;
  });
};