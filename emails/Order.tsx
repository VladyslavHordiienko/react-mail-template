import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Row,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';
import * as React from 'react';
import ClientMail from './templates/ClientMail';

export const Order = () => {
  return (
    <Html lang="uk">
      <Head>
        <title>My email title</title>
      </Head>
      <ClientMail />
    </Html>
  );
};

export default Order;
