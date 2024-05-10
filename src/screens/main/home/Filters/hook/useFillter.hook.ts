import {useState} from 'react';
import {routes} from '../../../../../constants';
import {NavigationService} from '../../../../../navigation';

export const useFillter = () => {
  // Top Menu Filters
  const [isAllSelected, setAllSelected] = useState(true);
  const [isSortSelected, setSortSelected] = useState(false);
  const [isPriceSelected, setPriceSelected] = useState(false);
  const [isRatingSelected, setRatingSelected] = useState(false);
  const [isGenreSelected, setGenreSelected] = useState(false);

  // Show menu Selected Filters
  const [showAllSelected, setShowAllSelected] = useState(true);
  const [showSortSelected, setShowSortSelected] = useState(false);
  const [showRatingSelected, setShowRatingSelected] = useState(false);
  const [showGenreSelected, setShowGenreSelected] = useState(false);

  // Sort
  const [isCbSelected1, setCbSelected1] = useState(true);
  const [isCbSelected2, setCbSelected2] = useState(false);
  const [isCbSelected3, setCbSelected3] = useState(false);
  const [isCbSelected4, setCbSelected4] = useState(false);
  const [isCbSelected5, setCbSelected5] = useState(false);
  const [isCbSelected6, setCbSelected6] = useState(false);

  // Rating
  const [isCbSelected9, setCbSelected9] = useState(true);
  const [isCbSelected10, setCbSelected10] = useState(false);
  const [isCbSelected11, setCbSelected11] = useState(false);

  // Genre
  const [isCbSelected12, setCbSelected12] = useState(false);
  const [isCbSelected13, setCbSelected13] = useState(false);
  const [isCbSelected14, setCbSelected14] = useState(false);
  const [isCbSelected15, setCbSelected15] = useState(false);
  const [isCbSelected16, setCbSelected16] = useState(false);
  const [isCbSelected17, setCbSelected17] = useState(false);
  const [isCbSelected18, setCbSelected18] = useState(false);
  const [isCbSelected19, setCbSelected19] = useState(false);
  const [isCbSelected20, setCbSelected20] = useState(false);
  const [isCbSelected21, setCbSelected21] = useState(false);
  const [isCbSelected22, setCbSelected22] = useState(false);
  const [isCbSelected23, setCbSelected23] = useState(false);

  const [topcis, setTopics] = useState<string[]>([]);

  const handleTopicSelection = (topic: string) => {
    switch (topic) {
      case 'All':
        setCbSelected12(prevState => !prevState);
        if (isCbSelected12) {
          setTopics((prevFilters: string[]) =>
            prevFilters.filter((item: string) => item !== topic),
          );
        } else {
          setTopics((prevFilters: string[]) => [...prevFilters, topic]);
        }
        break;
      case 'action':
        setCbSelected13(prevState => !prevState);
        if (isCbSelected13) {
          setTopics((prevFilters: string[]) =>
            prevFilters.filter((item: string) => item !== topic),
          );
        } else {
          setTopics((prevFilters: string[]) => [...prevFilters, topic]);
        }
        break;

      case 'comedy':
        setCbSelected14(prevState => !prevState);
        if (isCbSelected14) {
          setTopics((prevFilters: string[]) =>
            prevFilters.filter((item: string) => item !== topic),
          );
        } else {
          setTopics((prevFilters: string[]) => [...prevFilters, topic]);
        }
        break;
      case 'drama':
        setCbSelected15(prevState => !prevState);
        if (isCbSelected15) {
          setTopics((prevFilters: string[]) =>
            prevFilters.filter((item: string) => item !== topic),
          );
        } else {
          setTopics((prevFilters: string[]) => [...prevFilters, topic]);
        }
        break;

      case 'fantasy':
        setCbSelected16(prevState => !prevState);
        if (isCbSelected16) {
          setTopics((prevFilters: string[]) =>
            prevFilters.filter((item: string) => item !== topic),
          );
        } else {
          setTopics((prevFilters: string[]) => [...prevFilters, topic]);
        }
        break;
      case 'sports':
        setCbSelected17(prevState => !prevState);
        if (isCbSelected17) {
          setTopics((prevFilters: string[]) =>
            prevFilters.filter((item: string) => item !== topic),
          );
        } else {
          setTopics((prevFilters: string[]) => [...prevFilters, topic]);
        }
        break;
      case 'mystery':
        setCbSelected18(prevState => !prevState);
        if (isCbSelected18) {
          setTopics((prevFilters: string[]) =>
            prevFilters.filter((item: string) => item !== topic),
          );
        } else {
          setTopics((prevFilters: string[]) => [...prevFilters, topic]);
        }
        break;
      case 'romance':
        setCbSelected19(prevState => !prevState);
        if (isCbSelected19) {
          setTopics((prevFilters: string[]) =>
            prevFilters.filter((item: string) => item !== topic),
          );
        } else {
          setTopics((prevFilters: string[]) => [...prevFilters, topic]);
        }
        break;
      case 'thriller':
        setCbSelected20(prevState => !prevState);
        if (isCbSelected20) {
          setTopics((prevFilters: string[]) =>
            prevFilters.filter((item: string) => item !== topic),
          );
        } else {
          setTopics((prevFilters: string[]) => [...prevFilters, topic]);
        }
        break;

      case 'school':
        setCbSelected21(prevState => !prevState);
        if (isCbSelected21) {
          setTopics((prevFilters: string[]) =>
            prevFilters.filter((item: string) => item !== topic),
          );
        } else {
          setTopics((prevFilters: string[]) => [...prevFilters, topic]);
        }
        break;

      case 'horny':
        setCbSelected22(prevState => !prevState);
        if (isCbSelected22) {
          setTopics((prevFilters: string[]) =>
            prevFilters.filter((item: string) => item !== topic),
          );
        } else {
          setTopics((prevFilters: string[]) => [...prevFilters, topic]);
        }
        break;

      // handle other topics similarly
      default:
        break;
    }
  };

  const handleAllClick = () => {
    if (isAllSelected) {
      setAllSelected(false);
      setShowAllSelected(false);
    } else {
      setAllSelected(true);
      setShowAllSelected(true);
      setShowSortSelected(false);
      setShowRatingSelected(false);
      setShowGenreSelected(false);
    }

    setSortSelected(false);
    setPriceSelected(false);
    setRatingSelected(false);
    setGenreSelected(false);
  };

  const handleSortClick = () => {
    if (isSortSelected) {
      setSortSelected(false);
      setShowSortSelected(false);
    } else {
      setSortSelected(true);
      setShowSortSelected(true);
      setShowAllSelected(false);
    }

    setAllSelected(false);
    setPriceSelected(false);
    setRatingSelected(false);
    setGenreSelected(false);
  };

  const handlePriceClick = () => {
    if (isPriceSelected) {
      setPriceSelected(false);
    } else {
      setPriceSelected(true);
      setShowAllSelected(false);
      setShowSortSelected(false);
      setShowRatingSelected(false);
      setShowGenreSelected(false);
    }

    setAllSelected(false);
    setSortSelected(false);
    setRatingSelected(false);
    setGenreSelected(false);
  };

  const handleRatingClick = () => {
    if (isRatingSelected) {
      setRatingSelected(false);
      setShowRatingSelected(false);
    } else {
      setRatingSelected(true);
      setShowRatingSelected(true);
      setShowAllSelected(false);
      setShowSortSelected(false);
      setShowGenreSelected(false);
    }

    setAllSelected(false);
    setSortSelected(false);
    setPriceSelected(false);
    setGenreSelected(false);
  };

  const handleGenreClick = () => {
    if (isGenreSelected) {
      setGenreSelected(false);
      setShowGenreSelected(false);
    } else {
      setGenreSelected(true);
      setShowGenreSelected(true);
      setShowAllSelected(false);
      setShowSortSelected(false);
      setShowRatingSelected(false);
    }

    setAllSelected(false);
    setSortSelected(false);
    setPriceSelected(false);
    setRatingSelected(false);
  };

  const handleCbSortItem1Click = () => {
    if (!isCbSelected1) {
      setCbSelected1(true);
    }

    setCbSelected2(false);
    setCbSelected3(false);
    setCbSelected4(false);
    setCbSelected5(false);
    setCbSelected6(false);
  };

  const handleCbSortItem2Click = () => {
    if (!isCbSelected2) {
      setCbSelected2(true);
    }

    setCbSelected1(false);
    setCbSelected3(false);
    setCbSelected4(false);
    setCbSelected5(false);
    setCbSelected6(false);
  };

  const handleCbSortItem3Click = () => {
    if (!isCbSelected3) {
      setCbSelected3(true);
    }

    setCbSelected2(false);
    setCbSelected1(false);
    setCbSelected4(false);
    setCbSelected5(false);
    setCbSelected6(false);
  };

  const handleCbSortItem4Click = () => {
    if (!isCbSelected4) {
      setCbSelected4(true);
    }

    setCbSelected2(false);
    setCbSelected3(false);
    setCbSelected1(false);
    setCbSelected5(false);
    setCbSelected6(false);
  };

  const handleCbSortItem5Click = () => {
    if (isCbSelected5) {
      setCbSelected5(false);
    } else {
      setCbSelected5(true);
    }

    setCbSelected2(false);
    setCbSelected3(false);
    setCbSelected4(false);
    setCbSelected1(false);
    setCbSelected6(false);
  };

  const handleCbSortItem6Click = () => {
    if (!isCbSelected6) {
      setCbSelected6(true);
    }

    setCbSelected2(false);
    setCbSelected3(false);
    setCbSelected4(false);
    setCbSelected5(false);
    setCbSelected1(false);
  };

  const handleCbRatingItem9Click = () => {
    if (isCbSelected9) {
      setCbSelected9(false);
    } else {
      setCbSelected9(true);
    }

    setCbSelected10(false);
    setCbSelected11(false);
  };

  const handleCbRatingItem10Click = () => {
    if (isCbSelected10) {
      setCbSelected10(false);
    } else {
      setCbSelected10(true);
    }

    setCbSelected9(false);
    setCbSelected11(false);
  };

  const handleCbRatingItem11Click = () => {
    if (isCbSelected11) {
      setCbSelected11(false);
    } else {
      setCbSelected11(true);
    }

    setCbSelected9(false);
    setCbSelected10(false);
  };

  const handleCbGenreItem12Click = () => {
    if (isCbSelected12) {
      setCbSelected12(false);
      setCbSelected13(false);
      setCbSelected14(false);
      setCbSelected15(false);
      setCbSelected16(false);
      setCbSelected17(false);
      setCbSelected18(false);
      setCbSelected19(false);
      setCbSelected20(false);
      setCbSelected21(false);
      setCbSelected22(false);
      setCbSelected23(false);
    } else {
      handleTopicSelection('All');
      setCbSelected12(true);
      setCbSelected13(true);
      setCbSelected14(true);
      setCbSelected15(true);
      setCbSelected16(true);
      setCbSelected17(true);
      setCbSelected18(true);
      setCbSelected19(true);
      setCbSelected20(true);
      setCbSelected21(true);
      setCbSelected22(true);
      setCbSelected23(true);
    }
  };

  const handleCbGenreItem13Click = () => {
    if (isCbSelected13) {
      setCbSelected13(false);
      setCbSelected12(false);
    } else {
      handleTopicSelection('action');
      setCbSelected13(true);
    }
  };

  const handleCbGenreItem14Click = () => {
    if (isCbSelected14) {
      setCbSelected14(false);
      setCbSelected12(false);
    } else {
      handleTopicSelection('comedy');
      setCbSelected14(true);
    }
  };

  const handleCbGenreItem15Click = () => {
    if (isCbSelected15) {
      setCbSelected15(false);
      setCbSelected12(false);
    } else {
      handleTopicSelection('drama');
      setCbSelected15(true);
    }
  };

  const handleCbGenreItem16Click = () => {
    if (isCbSelected16) {
      setCbSelected16(false);
      setCbSelected12(false);
    } else {
      handleTopicSelection('fantasy');
      setCbSelected16(true);
    }
  };

  const handleCbGenreItem17Click = () => {
    if (isCbSelected17) {
      setCbSelected17(false);
      setCbSelected12(false);
    } else {
      handleTopicSelection('sports');
      setCbSelected17(true);
    }
  };

  const handleCbGenreItem18Click = () => {
    if (isCbSelected18) {
      setCbSelected18(false);
      setCbSelected12(false);
    } else {
      handleTopicSelection('mystery');
      setCbSelected18(true);
    }
  };

  const handleCbGenreItem19Click = () => {
    if (isCbSelected19) {
      setCbSelected19(false);
      setCbSelected12(false);
    } else {
      handleTopicSelection('romance');
      setCbSelected19(true);
    }
  };

  const handleCbGenreItem20Click = () => {
    if (isCbSelected20) {
      setCbSelected20(false);
      setCbSelected12(false);
    } else {
      handleTopicSelection('thriller');
      setCbSelected20(true);
    }
  };

  const handleCbGenreItem21Click = () => {
    if (isCbSelected21) {
      setCbSelected21(false);
      setCbSelected12(false);
    } else {
      handleTopicSelection('school');
      setCbSelected21(true);
    }
  };

  const handleCbGenreItem22Click = () => {
    if (isCbSelected22) {
      setCbSelected22(false);
      setCbSelected12(false);
    } else {
      handleTopicSelection('horny');
      setCbSelected22(true);
    }
  };

  const handleCbGenreItem23Click = () => {
    if (isCbSelected23) {
      setCbSelected23(false);
      setCbSelected12(false);
    } else {
      setCbSelected23(true);
    }
  };
  return {
    handleAllClick,
    handleCbGenreItem12Click,
    handleCbGenreItem13Click,
    handleCbGenreItem14Click,
    handleCbGenreItem15Click,
    handleCbGenreItem16Click,
    handleCbGenreItem17Click,
    handleCbGenreItem18Click,
    handleCbGenreItem19Click,
    handleCbGenreItem20Click,
    handleCbGenreItem21Click,
    handleCbGenreItem22Click,
    handleCbGenreItem23Click,
    handleCbRatingItem10Click,
    handleCbRatingItem11Click,
    handleCbRatingItem9Click,
    handleCbSortItem1Click,
    handleCbSortItem2Click,
    handleCbSortItem3Click,
    handleCbSortItem4Click,
    handleCbSortItem5Click,
    handleCbSortItem6Click,
    handleGenreClick,
    handlePriceClick,
    handleRatingClick,
    handleSortClick,
    handleTopicSelection,
    isAllSelected,
    isCbSelected1,
    isCbSelected10,
    isCbSelected11,
    isCbSelected12,
    isCbSelected13,
    isCbSelected14,
    isCbSelected15,
    isCbSelected16,
    isCbSelected17,
    isCbSelected18,
    isCbSelected19,
    isCbSelected2,
    isCbSelected20,
    isCbSelected21,
    isCbSelected22,
    isCbSelected23,
    isCbSelected3,
    isCbSelected4,
    isCbSelected5,
    isCbSelected6,
    isCbSelected9,
    isGenreSelected,
    isPriceSelected,
    isRatingSelected,
    isSortSelected,
    showAllSelected,
    showSortSelected,
    showRatingSelected,
    showGenreSelected,
    topcis,
  };
};
