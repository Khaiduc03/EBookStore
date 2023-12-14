import {useState, useEffect, useCallback} from 'react';
import {ToastAndroid} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../../../hooks';
import {ComicType, ComicActions} from '../../../../../redux';
import {
  getDataComicBySeacrh,
  getCurrentSearch,
  getNextSearch,
} from '../../../../../redux/selectors/comic.selector';
import {getIsLoadingTopic} from '../../../../../redux/selectors/loading.selector';
import {backScreen} from '../../../../../utils';
import useStyles from '../styles';

export const useSearch = () => {
  const dispatch = useAppDispatch();
  const dataBySearch = useAppSelector(getDataComicBySeacrh);
  const currentPage = useAppSelector(getCurrentSearch);
  const nextPage = useAppSelector(getNextSearch);
  const [numCols, setNumCols] = useState(3);
  const [hightView, setHightView] = useState(false);
  const [sizeContent, setSizeContent] = useState<number>(0);
  const [size, setSize] = useState<boolean>(false);
  const [lowView, setLowView] = useState(false);
  const [lowRate, setLowRate] = useState(false);
  const [highRate, setHighRate] = useState(false);

  const [filterArray, setFilterArray] = useState<string[]>([]);

  console.log('==========>fillter', filterArray);

  const [data, setData] = useState<ComicType[]>([]);

  const isLoading = useAppSelector(getIsLoadingTopic);

  const [search, setSearch] = useState('');

  const onSearchChange = (text: any) => {
    setSearch(text);
  };

  const handleListIconPress = () => {
    setNumCols(1);
  };
  const handleGridIconPress = () => {
    setNumCols(3);
  };

  const sortReduceDataByViews = (data: ComicType[]): ComicType[] => {
    return data.slice().sort((a, b) => b.views - a.views);
  };

  const sortIncreaseDataByViews = (data: ComicType[]): ComicType[] => {
    return data.slice().sort((a, b) => a.views - b.views);
  };

  const sortReduceDataByRate = (data: ComicType[]): ComicType[] => {
    return data.slice().sort((a, b) => b.rating - a.rating);
  };

  const sortIncreaseDataByRate = (data: ComicType[]): ComicType[] => {
    return data.slice().sort((a, b) => a.rating - b.rating);
  };

  useEffect(() => {
    if (dataBySearch) {
      let filteredData = [...dataBySearch];
      if (filterArray.includes('All')) {
        setData(filteredData);
        ToastAndroid.show(
          'Successful comic by fillter !!!!',
          ToastAndroid.SHORT,
        );
        return;
      }

      if (filterArray.length > 0) {
        filteredData = filteredData.filter(item => {
          return filterArray.some(topic => item.topics.includes(topic));
        });
      }
      if (hightView) {
        filteredData = sortReduceDataByViews(filteredData);
      } else if (lowView) {
        filteredData = sortIncreaseDataByViews(filteredData);
      }

      if (highRate) {
        filteredData = sortReduceDataByRate(filteredData);
      } else if (lowRate) {
        filteredData = sortIncreaseDataByRate(filteredData);
      }

      setData(filteredData);
    }
  }, [dataBySearch, hightView, lowView, filterArray, highRate, lowRate]);

  const onPressSearch = () => {
    setFilterArray([]), setHightView(false);
    setLowView(false);
    dispatch(ComicActions.ClearListBySearch());
    dispatch(ComicActions.getListBySearch({key: search, page: 1}));
  };

  const loadMoreComic = () => {
    if (search && nextPage && !isLoading) {
      dispatch(
        ComicActions.getListBySearch({
          key: search,
          page: currentPage && currentPage + 1,
        }),
      );
      setSize(true);
    }
  };
  const onPressBackIcon = () => {
    dispatch(ComicActions.ClearListBySearch());
    backScreen();
  };

  const onContentSizeChange = useCallback(
    (contentWidth: number, contentHeight: number) => {
      setSizeContent(contentHeight);
      if (size) {
        setSizeContent(sizeContent + 3000);
        setSize(false);
      }
    },
    [size, sizeContent],
  );

  return {
    onContentSizeChange,
    onPressBackIcon,
    dataBySearch,
    currentPage,
    nextPage,
    numCols,
    setNumCols,
    hightView,
    setHightView,
    size,
    setSearch,
    data,
    setData,
    onSearchChange,
    isLoading,
    handleGridIconPress,
    sortIncreaseDataByViews,
    sortReduceDataByViews,
    onPressSearch,
    loadMoreComic,
    handleListIconPress,
    search,
    setLowView,
    setFilterArray,
    sizeContent,
    highRate,
    setHighRate,
    lowRate,
    setLowRate,
  };
};
