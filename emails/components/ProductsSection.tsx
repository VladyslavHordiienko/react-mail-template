import { Column, Hr, Img, Row, Section, Text } from '@react-email/components';
import React from 'react';

const ProductsSection = () => {
  return (
    <Section className="mx-auto px-[20px] max-w-[550px]">
      <Row>
        <Column align="left" className="w-[50%]">
          <Text className="text-black text-[14px] font-medium" style={{ margin: 0 }}>
            Ваше замовлення: #111111
          </Text>
        </Column>
        <Column align="right" className="w-[50%]">
          <Text className="text-black text-[14px] font-medium" style={{ margin: 0 }}>
            01.01.2025
          </Text>
        </Column>
      </Row>
      <Row className="text-[13px]">
        <Column className="w-[80%]">
          <Row>
            <Column>
              <Img
                src="/static/p1.png"
                alt=""
                className="my-0 mx-[10px] w-[50px] h-auto"
                style={{ marginLeft: 0 }}
              />
            </Column>
            <Column align="left" className="w-[90%]">
              <Text className="w-[90%] text-[13px] leading-[140%]" style={{ marginBottom: 10 }}>
                ФорсЕкт (ForcEct) протипаразитарні краплі для собак та цуценят 10-20 кг, 4,0 мл,
                MODES
              </Text>
              <Text className="text-black text-[13px]" style={{ margin: 0 }}>
                <span>Код товару: </span>
                ЗС000267
              </Text>
            </Column>
          </Row>
        </Column>
        <Column className="w-[20%] min-w-[110px] ">
          <Row>
            <Column align="left" className="w-[50%]">
              <Text className="text-black">100 шт.</Text>
            </Column>
            <Column align="right" className="w-[50%]">
              <Text className="text-black">33357 ₴</Text>
            </Column>
          </Row>
        </Column>
      </Row>
      <Row className="text-[13px]">
        <Column className="w-[80%]">
          <Row>
            <Column>
              <Img
                src="/static/p2.png"
                alt=""
                className="my-0 mx-[10px] w-[50px] h-auto"
                style={{ marginLeft: 0 }}
              />
            </Column>
            <Column align="left" className="w-[90%]">
              <Text className="w-[90%] text-[13px] leading-[140%]" style={{ marginBottom: 10 }}>
                Вівадерм мазь
              </Text>
              <Text className="text-black text-[13px]" style={{ margin: 0 }}>
                <span>Код товару: </span>
                ЗС000267
              </Text>
            </Column>
          </Row>
        </Column>
        <Column className="w-[20%] min-w-[110px] ">
          <Row>
            <Column align="left" className="w-[50%]">
              <Text className="text-black">100 шт.</Text>
            </Column>
            <Column align="right" className="w-[50%]">
              <Text className="text-black">33357 ₴</Text>
            </Column>
          </Row>
        </Column>
      </Row>
      <Hr className="border border-solid border-[#0000003F] my-[20px] mx-0 w-full" />
    </Section>
  );
};

export default ProductsSection;
