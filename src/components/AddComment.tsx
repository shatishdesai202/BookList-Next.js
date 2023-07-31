import Image from 'next/image';
import React from 'react';

const AddComment = () => {
  return (
    <div className="flex justify-between gap-x-4">
      <div>
        <Image src={'/images/imagesmode.png'} width={20} height={20} alt={'upload image'} />
      </div>
      <input className="grow" type="text" placeholder="댓글을 남겨주세요." />
      <div>
        <button>등록</button>
      </div>
    </div>
  );
};

export default AddComment;
