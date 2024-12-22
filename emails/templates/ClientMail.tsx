import {
  Body,
  Button,
  Container,
  Column,
  Heading,
  Hr,
  Img,
  Link,
  Row,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';
import * as React from 'react';
import HeadingSection from '../components/HeadingSection';
import ProductsSection from '../components/ProductsSection';
import TotalSection from '../components/TotalSection';
import Footer from '../components/Footer';

const ClientMail = () => {
  return (
    <Tailwind>
      <Body className="bg-[#DCE6FF] my-auto mx-auto font-sans">
        <Container className="bg-[#FFF] rounded my-[40px] mx-auto  max-w-[650px]">
          <Section className="mb-[25px]">
            <Img src="/static/header.png" alt="" className="my-0 mx-auto w-full" />
          </Section>
          <HeadingSection />
          <ProductsSection />
          <TotalSection />
          <Footer />
        </Container>
      </Body>
    </Tailwind>
  );
};

export default ClientMail;
