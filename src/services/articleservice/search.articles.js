export const searchArticleByKeyboard = (result, text) => {
  try {
    return result.filter(item => {
      return item.headline.main.toLowerCase().indexOf(text.toLowerCase()) > -1;
    });
  } catch {
    return [];
  }
};
