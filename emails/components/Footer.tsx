import { Img, Link, Section, Text } from '@react-email/components';
import React from 'react';

const Footer = () => {
  return (
    <Section className="mx-auto px-[20px] max-w-[560px] pb-[40px] ">
      <Img src="/static/car.png" alt="" className="mb-[36px] mx-auto max-w-[164px] h-auto" />
      <Text className="text-center text-[13px]">
        Якщо у Вас виникли питання, будь-ласка, напишіть нам відповідь на це повідомлення. <br />
        <Link href="tel:(066)4261494" className="text-black">
          (066) 426 14 94
        </Link>{' '}
        <br /> понеділок - п'ятниця з 9.00 до 18.00
      </Text>
    </Section>
  );
};

export default Footer;
