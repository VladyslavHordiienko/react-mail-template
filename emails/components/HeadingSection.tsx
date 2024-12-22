import { Heading, Text } from '@react-email/components';
import React from 'react';

const HeadingSection = () => {
  return (
    <Heading className="text-black font-normal  text-center px-[20px] my-0 mx-auto max-w-[350px]">
      <Text className="text-[16px]">Дякуємо за Ваше замовлення!</Text>
      <Text className="text-[12px] leading-[150%]">
        Якщо Ви оплатили замовлення на сайті чи вибрали післяплату - відправлення відбудется на
        наступний день, без попереднього дзвінка менеджера. Будь-ласка, зверніть увагу, що
        замовлення обробляються в робочі дні - з понеділка по п'ятницю з 9.00 до 18.00.
      </Text>
    </Heading>
  );
};

export default HeadingSection;
