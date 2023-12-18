import { useState } from 'react';

export const useModalPostDetail = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState([]) as any;

  const onPressOpenModal = (image: string) => {
    setShowModal(true);
    setSelectedImage(image);
  };
  const onPressCloseModal = () => {
    setShowModal(false);
    setSelectedImage([]);
  };

  return {
    onPressCloseModal,
    onPressOpenModal,
    showModal,
    selectedImage,
  };
};
