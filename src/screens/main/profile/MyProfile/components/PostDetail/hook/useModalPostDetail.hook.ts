import {useState} from 'react';

type UseModalPostDetailType = {};

export const useModalPostDetail = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null) as any;

  const onPressOpenModal = (image: any) => {
    setShowModal(true);
    setSelectedImage(image);
  };
  const onPressCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return {
    onPressCloseModal,
    onPressOpenModal,
    showModal,
    selectedImage,
  };
};
