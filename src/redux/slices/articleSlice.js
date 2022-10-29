import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {
  Article,
  fetchArticles,
} from '../../services/articleservice/article.service';
import {searchArticleByKeyboard} from '../../services/articleservice/search.articles';

export const initialState = {
  result: [],
  searchArticles: [],
  error: '',
  loading: false,
  page: 0,
};
export const ArticleSlice = createSlice({
  name: 'articles',
  initialState: initialState,
  reducers: {
    searchArticle(state, action) {
      state.searchArticles = searchArticleByKeyboard(
        state.result,
        action.payload.text,
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(articles.pending, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(articles.fulfilled, (state, action) => {
        state.loading = false;
        state.result = [
          ...state.result,
          ...action.payload.result.response.docs,
        ];
        state.page = action.payload.page;
      })
      .addCase(articles.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
        state.searchArticles = [];
      });
  },
});
export const {searchArticle} = ArticleSlice.actions;
export const articles = createAsyncThunk('articles', async (page) => {
  const result = await fetchArticles(page);
  return {page, result: result.data};
});
