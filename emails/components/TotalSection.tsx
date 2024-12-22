import React from 'react';
import { Column, Hr, Row, Section, Text } from '@react-email/components';

const TotalSection = () => {
  return (
    <Section className="mx-auto px-[20px] max-w-[550px]">
      <Row className="text-[13px]">
        <Column align="left" className="w-[50%]">
          <Text className="text-black" style={{ marginTop: 0 }}>
            Сума кошика
          </Text>
        </Column>
        <Column align="right" className="w-[50%]">
          <Text className="text-black" style={{ marginTop: 0 }}>
            500.55 ₴
          </Text>
        </Column>
      </Row>
      <Row>
        <Column align="left" className="w-[50%]">
          <Text className="text-black" style={{ marginTop: 0 }}>
            Вартість доставки
          </Text>
        </Column>
        <Column align="right" className="w-[50%]">
          <Text className="text-black" style={{ marginTop: 0 }}>
            безкоштовно
          </Text>
        </Column>
      </Row>
      <Row>
        <Column align="left" className="w-[50%]">
          <Text className="text-black font-medium" style={{ margin: 0 }}>
            До сплати
          </Text>
        </Column>
        <Column align="right" className="w-[50%]">
          <Text className="text-black font-medium" style={{ margin: 0 }}>
            500.55 ₴
          </Text>
        </Column>
      </Row>
      <Hr className="border border-solid border-[#0000003F] my-[20px] mx-0 w-full" />
      <Row>
        <Column align="left" className="w-[50%]">
          <Text className="text-black font-medium" style={{ margin: 0 }}>
            Доставка:
          </Text>
        </Column>
        <Column align="right" className="w-[50%]">
          <Text className="text-black" style={{ margin: 0 }}>
            Катерина Іванова, +30662846098 М.Дніпро, Відділення - 100
          </Text>
        </Column>
      </Row>
      <Hr className="border border-solid border-[#0000003F] my-[20px] mx-0 w-full" />
      <Row style={{ marginBottom: 40 }}>
        <Column align="left" className="w-[50%]">
          <Text className="text-black font-medium" style={{ margin: 0 }}>
            Оплата:
          </Text>
        </Column>
        <Column align="right" className="w-[50%]">
          <Text className="text-black" style={{ margin: 0 }}>
            при отриманні
          </Text>
        </Column>
      </Row>
    </Section>
  );
};

export default TotalSection;
