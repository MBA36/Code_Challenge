import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {articles, searchArticle} from '../../../redux/slices/articleSlice';
import {useAppSelector} from '../../../redux/slices/store';
import {styles} from './news-styles';
import SearchInput from '../../../components/atoms/search-input/search-input';
import NewsList from '../../../components/molecules/newslist/newsList';
import {useDebounce} from 'use-debounce';
const News = () => {
  const dispatch = useDispatch();
  const {result, searchArticles, page} = useAppSelector(
    state => state.articles,
  );
  const [search, setSearchInput] = useState('');
  const [debounce] = useDebounce(search, 1000);

  useEffect(() => {
    dispatch(articles(0));
  }, []);

  const loadMore = () => {
    dispatch(articles(page + 1));
  };

  const onSearch = (text) => {
    setSearchInput(text);
  };

  useEffect(() => {
    dispatch(searchArticle({text: debounce}));
  }, [debounce]);
  
  return (
    <>
      <SearchInput
        value={search}
        onChangeText={onSearch}
        placeholder="Enter your email"
        clearButtonMode="always"
      />
      <View style={styles.mainView}>
        <FlatList
          style={{flex: 1}}
          data={search ? searchArticles : result}
          keyExtractor={(_item, index) => index.toString()}
          renderItem={({item}) => (
            <NewsList title={item?.headline?.main} body={item?.abstract} />
          )}
          onEndReached={loadMore}
          onEndReachedThreshold={0.9}
        />
      </View>
    </>
  );
};
export default News;
